/*
-   Project-2 "GUPT"
-   Designed | Developed by Mayank & HRitik
-   Copyright by Mayank( https://github.com/MayankDevil/ ) & HRitik ( https://github.com/Hritikkumar975/ )
-   JavaScript : ./js/script.js
*/
try
{
    // todocode logic application here
    
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
    
    
    // ===================================
    
        const shuffle_key = number + letter + symbol
        
        let crypto_key = shuffle(shuffle_key)
        
        //console.log(crypto_key)
        
        client_data = "may be sex with me"
        
           
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
        
        return_data = enCode(client_data, crypto_key)

        // console.log(return_data)
        
        
        client_data = deCode(return_data, crypto_key)

        // console.log(client_data)
        
        // ===========================================


    document.title = `Mayank & HRitik`
}
catch(error)
{
    console.error(` ERROR ${ error }`)
}
// the end
