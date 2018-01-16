p_canal1=setInterval(300);
p_canal2=setInterval(300);
p_canal3=setInterval(300);    

window.onload=function(){    
    ACORDES = carregarAcordes();
}            

function carregarAcordes(){
    return [
        new Audio ('sounds/C-1.mp3'),
        new Audio ('sounds/D-3.mp3'),
        new Audio ('sounds/C+-2.mp3'),
        new Audio ('sounds/D+-4.mp3'),
        new Audio ('sounds/E-5.mp3'),
        new Audio ('sounds/F-6.mp3'),
        new Audio ('sounds/F+-7.mp3'),
        new Audio ('sounds/G-8.mp3'),
        new Audio ('sounds/G+-9.mp3'),
        new Audio ('sounds/A-10.mp3'),
        new Audio ('sounds/A+-11.mp3'),
        new Audio ('sounds/B-12.mp3'),
        new Audio ('sounds/C-13.mp3'),
        new Audio ('sounds/C+-14.mp3'),
        new Audio ('sounds/D-15.mp3'),
        new Audio ('sounds/D+-16.mp3'),
        new Audio ('sounds/E-17.mp3'),
        new Audio ('sounds/F-18.mp3'),
        new Audio ('sounds/F+-19.mp3'),
        new Audio ('sounds/G-20.mp3'),
        new Audio ('sounds/G+-21.mp3'),
        new Audio ('sounds/A-22.mp3'),
        new Audio ('sounds/A+-23.mp3'),
        new Audio ('sounds/B-24.mp3'),
        new Audio ('sounds/C-25.mp3'),
        new Audio ('sounds/C+-26.mp3'),
        new Audio ('sounds/D-27.mp3'),
        new Audio ('sounds/D+-28.mp3'),
        new Audio ('sounds/E-29.mp3'),
        new Audio ('sounds/F-30.mp3'),
        new Audio ('sounds/F+-31.mp3'),
        new Audio ('sounds/G-32.mp3'),
        new Audio ('sounds/G+-33.mp3'),
        new Audio ('sounds/A-34.mp3'), 
        new Audio ('sounds/A+-35.mp3'),
        new Audio ('sounds/B-36.mp3'),
        new Audio ('sounds/C-37.mp3'),
        new Audio ('sounds/C+-38.mp3'),
        new Audio ('sounds/D-39.mp3'),
        new Audio ('sounds/D+-40.mp3'),
        new Audio ('sounds/E-41.mp3'),
        new Audio ('sounds/F-42.mp3'),
        new Audio ('sounds/F+-43.mp3'),
        new Audio ('sounds/G-44.mp3'),
        new Audio ('sounds/G+-45.mp3'),
        new Audio ('sounds/A-46.mp3'),
        new Audio ('sounds/A+-47.mp3'),
        new Audio ('sounds/B-48.mp3'),
        new Audio ('sounds/C-49.mp3'),
        new Audio ('sounds/C+-50.mp3'),
        new Audio ('sounds/D-51.mp3'),
        new Audio ('sounds/D+-52.mp3'),
        new Audio ('sounds/F-54.mp3'),
        new Audio ('sounds/E-53.mp3'),
        new Audio ('sounds/F+-55.mp3'),
        new Audio ('sounds/G-56.mp3'),
        new Audio ('sounds/G+-57.mp3'),
        new Audio ('sounds/A-58.mp3'),
        new Audio ('sounds/A+-59.mp3'),
        new Audio ('sounds/C-61.mp3')
    ];
}

function canal1(inicial, fim, nota, randmaior, randmenor){
    var rand = Math.floor((Math.random() * randmaior) +randmenor);
    var var_canal1 = nota + rand;

    if(var_canal1>59) var_canal1=0;
    if(var_canal1<0) var_canal1=59;

    console.log("Canal 1: "+var_canal1);
    console.log("Rand: "+rand);

    AUDIO = ACORDES[var_canal1]; 
    AUDIO.currentTime=0;                                
    AUDIO.play();

    clearInterval(p_canal1);
    p_canal1 = setInterval(
        function(){ 
            canal1(inicial, fim, var_canal1, randmaior, randmenor) 
        }, 
        Math.floor((Math.random() * fim) + inicial)
    );
}

function canal2(inicial, fim, nota, randmaior, randmenor){
    var var_canal2 = nota + Math.floor((Math.random() * randmaior) +randmenor);

    if(var_canal2>59) var_canal2=0;
    if(var_canal2<0) var_canal2=59;

    console.log("Canal 2: "+var_canal2);

    AUDIO = ACORDES[var_canal2]; 
    AUDIO.currentTime=0;                                
    AUDIO.play();

    clearInterval(p_canal2);
    p_canal2 = setInterval(
        function(){
            canal2(fim, inicial, var_canal2, randmaior, randmenor)
        }, 
        Math.floor((Math.random() * fim) + inicial)
    );
}

function canal3(inicial, fim, nota, randmaior, randmenor){
    var var_canal3 = nota + Math.floor((Math.random() * randmaior) +randmenor);

    if(var_canal3>59) var_canal3=0;
    if(var_canal3<0) var_canal3=59;

    console.log("Canal 3: "+var_canal3);

    AUDIO = ACORDES[var_canal3]; 
    AUDIO.currentTime=0;                                
    AUDIO.play();

    clearInterval(p_canal3);
    p_canal3 = setInterval(
        function(){ canal3(finm, inicial, var_canal3, randmaior, randmenor)
        }, 
        Math.floor((Math.random() * fim) + inicial)
    );                
}

function playTeste(){
    canal2(200, 1200, 10, 7, -2); 
    canal1(800, 1200, 10, 5, -2); 
}     

function play(minimo, maximo, acordeInicial, maiorSalto, menorSalto){
    let audio = canal1
}

function pegarValores(){
    let minimo          = parseInt(document.getElementById("minimo").value)
    let maximo          = parseInt(document.getElementById("maximo").value)
    let acordeInicial   = parseInt(document.getElementById("acorde-inical").value)
    let maiorSalto      = parseInt(document.getElementById("maior-salto").value)    
    let menorSalto      = parseInt(document.getElementById("menor-salvo").value)

    play(minimo, maximo, acordeInicial, maiorSalto, menorSalto)
}