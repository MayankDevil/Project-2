import math
import random
import re

class GUPT:
    def __init__(self):
        # ---------------------------------------------------------------
        # | define letters, numbers, symbols and shuffle key characters |
        # ---------------------------------------------------------------
        self.capital_letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        self.small_letter = self.capital_letter.lower()
        self.number = "0123456789"
        self.symbol = "!@#$%^&*()_+-=[]{};:'\"\\|,<.>/?`~"
        self.letter = self.capital_letter + self.small_letter
        self.space = " "
        self.shuffle_key = self.letter + self.number + self.space + self.symbol

    # ----------------- Basic Checks -----------------
    # --------------------------------------------------------
    # | check empty, space, letter, number, case, symbol etc |
    # --------------------------------------------------------
    def isEmpty(self, key): return key is None or key == ""
    def isSpace(self, character): return character == " "
    def isLetter(self, character): return character.isalpha()
    def isUpper(self, character): return character.isupper()
    def isLower(self, character): return character.islower()
    def isNumber(self, character): return character.isdigit()
    def isReal(self, number): return number >= 0
    def isSymbol(self, character): return re.match(r"[!@#$%^&*()_+\-=\[\]{};':\"\\|,.<>/?`~]", character) is not None

    # ----------------------------------------------------
    # | check number is prime or not (mathematical logic) |
    # ----------------------------------------------------
    def isPrime(self, number):
        if number <= 1: return False
        for i in range(2, int(math.sqrt(number)) + 1):
            if number % i == 0: return False
        return True

    # -----------------------------------------------------
    # | validate email is gmail and password is complex or |
    # -----------------------------------------------------
    def isGmail(self, email): return re.match(r"^[a-zA-Z0-9._%+-]+@gmail\.com$", email) is not None
    def isComplex(self, password): return re.match(r"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+]).{8,}$", password) is not None

    # ----------------- Prime Index -----------------
    # -------------------------------------------------
    # | calculate prime index number between given set |
    # -------------------------------------------------
    def getPrimeIndex(self, number):
        prime_index = 0
        for n in range(2, number + 1):
            if prime_index == 9:
                prime_index = 0
            elif self.isPrime(n):
                prime_index += 1
        return prime_index - 1

    # ----------------- Number Code -----------------
    # -------------------------------------------------------
    # | generate unique number code from string (hash style) |
    # -------------------------------------------------------
    def numberCode(self, data):
        num = 11
        for ch in data:
            num = (num << 3) - num + ord(ch)
        return num

    # ----------------- Randoms -----------------
    # --------------------------------------
    # | get random number, char and shuffle |
    # --------------------------------------
    def random(self, rng): return random.randint(0, rng - 1)
    def getRandom(self, data): return random.choice(data)
    def shuffle(self, data): 
        data_list = list(data); random.shuffle(data_list); return "".join(data_list)

    # ----------------- Shifters -----------------
    # ---------------------------------------------
    # | shift number, symbol or letter by iterate |
    # ---------------------------------------------
    def shiftNumber(self, character, iterate):
        idx = self.number.index(character)
        return self.number[(idx + iterate) % len(self.number)]

    def shiftSymbol(self, character, iterate):
        idx = self.symbol.index(character)
        return self.symbol[(idx + iterate) % len(self.symbol)]

    def shiftLetter(self, character, iterate):
        if self.isUpper(character):
            idx = self.capital_letter.index(character)
            return self.capital_letter[(idx + iterate) % len(self.capital_letter)]
        elif self.isLower(character):
            idx = self.small_letter.index(character)
            return self.small_letter[(idx + iterate) % len(self.small_letter)]
        return character

    def setData(self, character, iterate):
        if self.isSymbol(character): return self.shiftSymbol(character, iterate)
        elif self.isNumber(character): return self.shiftNumber(character, iterate)
        elif self.isLetter(character): return self.shiftLetter(character, iterate)
        return character

    # ----------------- Encryption -----------------
    # ------------------------------------------------------
    # | encrypt data with shifting + prime index + shuffle |
    # ------------------------------------------------------
    def encrypt(self, data, key=None):
        data_list = list(data)
        for i, ch in enumerate(data_list):
            character = ch

            if i % 7 == 0:
                if self.isLower(character): character = character.upper()
                elif self.isUpper(character): character = character.lower()
                elif self.isNumber(character): character = self.shiftNumber(character, 1)

            if self.isSymbol(character): data_list[i] = self.shiftSymbol(character, 1)
            elif self.isNumber(character):
                data_list[i] = self.shiftNumber(character, -7)
                if i % 9 == 0: data_list[i] = self.shiftLetter(character, -7)
            elif self.isLetter(character):
                data_list[i] = self.shiftLetter(character, 9)
                if i % 2 == 0: data_list[i] = self.shiftLetter(character, -3)

            if self.isPrime(i):
                n = self.getPrimeIndex(i)
                if self.isSymbol(character): character = self.shiftSymbol(character, n)
                elif self.isNumber(character): character = self.shiftNumber(character, n)
                elif self.isLetter(character): character = self.shiftLetter(character, n)

        result = "".join(data_list)
        return self.enCode(result, key) if key else result

    # ----------------- Decryption -----------------
    # -------------------------------------------------------
    # | decrypt data reverse of encrypt (undo shift/prime) |
    # -------------------------------------------------------
    def decrypt(self, data, key=None):
        if key: data = self.deCode(data, key)

        data_list = list(data)
        for i, ch in enumerate(data_list):
            character = ch

            if i % 7 == 0:
                if self.isLower(character): character = character.upper()
                elif self.isUpper(character): character = character.lower()
                elif self.isNumber(character): character = self.shiftNumber(character, -1)

            if self.isPrime(i):
                n = self.getPrimeIndex(i)
                if self.isSymbol(character): data_list[i] = self.shiftSymbol(character, n)
                elif self.isNumber(character): data_list[i] = self.shiftNumber(character, n)
                elif self.isLetter(character): data_list[i] = self.shiftLetter(character, n)

            if self.isSymbol(character): data_list[i] = self.shiftSymbol(character, -1)
            elif self.isNumber(character):
                data_list[i] = self.shiftNumber(character, 7)
                if i % 9 == 0: data_list[i] = self.shiftLetter(character, 7)
            elif self.isLetter(character):
                data_list[i] = self.shiftLetter(character, -9)
                if i % 2 == 0: data_list[i] = self.shiftLetter(character, 3)

        return "".join(data_list)

    # ----------------- Code Mapping -----------------
    # -----------------------------------------------------
    # | encode & decode data by mapping with custom shuffle |
    # -----------------------------------------------------
    def enCode(self, data, key):
        data_list = list(data)
        for o in range(len(data_list)):
            for i in range(len(key)):
                if self.shuffle_key[i] == data_list[o]:
                    data_list[o] = key[i]; break
        return "".join(data_list)

    def deCode(self, data, key):
        data_list = list(data)
        for o in range(len(data_list)):
            for i in range(len(key)):
                if data_list[o] == key[i]:
                    data_list[o] = self.shuffle_key[i]; break
        return "".join(data_list)

    # ----------------- Gupt Shift -----------------
    # ---------------------------------------------
    # | shift ASCII char bits left or right (×4) |
    # ---------------------------------------------
    def engupt(self, data): return "".join(chr(ord(ch) << 2) for ch in data)
    def degupt(self, data): return "".join(chr(ord(ch) >> 2) for ch in data)

    # ----------------- Entropy -----------------
    # -------------------------------------------------------
    # | calculate password entropy bits and crack time level |
    # -------------------------------------------------------
    def entropy(self, data):
        if self.isEmpty(data): return 0
        N = 0
        if re.search(r"[a-z]", data): N += 26
        if re.search(r"[A-Z]", data): N += 26
        if re.search(r"\d", data): N += 10
        if re.search(r"[^a-zA-Z0-9]", data): N += 33
        return math.floor(len(data) * math.log2(N))

    def estimatedCrackTime(self, bit):
        seconds = (2 ** bit) / 1e10
        if seconds < 60: return f"{seconds:.2f} seconds"
        elif seconds < 3600: return f"{seconds/60:.2f} minutes"
        elif seconds < 86400: return f"{seconds/3600:.2f} hours"
        elif seconds < 31557600: return f"{seconds/86400:.2f} days"
        else: return f"{seconds/31557600:.2f} years"

    def securityLevel(self, bit):
        if bit < 28: return "VERY WEAK"
        elif bit <= 35: return "WEAK"
        elif bit <= 59: return "MODERATE"
        elif bit <= 79: return "STRONG"
        elif bit <= 127: return "VERY STRONG"
        else: return "CRYPTOGRAPHIC"
