window.onload=()=>{
    const input=document.querySelector("input");
    const submit=document.querySelector("#submit");
    const lista=document.querySelector("ul");
    const borrar=document.querySelector("#borrarTodo");

    submit.addEventListener("click",(e)=>{
        if(input.value!=""){
            const li=document.createElement("li");
            const rojo=document.createElement("button");
            rojo.innerText="RED"
            rojo.className="red"
            const verde=document.createElement("button");
            verde.innerText="GREEN";
            verde.className="green";        //HAY QUE METERLE UN SPAN EN EL TEXTO (no es en esta linea)
            li.innerHTML=input.value;
            li.appendChild(verde);
            li.appendChild(rojo);
            lista.appendChild(li);
            verde.addEventListener("click",(event)=>{
                const liPadre=event.target.parentElement;
                const saveContent=liPadre.cloneNode(true);
                liPadre.innerHTML="<input id='edit' type='text'>";
                const edit=document.querySelector("#edit");
                edit.addEventListener("keydown",(evnt)=>{
                    if(evnt.key=="Enter"){
                        liPadre.innerHTML=edit.value;
                        liPadre.appendChild(verde);
                        liPadre.appendChild(rojo);

                    }else if(evnt.key === "Escape" || evnt.key === "Esc" || evnt.keyCode === 27){
                        liPadre.innerHTML=saveContent.value;
                        liPadre.appendChild(verde);
                        liPadre.appendChild(rojo);
                    }
                })
            });
            rojo.addEventListener("click",()=>{

            })
        }
    });

    



}