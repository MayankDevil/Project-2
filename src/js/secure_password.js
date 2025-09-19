/*
- Project-2 "GUPT"-(version-3.0.0)
- File: /src/js/secure_password.js
- Description: this script check level of secure of password and advice to update
*/

import GUPT from './lipi.js'

$(document).ready(function () {

    try
    {   
        let app = new GUPT()

        /*
            =======================================
            [ secure password validation function ]
            =======================================
        */

        let secure_password_fld = document.getElementById("secure_password_fld")

        let secure_password_btn = document.getElementById("secure_password_btn")

        let secure_alert = document.getElementById('validation')

        /*
            -----------------------------------------------------------------------------
            } secure password function : onclick multiple check validate security 
            -----------------------------------------------------------------------------
        */

        secure_password_btn.onclick = function()
        {
            if (app.isEmpty(secure_password_fld.value))
            {
                secure_alert.innerHTML = `<div class="h5 text-center p-0 isUnvalid"> Please! Enter Password </div>`
                secure_alert.classList.add('isUnvalid')
                return
            }
            
            if (app.isSpace(secure_password_fld.value))
            {
                secure_alert.innerHTML = `<div class="h5 text-center p-0 isUnvalid"> Space Not allowed </div>`
                secure_alert.classList.add('isUnvalid')
                return
            }

            /* advice list for update */

            const SECURE = app.entropy(secure_password_fld.value) // default bit

            let alert_statement = `<div class='h2 text-muted p-3'> Please use </div>`

            if (!app.isUpper(secure_password_fld.value))
            {
                alert_statement += `<div class="h5 py-2"> Capital Letter in this (A-Z) </div>`
            }
            if (!app.isLower(secure_password_fld.value))
            {
                alert_statement += `<div class="h5 text-end py-2"> Small Letter in this (a-z) </div>`
            }
            if (!app.isNumber(secure_password_fld.value))
            {
                alert_statement += `<div class="h5 text-end py-2"> Number in this (0-9) </div>`
            }
            if (!app.isSymbol(secure_password_fld.value))
            {
                alert_statement += `<div class="h5 text-end py-2"> Symbol in this (! @ # $ % &) </div>`
            }
            if (secure_password_fld.value.length < 21) 
            {
                alert_statement += `<div class="h5 text-end py-2"> Increse this length </div>`
            }

            /*  */
            
            let class_name = 'isUnvalid'

            if (SECURE > 50)
            {
                class_name = 'isValid'
            }
            secure_alert.innerHTML = `<div class="h4 text-center py-3 ${class_name}"> <span class="bi bi-shield-lock"></span> ${SECURE}% ${app.securityLevel(SECURE)} estimated crack time : ${app.estimatedCrackTime(SECURE)} </div> ${alert_statement} `
                
            console.log(`this ${secure_password_fld.value} level is ${SECURE}% secure`)
        }

        document.title = `Mayank & HRitik`
    }
    catch(error)
    {
        console.error(` ERROR ${ error }`)
    }
})
/* Developed by Mayank & Hritik | ( https://github.com/MayankDevil/ ) & ( https://github.com/Hritikkumar975/ ) */