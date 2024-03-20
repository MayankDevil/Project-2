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

    small_letter = capital_letter.toLowerCase()

    number = "0123456789"

    symbol = "!@#$%^&*()_+-=[]{};:'\"\\|,<.>/?`~"

    letter = capital_letter + small_letter
    
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
            
            if (isSymbol(character))
            {
                data_set[i] = shiftSymbol(character,1)
            }
            else if (isNumber(character))
            {
                data_set[i] = shiftNumber(character,-7)
            }
            else if (isLetter(character))
            {
                data_set[i] = shiftLetter(character,9)
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
            }
            else if (isLetter(character))
            {
                data_set[i] = shiftLetter(character,-9)
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
