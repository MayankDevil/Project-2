/*
- Project-2 "GUPT"-(version-2.0.0)
- File: /src/js/unique_password.js
- Description: this script generate password according to user requirement
*/

$(document).ready(function () {

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

        let copy_password_btn = document.getElementById('copy_password_btn')

        let number_check = document.getElementById('number_check')

        let symbol_check = document.getElementById('symbol_check')
        
        unique_code = null

        character_set = null

        hasNumber = false 
        
        hasSymbol = false

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
        }

        /*
            -----------------------------------------------------------------------------
            } number check : on change isNumber value toggle true and false
            -----------------------------------------------------------------------------
        */

        number_check.onchange = () => {

            hasNumber = (hasNumber)? false : true;
            
            console.log(`\n _[has Number : ${hasNumber}]`)
        }

        /*
            -----------------------------------------------------------------------------
            } symbol check : on change isSymbol value toggle true and false
            -----------------------------------------------------------------------------
        */

        symbol_check.onchange = () => {

            hasSymbol = (hasSymbol)? false : true;
            
            console.log(`\n _[has Number : ${hasSymbol}]`)
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
                
            if (hasNumber)
            {
                character_set += number
            }
            if (hasSymbol)
            {
                character_set += symbol;
            }

            for (let i = 0; i < key_length.value; i++)
            {
                unique_code += getRandom(character_set)
            }
            unique_password_fld.value = unique_code

            copy_password_btn.innerHTML = '<span class="bi bi-files"></span> copy'
            
            console.log(`\n_[generated : unique password]`)
        }

        /*
            -----------------------------------------------------------------
            | copy password button onclick copy unique password field value |
            -----------------------------------------------------------------
        */
        
        copy_password_btn.onclick = (event) => {

            try
            {
                unique_password_fld.select()
                
                document.execCommand("copy")

                copy_password_btn.innerHTML = '<span class="bi bi-check"></span> copied'
                
                console.log(`\n_[copied] : unique password \n`)
            }
            catch(error)
            {
                window.alert(`_[copy failed]`)
            }
        }

        document.title = `Mayank & HRitik`
    }
    catch(err)
    {
        console.error(err.message)
    }
})
/* Developed by Mayank & Hritik | ( https://github.com/MayankDevil/ ) & ( https://github.com/Hritikkumar975/ ) */