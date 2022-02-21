//Desenho cedido por Zuxal no site: https://opengameart.org/content/animated-walking-pitbull

//O personagem do jogo deve escolher dois valores entre os círculos de cima e de baixo e o resultado deve ser igual ao valor do círculo central. O personagem sempre guarda o valor do último círculo tocado por ele.O jogador deve observar a parte do enunciado que está no rodapé do canvas.


let repet=0;
let segundos=0;
let minutos=0;
let tela=0
let xMenu=30;
let yMenu=15;
let xMenu1=330;
let yMenu1=315;
let xMenu2=530;
let yMenu2=15;
let xMenu3=15
let yMenu3=13
let img;
let largura=170
let altura=50
let largura1=120
let altura1=50
let largura2=145
let altura2=50
let largura3=70
let altura3=30
let x=300
let y=200


imgP = []
let xP=2
let yP=200
let xP1=100
let yP1=100
let xP2=400
let yP2=50
let paltura=200
let plargura=20
let movimentoP=5
let larguraP=40
let alturaP=60
let WidthP=700
let HeightP=550
let questãoP=0
let corretoP=0
let somadorP=0
let somatórioP=0
let erradoP=0
let alfaP=0
let betaP=0


function preload() {
  img = loadImage('taiga.jpg');
  Pan = loadImage('Pantano.jpeg');
  Si = loadImage('Silenciosa.jpg');
  Pi = loadImage('Pinheiros.jpg');
  emili = loadImage('Emiliano.png')
  cri = loadImage('Christian.png');
  sk = loadImage('Skate.png')
  imgP[0]=loadImage('wPitbullsprite (2) (5).png')
  imgP[1]=loadImage('wPitbullsprite (2) (4).png')
  imgP[2]=loadImage('wPitbullsprite (2) (3).png')
  imgP[3]=loadImage('wPitbullsprite (2) (2).png')
  imgP[4]=loadImage('wPitbullsprite (2) (1).png')
 contadorP=0


    
  
  
}


function setup() {
  createCanvas(WidthP,HeightP);
  war = createAudio('warrior.mp3');
  
  /*war.autoplay(true)*/
  
  
}

function draw() {
  
  if(tela==0){
    menu();
  }
  if(tela==1){
    fase1();
  }
  
  if(tela==2){
    questão1();
  }
  if(tela==3){
    questão2();
  }
  
   if(tela==4){
    questão3();
  }
   if(tela==5){
    questão4();
  }
   if(tela==6){
    questão5();
  }
   if(tela==7){
    questão6();
  }
   if(tela==8){
    questão7();
  }
   if(tela==9){
    questão8();
  }
   if(tela==10){
    questão9();
  }
   if(tela==11){
    questão10();
  }
  if(tela==12){
    fase3();
  }
  
}
   



  
//Borda do Canvas
  
/*if(xP<0){
  xP=xP+movimentoP
}
  
if(xP>width-40){
  xP=xP-movimentoP
}
  
  if(yP<0){
  yP=yP+movimentoP
}
  
  if(yP>height-70){
  yP=yP-movimentoP
}*/
  
 
   
// Movimento do Personagem
 
  
 
  
  
  
  
function menu(){
   background(20);
   textSize(30);
   image(img, 0, -80); 
  
   
   if( mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu && mouseY < yMenu + altura ){
    stroke(200)
    fill(20);
    rect(xMenu, yMenu, largura, altura, 15 )
     if(mouseIsPressed){
       tela=1
     }
   }
    if( mouseX > xMenu1 && mouseX < xMenu1 + largura && mouseY > yMenu1 && mouseY < yMenu1 + altura){
     stroke(200)
     fill(20);
     rect(xMenu1, yMenu1, largura1, altura1, 15 )
      if(mouseIsPressed){
        tela=2
      }
    }
    if( mouseX > xMenu2 && mouseX < xMenu2 + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura){
    
     stroke(200)
     fill(20);
     rect(xMenu2, yMenu2, largura2, altura2, 15 )
      if(mouseIsPressed){
        tela=12
      }
    }
    
  
    
   noStroke();
   fill(240)
   text("Iniciar",350 , 350);
   text("Instruções",50, 50);
   text("Créditos",550, 50);
   
   
   
    
  }
function fase1() {
    background(20)
    textSize(20)
    image(Pan,0,0)
    
    
    
  
     if(mouseX > xMenu3 && mouseX < xMenu3 + largura3 && mouseY > yMenu3 && mouseY < yMenu3 + altura3){
       stroke(200)
       fill(20);
       rect(xMenu3,yMenu3, largura3, altura3,15)
        if(mouseIsPressed){
         tela=0
       }
     }
    
    noStroke();
    fill(240)
    text("Voltar", 25, 35)
    
    text("O personagem do jogo deve escolher dois\n valores entre os círculos de cima ou de\n baixo e o resultado deve ser igual\n ao valor do círculo central.\n O personagem sempre guarda o valor\n do último círculo tocado por ele e \nquando o personagem tocar em um círculo\naparecerão 3 asteriscos dentro dele.\nO jogador deve observar a parte do\n enunciado que está no rodapé do gráfico,\n este enunciado indicará a operação matemática\n que está sendo pedida na fase.\nO jogo possuí 10 fases.\n O jogador tem 30 minutos para\n concluir todas as fases. ", 50,70)
    
    
  }

  
 function questão1(){
    background(170,330,50);
    image(imgP[contadorP%5],xP,yP,larguraP,alturaP)
    textSize(20)
    fill(20)
    stroke(120)
    text('1-) Escolha dois valores que combinados em função das\n propriedades matemáticas resulta no valor do círculo central.',85,30)
    text('Sabendo que |-a| > |b|, -a+b=-c',110,515)
    fill(240)
    stroke(120)
    ellipse(370,270,70,70)
    fill(20)
    stroke(120)
    text('-4',370,270)
    fill(240)
    stroke(120)
    ellipse(140,110,70,70)
    fill(20)
    stroke(120)
    text('-10',140,110)
    fill(240)
    stroke(120)
    ellipse(290,110,70,70)
    fill(20)
    stroke(120)
    text('7',290,110)
    fill(240)
    stroke(120)
    ellipse(440,110,70,70)
    fill(20)
    stroke(120)
    text('-5',440,110)
    fill(240)
    stroke(120)
    ellipse(590,110,70,70)
    fill(20)
    stroke(120)
    text('2',590,110)
    fill(240)
    stroke(120)
    ellipse(140,450,70,70)
    fill(20)
    stroke(120)
    text('1',140,450)
    fill(240)
    stroke(120)
    ellipse(290,450,70,70)
    fill(20)
    stroke(120)
    text('-16',290,450)
    fill(240)
    stroke(120)
    ellipse(440,450,70,70)
    fill(20)
    stroke(120)
    text('21',440,450)
    fill(240)
    stroke(120)
    ellipse(590,450,70,70)
    fill(20)
    stroke(120)
    text('-6',590,450)
    

  
if(keyIsDown(LEFT_ARROW)){
      
      xP=xP-movimentoP
   contadorP--
  }
    if(keyIsDown(RIGHT_ARROW)){
      
       xP=xP+movimentoP
    contadorP++
    }
    if(keyIsDown(UP_ARROW)){
      
      yP=yP-movimentoP
    contadorP--
    }
    if(keyIsDown(DOWN_ARROW)){
      
      yP=yP+movimentoP
    contadorP++
    }
    
  
  
  /*if(x-370<80 && 370-x<80 && y-270<60 && 270-y<60) { 
      
      text('hit',370,270)
            }*/
    
    if(xP-120<50 && 120-xP<50 && yP-110<50 && 110-yP<50 ) {
      somadorP=2
      alfaP=1
      text('***',130,95)
          }
    
    if(xP-270<50 && 270-xP<50 && yP-110<50 && 110-yP<50 ) { 
      somadorP=2
      betaP=1
      text('***',280,95)
                                                       
          }
    
    if(xP-420<50 && 420-xP<50 && yP-110<50 && 110-yP<50 ) {
      somadorP=2
      alfaP=1
      text('***',430,95)
          }
    
    if(xP-570<50 && 570-xP<50 && yP-110<50 && 110-yP<50 ) { 
      somadorP=1
      betaP=1
      text('***',580,95)
          }
    
    if(xP-120<50 && 120-xP<50 && yP-450<100 && 450-yP<100 ) {
      somatórioP=2
      alfaP=1
      text('***',130,490)
          }
    
    if(xP-270<50 && 270-xP<50 && yP-450<100 && 450-yP<100 ) {
      somatórioP=2
      betaP=1
      text('***',280,490)
          }
    
    if(xP-420<50 && 420-xP<50 && yP-450<100 && 450-yP<100 ) { 
      somatórioP=2
      alfaP=1
      text('***',430,490)
          }
    
    if(xP-570<50 && 570-xP<50 && yP-450<100 && 450-yP<100 ) {
      somatórioP=1
      betaP=1
      text('***',580,490)
          }
     if(somadorP==1 && somatórioP==1 ){
       
       alert('Parabéns, você acertou!',300,300)
      
       somadorP=0
       somatórioP=0
       alfaP=0
       betaP=0
       tela=3
       xP=30
       yP=200
       }
     if(somadorP==2 && somatórioP==2){
       alert('Não foi dessa vez, tente novamente!')
       somadorP=0
       somatórioP=0
       alfaP=0
       betaP=0
       
       
     }
    
   
     if(alfaP==1 && betaP==1){
       alert('Não foi dessa vez, tente novamente!')
       alfaP=0
       betaP=0
       somadorP=0
       somatórioP=0
       
       
     }
    if(somatórioP==1 && somadorP==2){
       alert('Não foi dessa vez, tente novamente!')
       somadorP=0
       somatórioP=0
       alfaP=0
       betaP=0
      
       
     }
   
    if(somadorP==1 && somatórioP==2){
       alert('Não foi dessa vez, tente novamente!')
       somadorP=0
       somatórioP=0
       alfaP=0
       betaP=0
      
       
     }
    
   if(mouseX > xMenu3 && mouseX < xMenu3 + largura3 && mouseY > yMenu3 && mouseY < yMenu3 + altura3){
       stroke(200)
       fill(20);
       rect(xMenu3,yMenu3, largura3, altura3,15)
        if(mouseIsPressed){
         tela=0
       }
     }
    noStroke();
    fill(240)
    text("Voltar", 25, 35)
   
      repet=repet+1
   segundos=parseInt(repet/30)
   minutos=parseInt(segundos/120)
   textSize(25)
   fill('red')
   text('Min:', 15,60)
   text(minutos,65,60)
   if(minutos==30){
     tela=0
     minutos=0
   }
   
  }
