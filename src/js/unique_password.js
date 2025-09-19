/*
- Project-2 "GUPT"-(version-3.0.0)
- File: /src/js/unique_password.js
- Description: this script generate password according to user requirement
*/

import GUPT from './lipi.js'


$(document).ready(function () {
    
    try
    {  
        let app = new GUPT()
        
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
        
        let unique_code = null

        let character_set = null

        let hasNumber = false 
        
        let hasSymbol = false

        key_length.value = 8 // default legnth


        /*
            ------------------------------------------------------------------------------
            } key length function : onchange key length value set between 4 and 30 
            ------------------------------------------------------------------------------
        */

        key_length.onchange = () => {

            const n = key_length.value

            if(n < 4 || n > 32)
            {
                alert(`range between { 4 to 32 } character`)

                console.warn(` ALERT : range between { 4 to 32 } character`)

                key_length.value = 8

                return
            }
            key_length.value = n

            console.log(`unique password length is ${n}`)
        }

        /*
            -----------------------------------------------------------------------------
            } number check : on change isNumber value toggle true and false
            -----------------------------------------------------------------------------
        */

        number_check.onchange = () => {

            hasNumber = !hasNumber
            
            console.log(`\n unqiue password has number : ${hasNumber}]`)
        }

        /*
            -----------------------------------------------------------------------------
            } symbol check : on change isSymbol value toggle true and false
            -----------------------------------------------------------------------------
        */

        symbol_check.onchange = () => {

            hasSymbol = !hasSymbol
            
            console.log(`\n unqiue password has symbol : ${hasSymbol}]`)
        }

        /*
            -----------------------------------------------------------------------------
            } unique password function : onclick loop getRandom() argument characterset 
            -----------------------------------------------------------------------------
        */

        unique_password_btn.onclick = function()
        {
            unique_code = ''

            character_set = app.letter
                
            if (hasNumber)
            {
                character_set += app.number
            }
            if (hasSymbol)
            {
                character_set += app.symbol;
            }

            for (let i = 0; i < key_length.value; i++)
            {
                unique_code += app.getRandom(character_set)
                // unique_code += getRandom(character_set)
            }
            unique_password_fld.value = unique_code
            
            console.log(`\n unqiue password is generated :${unique_code}`)
        }

        document.title = `Mayank & HRitik`
    }
    catch(err)
    {
        console.error(err.message)
    }
})
/* Developed by Mayank & Hritik | ( https://github.com/MayankDevil/ ) & ( https://github.com/Hritikkumar975/ ) */