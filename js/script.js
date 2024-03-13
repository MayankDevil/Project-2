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

    let crypto_key_btn = document.getElementById('crypto_key_btn')

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
    
    /*
        --------------------------------------------------------------------------------
        | cyrpto key button onclick set field value shuffled character_set data        |
        --------------------------------------------------------------------------------
    */
    
    crypto_key_btn.onclick = function()
    {
        crypto_key_fld.value = shuffle(letter+number+space+symbol).toString()
        
        console.log(`\n_[success] : cyrpto key generated`)
    }

    /*
        --------------------------------------------------------------------------------
        } getCryptoKey function : return crypto key as stirng
        --------------------------------------------------------------------------------
    */
    
    function getCryptoKey()
    {
        return crypto_key_fld.value.toString()
    }

    /*
        --------------------------------------------------------------------------------
        | encode button onclick encode function argument data & key return encode data |
        --------------------------------------------------------------------------------
    */

    document.getElementById('encode_btn').onclick = () => {
    
        output_fld.value = enCode(input_fld.value,getCryptoKey()).toString()
        
        console.log(`_[data encoded]`)
    }

    /*
        --------------------------------------------------------------------------------
        | decode button onclick decode function argument data & key return decode data |
        --------------------------------------------------------------------------------
    */

    document.getElementById('decode_btn').onclick = () => {
    
        output_fld.value = deCode(input_fld.value,getCryptoKey()).toString()
        
        console.log(`_[data decoded]`)
    }
    
    /*
        -------------------------------------
        | all clear button clear all field  |
        -------------------------------------
    */

    document.getElementById('all_clear').onclick = () => {
    
        input_fld.value = ``
        
        output_fld.value = ``
        
        crypto_key_fld.value = ``
        
        console.log(`_[all clear]`)
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

    /*
        ---------------------------------------------------------------------------
        | output copy button onclick output field select AND execute copy command |
        ---------------------------------------------------------------------------
    */

    document.getElementById('key_copy_btn').onclick = () => {

        try
        {
            crypto_key_fld.select()
            document.execCommand("copy")

            console.log(`\n_[copied] : cryptography key \n`)
        }
        catch(error)
        {
            window.alert(`_[copy failed]`)
        }
    }

    
    /*
    // write to speach ------------------------------------------------------------

    console.log(`
        \n G G G G G   U       U   P P P P   T T T T T
        \n G           U       U   P     P       T    
        \n G           U       U   P     P       T    
        \n G   G G G   U       U   P P P P       T    
        \n G       G   U       U   P             T    
        \n G       G   U       U   P             T    
        \n G G G G G   U U U U U   P             T     \n
        \n Copyriht & Designed | Developed by Mayank & HRitik \n
    `)
    */

    document.title = `Mayank & HRitik`
}
catch(error)
{
    console.error(` ERROR ${ error }`)
}
// the end
