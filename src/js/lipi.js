/*
- Project-2 "GUPT"-(version-2.0.0)
- File: /src/js/lipi.js
- Description: this is core class GUPT
*/
try {

    class GUPT {

        //  charCodeAt(0)   // works with UTF-16 (16-bit units) 
        
        //  charPointAt(0)  // handles full Unicode (32-bit units)

        //  fromCharCode()  // convert code to character
        
        constructor () {

            this.capital_letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            this.small_letter = this.capital_letter.toLowerCase()
            this.number = "0123456789"
            this.symbol = "!@#$%^&*()_+-=[]{};:'\"\\|,<.>/?`~"
            this.letter = this.capital_letter + this.small_letter
            this.space = ' '
            this.shuffle_key = (this.letter + this.number + this.space + this.symbol)
        }

        //  isNaN()      // if isNumber || Convertable inNumber so return false else true

        //  isFinite()  // if isNumber || COnvertable inNumber & Finite so return true else false

        /*
            -------------------------------------------------------------------
            | toBinary : convert text data to binary form (8-bit UTF-16 unit) |
            -------------------------------------------------------------------
        
        */ 

        toBinary (data) {
            return data.charCodeAt(0).toString(2).padStart(16, "0")
        }

        /* 
            -----------------------------------------------------------------
            | toText : convert binary data to text form (8-bit UTF-16 unit) |
            -----------------------------------------------------------------
        */

        toText (data) {
            return String.fromCharCode(parseInt(data, 2))
        }

        /*
            ------------------------------------------------------------
            | isEmpty : check if given value is null, undefined, or "" |
            ------------------------------------------------------------
        */ 

        isEmpty(key)
        {
            return (key === '') || (key === null) || (key === undefined)
        }

        /*
            ---------------------------------------------
            | isSpace : check if character is a space   |
            ---------------------------------------------
        */
        
        isSpace(character)
        {
            // return (character == space)
            
            return /[ ]/.test(character)
        }

            /*
            ---------------------------------------------------
            | isLetter : check if character is A–Z or a–z     |
            ---------------------------------------------------
        */


        isLetter(character)
        {
            // return (character >= 'A' && character <= 'Z') || (character >= 'a' && character <= 'z')
        
            return /[a-zA-Z]/.test(character)
        }

        
        /*
            ---------------------------------------------
            | isUpper : check if character is uppercase |
            ---------------------------------------------
        */

        isUpper(character)
        {
            // return (character >= 65 && character <= 90)

            return /[A-Z]/.test(character)
        }

        /*
            ---------------------------------------------
            | isLower : check if character is lowercase |
            ---------------------------------------------
        */     
        
        isLower(character)
        {
            // return (character >= 97 && character <= 122)

            return /[a-z]/.test(character)
        }
        
        /*
            -----------------------------------------
            | isNumber : check if character is 0–9  |
            -----------------------------------------
        */

        isNumber(character)
        {
            // return typeof character === 'number' && isFinite(character)

            return (/\d/.test(character))
        }

        /*
            ------------------------------------------------------
            | isReal : check if number is 0 or greater (≥ 0)     |
            ------------------------------------------------------
        */

        isReal(number)
        {
            return (number >= 0)
        }

        /*
            ---------------------------------------------
            | isSymbol : check if character is a symbol |
            ---------------------------------------------
        */

        isSymbol(character)
        {
            // return this.symbol.includes(character)
            
            return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]/.test(character)
        }

        /*
            ---------------------------------------
            | isPrime : check if number is prime  |
            ---------------------------------------
        */

        isPrime(number)
        {
            if (number <= 1) return false

            for (let i = 2; i <= Math.sqrt(number); i++)
            {
                if (number%i === 0)
                {
                    return false
                }
            }
            return true;
        }

        /*
            -----------------------------------------------------
            | isGmail : check if email ends with "@gmail.com"   |
            -----------------------------------------------------
        */

        isGmail(email)
        {
            return /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email);
        }

        /*
            -------------------------------------------------------------
            | isComplex : check if password has A–Z, a–z, 0–9, symbol   |
            -------------------------------------------------------------
        */

        isComplex(password)
        {
            return (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/.test(password))
        }

        /*
            ------------------------------------------------------------
            | getPrimeIndex : return prime count index up to a number  |
            ------------------------------------------------------------
        */

        getPrimeIndex(number)
        {
            let prime_index = 0
            
            for (let n = 2; n <= number; n++)
            {
                if (prime_index === 9)
                {
                    prime_index = 0
                }
                else if (this.isPrime(n))
                {
                    prime_index++
                }
            }
            return (prime_index--)
        }

        /*
            -------------------------------------------------------
            | numberCode : convert string into numeric code value |
            -------------------------------------------------------
        */
        
        numberCode(data)
        {
            let num = 11

            for (let i = 0; i < data.length; i++) num = (num << 3) - num + data.charCodeAt(i)
            
            return num
        }
        
        /*
            ---------------------------------------------------
            | random : return random number in given range    |
            ---------------------------------------------------
        */

        random(range)
        {        
            return Math.floor(Math.random() * range)
        }

        /*
            -------------------------------------------------------------
            | getRandom : return random element from given string/array |
            -------------------------------------------------------------
        */
        
        getRandom(data)
        {
            return data[this.random(data.length)]
        }

        /*
            ----------------------------------------------
            | shuffle : randomly shuffle string content  |
            ----------------------------------------------
        */

        shuffle(data)
        {
            let data_array = data.split('');
        
            for (let i = data_array.length - 1; i > 0; i--)
            {
                let randomIndex = this.random(i + 1);
        
                [data_array[i], data_array[randomIndex]] = [data_array[randomIndex], data_array[i]];
            }
            return data_array.join('');
        }
        
        /*
            --------------------------------------------------------
            | shiftNumber : shift number character by given steps  |
            --------------------------------------------------------
        */
        
        shiftNumber(character, iterate)
        {
            if (this.isReal(iterate))
            {
                return this.number[((this.number.indexOf(character) + iterate) % this.number.length)]
            }
            else
            {
                return this.number[(this.number.length + ((this.number.indexOf(character) + iterate) % this.number.length)) % this.number.length]
            }
        }

        /*
            --------------------------------------------------------
            | shiftSymbol : shift symbol character by given steps  |
            --------------------------------------------------------
        */
        
        shiftSymbol(character, iterate)
        {
            if (this.isReal(iterate))
            {
                return this.symbol[((this.symbol.indexOf(character) + iterate) % this.symbol.length)]
            }
            else
            {
                return this.symbol[(this.symbol.length + ((this.symbol.indexOf(character) + iterate) % this.symbol.length)) % this.symbol.length]
            }
        }

        /*
            --------------------------------------------------------
            | shiftLetter : shift letter character by given steps  |
            --------------------------------------------------------
        */
        
        shiftLetter(character, iterate)
        {
            if (this.isUpper(character))
            {
                if (this.isReal(iterate))
                {
                    return this.capital_letter[((this.capital_letter.indexOf(character) + iterate) % this.capital_letter.length)]
                }
                else
                {
                    return this.capital_letter[((this.capital_letter.length + ((this.capital_letter.indexOf(character) + iterate) % this.capital_letter.length)) % this.capital_letter.length)]
                }
            }
            else if (this.isLower(character))
            {
                if (this.isReal(iterate))
                {
                    return this.small_letter[((this.small_letter.indexOf(character) + iterate) % this.small_letter.length)]
                }
                else
                {
                    return this.small_letter[((this.small_letter.length + ((this.small_letter.indexOf(character) + iterate) % this.small_letter.length)) % this.small_letter.length)]
                }        
            }   
        }

        /*
            ------------------------------------------------------------------
            | setData : shift letter/number/symbol based on character type   |
            ------------------------------------------------------------------
        */

        setData(character, iterate)
        {
            let ch = character, n = iterate
            
            if (this.isSymbol(ch))
            {
                ch = this.shiftSymbol(ch, n)
            }
            else if (this.isNumber(ch))
            {
                ch = this.shiftNumber(ch, n)
            }
            else if (this.isLetter(ch))
            {
                ch = this.shiftLetter(ch,  n)
            }
            return ch
        }

        /*
            -----------------------------------------------------
            | encrypt : encrypt string with optional secret key |
            -----------------------------------------------------
        */

        encrypt(data, key)
        {
            let data_set = data.split('')
            
            for (let i = 0; i < data_set.length; i++)
            {
                let character = data_set[i]
                
                if ((i%7) == 0)
                {
                    if (this.isLower(character))
                    {
                        character = character.toUpperCase()
                    }
                    else if (this.isUpper(character))
                    {
                        character = character.toLowerCase()
                    }
                    else if (this.isNumber(character))
                    {
                        character = this.shiftNumber(character, 1)
                    }
                }
                if (this.isSymbol(character))
                {
                    data_set[i] = this.shiftSymbol(character,1)
                }
                else if (this.isNumber(character))
                {
                    data_set[i] = this.shiftNumber(character,-7)
                    
                    if (i%9 == 0)
                    {
                        data_set[i] = this.shiftLetter(character,-7)
                    }
                }
                else if (this.isLetter(character))
                {
                    data_set[i] = this.shiftLetter(character,9)
                    
                    if (i%2 == 0)
                    {
                        data_set[i] = this.shiftLetter(character,-3)
                    }
                }
                if (this.isPrime(i))
                {
                    let n = this.getPrimeIndex(i)

                    if (this.isSymbol(character))
                    {
                        character = this.shiftSymbol(character, n)
                    }
                    else if (this.isNumber(character))
                    {
                        character = this.shiftNumber(character, n)
                    }
                    else if (this.isLetter(character))
                    {
                        character = this.shiftLetter(character, n)
                    }
                }
            }

            if (this.isEmpty(key))
            {
                return data_set.join('');
            }
            else
            {
                return this.enCode(data_set.join(''), key).toString()
            }
        }

        /*
            -----------------------------------------------------
            | decrypt : decrypt string with optional secret key |
            -----------------------------------------------------
        */

        decrypt(data, key)
        {
            if (!this.isEmpty(key))
            {
                data = this.deCode(data, key).toString()
            }

            let data_set = data.split('')
            
            for (let i = 0; i < data_set.length; i++)
            {
                let character = data_set[i]
                
                if ((i%7) == 0)
                {
                    if (this.isLower(character))
                    {
                        character = character.toUpperCase()
                    }
                    else if (this.isUpper(character))
                    {
                        character = character.toLowerCase()
                    }
                    else if (this.isNumber(character))
                    {
                        character = this.shiftNumber(character,-1)
                    }
                }
                if (this.isPrime(i))
                {
                    let n = this.getPrimeIndex(i)

                    if (this.isSymbol(character))
                    {
                        data_set[i] = this.shiftSymbol(character, n)
                    }
                    else if (this.isNumber(character))
                    {
                        data_set[i] = this.shiftNumber(character, n)
                    }
                    else if (this.isLetter(character))
                    {
                        data_set[i] = this.shiftLetter(character, n)
                    }
                }
                if (this.isSymbol(character))
                {
                    data_set[i] = this.shiftSymbol(character,-1)
                }
                else if (this.isNumber(character))
                {
                    data_set[i] = this.shiftNumber(character, 7)
                    
                    if (i%9 == 0)
                    {
                        data_set[i] = this.shiftLetter(character, 7)
                    }
                }
                else if (this.isLetter(character))
                {
                    data_set[i] = this.shiftLetter(character,-9)
                    
                    if (i%2 == 0)
                    {
                        data_set[i] = this.shiftLetter(character,3)
                    }
                }
            }
            return data_set.join('');
        }
        
        /*
            --------------------------------------------------------------
            | enCode : replace characters with key mapping substitutions |
            --------------------------------------------------------------
        */
            
        enCode(data, key)
        {
            data = data.split('')
            
            for (let o = 0; o < data.length; o++)
            {
                for (let i = 0; i < key.length; i++)
                {
                    if (this.shuffle_key[i] == data[o])
                    {
                        data[o] = key[i]
                        
                        break
                    }         
                }   
            }
            return data.join('')
        }

        /*
            --------------------------------------------------------------
            | deCode : restore characters back from key mapping          |
            --------------------------------------------------------------
        */
        
        deCode(data, key)
        {
            data = data.split('')
            
            for (let o = 0; o < data.length; o++)
            {
                for (let i = 0; i < key.length; i++)
                {
                    if (data[o] == key[i])
                    {
                        data[o] = this.shuffle_key[i]
                        
                        break
                    }                
                }   
            }
            return data.join('')
        }
        
        /*
            ---------------------------------------------------------
            | engupt : encrypt data by shifting char codes left     |
            ---------------------------------------------------------
        */

        engupt(data)
        {
            let output = '';

            for (let i = 0; i < data.length; i++)
                output += String.fromCharCode(data[i].charCodeAt(0) << 2)
            
            return output;
        }
        
        /*
            ---------------------------------------------------------
            | degupt : decrypt data by shifting char codes right    |
            ---------------------------------------------------------
        */
        
        degupt(data)
        {
            let output = '';

            for (let i = 0; i < data.length; i++)
                output += String.fromCharCode(data[i].charCodeAt(0) >> 2)
            
            return output;
        }

        /*
            ----------------------------------------------------------------------
            | entropy : calculate password entropy bits (strength measurement)   |
            ----------------------------------------------------------------------
        */

        entropy (data) {

            if (this.isEmpty(data)) {
                return 0
            }
            
            let N = 0, L = data.length

            if (/[a-z]/.test(data))  {
                N += 26;
            }
            if (/[A-Z]/.test(data)) {
                N +=26
            }
            if (/\d/.test(data)) {
                N += 10
            }
            if (/[^a-zA-Z0-9]/.test(data)) {
                N += 33
            }
            return Math.floor(L * Math.log2(N))
        }

        /*
            -------------------------------------------------------------------------------
            | estimatedCrackTime : return estimated crack time from entropy (bits → time) |
            -------------------------------------------------------------------------------
        */

        estimatedCrackTime(bit) {
            
            const seconds = (2 ** bit) / 1e10
                        
            if (seconds < 60) {
                return `${seconds.toFixed(2)} seconds`
            } else if (seconds < 3600) {
                return `${(seconds / 60).toFixed(2)} minutes`
            } else if (seconds < 86400) {
                return `${(seconds / 3600).toFixed(2)} hours`
            } else if (seconds < 31557600) {
                return `${(seconds / 86400).toFixed(2)} days`
            } else {
                return `${(seconds / 31557600).toFixed(2)} years`
            }
        }

        /*
            ----------------------------------------------------------------------
            | securityLevel : return strength label based on entropy (bits)      |
            ----------------------------------------------------------------------
        */

        securityLevel(bit) {

            return (bit < 28 ? "VERY WEAK" : bit <= 35 ? "WEAK" : bit <= 59 ? "MODERATE" : bit <= 79 ? "STRONG" : bit <= 127 ? "VERY STRONG" : "CRYPTOGRAPHIC").toString()
        }
    }
    
} catch (err) {

    console.error(err.message)
}
/* Developed by Mayank | (https://mayankdevil.github.io/MayankDevil) */