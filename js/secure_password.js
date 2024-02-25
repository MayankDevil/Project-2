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

    let secure_alert = document.getElementById('secure_alert')

    /*
        -----------------------------------------------------------------------------
        } secure password function : onclick multiple check validate security 
        -----------------------------------------------------------------------------
    */

    secure_password_btn.onclick = function()
    {
        let secure = 0 // default security level

        alert_statement = `<div> Please use </div>`

        if (secure_password_fld.value == '')
        {
            secure_alert.innerHTML = `<div class="isUnvalid"> Please! Enter Password </div>`

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
                alert_statement += `<div> Capital Letter in this (A-Z) </div>`
            }
            if (/[a-z]/.test(secure_password_fld.value))
            {
                secure += 20
            }
            else
            {
                alert_statement += `<div> Small Letter in this (a-z) </div>`
            }
            if (/\d/.test(secure_password_fld.value))
            {
                secure += 20
            }
            else
            {
                alert_statement += `<div> Number in this (0-9) </div>`
            }
            if (/[!@#$%^&*(),.?":{}|<>]/.test(secure_password_fld.value))
            {
                secure += 20
            }
            else
            {
                alert_statement += `<div> Symbol in this (! @ # $ % &) </div>`
            }
            if (true)
            {
                secure += 20
            }

            switch(parseInt(secure))
            {
                case 100:
                    alert_statement += `<div class='isValid'> Very Good Password <div>`
                    break;
                case 80 :
                    alert_statement += `<div class='isValid'> Your password Security Level is very High <div>`
                    break;
                case 60 :
                    alert_statement += `<div class='isValid'> Your password Level is Secure, Nice! <div>`
                    break;
                case 40 :
                    alert_statement += `<div class='isValid'> Password is Weak <div>`
                    break;    
                case 20 :
                    alert_statement += `<div class='isUnvalid'> Require better password <div>`
                    break;
                default :
                    alert_statement += `<div class='isUnvalid'> Your security in Danger <div>` 
            }

            secure_alert.innerHTML = `<div> Your Password is ${secure}% secure <div> ${alert_statement} `

            console.log((secure_password_fld.value.match(/[a-zA-Z]/g) || []).length + secure_password_fld.value.length)
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
