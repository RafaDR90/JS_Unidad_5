const imagenes=[
    "bastos_1.jpg",
    "bastos_2.jpg",
    "bastos_3.jpg",
    "bastos_4.jpg",
    "bastos_5.jpg",
    "bastos_6.jpg",
    "bastos_7.jpg",
    "bastos_8.jpg",
    "bastos_9.jpg",
    "bastos_10.jpg",
    "bastos_11.jpg",
    "bastos_12.jpg",
    "copas_1.jpg",
    "copas_2.jpg",
    "copas_3.jpg",
    "copas_4.jpg",
    "copas_5.jpg",
    "copas_6.jpg",
    "copas_7.jpg",
    "copas_8.jpg",
    "copas_9.jpg",
    "copas_10.jpg",
    "copas_11.jpg",
    "copas_12.jpg",
    "espadas_1.jpg",
    "espadas_2.jpg",
    "espadas_3.jpg",
    "espadas_4.jpg",
    "espadas_5.jpg",
    "espadas_6.jpg",
    "espadas_7.jpg",
    "espadas_8.jpg",
    "espadas_9.jpg",
    "espadas_10.jpg",
    "espadas_11.jpg",
    "espadas_12.jpg",
    "oros_1.jpg",
    "oros_2.jpg",
    "oros_3.jpg",
    "oros_4.jpg",
    "oros_5.jpg",
    "oros_6.jpg",
    "oros_7.jpg",
    "oros_8.jpg",
    "oros_9.jpg",
    "oros_10.jpg",
    "oros_11.jpg",
    "oros_12.jpg"
];

contador=0;
next=1;
pre=47

window.onload=()=>{
    const anterior=document.getElementById("anterior");
    const siguiente=document.getElementById("siguiente");
    const imagen=document.querySelector("img");
    
    anterior.value="< "+nombreSinExtension(pre);
    siguiente.value=nombreSinExtension(next)+" >";

    anterior.addEventListener("click",(e)=>{
        contador=restaContador(contador);
        next=restaContador(next);
        pre=restaContador(pre);
        imagen.src="imagenes/"+imagenes[contador];
        anterior.value="< "+nombreSinExtension(pre);
        siguiente.value=nombreSinExtension(next)+" >";
    })

    siguiente.addEventListener("click",()=>{
        contador=sumaContador(contador);
        next=sumaContador(next);
        pre=sumaContador(pre);
        imagen.src="imagenes/"+imagenes[contador];
        anterior.value="< "+nombreSinExtension(pre);
        siguiente.value=nombreSinExtension(next)+" >";
    })
}

function sumaContador(contador){
    if(contador==47){
        return contador=0;
    }
    return contador+=1;
}

function restaContador(contador){
    if(contador==0){
        return 47;
    }
    return contador-1;
}

function nombreSinExtension(num){
    return imagenes[num].split(".")[0];
}