/*
-   Project-2 "GUPT"
-   Designed | Developed by Mayank & HRitik
-   Copyright by Mayank( https://github.com/MayankDevil/ ) & HRitik ( https://github.com/Hritikkumar975/ )
-   JavaScript : ./js/gupt_lipi.js
*/
try
{
    /*
        =================
        [ Crypto Class ]
        =================
    */

    class Crypto
    {
        constructor()
        {
        }
    }
    new Crypto()

    // [ character set ] ----- 

    capital_letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    number = "0123456789"

    symbol = "!@#$%^&*()_+-=[]{};:'\"\\|,<.>/?`~"

    letter = capital_letter + capital_letter.toLowerCase()
    
    space = ' '

    // [ shuffle_key ] -----

    shuffle_key = (letter+number+space+symbol)

    /*
        ----------------------------------------------------------------------------------------
        | setData function : get character or iterate argument to return set_character_iterate |
        ----------------------------------------------------------------------------------------
    */

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
            let character_index = symbol.indexOf(character)
            
            let set_character_index = (character_index + iterate) % symbol.length
            
            if (!isReal(set_character_index))
            {
                set_character_index = 0 
            }
            
            return symbol[set_character_index]
        }
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
            
            // console.log(data_set[i])
            /*
            if (isPrime(i))
            {            
                data_set[i] = setData(character, getPrimeIndex(i))
            }
            */
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
            
            /*if (isPrime(i))
            {            
                data_set[i] = setData(character, getPrimeIndex(i))
            }*/
                
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
    
    function engput(data)
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
    
    function degput(data)
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