function questão2(){
    background(170,330,50);
    image(imgP[contadorP%5],xP,yP,larguraP,alturaP)
    textSize(20)
    fill(20)
    stroke(120)
    text('2-) Escolha dois valores que combinados em função das\n propriedades matemáticas resulta no valor do círculo central.',85,30)
    text('Sabendo que |-c| > |-a| e |-c| > |-b| , -a-b=-c',110,515)
    fill(240)
    stroke(120)
    ellipse(370,270,70,70)
    fill(20)
    stroke(120)
    text('-17',370,270)
    fill(240)
    stroke(120)
    ellipse(140,110,70,70)
    fill(20)
    stroke(120)
    text('-11',140,110)
    fill(240)
    stroke(120)
    ellipse(290,110,70,70)
    fill(20)
    stroke(120)
    text('7',290,110)
    fill(240)
    stroke(120)
    ellipse(440,110,70,70)
    fill(20)
    stroke(120)
    text('-25',440,110)
    fill(240)
    stroke(120)
    ellipse(590,110,70,70)
    fill(20)
    stroke(120)
    text('8',590,110)
    fill(240)
    stroke(120)
    ellipse(140,450,70,70)
    fill(20)
    stroke(120)
    text('-6',140,450)
    fill(240)
    stroke(120)
    ellipse(290,450,70,70)
    fill(20)
    stroke(120)
    text('-13',290,450)
    fill(240)
    stroke(120)
    ellipse(440,450,70,70)
    fill(20)
    stroke(120)
    text('21',440,450)
    fill(240)
    stroke(120)
    ellipse(590,450,70,70)
    fill(20)
    stroke(120)
    text('-11',590,450)

  
if(keyIsDown(LEFT_ARROW)){
      
      xP=xP-movimentoP
   contadorP--
  }
    if(keyIsDown(RIGHT_ARROW)){
      
       xP=xP+movimentoP
    contadorP++
    }
    if(keyIsDown(UP_ARROW)){
      
      yP=yP-movimentoP
    contadorP--
    }
    if(keyIsDown(DOWN_ARROW)){
      
      yP=yP+movimentoP
    contadorP++
    }
    
  
  
  /*if(x-370<80 && 370-x<80 && y-270<60 && 270-y<60) { 
      
      text('hit',370,270)
            }*/
    
    if(xP-120<50 && 120-xP<50 && yP-110<50 && 110-yP<50 ) {
      somadorP=1
      alfaP=2
      text('***',130,95)
          }
    
    if(xP-270<50 && 270-xP<50 && yP-110<50 && 110-yP<50 ) { 
      somadorP=1
      betaP=2
      text('***',280,95)
                                                       
          }
    
    if(xP-420<50 && 420-xP<50 && yP-110<50 && 110-yP<50 ) {
      somadorP=1
      alfaP=2
      text('***',430,95)
          }
    
    if(xP-570<50 && 570-xP<50 && yP-110<50 && 110-yP<50 ) { 
      somadorP=1
      betaP=2
      text('***',580,95)
          }
    
    if(xP-120<50 && 120-xP<50 && yP-450<100 && 450-yP<100 ) {
      somatórioP=1
      alfaP=1
      text('***',130,490)
          }
    
    if(xP-270<50 && 270-xP<50 && yP-450<100 && 450-yP<100 ) {
      somatórioP=1
      betaP=2
      text('***',280,490)
          }
    
    if(xP-420<50 && 420-xP<50 && yP-450<100 && 450-yP<100 ) { 
      somatórioP=1
      alfaP=2
      text('***',430,490)
          }
    
    if(xP-570<50 && 570-xP<50 && yP-450<100 && 450-yP<100 ) {
      somatórioP=1
      betaP=1
      text('***',580,490)
          }
     if(alfaP==1 && betaP==1 ){
       
       alert('Parabéns, você acertou!',300,300)
      
       alfaP=0
       betaP=0
       somatórioP=0
       somadorP=0
       
       xP=30
       yP=200
       tela=4
       }
     if(alfaP==2 && betaP==2){
       alert('Não foi dessa vez, tente novamente!')
       alfaP=0
       betaP=0
       somatórioP=0
       somadorP=0
       
       
     }
    
   
     if(somadorP==1 && somatórioP==1){
       alert('Não foi dessa vez, tente novamente!')
       somadorP=0
       somatórioP=0
       alfaP=0
       betaP=0
       
       
     }
    if(alfaP==1 && betaP==2){
       alert('Não foi dessa vez, tente novamente!')
       alfaP=0
       betaP=0
       somadorP=0
       somatórioP=0
       
       
     }
    if(alfaP==2 && betaP==1){
       alert('Não foi dessa vez, tente novamente!')
       alfaP=0
       betaP=0
       somadorP=0
       somatórioP=0
       
       
     }
  
  if(mouseX > xMenu3 && mouseX < xMenu3 + largura3 && mouseY > yMenu3 && mouseY < yMenu3 + altura3){
       stroke(200)
       fill(20);
       rect(xMenu3,yMenu3, largura3, altura3,15)
        if(mouseIsPressed){
         tela=2
       }
     }
    noStroke();
    fill(240)
    text("Voltar", 25, 35)
  
      repet=repet+1
   segundos=parseInt(repet/30)
   minutos=parseInt(segundos/120)
   textSize(25)
   fill('red')
   text('Min:', 15,60)
   text(minutos,65,60)
   if(minutos==30){
     tela=0
     minutos=0
   }
  
  } 
  

