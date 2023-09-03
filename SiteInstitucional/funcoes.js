let menuAparece = false;

function ExibirMenu(){
    if(!menuAparece){
        document.querySelectorAll(".ListaItem").forEach(element => {
            element.style.display = "flex";
            menuAparece = true;
        })
    }else{
        document.querySelectorAll(".ListaItem").forEach(element => {
            element.style.display = "none";
            menuAparece = false;
        })
    }
}