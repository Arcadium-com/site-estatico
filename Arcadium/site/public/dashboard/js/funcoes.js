/*var menuList = document.querySelector(".ListaMenu")
var isVisibile = false;

function toggleShow(){
    if(!isVisibile){
        menuList.style.fontSize = "1em";
    }else{
        menuList.style.fontSize = "0"
    }
    isVisibile = !isVisibile
}*/

function criarGraficoSuporte() {
  const disco = {
    html: document.getElementById("disco"),
    titulo: "Uso do disco",
    label: [],
  };
  const memoria = {
    html: document.getElementById("memoria"),
    titulo: "Uso da memória",
    label: [],
  };
  const usb = {
    html: document.getElementById("usb"),
    titulo: "Estado da entrada USB",
    label: [],
  };
  const cpu = {
    html: document.getElementById("cpu"),
    titulo: "Uso do processador",
    label: [],
  };
  const qtdHoras = {
    html: document.getElementById("qtd-horas"),
    titulo: "Quantidade de horas de uso do aparelho",
    label: [],
  };
  const statusTotem = {
    html: document.getElementById("status-totem"),
    titulo: "Status do totem",
    label: [],
  };
  const horariosUso = {
    html: document.getElementById("horarios-uso"),
    titulo: "Horários de maior requisição de recurso",
    label: [],
  };

  const graficos = [
    disco,
    memoria,
    usb,
    cpu,
    qtdHoras,
    statusTotem,
    horariosUso,
  ];

  for (grafico of graficos) {
    new Chart(grafico.html, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: grafico.titulo,
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}


