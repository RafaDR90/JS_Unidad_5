window.onload=()=>{
    const input=document.querySelector("input");
    const submit=document.querySelector("#submit");
    const lista=document.querySelector("ul");
    const borrar=document.querySelector("#borrarTodo");

    submit.addEventListener("click",(e)=>{
        if(input.value!=""){
            const span=document.createElement("span");
            const li=document.createElement("li");
            const rojo=document.createElement("button");
            rojo.innerText="RED"
            rojo.className="red"
            const verde=document.createElement("button");
            verde.innerText="GREEN";
            verde.className="green";
            span.innerText=input.value; 
            li.appendChild(span);       //HAY QUE METERLE UN SPAN EN EL TEXTO (no es en esta linea)
            li.appendChild(verde);
            li.appendChild(rojo);
            lista.appendChild(li);
            verde.addEventListener("click",(event)=>{
                const liPadre=event.target.parentElement;
                const spanPrevio =event.target.previousElementSibling;
                const saveContent=spanPrevio.textContent;
                liPadre.innerHTML="<input id='edit' type='text'>";
                const edit=document.querySelector("#edit");
                edit.addEventListener("keydown",(evnt)=>{
                    if(evnt.key=="Enter"){
                        span.innerText=edit.value;
                        liPadre.innerText="";
                        liPadre.appendChild(span);
                        liPadre.appendChild(verde);
                        liPadre.appendChild(rojo);

                    }else if(evnt.key === "Escape" || evnt.key === "Esc" || evnt.keyCode === 27){
                        span.innerText=saveContent;
                        liPadre.innerText="";
                        liPadre.appendChild(span);
                        liPadre.appendChild(verde);
                        liPadre.appendChild(rojo);
                    }
                })
            });
            rojo.addEventListener("click",(event)=>{
                const liBorrar=event.target.parentElement;
                const ul=liBorrar.parentElement;
                ul.removeChild(liBorrar);
                
            })
        }
    });

    borrar.addEventListener("click",(e)=>{
        while(lista.firstChild){
            lista.removeChild(lista.firstChild);
        }
    })

    



}