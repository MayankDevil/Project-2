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


    document.title = `Mayank & HRitik`
}
catch(error)
{
    console.error(` ERROR ${ error }`)
}
// the end
