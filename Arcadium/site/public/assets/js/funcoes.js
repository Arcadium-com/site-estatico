let menuAparece = false;

function ExibirMenu(){
    if(!menuAparece){
        document.querySelectorAll(".ItemLista").forEach(element => {
            element.style.display = "flex";
            menuAparece = true;
        })
    }else{
        document.querySelectorAll(".ItemLista").forEach(element => {
            element.style.display = "none";
            menuAparece = false;
        })
    }
}

let desenvolvedores = [
    {
        nome: "Khauane Guilhermino",
        bio: "Estudante de Análise e Desenvolvimento de Sistemas da SPTech School",
    },
    {
        nome: "Vinícius Araújo Costa",
        bio: "Estudante de Análise e Desenvolvimento de Sistemas da SPTech School"
    },
    {
        nome: "Raquel de Oliveira Gomes Silva",
        bio: "Estudante de Análise e Desenvolvimento de Sistemas da SPTech School"
    },
    {
        nome: "Carlos Henrique Bencke",
        bio: "Estudante de Análise e Desenvolvimento de Sistemas da SPTech School"
    },
    {
        nome: "Danielle dos Santos Romano",
        bio: "Estudante de Análise e Desenvolvimento de Sistemas da SPTech School"
    },
    {
        nome: "Kaiky Yuji Kohatsu",
        bio: "Estudante de Análise e Desenvolvimento de Sistemas da SPTech School"
    },
    
]

let painelUsuario = document.querySelector(".PainelUsuario")
function UsuarioToggle(elemento){
    let valor = Number(elemento.getAttribute("value"));
    if(painelUsuario.style.display == "none"){
        painelUsuario.style.display = 'flex';
    }else{
        painelUsuario.style.display = "none";
    }
    document.querySelector("#NomeCompleto").textContent = desenvolvedores[valor].nome;
    document.querySelector("#Biografia").textContent = desenvolvedores[valor].bio;
    document.querySelector("#FotoPerfil").src = `assets/imagens/fotosDev/usuario${valor+1}.jpg`;
}
