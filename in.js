const biggerbtn=document.querySelector("#bigger-btn")
const smallerbtn=document.querySelector("#smaller-btn")
const input=document.querySelector("#text")
result=document.querySelector("#output")


var inputText=input.value

Incs=12
biggerbtn.addEventListener ("click",function(){
    Incs+=2
    result.innerText=inputText
    result.style.fontSize= `${Incs}px`
} );
smallerbtn.addEventListener ("click", function(){
    Incs-=2
    result.innerText=inputText
    result.style.fontSize= `${Incs}px`
});