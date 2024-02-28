/*
-   Project-2 "GUPT"
-   Designed | Developed by Mayank & HRitik
-   Copyright by Mayank( https://github.com/MayankDevil/ ) & HRitik ( https://github.com/Hritikkumar975/ )
-   JavaScript : ./js/script.js
*/
try
{
    // todocode logic application here

    let input_fld = document.getElementById('data_input_fld')

    let output_fld = document.getElementById('data_output_fld')
    
    let crypto_key_fld = document.getElementById('crypto_key_fld')

    input_fld.onclick = () => {

        input_fld.style.zIndex = 10
        input_fld.classList.add('isActiveField')
        output_fld.style.zIndex = 5
        output_fld.classList.remove('isActiveField')
    }

    output_fld.onclick = () => {

        output_fld.style.zIndex = 10
        output_fld.classList.add('isActiveField')
        input_fld.style.zIndex = 5
        input_fld.classList.remove('isActiveField')
    }
    
    function cryptoKey()
    {
        if (crypto_key_fld == "") crypto_key_fld = (letter+number+symbol+space)
        
        return crypto_key_fld.value
    }
    
    shuffle_key = (letter+number+symbol+space)
    
    /*
        --------------------------------------------------------------------------------
        | encode button onclick encode function argument data & key return encode data |
        --------------------------------------------------------------------------------
    */

    document.getElementById('encode_btn').onclick = () => {
    
        output_fld.innerText = enCode(input_fld.value,shuffle(shuffle_key)).toString()
    }

    /*
        --------------------------------------------------------------------------------
        | decode button onclick decode function argument data & key return decode data |
        --------------------------------------------------------------------------------
    */

    document.getElementById('decode_btn').onclick = () => {
    
        console.log(` call me 2 `)
    
        output_fld.innerText = deCode(input_fld.value,shuffle(shuffle_key)).toString()
    }
    
    /*
        -------------------------------------------------------------------------
        | input copy button onclick input field select AND execute copy command |
        -------------------------------------------------------------------------
    */

    document.getElementById('input_copy_btn').onclick = () => {
    
        try
        {
            input_fld.select()
            
            document.execCommand("copy")
            
            console.log(`\n_[copied] : input field data \n`)
        }
        catch(error)
        {
            window.alert(`_[copy failed]`)
        }
    }
    
    /*
        ---------------------------------------------------------------------------
        | output copy button onclick output field select AND execute copy command |
        ---------------------------------------------------------------------------
    */

    document.getElementById('output_copy_btn').onclick = () => {
    
        try
        {
            output_fld.select()
            
            document.execCommand("copy")
            
            console.log(`\n_[copied] : output field data \n`)
        }
        catch(error)
        {
            window.alert(`_[copy failed]`)
        }
    }
    
    

    document.title = `Mayank & HRitik`
}
catch(error)
{
    console.error(` ERROR ${ error }`)
}
// the end