function questão3(){
    background(170,330,50);
    image(imgP[contadorP%5],xP,yP,larguraP,alturaP)
    textSize(20)
    fill(20)
    stroke(120)
    text('3-) Escolha dois valores que combinados em função das\n propriedades matemáticas resulta no valor do círculo central.',85,30)
    text('Sabendo que a/b + c/b = (a+b)/b e que a/b x 2/2 = 2a/2b ',110,515)
    fill(240)
    stroke(120)
    ellipse(370,270,70,70)
    fill(20)
    stroke(120)
    text('2',370,270)
    fill(240)
    stroke(120)
    ellipse(140,110,70,70)
    fill(20)
    stroke(120)
    text('5/7',140,110)
    fill(240)
    stroke(120)
    ellipse(290,110,70,70)
    fill(20)
    stroke(120)
    text('14/4',280,110)
    fill(240)
    stroke(120)
    ellipse(440,110,70,70)
    fill(20)
    stroke(120)
    text('6/4',440,110)
    fill(240)
    stroke(120)
    ellipse(590,110,70,70)
    fill(20)
    stroke(120)
    text('8/6',590,110)
    fill(240)
    stroke(120)
    ellipse(140,450,70,70)
    fill(20)
    stroke(120)
    text('-10/4',125,450)
    fill(240)
    stroke(120)
    ellipse(290,450,70,70)
    fill(20)
    stroke(120)
    text('15/7',280,450)
    fill(240)
    stroke(120)
    ellipse(440,450,70,70)
    fill(20)
    stroke(120)
    text('2/3',440,450)
    fill(240)
    stroke(120)
    ellipse(590,450,70,70)
    fill(20)
    stroke(120)
    text('-11/15',570,450)

  
if(keyIsDown(LEFT_ARROW)){
      
      xP=xP-movimentoP
   contadorP--
  }
    if(keyIsDown(RIGHT_ARROW)){
      
       xP=xP+movimentoP
    contadorP++
    }
    if(keyIsDown(UP_ARROW)){
      
      yP=yP-movimentoP
    contadorP--
    }
    if(keyIsDown(DOWN_ARROW)){
      
      yP=yP+movimentoP
    contadorP++
    }
    
  
  
  /*if(x-370<80 && 370-x<80 && y-270<60 && 270-y<60) { 
      
      text('hit',370,270)
            }*/
    
    if(xP-120<50 && 120-xP<50 && yP-110<50 && 110-yP<50 ) {
      somadorP=2
      alfaP=1
      text('***',130,95)
          }
    
    if(xP-270<50 && 270-xP<50 && yP-110<50 && 110-yP<50 ) { 
      somadorP=2
      betaP=1
      text('***',280,95)
                                                       
          }
    
    if(xP-420<50 && 420-xP<50 && yP-110<50 && 110-yP<50 ) {
      somadorP=2
      alfaP=1
      text('***',430,95)
          }
    
    if(xP-570<50 && 570-xP<50 && yP-110<50 && 110-yP<50 ) { 
      somadorP=1
      betaP=1
      text('***',580,95)
          }
    
    if(xP-120<50 && 120-xP<50 && yP-450<100 && 450-yP<100 ) {
      somatórioP=2
      alfaP=1
      text('***',130,490)
          }
    
    if(xP-270<50 && 270-xP<50 && yP-450<100 && 450-yP<100 ) {
      somatórioP=2
      betaP=1
      text('***',280,490)
          }
    
    if(xP-420<50 && 420-xP<50 && yP-450<100 && 450-yP<100 ) { 
      somatórioP=1
      alfaP=1
      text('***',430,490)
          }
    
    if(xP-570<50 && 570-xP<50 && yP-450<100 && 450-yP<100 ) {
      somatórioP=2
      betaP=1
      text('***',580,490)
          }
     if(alfaP==1 && betaP==1 ){
       
       alert('Parabéns, você acertou!',300,300)
      
       alfaP=0
       betaP=0
       somatórioP=0
       somadorP=0
       xP=30
       yP=200
       tela=5
       }
     if(alfaP==2 && betaP==2){
       alert('Não foi dessa vez, tente novamente!')
       alfaP=0
       betaP=0
       somatórioP=0
       somadorP=0
       
       
     }
    
   
     if(somadorP==1 && somatórioP==1){
       alert('Não foi dessa vez, tente novamente!')
       somadorP=0
       somatórioP=0
       alfaP=0
       betaP=0
       
       
       
     }
    if(alfaP==1 && betaP==2){
       alert('Não foi dessa vez, tente novamente!')
       alfaP=0
       betaP=0
       somatórioP=0
       somadorP=0
       
       
     }
    if(alfaP==2 && betaP==1){
       alert('Não foi dessa vez, tente novamente!')
       alfaP=0
       betaP=0
       somatórioP=0
       somadorP=0
       
       
     }
  
  if(mouseX > xMenu3 && mouseX < xMenu3 + largura3 && mouseY > yMenu3 && mouseY < yMenu3 + altura3){
       stroke(200)
       fill(20);
       rect(xMenu3,yMenu3, largura3, altura3,15)
        if(mouseIsPressed){
         tela=3
       }
     }
    noStroke();
    fill(240)
    text("Voltar", 25, 35)
  
      repet=repet+1
   segundos=parseInt(repet/30)
   minutos=parseInt(segundos/120)
   textSize(25)
   fill('red')
   text('Min:', 15,60)
   text(minutos,65,60)
   if(minutos==30){
     tela=0
     minutos=0
   }
  
  } 
  
  function questão4(){
    background(170,330,50);
    image(imgP[contadorP%5],xP,yP,larguraP,alturaP)
    textSize(20)
    fill(20)
    stroke(120)
    text('4-) Escolha dois valores que combinados em função das\n propriedades matemáticas resulta no valor do círculo central.',85,30)
    text('Sabendo que a/b + c/d = e/mmc(b,d)',110,515)
    fill(240)
    stroke(120)
    ellipse(370,270,70,70)
    fill(20)
    stroke(120)
    text('15/14',350,270)
    fill(240)
    stroke(120)
    ellipse(140,110,70,70)
    fill(20)
    stroke(120)
    text('-8/7',120,110)
    fill(240)
    stroke(120)
    ellipse(290,110,70,70)
    fill(20)
    stroke(120)
    text('9/13',270,110)
    fill(240)
    stroke(120)
    ellipse(440,110,70,70)
    fill(20)
    stroke(120)
    text('17/12',420,110)
    fill(240)
    stroke(120)
    ellipse(590,110,70,70)
    fill(20)
    stroke(120)
    text('23/2',570,110)
    fill(240)
    stroke(120)
    ellipse(140,450,70,70)
    fill(20)
    stroke(120)
    text('-2/5',120,450)
    fill(240)
    stroke(120)
    ellipse(290,450,70,70)
    fill(20)
    stroke(120)
    text('-18/4',270,450)
    fill(240)
    stroke(120)
    ellipse(440,450,70,70)
    fill(20)
    stroke(120)
    text('19/18',420,450)
    fill(240)
    stroke(120)
    ellipse(590,450,70,70)
    fill(20)
    stroke(120)
    text('-1/9',580,450)

  
if(keyIsDown(LEFT_ARROW)){
      
      xP=xP-movimentoP
   contadorP--
  }
    if(keyIsDown(RIGHT_ARROW)){
      
       xP=xP+movimentoP
    contadorP++
    }
    if(keyIsDown(UP_ARROW)){
      
      yP=yP-movimentoP
    contadorP--
    }
    if(keyIsDown(DOWN_ARROW)){
      
      yP=yP+movimentoP
    contadorP++
    }
    
  
  
  /*if(x-370<80 && 370-x<80 && y-270<60 && 270-y<60) { 
      
      text('hit',370,270)
            }*/
    
    if(xP-120<50 && 120-xP<50 && yP-110<50 && 110-yP<50 ) {
      somadorP=1
      alfaP=1
      text('***',130,95)
          }
    
    if(xP-270<50 && 270-xP<50 && yP-110<50 && 110-yP<50 ) { 
      somadorP=1
      betaP=2
      text('***',280,95)
                                                       
          }
    
    if(xP-420<50 && 420-xP<50 && yP-110<50 && 110-yP<50 ) {
      somadorP=1
      alfaP=2
      text('***',430,95)
          }
    
    if(xP-570<50 && 570-xP<50 && yP-110<50 && 110-yP<50 ) { 
      somadorP=1
      betaP=1
      text('***',580,95)
          }
    
    if(xP-120<50 && 120-xP<50 && yP-450<100 && 450-yP<100 ) {
      somatórioP=1
      alfaP=2
      text('***',130,490)
          }
    
    if(xP-270<50 && 270-xP<50 && yP-450<100 && 450-yP<100 ) {
      somatórioP=1
      betaP=2
      text('***',280,490)
          }
    
    if(xP-420<50 && 420-xP<50 && yP-450<100 && 450-yP<100 ) { 
      somatórioP=1
      alfaP=2
      text('***',430,490)
          }
    
    if(xP-570<50 && 570-xP<50 && yP-450<100 && 450-yP<100 ) {
      somatórioP=1
      betaP=2
      text('***',580,490)
          }
     if(alfaP==1 && betaP==1 ){
       
       alert('Parabéns, você acertou!',300,300)
      
       alfaP=0
       betaP=0
       somatórioP=0
       somadorP=0
       
       xP=30
       yP=200
       tela=6
       }
     if(alfaP==2 && betaP==2){
       alert('Não foi dessa vez, tente novamente!')
       alfaP=0
       betaP=0
       somatórioP=0
       somadorP=0
       
       
     }
    
   
     if(somadorP==1 && somatórioP==1){
       alert('Não foi dessa vez, tente novamente!')
       somadorP=0
       somatórioP=0
       alfaP=0
       betaP=0
       
       
       
     }
    if(alfaP==1 && betaP==2){
       alert('Não foi dessa vez, tente novamente!')
       alfaP=0
       betaP=0
       somatórioP=0
       somadorP=0
       
       
     }
    if(alfaP==2 && betaP==1){
       alert('Não foi dessa vez, tente novamente!')
       alfaP=0
       betaP=0
       somatórioP=0
       somadorP=0
       
       
     }
  
  if(mouseX > xMenu3 && mouseX < xMenu3 + largura3 && mouseY > yMenu3 && mouseY < yMenu3 + altura3){
       stroke(200)
       fill(20);
       rect(xMenu3,yMenu3, largura3, altura3,15)
        if(mouseIsPressed){
         tela=4
       }
     }
    noStroke();
    fill(240)
    text("Voltar", 25, 35)
      
    repet=repet+1
   segundos=parseInt(repet/30)
   minutos=parseInt(segundos/120)
   textSize(25)
   fill('red')
   text('Min:', 15,60)
   text(minutos,65,60)
   if(minutos==30){
     tela=0
     minutos=0
   }
  
  } 
  
  function questão5(){
    background(170,330,50);
    image(imgP[contadorP%5],xP,yP,larguraP,alturaP)
    textSize(20)
    fill(20)
    stroke(120)
    text('5-) Escolha dois valores que combinados em função das\n propriedades matemáticas resulta no valor do círculo central.',85,30)
    text('Sabendo que (2+3.5) = (2+15) = 17 e (2-15/3) = (2-5) = -3\n e que 2/3 x 5/6 = 10/18 e sendo X=2, 3+X => 3+2 = 5',110,510)
    fill(240)
    stroke(120)
    ellipse(370,270,70,70)
    fill(20)
    stroke(120)
    text('-5',370,270)
    fill(240)
    stroke(120)
    ellipse(140,110,80,80)
    fill(20)
    stroke(120)
    text('2/X+2.5',110,110)
    fill(240)
    stroke(120)
    ellipse(290,110,80,80)
    fill(20)
    stroke(120)
    text('5+X/5',270,110)
    fill(240)
    stroke(120)
    ellipse(440,110,80,80)
    fill(20)
    stroke(120)
    text('-X.4+7',410,110)
    fill(240)
    stroke(120)
    ellipse(590,110,80,80)
    fill(20)
    stroke(120)
    text('4/X-6',570,110)
    fill(240)
    stroke(120)
    ellipse(140,450,80,80)
    fill(20)
    stroke(120)
    text('X=7',130,450)
    fill(240)
    stroke(120)
    ellipse(290,450,80,80)
    fill(20)
    stroke(120)
    text('X=3',280,450)
    fill(240)
    stroke(120)
    ellipse(440,450,80,80)
    fill(20)
    stroke(120)
    text('X=23',430,450)
    fill(240)
    stroke(120)
    ellipse(590,450,80,80)
    fill(20)
    stroke(120)
    text('X=-14',570,450)

  
if(keyIsDown(LEFT_ARROW)){
      
      xP=xP-movimentoP
   contadorP--
  }
    if(keyIsDown(RIGHT_ARROW)){
      
       xP=xP+movimentoP
    contadorP++
    }
    if(keyIsDown(UP_ARROW)){
      
      yP=yP-movimentoP
    contadorP--
    }
    if(keyIsDown(DOWN_ARROW)){
      
      yP=yP+movimentoP
    contadorP++
    }
    
  
  
  /*if(x-370<80 && 370-x<80 && y-270<60 && 270-y<60) { 
      
      text('hit',370,270)
            }*/
    
    if(xP-120<50 && 120-xP<50 && yP-110<50 && 110-yP<50 ) {
      somadorP=2
      alfaP=1
      text('***',130,95)
          }
    
    if(xP-270<50 && 270-xP<50 && yP-110<50 && 110-yP<50 ) { 
      somadorP=2
      betaP=1
      text('***',280,95)
                                                       
          }
    
    if(xP-420<50 && 420-xP<50 && yP-110<50 && 110-yP<50 ) {
      somadorP=1
      alfaP=1
      text('***',430,95)
          }
    
    if(xP-570<50 && 570-xP<50 && yP-110<50 && 110-yP<50 ) { 
      somadorP=2
      betaP=1
      text('***',580,95)
          }
    
    if(xP-120<50 && 120-xP<50 && yP-450<100 && 450-yP<100 ) {
      somatórioP=2
      alfaP=1
      text('***',130,490)
          }
    
    if(xP-270<50 && 270-xP<50 && yP-450<100 && 450-yP<100 ) {
      somatórioP=1
      betaP=1
      text('***',280,490)
          }
    
    if(xP-420<50 && 420-xP<50 && yP-450<100 && 450-yP<100 ) { 
      somatórioP=2
      alfaP=1
      text('***',430,490)
          }
    
    if(xP-570<50 && 570-xP<50 && yP-450<100 && 450-yP<100 ) {
      somatórioP=2
      betaP=1
      text('***',580,490)
          }
     if(somadorP==1 && somatórioP==1 ){
       
       alert('Parabéns, você acertou!',300,300)
      
       alfaP=0
       betaP=0
       somatórioP=0
       somadorP=0
       
       xP=30
       yP=200
       tela=7
       }
     if(somadorP==2 && somatórioP==2){
       alert('Não foi dessa vez, tente novamente!')
       alfaP=0
       betaP=0
       somatórioP=0
       somadorP=0
       
       
     }
    
   
     if(alfaP==1 && betaP==1){
       alert('Não foi dessa vez, tente novamente!')
       somadorP=0
       somatórioP=0
       alfaP=0
       betaP=0
       
       
       
     }
    if(somatórioP==1 && somadorP==2){
       alert('Não foi dessa vez, tente novamente!')
       alfaP=0
       betaP=0
       somatórioP=0
       somadorP=0
       
       
     }
    if(somadorP==1 && somatórioP==2){
       alert('Não foi dessa vez, tente novamente!')
       alfaP=0
       betaP=0
       somatórioP=0
       somadorP=0
       
       
     }
  
  if(mouseX > xMenu3 && mouseX < xMenu3 + largura3 && mouseY > yMenu3 && mouseY < yMenu3 + altura3){
       stroke(200)
       fill(20);
       rect(xMenu3,yMenu3, largura3, altura3,15)
        if(mouseIsPressed){
         tela=5
       }
     }
    noStroke();
    fill(240)
    text("Voltar", 25, 35)
    
      repet=repet+1
   segundos=parseInt(repet/30)
   minutos=parseInt(segundos/120)
   textSize(25)
   fill('red')
   text('Min:', 15,60)
   text(minutos,65,60)
   if(minutos==30){
     tela=0
     minutos=0
   }
  
  } 
  
  
  function questão6(){
    background(170,330,50);
    image(imgP[contadorP%5],xP,yP,larguraP,alturaP)
    textSize(20)
    fill(20)
    stroke(120)
    text('6-) Escolha dois valores que combinados em função das\n propriedades matemáticas resulta no valor do círculo central.',85,30)
    text('Sabendo que 10² x [20 / (2 + 2) – 4] = 100 x [20 / 4-4] = 100 x [5-4] = 100',40,510)
    fill(240)
    stroke(120)
    ellipse(370,270,70,70)
    fill(20)
    stroke(120)
    text('5',370,270)
    fill(240)
    stroke(120)
    ellipse(140,110,80,80)
    fill(20)
    stroke(120)
    text('[20/X-4]',110,110)
    fill(240)
    stroke(120)
    ellipse(290,110,80,80)
    fill(20)
    stroke(120)
    text('3.X-4',280,110)
    fill(240)
    stroke(120)
    ellipse(440,110,80,80)
    fill(20)
    stroke(120)
    text('2.X+14',410,110)
    fill(240)
    stroke(120)
    ellipse(590,110,80,80)
    fill(20)
    stroke(120)
    text('30/X-10',555,110)
    fill(240)
    stroke(120)
    ellipse(140,450,80,80)
    fill(20)
    stroke(120)
    text('X=(3+4)',105,450)
    fill(240)
    stroke(120)
    ellipse(290,450,80,80)
    fill(20)
    stroke(120)
    text('X=(2+3)',255,450)
    fill(240)
    stroke(120)
    ellipse(440,450,80,80)
    fill(20)
    stroke(120)
    text('X=(10-2)',405,450)
    fill(240)
    stroke(120)
    ellipse(590,450,80,80)
    fill(20)
    stroke(120)
    text('X=(2/5).5',555,450)

  
if(keyIsDown(LEFT_ARROW)){
      
      xP=xP-movimentoP
   contadorP--
  }
    if(keyIsDown(RIGHT_ARROW)){
      
       xP=xP+movimentoP
    contadorP++
    }
    if(keyIsDown(UP_ARROW)){
      
      yP=yP-movimentoP
    contadorP--
    }
    if(keyIsDown(DOWN_ARROW)){
      
      yP=yP+movimentoP
    contadorP++
    }
    
  
  
  /*if(x-370<80 && 370-x<80 && y-270<60 && 270-y<60) { 
      
      text('hit',370,270)
            }*/
    
    if(xP-120<50 && 120-xP<50 && yP-110<50 && 110-yP<50 ) {
      somadorP=2
      alfaP=1
      text('***',130,95)
          }
    
    if(xP-270<50 && 270-xP<50 && yP-110<50 && 110-yP<50 ) { 
      somadorP=2
      betaP=1
      text('***',280,95)
                                                       
          }
    
    if(xP-420<50 && 420-xP<50 && yP-110<50 && 110-yP<50 ) {
      somadorP=2
      alfaP=1
      text('***',430,95)
          }
    
    if(xP-570<50 && 570-xP<50 && yP-110<50 && 110-yP<50 ) { 
      somadorP=1
      betaP=1
      text('***',580,95)
          }
    
    if(xP-120<50 && 120-xP<50 && yP-450<100 && 450-yP<100 ) {
      somatórioP=2
      alfaP=1
      text('***',130,490)
          }
    
    if(xP-270<50 && 270-xP<50 && yP-450<100 && 450-yP<100 ) {
      somatórioP=2
      betaP=1
      text('***',280,490)
          }
    
    if(xP-420<50 && 420-xP<50 && yP-450<100 && 450-yP<100 ) { 
      somatórioP=2
      alfaP=1
      text('***',430,490)
          }
    
    if(xP-570<50 && 570-xP<50 && yP-450<100 && 450-yP<100 ) {
      somatórioP=1
      betaP=1
      text('***',580,490)
          }
     if(somadorP==1 && somatórioP==1 ){
       
       alert('Parabéns, você acertou!',300,300)
      
       alfaP=0
       betaP=0
       somatórioP=0
       somadorP=0
       
       xP=30
       yP=200
       tela=8
       }
     if(somadorP==2 && somatórioP==2){
       alert('Não foi dessa vez, tente novamente!')
       alfaP=0
       betaP=0
       somatórioP=0
       somadorP=0
       
       
     }
    
   
     if(alfaP==1 && betaP==1){
       alert('Não foi dessa vez, tente novamente!')
       somadorP=0
       somatórioP=0
       alfaP=0
       betaP=0

       
       
     }
    if(somatórioP==1 && somadorP==2){
       alert('Não foi dessa vez, tente novamente!')
       alfaP=0
       betaP=0
       somatórioP=0
       somadorP=0
       
       
     }
    if(somadorP==1 && somatórioP==2){
       alert('Não foi dessa vez, tente novamente!')
       alfaP=0
       betaP=0
       somatórioP=0
       somadorP=0
       
       
     }
  
  if(mouseX > xMenu3 && mouseX < xMenu3 + largura3 && mouseY > yMenu3 && mouseY < yMenu3 + altura3){
       stroke(200)
       fill(20);
       rect(xMenu3,yMenu3, largura3, altura3,15)
        if(mouseIsPressed){
         tela=6
       }
     }
    noStroke();
    fill(240)
    text("Voltar", 25, 35)
    
       repet=repet+1
   segundos=parseInt(repet/30)
   minutos=parseInt(segundos/120)
   textSize(25)
   fill('red')
   text('Min:', 15,60)
   text(minutos,65,60)
   if(minutos==30){
     tela=0
     minutos=0
   }
  
  } 
  
  
  function questão7(){
    background(170,330,50);
    image(imgP[contadorP%5],xP,yP,larguraP,alturaP)
    textSize(20)
    fill(20)
    stroke(120)
    text('7-) Escolha dois valores que combinados em função das\n propriedades matemáticas resulta no valor do círculo central.',85,30)
    text('Sabendo que  [(10²) / 4 . (2-5)] = [100/4 . -3] =  (25 . -3) = -75',110,515)
    fill(240)
    stroke(120)
    ellipse(370,270,70,70)
    fill(20)
    stroke(120)
    text('100',360,270)
    fill(240)
    stroke(120)
    ellipse(140,110,80,80)
    fill(20)
    stroke(120)
    text('(2.5+X)',105,110)
    fill(240)
    stroke(120)
    ellipse(290,110,80,80)
    fill(20)
    stroke(120)
    text('10.3²-X',260,110)
    fill(240)
    stroke(120)
    ellipse(440,110,80,80)
    fill(20)
    stroke(120)
    text('-2.5/X',420,110)
    fill(240)
    stroke(120)
    ellipse(590,110,80,80)
    fill(20)
    stroke(120)
    text('8+3.X',570,110)
    fill(240)
    stroke(120)
    ellipse(140,450,80,80)
    fill(20)
    stroke(120)
    text('X=3²-5',115,450)
    fill(240)
    stroke(120)
    ellipse(290,450,80,80)
    fill(20)
    stroke(120)
    text('X=2²+2',260,450)
    fill(240)
    stroke(120)
    ellipse(440,450,80,80)
    fill(20)
    stroke(120)
    text('X=4²/2',420,450)
    fill(240)
    stroke(120)
    ellipse(590,450,85,85)
    fill(20)
    stroke(120)
    text('X=20-2.4²',550,450)

  
if(keyIsDown(LEFT_ARROW)){
      
      xP=xP-movimentoP
   contadorP--
  }
    if(keyIsDown(RIGHT_ARROW)){
      
       xP=xP+movimentoP
    contadorP++
    }
    if(keyIsDown(UP_ARROW)){
      
      yP=yP-movimentoP
    contadorP--
    }
    if(keyIsDown(DOWN_ARROW)){
      
      yP=yP+movimentoP
    contadorP++
    }
    
  
  
  /*if(x-370<80 && 370-x<80 && y-270<60 && 270-y<60) { 
      
      text('hit',370,270)
            }*/
    
    if(xP-120<50 && 120-xP<50 && yP-110<50 && 110-yP<50 ) {
      somadorP=2
      alfaP=1
      text('***',130,95)
          }
    
    if(xP-270<50 && 270-xP<50 && yP-110<50 && 110-yP<50 ) { 
      somadorP=1
      betaP=1
      text('***',280,95)
                                                       
          }
    
    if(xP-420<50 && 420-xP<50 && yP-110<50 && 110-yP<50 ) {
      somadorP=2
      alfaP=1
      text('***',430,95)
          }
    
    if(xP-570<50 && 570-xP<50 && yP-110<50 && 110-yP<50 ) { 
      somadorP=2
      betaP=1
      text('***',580,95)
          }
    
    if(xP-120<50 && 120-xP<50 && yP-450<100 && 450-yP<100 ) {
      somatórioP=2
      alfaP=1
      text('***',130,490)
          }
    
    if(xP-270<50 && 270-xP<50 && yP-450<100 && 450-yP<100 ) {
      somatórioP=2
      betaP=1
      text('***',280,490)
          }
    
    if(xP-420<50 && 420-xP<50 && yP-450<100 && 450-yP<100 ) { 
      somatórioP=2
      alfaP=1
      text('***',430,490)
          }
    
    if(xP-570<50 && 570-xP<50 && yP-450<100 && 450-yP<100 ) {
      somatórioP=1
      betaP=1
      text('***',580,490)
          }
     if(somadorP==1 && somatórioP==1 ){
       
       alert('Parabéns, você acertou!',300,300)
      
       alfaP=0
       betaP=0
       somatórioP=0
       somadorP=0
       
       xP=30
       yP=200
       tela=9
       }
     if(somadorP==2 && somatórioP==2){
       alert('Não foi dessa vez, tente novamente!')
       alfaP=0
       betaP=0
       somatórioP=0
       somadorP=0
       
       
     }
    
   
     if(alfaP==1 && betaP==1){
       alert('Não foi dessa vez, tente novamente!')
       somadorP=0
       somatórioP=0
       alfaP=0
       betaP=0
       
       
       
     }
    if(somatórioP==1 && somadorP==2){
       alert('Não foi dessa vez, tente novamente!')
       alfaP=0
       betaP=0
       somatórioP=0
       somadorP=0
       
       
     }
    if(somadorP==1 && somatórioP==2){
       alert('Não foi dessa vez, tente novamente!')
       alfaP=0
       betaP=0
       somatórioP=0
       somadorP=0
       
       
     }
  
  if(mouseX > xMenu3 && mouseX < xMenu3 + largura3 && mouseY > yMenu3 && mouseY < yMenu3 + altura3){
       stroke(200)
       fill(20);
       rect(xMenu3,yMenu3, largura3, altura3,15)
        if(mouseIsPressed){
         tela=7
       }
     }
    noStroke();
    fill(240)
    text("Voltar", 25, 35)
    
      repet=repet+1
   segundos=parseInt(repet/30)
   minutos=parseInt(segundos/120)
   textSize(25)
   fill('red')
   text('Min:', 15,60)
   text(minutos,65,60)
   if(minutos==30){
     tela=0
     minutos=0
   }
  
  } 
  
 function questão8(){
    background(170,330,50);
    image(imgP[contadorP%5],xP,yP,larguraP,alturaP)
    textSize(20)
    fill(20)
    stroke(120)
    text('8-) Escolha dois valores que combinados em função das\n propriedades matemáticas resulta no valor do círculo central.',85,30)
    text('Sabendo que ax+by+cx+dy= (a+c)x+(b+d)y e que -(a+b) = (-a-b)',90,520)
    fill(240)
    stroke(120)
    ellipse(370,270,80,80)
    fill(20)
    stroke(120)
    text('-19x-7y',340,270)
    fill(240)
    stroke(120)
    ellipse(140,110,90,90)
    fill(20)
    stroke(120)
    text('3x+4y-Z',110,110)
    fill(240)
    stroke(120)
    ellipse(290,110,90,90)
    fill(20)
    stroke(120)
    text('24x+34y+Z',240,110)
    fill(240)
    stroke(120)
    ellipse(440,110,90,90)
    fill(20)
    stroke(120)
    text('12x+8y+Z',390,110)
    fill(240)
    stroke(120)
    ellipse(590,110,90,90)
    fill(20)
    stroke(120)
    text('4x+5y-Z',560,110)
    fill(240)
    stroke(120)
    ellipse(140,450,90,90)
    fill(20)
    stroke(120)
    text('Z=23x+12y',90,450)
    fill(240)
    stroke(120)
    ellipse(290,450,90,90)
    fill(20)
    stroke(120)
    text('Z=14x+9y',250,450)
    fill(240)
    stroke(120)
    ellipse(440,450,90,90)
    fill(20)
    stroke(120)
    text('Z=5x+7y',400,450)
    fill(240)
    stroke(120)
    ellipse(590,450,90,90)
    fill(20)
    stroke(120)
    text('Z=18x+14y',540,450)

  
if(keyIsDown(LEFT_ARROW)){
      
      xP=xP-movimentoP
   contadorP--
  }
    if(keyIsDown(RIGHT_ARROW)){
      
       xP=xP+movimentoP
    contadorP++
    }
    if(keyIsDown(UP_ARROW)){
      
      yP=yP-movimentoP
    contadorP--
    }
    if(keyIsDown(DOWN_ARROW)){
      
      yP=yP+movimentoP
    contadorP++
    }
    
  
  
  /*if(x-370<80 && 370-x<80 && y-270<60 && 270-y<60) { 
      
      text('hit',370,270)
            }*/
    
    if(xP-120<50 && 120-xP<50 && yP-110<50 && 110-yP<50 ) {
      somadorP=2
      alfaP=1
      text('***',130,95)
          }
    
    if(xP-270<50 && 270-xP<50 && yP-110<50 && 110-yP<50 ) { 
      somadorP=2
      betaP=1
      text('***',280,95)
                                                       
          }
    
    if(xP-420<50 && 420-xP<50 && yP-110<50 && 110-yP<50 ) {
      somadorP=2
      alfaP=1
      text('***',430,95)
          }
    
    if(xP-570<50 && 570-xP<50 && yP-110<50 && 110-yP<50 ) { 
      somadorP=1
      betaP=1
      text('***',580,95)
          }
    
    if(xP-120<50 && 120-xP<50 && yP-450<100 && 450-yP<100 ) {
      somatórioP=1
      alfaP=1
      text('***',130,490)
          }
    
    if(xP-270<50 && 270-xP<50 && yP-450<100 && 450-yP<100 ) {
      somatórioP=2
      betaP=1
      text('***',280,490)
          }
    
    if(xP-420<50 && 420-xP<50 && yP-450<100 && 450-yP<100 ) { 
      somatórioP=2
      alfaP=1
      text('***',430,490)
          }
    
    if(xP-570<50 && 570-xP<50 && yP-450<100 && 450-yP<100 ) {
      somatórioP=2
      betaP=1
      text('***',580,490)
          }
     if(somadorP==1 && somatórioP==1 ){
       
       alert('Parabéns, você acertou!',300,300)
       somadorP=0
       somatórioP=0
       alfaP=0
       betaP=0
       xP=30
       yP=200
       tela=10
       }
     if(somadorP==2 && somatórioP==2){
       alert('Não foi dessa vez, tente novamente!')
       alfaP=0
       betaP=0
       somatórioP=0
       somadorP=0
       
       
     }
    
   
     if(alfaP==1 && betaP==1){
       alert('Não foi dessa vez, tente novamente!')
       somadorP=0
       somatórioP=0
       alfaP=0
       betaP=0
      
       
       
     }
    if(somatórioP==1 && somadorP==2){
       alert('Não foi dessa vez, tente novamente!')
       alfaP=0
       betaP=0
       somatórioP=0
       somadorP=0
       
       
     }
    if(somadorP==1 && somatórioP==2){
       alert('Não foi dessa vez, tente novamente!')
       alfaP=0
       betaP=0
       somatórioP=0
       somadorP=0
       
       
     }
  
  if(mouseX > xMenu3 && mouseX < xMenu3 + largura3 && mouseY > yMenu3 && mouseY < yMenu3 + altura3){
       stroke(200)
       fill(20);
       rect(xMenu3,yMenu3, largura3, altura3,15)
        if(mouseIsPressed){
         tela=8
       }
     }
    noStroke();
    fill(240)
    text("Voltar", 25, 35)
   
      repet=repet+1
   segundos=parseInt(repet/30)
   minutos=parseInt(segundos/120)
   textSize(25)
   fill('red')
   text('Min:', 15,60)
   text(minutos,65,60)
   if(minutos==30){
     tela=0
     minutos=0
   }
  
  }  
  
 function questão9(){
    background(170,330,50);
    image(imgP[contadorP%5],xP,yP,larguraP,alturaP)
    textSize(20)
    fill(20)
    stroke(120)
    text('9-) Escolha dois valores que combinados em função das\n propriedades matemáticas resulta no valor do círculo central.',85,30)
    text('Sabendo que x²+x²=2x² e que x².x²=x⁴, também que x⁴/x= x³',100,520)
    fill(240)
    stroke(120)
    ellipse(370,270,70,70)
    fill(20)
    stroke(120)
    text('x²',370,270)
    fill(240)
    stroke(120)
    ellipse(140,110,80,80)
    fill(20)
    stroke(120)
    text('x+x²+Z',110,110)
    fill(240)
    stroke(120)
    ellipse(290,110,80,80)
    fill(20)
    stroke(120)
    text('x.x²+Z',270,110)
    fill(240)
    stroke(120)
    ellipse(440,110,80,80)
    fill(20)
    stroke(120)
    text('x.x²-Z',420,110)
    fill(240)
    stroke(120)
    ellipse(590,110,80,80)
    fill(20)
    stroke(120)
    text('x⁴-3x⁴/Z',560,110)
    fill(240)
    stroke(120)
    ellipse(140,450,80,80)
    fill(20)
    stroke(120)
    text('Z=x+x²',110,450)
    fill(240)
    stroke(120)
    ellipse(290,450,80,80)
    fill(20)
    stroke(120)
    text('Z=x²/x',260,450)
    fill(240)
    stroke(120)
    ellipse(440,450,80,80)
    fill(20)
    stroke(120)
    text('Z=x³-x²',410,450)
    fill(240)
    stroke(120)
    ellipse(590,450,80,80)
    fill(20)
    stroke(120)
    text('Z=x³.x²',560,450)

  
if(keyIsDown(LEFT_ARROW)){
      
      xP=xP-movimentoP
   contadorP--
  }
    if(keyIsDown(RIGHT_ARROW)){
      
       xP=xP+movimentoP
    contadorP++
    }
    if(keyIsDown(UP_ARROW)){
      
      yP=yP-movimentoP
    contadorP--
    }
    if(keyIsDown(DOWN_ARROW)){
      
      yP=yP+movimentoP
    contadorP++
    }
    
  
  
  /*if(x-370<80 && 370-x<80 && y-270<60 && 270-y<60) { 
      
      text('hit',370,270)
            }*/
    
    if(xP-120<50 && 120-xP<50 && yP-110<50 && 110-yP<50 ) {
      somadorP=2
      alfaP=1
      text('***',130,95)
          }
    
    if(xP-270<50 && 270-xP<50 && yP-110<50 && 110-yP<50 ) { 
      somadorP=2
      betaP=1
      text('***',280,95)
                                                       
          }
    
    if(xP-420<50 && 420-xP<50 && yP-110<50 && 110-yP<50 ) {
      somadorP=1
      alfaP=1
      text('***',430,95)
          }
    
    if(xP-570<50 && 570-xP<50 && yP-110<50 && 110-yP<50 ) { 
      somadorP=2
      betaP=1
      text('***',580,95)
          }
    
    if(xP-120<50 && 120-xP<50 && yP-450<100 && 450-yP<100 ) {
      somatórioP=2
      alfaP=1
      text('***',130,490)
          }
    
    if(xP-270<50 && 270-xP<50 && yP-450<100 && 450-yP<100 ) {
      somatórioP=2
      betaP=1
      text('***',280,490)
          }
    
    if(xP-420<50 && 420-xP<50 && yP-450<100 && 450-yP<100 ) { 
      somatórioP=1
      alfaP=1
      text('***',430,490)
          }
    
    if(xP-570<50 && 570-xP<50 && yP-450<100 && 450-yP<100 ) {
      somatórioP=2
      betaP=1
      text('***',580,490)
          }
     if(somadorP==1 && somatórioP==1 ){
       
       alert('Parabéns, você acertou!',300,300)
      
       alfaP=0
       betaP=0
       somatórioP=0
       somadorP=0
       xP=30
       yP=200
       tela=11
       }
     if(somadorP==2 && somatórioP==2){
       alert('Não foi dessa vez, tente novamente!')
       alfaP=0
       betaP=0
       somatórioP=0
       somadorP=0
       
       
     }
    
   
     if(alfaP==1 && betaP==1){
       alert('Não foi dessa vez, tente novamente!')
       somadorP=0
       somatórioP=0
       alfaP=0
       betaP=0
       
       
       
     }
    if(somatórioP==1 && somadorP==2){
       alert('Não foi dessa vez, tente novamente!')
       alfaP=0
       betaP=0
       somatórioP=0
       somadorP=0
       
       
     }
    if(somadorP==1 && somatórioP==2){
       alert('Não foi dessa vez, tente novamente!')
       alfaP=0
       betaP=0
       somatórioP=0
       somadorP=0
       
       
     }
  
  if(mouseX > xMenu3 && mouseX < xMenu3 + largura3 && mouseY > yMenu3 && mouseY < yMenu3 + altura3){
       stroke(200)
       fill(20);
       rect(xMenu3,yMenu3, largura3, altura3,15)
        if(mouseIsPressed){
         tela=9
       }
     }
    noStroke();
    fill(240)
    text("Voltar", 25, 35)
   
      repet=repet+1
   segundos=parseInt(repet/30)
   minutos=parseInt(segundos/120)
   textSize(25)
   fill('red')
   text('Min:', 15,60)
   text(minutos,65,60)
   if(minutos==30){
     tela=0
     minutos=0
   }
  
  }  
  
  function questão10(){
    background(170,330,50);
    image(imgP[contadorP%5],xP,yP,larguraP,alturaP)
    textSize(20)
    fill(20)
    stroke(120)
    text('10-) Escolha dois valores que combinados em função das\n propriedades matemáticas resulta no valor do círculo central.',85,30)
    text('Sabendo que √x+√x=2√x e que √x.√x= √x² = x como também  √2x/√x= √2',35,520)
    fill(240)
    stroke(120)
    ellipse(370,270,70,70)
    fill(20)
    stroke(120)
    text('√x³',370,270)
    fill(240)
    stroke(120)
    ellipse(140,110,90,90)
    fill(20)
    stroke(120)
    text('3√x+5Z',110,110)
    fill(240)
    stroke(120)
    ellipse(290,110,85,85)
    fill(20)
    stroke(120)
    text('√x.√x²+Z',250,110)
    fill(240)
    stroke(120)
    ellipse(440,110,90,90)
    fill(20)
    stroke(120)
    text('√x³/√x+Z',400,110)
    fill(240)
    stroke(120)
    ellipse(590,110,90,90)
    fill(20)
    stroke(120)
    text('√x+Z.√x²',560,110)
    fill(240)
    stroke(120)
    ellipse(140,450,90,90)
    fill(20)
    stroke(120)
    text('Z=√x²-√x',100,450)
    fill(240)
    stroke(120)
    ellipse(290,450,90,90)
    fill(20)
    stroke(120)
    text('Z=√8x/√4x',240,450)
    fill(240)
    stroke(120)
    ellipse(440,450,90,90)
    fill(20)
    stroke(120)
    text('Z=√x².√x²',400,450)
    fill(240)
    stroke(120)
    ellipse(590,450,90,90)
    fill(20)
    stroke(120)
    text('Z=√x/√x',560,450)

  
if(keyIsDown(LEFT_ARROW)){
      
      xP=xP-movimentoP
   contadorP--
  }
    if(keyIsDown(RIGHT_ARROW)){
      
       xP=xP+movimentoP
    contadorP++
    }
    if(keyIsDown(UP_ARROW)){
      
      yP=yP-movimentoP
    contadorP--
    }
    if(keyIsDown(DOWN_ARROW)){
      
      yP=yP+movimentoP
    contadorP++
    }
    
  
  
  /*if(x-370<80 && 370-x<80 && y-270<60 && 270-y<60) { 
      
      text('hit',370,270)
            }*/
    
    if(xP-120<50 && 120-xP<50 && yP-110<50 && 110-yP<50 ) {
      somadorP=2
      alfaP=1
      text('***',130,95)
          }
    
    if(xP-270<50 && 270-xP<50 && yP-110<50 && 110-yP<50 ) { 
      somadorP=1
      betaP=1
      text('***',280,95)
                                                       
          }
    
    if(xP-420<50 && 420-xP<50 && yP-110<50 && 110-yP<50 ) {
      somadorP=2
      alfaP=1
      text('***',430,95)
          }
    
    if(xP-570<50 && 570-xP<50 && yP-110<50 && 110-yP<50 ) { 
      somadorP=2
      betaP=1
      text('***',580,95)
          }
    
    if(xP-120<50 && 120-xP<50 && yP-450<100 && 450-yP<100 ) {
      somatórioP=2
      alfaP=1
      text('***',130,490)
          }
    
    if(xP-270<50 && 270-xP<50 && yP-450<100 && 450-yP<100 ) {
      somatórioP=2
      betaP=1
      text('***',280,490)
          }
    
    if(xP-420<50 && 420-xP<50 && yP-450<100 && 450-yP<100 ) { 
      somatórioP=2
      alfaP=1
      text('***',430,490)
          }
    
    if(xP-570<50 && 570-xP<50 && yP-450<100 && 450-yP<100 ) {
      somatórioP=1
      betaP=1
      text('***',580,490)
          }
     if(somadorP==1 && somatórioP==1 ){
       
       alert('Parabéns, você acertou!',300,300)
      
       alfaP=0
       betaP=0
       somatórioP=0
       somadorP=0
       tela=0
       xP=30
       yP=200
       tela=0
       }
     if(somadorP==2 && somatórioP==2){
       alert('Não foi dessa vez, tente novamente!')
       alfaP=0
       betaP=0
       somatórioP=0
       somadorP=0
       
       
     }
    
   
     if(alfaP==1 && betaP==1){
       alert('Não foi dessa vez, tente novamente!')
       somadorP=0
       somatórioP=0
       alfaP=0
       betaP=0
       
       
       
     }
    if(somatórioP==1 && somadorP==2){
       alert('Não foi dessa vez, tente novamente!')
       alfaP=0
       betaP=0
       somatórioP=0
       somadorP=0
       
       
     }
    if(somadorP==1 && somatórioP==2){
       alert('Não foi dessa vez, tente novamente!')
       alfaP=0
       betaP=0
       somatórioP=0
       somadorP=0
       
       
     }
  
  if(mouseX > xMenu3 && mouseX < xMenu3 + largura3 && mouseY > yMenu3 && mouseY < yMenu3 + altura3){
       stroke(200)
       fill(20);
       rect(xMenu3,yMenu3, largura3, altura3,15)
        if(mouseIsPressed){
         tela=10
       }
     }
    noStroke();
    fill(240)
    text("Voltar", 25, 35)
    
     repet=repet+1
   segundos=parseInt(repet/30)
   minutos=parseInt(segundos/120)
   textSize(25)
   fill('red')
   text('Min:', 15,60)
   text(minutos,65,60)
   if(minutos==30){
     tela=0
     minutos=0
   }
  
  } 
  
  
    
  
function fase3(){
    background(20);
    textSize(20);
    image(Si ,0,0);
    image(emili, 150, 50);
    image(cri, 150,200);
    text("Programador:", 300, 130);
    text("Emiliano Adson do Nascimento Araújo",300, 150);
    text("Orientador:",300,280);
    text("Christian Ribeiro",300,300);
        
    
    
    if(mouseX > xMenu3 && mouseX < xMenu3 + largura3 && mouseY > yMenu3 && mouseY < yMenu3 + altura3){
       stroke(200)
       fill(20);
       rect(xMenu3,yMenu3, largura3, altura3,15)
        if(mouseIsPressed){
         tela=0
       }
     }
    noStroke();
    fill(240)
    text("Voltar", 25, 35)
    text("Créditos",300, 35)

  }
