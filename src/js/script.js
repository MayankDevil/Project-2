/*
- Project-2 "GUPT"-(version-3.0.0)
- File: /src/js/script.js
*/

import GUPT from './lipi.js'

$(document).ready(function () {
    
    let app = new GUPT()
    
    // todocode logic application here
    
    let data_input_fld = document.getElementById('data_input_fld')

    let input_fld = document.getElementById('input_fld')

    let data_output_fld = document.getElementById('data_output_fld')

    let output_fld = document.getElementById('output_fld')
    
    let key_fld = document.getElementById('crypto_key_fld')

    let key_btn = document.getElementById('crypto_key_btn')
    
    let copy_password_btn = document.getElementById('copy_password_btn')
    
    let isHindi = false

    let crypt = document.getElementById('crypt_type')

    try
    {
        /* input / output field zero-index */

        data_input_fld.onclick = () => {

            data_input_fld.style.zIndex = 10
            input_fld.classList.add('isActiveField')
            data_output_fld.style.zIndex = 5
            output_fld.classList.remove('isActiveField')
        }

        data_output_fld.onclick = () => {

            data_output_fld.style.zIndex = 10
            output_fld.classList.add('isActiveField')
            data_input_fld.style.zIndex = 5
            input_fld.classList.remove('isActiveField')
        }
        
        /* cyrpto key button on click set field value */
        
        key_btn.onclick = function()
        {
            key_fld.value = app.shuffle(app.shuffle_key).toString()
            
            console.log(`\n new key generted`)
        }
        
        /*
            --------------------------------------------------------------------------------
            | encode button onclick encode function argument data & key return encode data |
            --------------------------------------------------------------------------------
        */

        document.getElementById('encode_btn').onclick = () => {
            
            let data = input_fld.value
            
            if (crypt.value == 0) {
                
                data = app.encrypt(data)
                
            } else if (crypt.value == 1) {
                
                data = app.engupt(data)
                
            } else if (crypt.value == 2) {
                
                data = app.shiftEnCode(data)

                data = app.bitEnCrypt(data)            
                
            } else if (crypt.value == 3) {
                
                if (!app.isEmpty(key_fld.value))  {
                    
                    data = enCode(data, key_fld.value).toString()
                }
                data = app.shiftEnCode(data)            
                data = app.engupt(data)
                            
            } else {

                if (!app.isEmpty(key_fld.value))  {
                    
                    data = enCode(data, key_fld.value).toString()
                }
                
                data = app.shiftEnCode(data)
                data = app.engupt(data)
                data = app.bitEnCrypt(data)
            }

            output_fld.value = data

            console.log(`data encrypted is level ${crypt.value}`)
        }

        /*
            --------------------------------------------------------------------------------
            | decode button onclick decode function argument data & key return decode data |
            --------------------------------------------------------------------------------
        */

        document.getElementById('decode_btn').onclick = () => {

            let data = input_fld.value

            if (crypt.value == 0) {
                
                data = app.decrypt(data)
                
            } else if (crypt.value == 1) {
                
                data = app.degupt(data)
                
            } else if (crypt.value == 2) {
                
                data = app.bitDeCrypt(data)
                
                data = app.shiftDeCode(data)
            
            } else if (crypt.value == 3) {
                
                data = app.degupt(data)
                data = app.shiftDeCode(data)
            
                if (!app.isEmpty(key_fld.value))  {

                    data = deCode(data, key_fld.value).toString()
                }

            } else {
                
                data = app.bitDeCrypt(data)            
                data = app.degupt(data)
                data = app.shiftDeCode(data)
                
                if (!app.isEmpty(key_fld.value))  {

                    data = deCode(data, key_fld.value).toString()
                }
            }
            output_fld.value = data

            console.log(`data decrypted is level${crypt.value}`)
        }
        
        /*
            -------------------------------------
            | all clear button clear all field  |
            -------------------------------------
        */

        document.getElementById('all_clear').onclick = () => {
        
            key_fld.value = ``
            input_fld.value = ``
            output_fld.value = ``
            
            console.log(`_[all clear]`)
        }

        /* 
            --------------------------------------------------------
            | store is give control to store data in local storage |
            --------------------------------------------------------
        */

        document.getElementById('store').onclick = () => {

            // if (confirm('Remove all LocalStorage, if Yes press OK :')) {
            
            //     localStorage.removeItem(prompt('Enter LocalStorage Name :'))

            //     for (let i = 0; i < localStorage.length; i++) {
                    
            //         localStorage.removeItem(localStorage.key(i))
            //     }
            //     return
            // }    
            
            if (app.isEmpty(input_fld.value) && app.isEmpty(output_fld.value) && app.isEmpty(key_fld.value)) {

                if (confirm('Get data by LocalStorage, if Yes press OK :')) {
                                    
                    let data = JSON.parse(localStorage.getItem(prompt('Enter LocalStorage Name :')))

                    key_fld.value = data.key
                    input_fld.value = data.output

                    console.log(data)
                }

            } else {

                if (confirm('Set data in LocalStorage, if Yes press OK :')) {
                                    
                    localStorage.setItem(prompt('Enter LocalStorage Name :'), JSON.stringify({
                        output : output_fld.value,
                        key : key_fld.value
                    }))
                }
            }
            console.log(`(Key AND data) is stored ${localStorage.length}`)
        }
        

        /*
            -----------------------------------------
            | copyData : on triger copy target data |
            -----------------------------------------
        */ 

        function copyData(triger, target) {
            
            triger.onclick = function () {
                
                try
                {
                    this.classList.remove('bi-files')
                    this.classList.add('bi-check')
                
                    target.select()
                    document.execCommand("copy")
    
                    console.log(`\n_[copied] : ${target.id} \n`)
                }
                catch(err)
                {
                    console.log(err.message)
                }
                finally {
    
                    setTimeout(() => {
                        this.classList.remove('bi-check')
                        this.classList.add('bi-files')    
                    }, 2000);

                }
            }
        }
        
        copyData(document.getElementById('key_copy'), crypto_key_fld)
        copyData(document.getElementById('input_copy'), input_fld)
        copyData(document.getElementById('output_copy'), output_fld)
        copyData(copy_password_btn, unique_password_fld)
        
        /*
            ------------------------------------------------------
            | language button onclick if is hindi set innerHTML  |
            ------------------------------------------------------
        */
        
        document.getElementById('lang_btn').onclick = () => {

            let rule = `<li class="text-muted py-3"> Please use the <span class="text-primary"> button </span> to Copy OR Clear OR <b> New Crypto Key</b>  </li>
                        <li class="text-muted py-3"> <b>_input_field_</b> allow users to <span class="text-primary"> Insert Data </span> if they are empty </li>
                        <li class="text-muted py-3"> <b>_output_field_</b> is specifically for <span class="text-primary"> Copy Data </span> OR <span class="text-primary"> Display </span> the outcome </li>
                        <li class="text-muted py-3"> generating <b>new key</b> is not a must, but Key provide <span class="text-primary"> more_secure_data </span> </li>
                        <li class="text-muted py-3"> Key encrypted data is decrypt by <span class="text-primary"> same Key </span> </li>
                        <li class="text-muted py-3"> don't be <span class="text-primary"> loss </span> AND <span class="text-primary"> corrupt </span> Key OR Data </li>
                        <li class="text-muted py-3"> before Key (<b>encrypt</b>ion AND <b>decrypt</b>ion) be Generated AND Inserted <span class="text-primary"> Crypto Key </span> </li>
                        <li class="text-muted py-3"> <b>copy</b> Key OR Data before <span class="text-primary"> all clear </span> </li>
                        <li class="text-muted py-3"> clear All to reuse <b>GUPT</b> </li>`
            
            isHindi = !isHindi

            if (isHindi)
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
            }
            document.getElementById('step').innerHTML = rule.toString()
            
            console.log(`\n language is Hindi : ${isHindi}`)
        }        
    }
    catch (err)
    {
        console.error(err.message)
    }
    document.title = `Mayank & HRitik`
})
/* Developed by Mayank & Hritik | ( https://github.com/MayankDevil/ ) & ( https://github.com/Hritikkumar975/ ) */