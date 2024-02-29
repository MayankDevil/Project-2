/*
-   Project-2 "GUPT"
-   Designed | Developed by Mayank & HRitik
-   Copyright by Mayank( https://github.com/MayankDevil/ ) & HRitik ( https://github.com/Hritikkumar975/ )
-   JavaScript : ./js/entity.js
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

    symbol = "`~!@#$%^&*()-_+={}:<>?[],.;\|/"

    letter = capital_letter + capital_letter.toLowerCase()
    
    space = ' '

    // [ shuffle_key ] -----

    shuffle_key = (letter+number+space+symbol)

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
        return data.join('').toString()
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
        return data.join('').toString()
    }

    document.title = `Mayank & HRitik`
}
catch(error)
{
    console.error(` ERROR ${ error }`)
}
// the end
