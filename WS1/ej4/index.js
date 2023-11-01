window.onload=()=>{
    var input=document.getElementById("input");
    var submit=document.getElementById("submit");
    var lista=document.getElementById("lista");

    submit.addEventListener("click",()=>{
        if(input.value !=""){
            let nuevoLI=document.createElement("li");
            nuevoLI.innerText=input.value;
            lista.appendChild(nuevoLI)
            input.value="";
        }
    })
}
