
let webhook = "https://adricia.app.n8n.cloud/webhook/animacao-css";

async function cliqueiNobotao() {
  let textoInput = document.querySelector(".input-animacao").value;
  let codigo = document.querySelector(".area-codigo");
  let areaResultado = document.querySelector(".area-resultado");

  let resposta = await fetch(webhook, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ pergunta: textoInput })
  });

  let resultado = await resposta.json();
  let info = JSON.parse(resultado.resposta);

  console.log(info);

  codigo.innerHTML = info.code;
  areaResultado.innerHTML = info.preview;
  document.head.insertAdjacentHTML("beforeend", "<style>" + info.style + "</style>");
}


document.addEventListener("DOMContentLoaded", () => {
  const bruxa = document.querySelector(".bruxinha-voadora");

  document.querySelector(".botao-magica").addEventListener("click", () => {
  
    bruxa.classList.remove("bruxinha-ativa");

    
    void bruxa.offsetWidth;

    
    bruxa.classList.add("bruxinha-ativa");
  });

 
  bruxa.addEventListener("animationend", () => {
    bruxa.classList.remove("bruxinha-ativa");
  });
});
