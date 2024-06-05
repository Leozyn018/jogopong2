let posicaox = 200
let posicaoy = 200
let tamanho = 30
let raio = tamanho/2
let xraquete = -1
let yraquete = 200
let xraqueteoponente = 445
let yraqueteoponente = 200
let larguraraquete = 15
let alturaraquete = 100
let velocidadex = 6
let velocidadey = 6
let velocidadeyraquete;
let largura = 460
let altura = 360
let colidiu = false
let meuspontos = 0
let oponentepontos = 0

function setup() {
  createCanvas(largura, altura);
}

function draw() {
  background(0);
  criabolinha();
  velocidadebolinha();
  tocaborda();
  criaraquete();
  moveraquete();
  colisaoraquete();
  criaraqueteoponente();
  movimentoraqueteoponente();
  colisaoraqueteoponente();   
  criarplacar();
  contapontos();
}

function criabolinha(){circle(posicaox,posicaoy,tamanho)}
function velocidadebolinha(){ posicaox += velocidadex
posicaoy += velocidadey}
function tocaborda(){if(posicaox + raio > largura || posicaox - raio < 0)
  velocidadex *= -1
  if(posicaoy + raio > altura || posicaoy - raio < 0)
  velocidadey *= -1}
  function criaraquete(){rect(xraquete,yraquete,larguraraquete,alturaraquete)}
function moveraquete(){if (keyIsDown(UP_ARROW))
  yraquete -= 10
  if (keyIsDown(DOWN_ARROW))
  yraquete += 10}
function colisaoraquete(){if(posicaox - raio < xraquete + larguraraquete
    && posicaoy - raio < yraquete + alturaraquete
    && posicaoy + raio > yraquete)
   velocidadex *= -1 }

function criaraqueteoponente(){
rect(xraqueteoponente, yraqueteoponente, larguraraquete, alturaraquete)
}
function movimentoraqueteoponente(){
velocidadeyraquete = posicaoy - yraqueteoponente -
larguraraquete / 2 - 106
yraqueteoponente += velocidadeyraquete
}
function colisaoraqueteoponente(){
  colidiu = collideRectCircle(xraqueteoponente, yraqueteoponente, larguraraquete, alturaraquete, posicaox, posicaoy, tamanho)
  if (colidiu)
    velocidadex *= -1
}
function criarplacar(){
  stroke(255)
  fill(color(120, 51,12))
  rect(80, 25, 40, 30)
  rect(330,25,40,30)
  textAlign(CENTER)
  textSize(22)
  fill(255)
  text(meuspontos, 100, 50)
  text(oponentepontos, 350, 50)
}
function contapontos(){
  if(posicaox < 15)
    oponentepontos += 1
  if(posicaox > 440)
    meuspontos += 1

}



