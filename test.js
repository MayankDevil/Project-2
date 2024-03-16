

    capital_letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    number = "0123456789"

    symbol = "`~!@#$%^&*()-_+={}:<>?[],.;\|/"

    letter = capital_letter + capital_letter.toLowerCase()
    
    space = ' '
    
    // todocode logic application here
    
    
    function isSpace(character)
    {
        return (/[]/.test(character))
    }

    /*
        --------------------------------------------------------------------------------
        } isLetter function : if letter return true else false
        --------------------------------------------------------------------------------
    */

    function isLetter(character)
    {
        //return (character >= 'A' && character <= 'Z') || (character >= 'a' && character <= 'z')
        
        return /[a-zA-Z]/.test(character)
    }
    
    function isUpper(character)
    {
        return (character >= 65 && character <= 90)
    }
    
    function isLower(character)
    {
        return (character >= 97 && character <= 122)
    }

    /*
        --------------------------------------------------------------------------------
        } isNumber function : if number return true else false
        --------------------------------------------------------------------------------
    */

    function isNumber(character)
    {
        return typeof character === 'number' && isFinite(character)
    }
    
    function isNumber(character)
    {
        return (/\d/.test(character))
    }
    
    function isReal(number)
    {
        return (number >= 0)
    }


    /*
        --------------------------------------------------------------------------------
        } isSymbol function : if symbol return true else false
        --------------------------------------------------------------------------------
    */

    function isSymbol(character)
    {
        return /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]$/.test(character);
    }

    /*
        --------------------------------------------------------------------------------
        } isPrime function : whole number greater than 1 & only two positive divisors
        --------------------------------------------------------------------------------
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
        --------------------------------------------------------------------------------
        } getPrimeIndex function : return index of prime number
        --------------------------------------------------------------------------------
    */

    function getPrimeIndex(number)
    {
        let prime_index = 0
        
        for (n = 2; n <= number; n++)
        {
            if (isPrime(n))
            {
                prime_index++
            }
        }
        return (prime_index--)
    }

    /*
        --------------------------------------------------------------------------------
        } getCode function : return character ASCII number
        --------------------------------------------------------------------------------
    */

    function getCode(character)
    {
        return character.charCodeAt(0) /* works with UTF-16 (16-bit units) */

        // return character.charPointAt(0) /* handles full Unicode (32-bit units) */
    }

    /*
        --------------------------------------------------------------------------------
        } isGmail function : if gmail format return true else false
        --------------------------------------------------------------------------------
    */

    function isGmail(email)
    {
        return /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email);
    }

    /*
        --------------------------------------------------------------------------------
        } isComplex function : if complex word return true else false
        --------------------------------------------------------------------------------
    */

    function isComplex(password)
    {
        return (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/.test(password))
    }
    
    /*
        --------------------------------------------------------------------------------
        } shuffle function : get data argument return equal unique or unorder data
        --------------------------------------------------------------------------------
    */
    
    function shuffle(data)
    {                        
        const data_array = data.split('');
        
        for (let i = data_array.length - 1; i > 0; i--)
        {
            const o = Math.floor(Math.random() * (i + 1));
            
            [data_array[i], data_array[o]] = [data_array[o], data_array[i]];
        }
        
        return data_array.join('');
    }
    
    /*
        --------------------------------------------------------------------------------
        } numberCode(data) : pass data return in random number format
        --------------------------------------------------------------------------------
    */
    
    function numberCode(data)
    {
        let num = 11

        for (let i = 0; i < data.length; i++) num = (num << 3) - num + data.charCodeAt(i)
        
        return num
    }
    
    // console.log(numberCode('client'))


    /*
        isNaN()      // if isNumber || Convertable inNumber so return false else true
    */

    /*
        isFinite()  // if isNumber || COnvertable inNumber & Finite so return true else false
    */
        
    client_data = "Hello World-2025!"
    
    console.log(client_data)
    
    server_data = encrypt(client_data)
    
    console.log(server_data)
    
    client_data = decrypt(server_data)
    
    console.log(client_data)
    
    /* encrypt function */
    
    function encrypt(data)
    {
        const data_set = data.split('')
        
        for (let i = 0; i < data_set.length; i++)
        {
            let character = data_set[i]
            
            if (isLetter(character))
            {
                if (character.charCodeAt(0) === 90 || character.charCodeAt(0) === 122)
                {
                    data_set[i] = String.fromCharCode(character.charCodeAt(0) - 26)
                }
                else
                {
                    data_set[i] = String.fromCharCode(character.charCodeAt(0) + 1)                 
                }
                if ((i%2) != 0)
                {                               
                    let transform_character = data_set[i]
                                 
                    if (isUpper(transform_character.charCodeAt(0)))
                    {
                        data_set[i] = transform_character.toLowerCase()
                    }
                    else if (isLower(transform_character.charCodeAt(0)))
                    {
                        data_set[i] = transform_character.toUpperCase()
                    }
                }
            }
            else if (isNumber(character))
            {
                if (character.charCodeAt(0) === 48)
                {
                    data_set[i] = String.fromCharCode(character.charCodeAt(0) + 9)
                }
                else
                {
                    data_set[i] = String.fromCharCode(character.charCodeAt(0) - 1)                 
                }
            }
            
            if (isPrime(i))
            {            
                if (isSpace(character))
                {
                
                }
                else
                {
                    console.log(character)
                    console.log()
                    
                    data_set[i] = setData(character,getPrimeIndex(i))
                }
            }
        }
        return data_set.join('');
    }
    
    /* decrypt function  */
    
    function decrypt(data)
    {
        const data_set = data.split('')
        
        for (let i = 0; i < data_set.length; i++)
        {
            character = data_set[i]
             
            if (isLetter(character))
            {
                if (character.charCodeAt(0) === 65 || character.charCodeAt(0) === 97)
                {
                    data_set[i] = String.fromCharCode(character.charCodeAt(0) + 26)
                }
                else
                {
                    data_set[i] = String.fromCharCode(character.charCodeAt(0) - 1)                 
                }
                if ((i%2) != 0)
                {
                    let transform_character = data_set[i]
                    
                    if (isUpper(transform_character.charCodeAt(0)))
                    {
                        data_set[i] = transform_character.toLowerCase()
                    }
                    else if (isLower(transform_character.charCodeAt(0)))
                    {
                        data_set[i] = transform_character.toUpperCase()
                    }
                }
            }
            else if (isNumber(character))
            {
                if (character.charCodeAt(0) === 57)
                {
                    data_set[i] = String.fromCharCode(character.charCodeAt(0) - 9)
                }
                else
                {
                    data_set[i] = String.fromCharCode(character.charCodeAt(0) + 1)                 
                }
            }
        }
        return data_set.join('');
    }
    
    
    /*set data*/
    
    function setData(character, iterate)
    {
        if (isLetter(character))
        {
            let code = character.charCodeAt(0)
            
            if (isUpper(code))
            {
                character_code = (((code - 65 + iterate) % 26 + 26) % 26 + 65)
            }
            else if (isLower(code))
            {
                character_code = (((code - 97 + iterate) % 26 + 26) % 26 + 97)
                
            }         
            return String.fromCharCode(character_code)
        }
        else if (isNumber(character))
        {
            let number = character.charCodeAt(0)
            
            number = (((number - 48 + iterate) % 10 + 10) % 10 + 48)
            
            return String.fromCharCode(number) 
        }
        else if (isSymbol(character))
        {
        
        }
    }    
    console.log(setData('9',3))

    
    
   
