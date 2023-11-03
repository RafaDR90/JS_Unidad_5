window.onload=()=>{
    const form=document.querySelector("form");
    const subirOtro=document.getElementById("añadirCampo");
    const enviar=document.getElementById("submit")

    subirOtro.addEventListener("click",(e)=>{
        let nuevoInput=document.createElement("input");
        let p=document.createElement("p")
        nuevoInput.type="file";
        p.appendChild(nuevoInput);
        form.insertBefore(p,enviar);
    })
}