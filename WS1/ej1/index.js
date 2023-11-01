window.onload=()=>{
    var enlaces=document.querySelectorAll("a");
    var main=document.querySelector("main");
    var parrafos=document.querySelectorAll("p");
    var h4=document.createElement("h4");
    main.appendChild(h4);

    google=0;
    for(enlace of enlaces){
        if(enlace.href.includes("google")){
            google++;
        }
    }

    enlaces3P=parrafos[2].children;
    
    document.querySelector("h4").innerText=`Numero de enlaces = ${enlaces.length}<br>
    Direccion a la que enlaza el penultimo enlace = ${enlaces[enlaces.length-2]}<br>
    Numero de enlaces que enlazan a google = ${google}<br>
    Numero de enlces del tercer parrafo = ${enlaces3P.length}`;
}
