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

    // [ require ] -----

    unique_code = null

    character_set = null

    isNumber = false 
    
    isSymbol = false

    document.title = `Mayank & HRitik`
}
catch(error)
{
    console.error(` ERROR ${ error }`)
}
// the end