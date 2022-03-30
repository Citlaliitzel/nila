
window.onload=function(){
    //document.getElementById("idcontene").addEventListener("click",function(evento){
        //console.log(evento.target.id);
        //documen.getElementById(evento.target.id).classList.toggle("cajaRoja");
    //} );



    //var elem=document.getElementById("idcontene");
    //elem.addEventListener("click", function(evento){
        //console.log(evento.target.id);

        //if(document.getElementById(evento.target.id).classList.contains("caja")){
            //document.getElementById(evento.target.id).classList.toggle("cajaAmarilla")
        //}
    //});



    var elem=document.getElementById("idcontene");
    elem.addEventListener("click",cambiarCaja);
    function cambiarCaja(evento){
        document.getElementById(evento.target.id).classList.toggle("CajaAmarilla");

        if(evento.target.id=="caja9"){
            elem.removeEventListener("click",cambiarCaja);
        }
    }
}