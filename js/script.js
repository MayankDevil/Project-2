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

    document.getElementById('decode_btn').onclick = function()
    {
        // crypto_data = 

        shuffle_key = (letter+number+symbol+space)

        // crypto_key = 
        
        // return_data = 
        
        // console.log(crypto_data+"\t"+crypto_key+"\n\n"+return_data) // this is fucking done
        
        output_fld.innerText = `${deCode(input_fld.value,shuffle(shuffle_key))}`
    }


    
    

    document.title = `Mayank & HRitik`
}
catch(error)
{
    console.error(` ERROR ${ error }`)
}
// the end
