//selecting options
var convertFromSelect;
var convertToSelect;

function convertFrom(){
    let selectedOption=document.querySelector("#convertFrom").value;
    convertFromSelect=selectedOption;
    console.log(selectedOption)
}

function convertTo(){
    let selectedOption=document.querySelector("#convertTo").value;
    convertToSelect=selectedOption;
    console.log(selectedOption)
}
async function translateText()
{
    let input=document.querySelector("#input").value;
    //we wnat to do a post request
    let data=await fetch("https://libretranslate.de/translate",{
        method:"POST",
        body:JSON.stringify({
            q:input,
            source:convertFromSelect,
            target:convertToSelect,
            format:"text",
        }),
        
        headers:{
           
            "Content-Type":"application/json",
        },
    });
    data=await data.json();
    console.log(data);
    let show_text=document.querySelector("#translated-text");
    show_text.textContent=data.translatedText;

}
