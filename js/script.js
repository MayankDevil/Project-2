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
    
    var step = document.getElementById('step')
    
    var isHindi = false

    /*
        [ io Z-index ] ==========
    */

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
        return crypto_key_fld.value
    }

    /*
        --------------------------------------------------------------------------------
        } isEmpty function : if key is empty return true else false
        --------------------------------------------------------------------------------
    */

    function isEmpty(key)
    {
        return (key == '')
    }
        

    /*
        --------------------------------------------------------------------------------
        | encode button onclick encode function argument data & key return encode data |
        --------------------------------------------------------------------------------
    */

    document.getElementById('encode_btn').onclick = () => {
    
        // output_fld.value = enCode(input_fld.value,getCryptoKey()).toString()
        
        output_fld.value = encrypt(input_fld.value, getCryptoKey()).toString()

        console.log(`_[data encoded]`)
    }

    /*
        --------------------------------------------------------------------------------
        | decode button onclick decode function argument data & key return decode data |
        --------------------------------------------------------------------------------
    */

    document.getElementById('decode_btn').onclick = () => {
    
        // output_fld.value = deCode(input_fld.value,getCryptoKey()).toString()
        
        output_fld.value =  decrypt(input_fld.value, getCryptoKey()).toString()

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
    
    document.getElementById('lang_btn').onclick = () => {
    
        if (isHindi)
        {            
            rule = `<li class="text-muted py-3"> Please use the <span class="text-primary"> button </span> to Copy OR Clear OR <b>Crypto Key</b>  </li>
                <li class="text-muted py-3"> <b>_input_field_</b> allow users to <span class="text-primary"> Insert Data </span> if they are empty </li>
                <li class="text-muted py-3"> <b>_output_field_</b> is specifically for <span class="text-primary"> Copy Data </span> OR <span class="text-primary"> Display </span> the outcome </li>
                <li class="text-muted py-3"> generating Key is not a must, but Key provide <span class="text-primary"> more_secure_data </span> </li>
                <li class="text-muted py-3"> Key encrypted data is decrypt by <span class="text-primary"> same Key </span> </li>
                <li class="text-muted py-3"> don't be <span class="text-primary"> loss </span> AND <span class="text-primary"> corrupt </span> Key OR Data </li>
                <li class="text-muted py-3"> before Key (<b>encrypt</b>ion AND <b>decrypt</b>ion) be Generated AND Inserted <span class="text-primary"> Crypto Key </span> </li>
                <li class="text-muted py-3"> <b>copyed</b> Key OR Data before <span class="text-primary"> all clear </span> </li>
                <li class="text-muted py-3"> clear All to reuse <b>GUPT</b> </li>`
            
            isHindi = false
        }
        else
        {
            rule = `<li class="text-muted py-3"> कृपया <span class="text-primary"> बटन </span> का उपयोग करें  Copy या  Clear या  <b> Crypto Key </b>  </li>
                <li class="text-muted py-3"> <b>_input_field_</b> उपयोगकर्ताओं को <span class="text-primary"> डेटा डालने </span> की अनुमति देते हैं अगर वे खाली हैं </li>
                <li class="text-muted py-3"> <b>_output_field_</b> विशेष रूप से <span class="text-primary"> डेटा कॉपी </span> या <span class="text-primary"> प्रदर्शन </span> के लिए है </li>
                <li class="text-muted py-3"> Key उत्पन्न करना आवश्यक नहीं है, लेकिन कुंजी <span class="text-primary"> अधिक सुरक्षित डेटा </span> प्रदान करती है </li>
                <li class="text-muted py-3"> कुंजी एन्क्रिप्टेड डेटा को <span class="text-primary"> वही कुंजी </span> द्वारा डिक्रिप्ट करती है </li>
                <li class="text-muted py-3"> Key और  Data को <span class="text-primary"> खोने </span> या <span class="text-primary"> बिगाड़ने </span> से बचें </li>
                <li class="text-muted py-3"> Key (<b>Encrypt</b>ion और <b>Decrypt</b>ion) करने  से पहले <span class="text-primary"> क्रिप्टो कुंजी </span> उत्पन्न करें या डालें </li>
                <li class="text-muted py-3"> <span class="text-primary"> सभी साफ </span> करने से पहले कुंजी या डेटा को <b>Copy</b> करें </li>
                <li class="text-muted py-3"> <b>GUPT</b> पुनः उपयोग के लिए clear All करें  </li>`
            
            isHindi = true
        }   
        
        step.innerHTML = rule.toString()
        
        console.log("\n _[language = Hindi]")
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
