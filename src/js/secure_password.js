/*
- Project-2 "GUPT"-(version-2.0.0)
- File: /src/js/secure_password.js
- Description: this script check level of secure of password and advice to update
*/
$(document).ready(function () {

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
            if (isEmpty(secure_password_fld.value))
            {
                secure_alert.innerHTML = `<div class="h5 text-center py-3 isUnvalid"> Please! Enter Password </div>`
                secure_alert.classList.add('isUnvalid')
                return
            }
            
            if (isSpace(secure_password_fld.value))
            {
                secure_alert.innerHTML = `<div class="h5 text-center py-3 isUnvalid"> Space Not allowed </div>`
                secure_alert.classList.add('isUnvalid')
                return
            }

            /* advice list for update */

            const SECURE = entropy(secure_password_fld.value) // default bit

            alert_statement = `<div class='h2 text-muted p-3'> Please use </div>`

            if (!isUpper(secure_password_fld.value))
            {
                alert_statement += `<div class="h5 py-2"> Capital Letter in this (A-Z) </div>`
            }
            if (!isLower(secure_password_fld.value))
            {
                alert_statement += `<div class="h5 text-end py-2"> Small Letter in this (a-z) </div>`
            }
            if (!isNumber(secure_password_fld.value))
            {
                alert_statement += `<div class="h5 text-end py-2"> Number in this (0-9) </div>`
            }
            if (!isSymbol(secure_password_fld.value))
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
            secure_alert.innerHTML = `<div class="h4 text-center py-3 ${class_name}"> <span class="bi bi-shield-lock"></span> ${SECURE}% ${securityLevel(SECURE)} estimated crack time : ${estimatedCrackTime(SECURE)} </div> ${alert_statement} `
                
            console.log(`this ${secure_password_fld.value} level is ${SECURE}% secure`)
        }

        /* unqiue randomness of data */

        function entropy (data) {

            if (this.isEmpty(data)) {
                return 0
            }

            let N = 0

            if (/[a-z]/.test(data))  {
                N += 26;
            }
            if (/[A-Z]/.test(data)) {
                N +=26
            }
            if (/\d/.test(data)) {
                N += 10
            }
            if (/[^a-zA-Z0-9]/.test(data)) {
                N += 33
            }

            let L = data.length

            return Math.floor(L * Math.log2(N))
        }

        /* return level of security */

        function securityLevel(bit) {

            if (bit < 28) {
                return "Very Weak";
            } else if (bit <= 35) {
                return "Weak";
            } else if (bit <= 59) {
                return "Moderate";
            } else if (bit <= 79) {
                return "Strong";
            } else if (bit <= 127) {
                return "Very Strong";
            } else {
                return "Cryptographic";
            }
        }

        /* return estimated time to crack security */
        
        function estimatedCrackTime(bit) {
            
            const seconds = (2 ** bit) / 1e10
                        
            if (seconds < 60) {
                return `${seconds.toFixed(2)} seconds`
            } else if (seconds < 3600) {
                return `${(seconds / 60).toFixed(2)} minutes`
            } else if (seconds < 86400) {
                return `${(seconds / 3600).toFixed(2)} hours`
            } else if (seconds < 31557600) {
                return `${(seconds / 86400).toFixed(2)} days`
            } else {
                return `${(seconds / 31557600).toFixed(2)} years`
            }
        }

        document.title = `Mayank & HRitik`
    }
    catch(error)
    {
        console.error(` ERROR ${ error }`)
    }
})
/* Developed by Mayank & Hritik | ( https://github.com/MayankDevil/ ) & ( https://github.com/Hritikkumar975/ ) */