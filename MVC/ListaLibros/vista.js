function vistaSimple(idDiv, arrayLibros){
    document.getElementById(idDiv).innerHTML="";
    ul=document.createElement('ul');
    for(libros of arrayLibros){
        li=document.createElement('li');
        li.innerHTML=libros.titulo;
        ul.appendChild(li);
    }

    document.getElementById(idDiv).appendChild(ul);
}

function vistaCompleja(idDiv,arrayLibros){

}