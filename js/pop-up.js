
function mostrarPopUp() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("popup").style.display = "block";
}
function ocultarPopUp() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("popup").style.display = "none";
}
setTimeout(mostrarPopUp, 50);
document.getElementById("okButton").addEventListener("click", function () {
    window.location.href = "https://www.2b2t.net.ar/discord";
});
document.getElementById("closeButton").addEventListener("click", ocultarPopUp);
