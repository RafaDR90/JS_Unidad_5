window.onload=()=>{

    //inicio la app


    //creo datos
    miListaLibros=new listaLectura();


    //defino eventos
    let esta=document.getElementById('btnAlta').addEventListener('click',altaLibro)
}

function altaLibro(){
    tit=document.getElementById('inputTit').value;
    aut=document.getElementById('inputAut').value;
    agn=document.getElementById('inputAno').value;

    let nuevoLibro= new libro(tit,aut,agn);
    miListaLibros.addLibro(nuevoLibro);

    actualizarVista();
}

function actualizarVista(){
    vistaSimple('misLibros',miListaLibros.listaLibros)
}