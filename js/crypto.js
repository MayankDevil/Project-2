/*
-   Project-2 "GUPT"
-   Designed | Developed by Mayank & HRitik
-   Copyright by Mayank( https://github.com/MayankDevil/ ) & HRitik ( https://github.com/Hritikkumar975/ )
-   JavaScript : ./js/checkSet.js
*/
try
{
    // todocode logic application here

    /*
        --------------------------------------------------------------------------------
        } isLetter function : if letter return true else false
        --------------------------------------------------------------------------------
    */

    function isLetter(character)
    {
        return (character >= 'A' && character <= 'Z') || (character >= 'a' && character <= 'z')
    }

    /*
        --------------------------------------------------------------------------------
        } isNumber function : if number return true else false
        --------------------------------------------------------------------------------
    */

    function isNumber(character)
    {
        return typeof character === 'number' && isFinite(character)
    }

    /*
        --------------------------------------------------------------------------------
        } isSymbol function : if symbol return true else false
        --------------------------------------------------------------------------------
    */

    function isSymbol(character)
    {
        return /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]$/.test(character);
    }

    /*
        --------------------------------------------------------------------------------
        } isPrime function : whole number greater than 1 & only two positive divisors
        --------------------------------------------------------------------------------
    */

    function isPrime(number)
    {
        if (number <= 1) return false

        for (let i = 2; i <= Math.sqrt(number); i++)
        {
            if (number%i === 0)
            {
                return false
            }
        }
        return true;
    }

    /*
        --------------------------------------------------------------------------------
        } getPrimeIndex function : return index of prime number
        --------------------------------------------------------------------------------
    */

    function getPrimeIndex(number)
    {
        let prime_index = 0
        
        for (n = 2; n <= number; n++)
        {
            if (isPrime(n))
            {
                prime_index++
            }
        }
        return (prime_index--)
    }

    /*
        --------------------------------------------------------------------------------
        } getASCII function : return character ASCII number
        --------------------------------------------------------------------------------
    */

    function getASCII(character)
    {
        // return character.charCodeAt(0) /* works with UTF-16 (16-bit units) */

        return character.charPointAt(0) /* handles full Unicode (32-bit units) */
    }

    /*
        --------------------------------------------------------------------------------
        } isGmail function : if gmail format return true else false
        --------------------------------------------------------------------------------
    */

    function isGmail(email)
    {
        return /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email);
    }

    /*
        --------------------------------------------------------------------------------
        } isComplex function : if complex word return true else false
        --------------------------------------------------------------------------------
    */

    function isComplex(password)
    {
        return (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/.test(password))
    }


/*
    isNaN()      // if isNumber || Convertable inNumber so return false else true
*/

/*
    isFinite()  // if isNumber || COnvertable inNumber & Finite so return true else false
*/

    document.title = `Mayank & HRitik`
}
catch(error)
{
    console.error(` ERROR ${ error }`)
}
// the end
