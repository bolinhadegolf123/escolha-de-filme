let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(500, 500);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
  campoAção = createCheckbox("Gosta de açaõ?")
  campoRomance = createCheckbox("Gosta de romance?")
}

function draw() {
  background("black");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(800, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura, gostaDeRomance, gosaDeAção) {
  if (idade >= 0) { 
    if (idade >= 100) {
      if (idade >= 5)
      return "O pequeno principe";
    } else {
      if (idade >= 20) {
        if(gostaDeAventura) {
          return "Lupin: O Ladrão de Casaca ";          
        } else{
         return "A menina que roubava livros";
        }
      } else {
        if (gostaDeFantasia) {
          return "coroa de sombras";
        } else {
          return "Apenas um Desejo";{   
          }
          if (idade >= 25)
             if(gostaDeAção) {
          return "Lupin: O Ladrão de Casaca ";          
        } else{
         return "A menina que roubava livros";
           } else {    return "Apenas um Desejo";{  
           }
          }
        }
      }
    }
  }
}
