function mostrar(){
    document.getElementById("nav").style.display = "block"
    document.getElementById("boton2").style.display = "block"
    document.getElementById("boton").style.display = "none"
}
mostrar()

function ocultar(){
    document.getElementById("nav").style.display = "none"
    document.getElementById("boton2").style.display = "none" 
    document.getElementById("boton").style.display = "block" //asi desaparece el boton cuando oculto
}
ocultar()