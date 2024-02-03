/*
-   Project-2 "GUPT"
-   Designed | Developed by Mayank & HRitik
-   Copyright by Mayank( https://github.com/MayankDevil/ ) & HRitik ( https://github.com/Hritikkumar975/ )
-   JavaScript : ./js/unique_password.js
*/
try
{   
    /*
        ======================================
        [ unique password generator function ]
        ======================================
    */

    let key_length = document.getElementById('key_length');

    let unique_password_fld = document.getElementById("unique_password_fld")

    let unique_password_btn = document.getElementById("unique_password_btn")

    let number_check = document.getElementById('number_check')

    let symbol_check = document.getElementById('symbol_check')
    
    key_length.value = 8 // default legnth

    /*
        ------------------------------------------------------------------------------
        } key length function : onchange key length value set between 4 and 30 
        ------------------------------------------------------------------------------
    */

    key_length.onchange = () => {

        const n = key_length.value

        if(n < 4 || n > 30)
        {
            alert(`range between { 4 to 30 } character`)

            console.warn(` ALERT : range between { 4 to 30 } character`)

            key_length.value = 8
        }
        else
        {
            key_length.value = n
        }
    }

    /*
        -----------------------------------------------------------------------------
        } number check : on change isNumber value toggle true and false
        -----------------------------------------------------------------------------
    */

    number_check.onchange = () => {

        isNumber = (isNumber)? false : true;
    }

    /*
        -----------------------------------------------------------------------------
        } symbol check : on change isSymbol value toggle true and false
        -----------------------------------------------------------------------------
    */

    symbol_check.onchange = () => {

        isSymbol = (isSymbol)? false : true;
    }

    /*
        -----------------------------------------------------------------------------
        } unique password function : onclick loop getRandom() argument characterset 
        -----------------------------------------------------------------------------
    */

    unique_password_btn.onclick = function()
    {
        unique_code = ' '

        character_set = letter
            
        if (isNumber)
        {
            character_set += number
        }
        if (isSymbol)
        {
            character_set += symbol;
        }

        for (let i = 0; i < key_length.value; i++)
        {
            unique_code += getRandom(character_set)
        }
        unique_password_fld.value = unique_code
    }

    document.title = `Mayank & HRitik`
}
catch(error)
{
    console.error(` ERROR ${ error }`)
}
// the end
