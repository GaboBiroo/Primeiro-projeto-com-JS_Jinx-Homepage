document.addEventListener("DOMContentLoaded", () => {
    // Cria uma nova imagem
    const img = document.createElement("img");
    img.setAttribute("src", "./Images/9v7uuh8f64091.png"); // Caminho da imagem que vai passear
    img.setAttribute("id", "jinx-walker");
    img.style.position = "fixed";
    img.style.width = "200px";
    img.style.pointerEvents = "none"; // garante que o mouse não interaja com a imagem
    img.style.zIndex = "9999";
    img.style.transition = "top 0.4s ease, left 0.4s ease";
    img.style.display = "none";
  
    // Adiciona a imagem ao body
    const body = document.querySelector("body");
    body.appendChild(img);
  
    // Quando o mouse passar por cima do body
    body.addEventListener("mouseover", () => {
      img.style.display = "block";
  
      let count = 0;
      const maxMovimentos = 3;
  
      const mover = () => {
        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 100);
  
        img.style.left = `${x}px`;
        img.style.top = `${y}px`;
  
        count++;
        if (count < maxMovimentos) {
          setTimeout(mover, 1000); // próxima movimentação
        } else {
          setTimeout(() => {
            img.style.display = "none";
          }, 1000);
        }
      };
  
      mover(); // inicia movimento

      // Trailer interativo com evento
const btnTrailer = document.querySelector(".trailer-btn");
btnTrailer.addEventListener("click", () => {
  const paragrafo = document.createElement("p");
  paragrafo.textContent = "Prepare-se para a explosão de cores com Jinx!";
  paragrafo.style.color = "#ff66c4";
  paragrafo.style.marginTop = "10px";
  btnTrailer.parentNode.appendChild(paragrafo);
  setTimeout(() => {
    paragrafo.style.opacity = "0.3";
  }, 4000);
});

// Efeito evitar mouse em CAITLYN
const personagem = document.querySelector(".character-info");
personagem.addEventListener("mouseover", () => {
  personagem.style.transform = "translateX(30px)";
  personagem.style.transition = "0.3s";
});
personagem.addEventListener("mouseleave", () => {
  personagem.style.transform = "translateX(0)";
});

// Criação de bolhas ao mover mouse
const area = document.querySelector(".right-section");
area.addEventListener("mousemove", (e) => {
  const bolha = document.createElement("div");
  bolha.classList.add("bolha");
  bolha.style.left = e.clientX + "px";
  bolha.style.top = e.clientY + "px";
  document.body.appendChild(bolha);
  setTimeout(() => {
    bolha.remove();
  }, 1500);
});

    });
  });
  