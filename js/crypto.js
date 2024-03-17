/*
-   Project-2 "GUPT"
-   Designed | Developed by Mayank & HRitik
-   Copyright by Mayank( https://github.com/MayankDevil/ ) & HRitik ( https://github.com/Hritikkumar975/ )
-   JavaScript : ./js/crypto.js
*/
try
{
    /*
        --------------------
        [ isSpace function ]   if space return true else false
        --------------------
    */
    
    function isSpace(character)
    {
        // return (character == space)
        
        return /[ ]/.test(character)
    }

    /*
        ---------------------
        [ isLetter function ]   if letter return true else false
        ---------------------
    */

    function isLetter(character)
    {
        return (character >= 'A' && character <= 'Z') || (character >= 'a' && character <= 'z')
    
        // return /[a-zA-Z]/.test(chracter)
    }

    /*
        --------------------
        [ isUpper function ]    if Uppercase return true else false
        --------------------
    */

    function isUpper(character)
    {
        return (character >= 65 && character <= 90)

        // return /[A-Z]/.test(chracter)
    }

    /*
        --------------------
        [ isLower function ]    if Lowercase return true else false
        --------------------
    */
    
    function isLower(character)
    {
        return (character >= 97 && character <= 122)

        // return /[a-z]/.test(chracter)
    }
    
    /*
        ---------------------
        [ isNumber function ]   if number return true else false
        ---------------------
    */

    function isNumber(character)
    {
        // return typeof character === 'number' && isFinite(character)

        return (/\d/.test(character))
    }

    /*
        -------------------
        [ isReal function ]   if number is 0 or greater than 0 return true else false
        -------------------
    */

    function isReal(number)
    {
        return (number >= 0)
    }

    /*
        ---------------------
        [ isSymbol function ]   if symbol return true else false
        ---------------------
    */

    function isSymbol(character)
    {
        return character.includes(symbol)
        
        // return /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]$/.test(character)
    }

    /*
        --------------------
        [ isPrime function ]   whole number greater than 1 & only two positive divisors
        --------------------
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
        --------------------
        [ isGmail function ]   if gmail format return true else false
        --------------------
    */

    function isGmail(email)
    {
        return /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email);
    }

    /*
        ----------------------
        [ isComplex function ]   if complex word return true else false
        ----------------------
    */

    function isComplex(password)
    {
        return (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/.test(password))
    }

    /*
        --------------------------
        [ getPrimeIndex function ]   return index of prime number
        --------------------------
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
        --------------------
        [ shuffle function ]    get data argument return equal unique or unorder data
        --------------------
    */

    function shuffle(data)
    {
        let data_array = data.split('');
    
        for (let i = data_array.length - 1; i > 0; i--)
        {
            let randomIndex = random(i + 1);
    
            [data_array[i], data_array[randomIndex]] = [data_array[randomIndex], data_array[i]];
        }
        return data_array.join('');
    }
    
    /*
        -----------------------
        [ numberCode function ]     pass data return in random number format
        -----------------------
    */
    
    function numberCode(data)
    {
        let num = 11

        for (let i = 0; i < data.length; i++) num = (num << 3) - num + data.charCodeAt(i)
        
        return num
    }

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

    //  charCodeAt(0)   // works with UTF-16 (16-bit units) 
    
    //  charPointAt(0)  // handles full Unicode (32-bit units)

    //  fromCharCode()  // convert code to character

    //  isNaN()      // if isNumber || Convertable inNumber so return false else true

    //  isFinite()  // if isNumber || COnvertable inNumber & Finite so return true else false

    document.title = `Mayank & HRitik`
}
catch(error)
{
    console.error(` ERROR ${ error }`)
}
// the end
