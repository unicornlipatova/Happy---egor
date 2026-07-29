const start = document.getElementById("start");

const next = document.getElementById("next");

const finish = document.getElementById("finish");


const hero=document.querySelector(".hero");

const wish=document.querySelector(".wish");

const secret=document.querySelector(".secret");

const final=document.querySelector(".final");



start.onclick=function(){

hero.classList.add("hidden");

wish.classList.remove("hidden");

}



next.onclick=function(){

wish.classList.add("hidden");

secret.classList.remove("hidden");

}



finish.onclick=function(){

secret.classList.add("hidden");

final.classList.remove("hidden");


confetti();

}




function confetti(){

for(let i=0;i<80;i++){

let c=document.createElement("div");

c.innerHTML="✨";

c.style.position="absolute";

c.style.left=Math.random()*100+"vw";

c.style.top="-20px";

c.style.fontSize="25px";

document.body.appendChild(c);


let speed=Math.random()*3+2;


c.animate([

{
transform:"translateY(0)"
},

{
transform:`translateY(100vh) rotate(720deg)`
}

],

{

duration:speed*1000,

iterations:1

});


setTimeout(()=>{

c.remove();

},5000);


}

}