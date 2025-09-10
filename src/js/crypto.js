/*
- Project-2 "GUPT"-(version-2.0.0)
- File: /src/js/crypto.js
*/
try
{
    // [ character set ] ----- 

    capital_letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    small_letter = capital_letter.toLowerCase()

    number = "0123456789"

    symbol = "!@#$%^&*()_+-=[]{};:'\"\\|,<.>/?`~"

    letter = capital_letter + small_letter
    
    space = ' '

    // [ shuffle_key ] -----

    shuffle_key = (letter+number+space+symbol)

    /*
        --------------------------------------------------------------------------------
        } isEmpty function : if key is empty return true else false
        --------------------------------------------------------------------------------
    */

    function isEmpty(key)
    {
        return (key == '')
    }

    /*
        --------------------
        [ isSpace function ]   if space return true else false
        --------------------
    */
    
    function isSpace(character)
    {
        // return (character == space)
        
        return /[ ]/.test(character)
    }

    /*
        ---------------------
        [ isLetter function ]   if letter return true else false
        ---------------------
    */

    function isLetter(character)
    {
        // return (character >= 'A' && character <= 'Z') || (character >= 'a' && character <= 'z')
    
        return /[a-zA-Z]/.test(character)
    }

    /*
        --------------------
        [ isUpper function ]    if Uppercase return true else false
        --------------------
    */

    function isUpper(character)
    {
        // return (character >= 65 && character <= 90)

        return /[A-Z]/.test(character)
    }

    /*
        --------------------
        [ isLower function ]    if Lowercase return true else false
        --------------------
    */
    
    function isLower(character)
    {
        // return (character >= 97 && character <= 122)

        return /[a-z]/.test(character)
    }
    
    /*
        ---------------------
        [ isNumber function ]   if number return true else false
        ---------------------
    */

    function isNumber(character)
    {
        // return typeof character === 'number' && isFinite(character)

        return (/\d/.test(character))
    }

    /*
        -------------------
        [ isReal function ]   if number is 0 or greater than 0 return true else false
        -------------------
    */

    function isReal(number)
    {
        return (number >= 0)
    }

    /*
        ---------------------
        [ isSymbol function ]   if symbol return true else false
        ---------------------
    */

    function isSymbol(character)
    {
        // return symbol.includes(character)
        
        return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]/.test(character)
    }

    /*
        --------------------
        [ isPrime function ]   whole number greater than 1 & only two positive divisors
        --------------------
    */

    function isPrime(number)
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
        --------------------
        [ isGmail function ]   if gmail format return true else false
        --------------------
    */

    function isGmail(email)
    {
        return /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email);
    }

    /*
        ----------------------
        [ isComplex function ]   if complex word return true else false
        ----------------------
    */

    function isComplex(password)
    {
        return (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/.test(password))
    }

    /*
        --------------------------
        [ getPrimeIndex function ]   return index of prime number
        --------------------------
    */

    function getPrimeIndex(number)
    {
        let prime_index = 0
        
        for (n = 2; n <= number; n++)
        {
            if (prime_index = 9)
            {
                prime_index = 0
            }
            else if (isPrime(n))
            {
                prime_index++
            }
        }
        return (prime_index--)
    }

    /*
        --------------------
        [ shuffle function ]    get data argument return equal unique or unorder data
        --------------------
    */

    function shuffle(data)
    {
        let data_array = data.split('');
    
        for (let i = data_array.length - 1; i > 0; i--)
        {
            let randomIndex = random(i + 1);
    
            [data_array[i], data_array[randomIndex]] = [data_array[randomIndex], data_array[i]];
        }
        return data_array.join('');
    }
    
    /*
        -----------------------
        [ numberCode function ]     pass data return in random number format
        -----------------------
    */
    
    function numberCode(data)
    {
        let num = 11

        for (let i = 0; i < data.length; i++) num = (num << 3) - num + data.charCodeAt(i)
        
        return num
    }

    /*
        --------------------------------------------------------------------------------
        } random function : return random number between pass arugment range
        --------------------------------------------------------------------------------
    */

    function random(range)
    {        
        return Math.floor(Math.random() * range)
    }
    
    /*
        --------------------------------------------------------------------------------
        } getRandom function : return random_index_data by pass argument data object
        --------------------------------------------------------------------------------
    */
    
    function getRandom(data)
    {
        return data[random(data.length)]
    }

    //  charCodeAt(0)   // works with UTF-16 (16-bit units) 
    
    //  charPointAt(0)  // handles full Unicode (32-bit units)

    //  fromCharCode()  // convert code to character

    //  isNaN()      // if isNumber || Convertable inNumber so return false else true

    //  isFinite()  // if isNumber || COnvertable inNumber & Finite so return true else false


    
    /*
        ------------------------------------------------------------------
        | function argument character AND iterate to return shift number |
        ------------------------------------------------------------------
    */
    
    function shiftNumber(character, iterate)
    {
        if (isReal(iterate))
        {
            return number[((number.indexOf(character) + iterate) % number.length)]
        }
        else
        {
            return number[(number.length + ((number.indexOf(character) + iterate) % number.length)) % number.length]
        }
    }
    
    /*
        ------------------------------------------------------------------
        | function argument character AND iterate to return shift symbol |
        ------------------------------------------------------------------
    */
    
    function shiftSymbol(character, iterate)
    {
        if (isReal(iterate))
        {
            return symbol[((symbol.indexOf(character) + iterate) % symbol.length)]
        }
        else
        {
            return symbol[(symbol.length + ((symbol.indexOf(character) + iterate) % symbol.length)) % symbol.length]
        }
    }
    
    /*
        ------------------------------------------------------------------
        | function argument character AND iterate to return shift letter |
        ------------------------------------------------------------------
    */
    
    function shiftLetter(character, iterate)
    {
        if (isUpper(character))
        {
            if (isReal(iterate))
            {
                return capital_letter[((capital_letter.indexOf(character) + iterate) % capital_letter.length)]
            }
            else
            {
                return capital_letter[((capital_letter.length + ((capital_letter.indexOf(character) + iterate) % capital_letter.length)) % capital_letter.length)]
            }
        }
        else if (isLower(character))
        {
            if (isReal(iterate))
            {
                return small_letter[((small_letter.indexOf(character) + iterate) % small_letter.length)]
            }
            else
            {
                return small_letter[((small_letter.length + ((small_letter.indexOf(character) + iterate) % small_letter.length)) % small_letter.length)]
            }        
        }   
    }

    /*
        ----------------------------------------------------------------------------------------
        | setData function : get character or iterate argument to return set_character_iterate |
        ----------------------------------------------------------------------------------------
    */

    function setData(character, iterate)
    {
        let ch = character, n = iterate
        
        if (isSymbol(ch))
        {
            ch = shiftSymbol(ch, n)
        }
        else if (isNumber(ch))
        {
            ch = shiftNumber(ch, n)
        }
        else if (isLetter(ch))
        {
            ch = shiftLetter(ch,  n)
        }
        return ch
    }

    /*
        ====================
        | encrypt function |
        ====================
    */

    function encrypt(data, key)
    {
        const data_set = data.split('')
        
        for (let i = 0; i < data_set.length; i++)
        {
            let character = data_set[i]
            
            if ((i%7) == 0)
            {
                if (isLower(character))
                {
                    character = character.toUpperCase()
                }
                else if (isUpper(character))
                {
                    character = character.toLowerCase()
                }
                else if (isNumber(character))
                {
                    character = shiftNumber(character, 1)
                }
            }
            if (isSymbol(character))
            {
                data_set[i] = shiftSymbol(character,1)
            }
            else if (isNumber(character))
            {
                data_set[i] = shiftNumber(character,-7)
                
                if (i%9 == 0)
                {
                    data_set[i] = shiftLetter(character,-7)
                }
            }
            else if (isLetter(character))
            {
                data_set[i] = shiftLetter(character,9)
                
                if (i%2 == 0)
                {
                    data_set[i] = shiftLetter(character,-3)
                }
            }
            if (isPrime(i))
            {
                let n = getPrimeIndex(i)

                if (isSymbol(character))
                {
                    character = shiftSymbol(character, n)
                }
                else if (isNumber(character))
                {
                    character = shiftNumber(character, n)
                }
                else if (isLetter(character))
                {
                    character = shiftLetter(character, n)
                }
            }
        }

        if (isEmpty(key))
        {
            return data_set.join('');
        }
        else
        {
            return enCode(data_set.join(''), key).toString()
        }
    }

    /*
        ====================
        | decrypt function |
        ====================
    */

    function decrypt(data, key)
    {
        if (!isEmpty(key))
        {
            data = deCode(data, key).toString()
        }

        const data_set = data.split('')
        
        for (let i = 0; i < data_set.length; i++)
        {
            character = data_set[i]
            
            if ((i%7) == 0)
            {
                if (isLower(character))
                {
                    character = character.toUpperCase()
                }
                else if (isUpper(character))
                {
                    character = character.toLowerCase()
                }
                else if (isNumber(character))
                {
                    character = shiftNumber(character,-1)
                }
            }
            if (isPrime(i))
            {
                let n = getPrimeIndex(i)

                if (isSymbol(character))
                {
                    data_set[i] = shiftSymbol(character, n)
                }
                else if (isNumber(character))
                {
                    data_set[i] = shiftNumber(character, n)
                }
                else if (isLetter(character))
                {
                    data_set[i] = shiftLetter(character, n)
                }
            }
            if (isSymbol(character))
            {
                data_set[i] = shiftSymbol(character,-1)
            }
            else if (isNumber(character))
            {
                data_set[i] = shiftNumber(character, 7)
                
                if (i%9 == 0)
                {
                    data_set[i] = shiftLetter(character, 7)
                }
            }
            else if (isLetter(character))
            {
                data_set[i] = shiftLetter(character,-9)
                
                if (i%2 == 0)
                {
                    data_set[i] = shiftLetter(character,3)
                }
            }
        }
        return data_set.join('');
    }

    /*
        -----------------------------------------------------------------
        | enCode function : argument data OR key to return encode data  |
        -----------------------------------------------------------------
    */
        
    function enCode(data, key)
    {
        data = data.split('')
        
        for (o = 0; o < data.length; o++)
        {
            for (i = 0; i < key.length; i++)
            {
                if (shuffle_key[i] == data[o])
                {
                    data[o] = key[i]
                    
                    break
                }         
            }   
        }
        return data.join('')
    }

    /*
        -----------------------------------------------------------------
        | deCode function : argument data OR key to return decode data  |
        -----------------------------------------------------------------
    */
    
    function deCode(data, key)
    {
        data = data.split('')
        
        for (o = 0; o < data.length; o++)
        {
            for (i = 0; i < key.length; i++)
            {
                if (data[o] == key[i])
                {
                    data[o] = shuffle_key[i]
                    
                    break
                }                
            }   
        }
        return data.join('')
    }
    
    /*
        -------------------------------------------------------------
        | engupt function argument data to return encrypt gupt data |
        -------------------------------------------------------------
    */
    
    function engupt(data)
    {
        let output = '';

        for (let i = 0; i < data.length; i++)
            output += String.fromCharCode(data[i].charCodeAt(0) << 2)
        
        return output;
    }
    
    /*
        -------------------------------------------------------------
        | degupt function argument data to return decrypt gupt data |
        -------------------------------------------------------------
    */
    
    function degupt(data)
    {
        let output = '';

        for (let i = 0; i < data.length; i++)
            output += String.fromCharCode(data[i].charCodeAt(0) >> 2)
        
        return output;
    }

    

    document.title = `Mayank & HRitik`
}
catch(error)
{
    console.error(` ERROR ${ error }`)
}
// the end
