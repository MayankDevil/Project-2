/*
-   Project-2 "GUPT"
-   Designed | Developed by Mayank & HRitik
-   Copyright by Mayank( https://github.com/MayankDevil/ ) & HRitik ( https://github.com/Hritikkumar975/ )
-   JavaScript : ./js/secure_password.js
*/
try
{   
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
        let secure = 0 // default security level

        alert_statement = `<div class='h2 text-muted p-3'> Please use </div>`

        if (secure_password_fld.value == '')
        {
            secure_alert.innerHTML = `<div> <div class="isUnvalid"> Please! Enter Password </div> </div>`

            secure_alert.classList.add('isUnvalid')
        }
        else
        {
            if (/[A-Z]/.test(secure_password_fld.value))
            {
                secure += 20
            }
            else
            {
                alert_statement += `<div class="h5 text-end py-2"> _Capital Letter in this (A-Z) </div>`
            }
            if (/[a-z]/.test(secure_password_fld.value))
            {
                secure += 20
            }
            else
            {
                alert_statement += `<div class="h5 text-end py-2"> _Small Letter in this (a-z) </div>`
            }
            if (/\d/.test(secure_password_fld.value))
            {
                secure += 20
            }
            else
            {
                alert_statement += `<div class="h5 text-end py-2"> _Number in this (0-9) </div>`
            }
            if (/[!@#$%^&*(),.?":{}|<>]/.test(secure_password_fld.value))
            {
                secure += 20
            }
            else
            {
                alert_statement += `<div class="h5 text-end py-2"> _Symbol in this (! @ # $ % &) </div>`
            }
            if (true)
            {
                secure += random(5)
            }
            if (secure_password_fld.value.length >= 8)
            {
                secure += 5
            }
            if (secure_password_fld.value.length > 14)
            {
                secure += 5
            }
            if (secure_password_fld.value.length > 21)
            {
                secure += 5
            }
            else
            {
                alert_statement += `<div class="h5 text-end py-2"> _More length password </div>`
            }
            
            secure_alert.innerHTML = ``
            
            secure_alert.classList.remove('isUnvalid')
            
            if (secure > 50)
            {
                secure_alert.innerHTML = `<div class="h4 text-center py-3 isValid"> <span class="bi bi-shield-lock"></span> Your Password is ${secure}% secure </div> ${alert_statement} `
            }
            else
            {
                secure_alert.innerHTML = `<div class="h4 text-center py-3 isUnvalid"> <span class="bi bi-shield-lock"></span> Your Password is ${secure}% secure </div> ${alert_statement} `
            }
        }
        console.log(secure_password_fld.value)
    }

    document.title = `Mayank & HRitik`
}
catch(error)
{
    console.error(` ERROR ${ error }`)
}
// the end
