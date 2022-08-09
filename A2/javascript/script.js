


const C4 = new Audio("Piano Notes/C4.mp3")
const Db4 = new Audio("Piano Notes/Db4.mp3")
const D4 = new Audio("Piano Notes/D4.mp3")
const Eb4 = new Audio("Piano Notes/Eb4.mp3")
const E4 = new Audio("Piano Notes/E4.mp3")
const F4 = new Audio("Piano Notes/F4.mp3")
const Gb4 = new Audio("Piano Notes/Gb4.mp3")
const G4 = new Audio("Piano Notes/G4.mp3")
const Ab4 = new Audio("Piano Notes/Ab4.mp3")
const A4 = new Audio("Piano Notes/A4.mp3")
const Bb4 = new Audio("Piano Notes/Bb4.mp3")
const B4 = new Audio("Piano Notes/B4.mp3")
const C5 = new Audio("Piano Notes/C5.mp3")
const Db5 = new Audio("Piano Notes/Db5.mp3")
const D5 = new Audio("Piano Notes/D5.mp3")
const Eb5 = new Audio("Piano Notes/Eb5.mp3")
const E5 = new Audio("Piano Notes/E5.mp3")

const playSound= Audio =>{
    const clone=audio.CloneNode();
    clone.play();
    setTimeout(()=> (clone.volume=0.8),400);
    setTimeout(()=> (clone.volume=0.6),800);
    setTimeout(()=> (clone.volume=0.4),1200);
    setTimeout(()=> (clone.volume=0.2),1600);
    setTimeout(()=> (clone.volume=0),2000);
};

//C4
const C4key=document.querySelector(".C4");
const playC4=()=>{
    playSound(C4);
    C4key.classList.add("active");
    setTimeout(()=>C4key.classList.remove("active"),200);
};
C4key.addEventListener("click",playC4);

//Db4
const Db4key=document.querySelector(".Db4");
const playDb4=()=>{
    playSound(Db4);
    Db4key.classList.add("active");
    setTimeout(()=>Db4key.classList.remove("active"),200);
};
Db4key.addEventListener("click",playDb4);

//D4
const D4key=document.querySelector(".D4");
const playD4=()=>{
    playSound(D4);
    D4key.classList.add("active");
    setTimeout(()=>D4key.classList.remove("active"),200);
};
D4key.addEventListener("click",playD4);

//Eb4
const Eb4key=document.querySelector(".Eb4");
const playEb4=()=>{
    playSound(Eb4);
    Eb4key.classList.add("active");
    setTimeout(()=>Eb4key.classList.remove("active"),200);
};
Eb4key.addEventListener("click",playEb4);

//E4
const E4key=document.querySelector(".E4");
const playE4=()=>{
    playSound(E4);
    E4key.classList.add("active");
    setTimeout(()=>E4key.classList.remove("active"),200);
};
E4key.addEventListener("click",playE4);

//F4
const F4key=document.querySelector(".F4");
const playF4=()=>{
    playSound(E4);
    F4key.classList.add("active");
    setTimeout(()=>F4key.classList.remove("active"),200);
};
F4key.addEventListener("click",playF4);

//Gb4
const Gb4key=document.querySelector(".Gb4");
const playGb4=()=>{
    playSound(Gb4);
    Gb4key.classList.add("active");
    setTimeout(()=>Gb4key.classList.remove("active"),200);
};
Gb4key.addEventListener("click",playGb4);

//G4
const G4key=document.querySelector(".G4");
const playG4=()=>{
    playSound(G4);
    G4key.classList.add("active");
    setTimeout(()=>G4key.classList.remove("active"),200);
};
G4key.addEventListener("click",playG4);

//Ab4
const Ab4key=document.querySelector(".Ab4");
const playAb4=()=>{
    playSound(Gb4);
    Ab4key.classList.add("active");
    setTimeout(()=>Ab4key.classList.remove("active"),200);
};
Ab4key.addEventListener("click",playAb4);

//A4
const A4key=document.querySelector(".A4");
const playA4=()=>{
    playSound(A4);
    A4key.classList.add("active");
    setTimeout(()=>A4key.classList.remove("active"),200);
};
A4key.addEventListener("click",playA4);

//Bb4
const Bb4key=document.querySelector(".Bb4");
const playBb4=()=>{
    playSound(Bb4);
    Bb4key.classList.add("active");
    setTimeout(()=>Bb4key.classList.remove("active"),200);
};
Bb4key.addEventListener("click",playBb4);

//B4
const B4key=document.querySelector(".B4");
const playB4=()=>{
    playSound(B4);
    B4key.classList.add("active");
    setTimeout(()=>B4key.classList.remove("active"),200);
};
B4key.addEventListener("click",playB4);

//C5
const C5key=document.querySelector(".C5");
const playC5=()=>{
    playSound(C5);
    C5key.classList.add("active");
    setTimeout(()=>C5key.classList.remove("active"),200);
};
C5key.addEventListener("click",playC5);

//Db5
const Db5key=document.querySelector(".Db5");
const playDb5=()=>{
    playSound(Db5);
    Db5key.classList.add("active");
    setTimeout(()=>Db5key.classList.remove("active"),200);
};
Db5key.addEventListener("click",playDb5);

//D5
const D5key=document.querySelector(".D5");
const playD5=()=>{
    playSound(D5);
    D5key.classList.add("active");
    setTimeout(()=>D5key.classList.remove("active"),200);
};
D5key.addEventListener("click",playD5);

//Eb5
const Eb5key=document.querySelector(".Eb5");
const playEb5=()=>{
    playSound(Eb5);
    Eb5key.classList.add("active");
    setTimeout(()=>Eb5key.classList.remove("active"),200);
};
Eb5key.addEventListener("click",playEb5);

//E5
const E5key=document.querySelector(".E5");
const playE5=()=>{
    playSound(E5);
    E5key.classList.add("active");
    setTimeout(()=>E5key.classList.remove("active"),200);
};
E5key.addEventListener("click",playE5);

window.addEventListener("keydown", ({keyCode})=>
{
    //Press Q
    if (keyCode ===81) return playC4();
    //Press 2
    if (keyCode ===50) return playDb4();
    //Press W
    if (keyCode ===87) return playD4();
    //Press 3
    if (keyCode ===51) return playEb4();
    //Press E
    if (keyCode ===69) return playE4();
    //Press R
    if (keyCode ===82) return playF4();
    //Press 4
    if (keyCode ===52) return playGb4();
    //Press T
    if (keyCode ===84) return playG4();
    //Press 5
    if (keyCode ===53) return playAb4();
    //Press Y
    if (keyCode ===89) return playA4();
    //Press 6
    if (keyCode ===54) return playBb4();  
    //Press U
    if (keyCode ===85) return playB4();
    //Press I
    if (keyCode ===73) return playC5();
    //Press 7
    if (keyCode ===55) return playDb5();
    //Press O
    if (keyCode ===79) return playD5();
    //Press 8
    if (keyCode ===56) return playEb5();
    //Press P
    if (keyCode ===80) return playE5();
});