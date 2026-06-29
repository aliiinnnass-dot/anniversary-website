/* ===========================================
   OUR FOREVER ❤️
   Anniversary Website
=========================================== */

// PASSWORD

function checkPassword(openBook();

document.body.style.transition="2s";

document.body.style.opacity="0";

setTimeout(()=>{

document.body.style.opacity="1";

},100);) {

    const password = document.getElementById("password").value;

    if(password === "30/6/2022"){

        document.getElementById("login-screen").style.display="none";

        document.getElementById("website").style.display="block";

        createPetals();
        createSparkles();
        createFireflies();
        loadReasons();

        relationshipTimer();

        setInterval(relationshipTimer,1000);

    }

    else{

        document.getElementById("wrong-password").innerHTML=
        "❌ That's not our special date ❤️";

    }

}

/* ===========================
   PHOTO UPLOAD
===========================*/

function loadPhoto(event,id){

    const image=document.getElementById(id);

    image.src=URL.createObjectURL(event.target.files[0]);

}

/* ===========================
   ROSE PETALS
===========================*/

function createPetals(){

    const container=document.getElementById("petals");

    setInterval(()=>{

        const petal=document.createElement("div");

        petal.innerHTML="🌹";

        petal.style.position="absolute";

        petal.style.left=Math.random()*100+"vw";

        petal.style.top="-50px";

        petal.style.fontSize=(20+Math.random()*20)+"px";

        petal.style.animation=
        `fall ${8+Math.random()*5}s linear`;

        container.appendChild(petal);

        setTimeout(()=>petal.remove(),14000);

    },300);

}

/* ===========================
   SPARKLES
===========================*/

function createSparkles(){

    const container=document.getElementById("sparkles");

    setInterval(()=>{

        const star=document.createElement("div");

        star.innerHTML="✨";

        star.style.position="absolute";

        star.style.left=Math.random()*100+"vw";

        star.style.top=Math.random()*100+"vh";

        star.style.fontSize=(10+Math.random()*18)+"px";

        star.style.opacity=Math.random();

        star.style.animation="twinkle 3s linear";

        container.appendChild(star);

        setTimeout(()=>star.remove(),3000);

    },180);

}

/* ===========================
   FIREFLIES
===========================*/

function createFireflies(){

    const container=document.getElementById("fireflies");

    setInterval(()=>{

        const fly=document.createElement("div");

        fly.innerHTML="🟡";

        fly.style.position="absolute";

        fly.style.left=Math.random()*100+"vw";

        fly.style.top=Math.random()*100+"vh";

        fly.style.fontSize="8px";

        fly.style.opacity=".8";

        fly.style.filter="blur(1px)";

        fly.style.animation="floatFirefly 7s linear";

        container.appendChild(fly);

        setTimeout(()=>fly.remove(),7000);

    },400);

}

/* ===========================
   100 REASONS
===========================*/

const reasons=[

"I love your smile because it brightens even my darkest days.",
"I love how your laugh is my favorite sound.",
"I love the way you always know how to make me smile.",
"I love how safe I feel when I'm talking to you.",
"I love how you've never stopped choosing us.",
"I love your kindness towards everyone around you.",
"I love your patience with me, even on difficult days.",
"I love how you always listen when I need someone.",
"I love your beautiful heart.",
"I love how you encourage me to become the best version of myself.",

"I love how we can laugh over the smallest things.",
"I love how you always make time for me.",
"I love how you believe in our future.",
"I love your honesty.",
"I love your loyalty.",
"I love how comfortable I am being myself around you.",
"I love that you're my best friend as well as my boyfriend.",
"I love how you make distance feel smaller.",
"I love every late-night conversation we've shared.",
"I love every good morning and good night message.",

"I love your voice.",
"I love the way you say my name.",
"I love how excited you get when sharing things you enjoy.",
"I love how you always care about my feelings.",
"I love that you're always there when I need you.",
"I love how patient you've been through four years of long distance.",
"I love the memories we've made together.",
"I love dreaming about our future together.",
"I love that we never gave up on each other.",
"I love how you understand me without needing many words.",

"I love your sense of humor.",
"I love how you make ordinary days feel special.",
"I love how much effort you put into our relationship.",
"I love how proud I am to call you mine.",
"I love how your happiness becomes my happiness.",
"I love the way you support my dreams.",
"I love how you remind me I'm loved.",
"I love your little habits that make you uniquely you.",
"I love how we always find our way back to each other.",
"I love every 'I miss you' because it reminds me how much we care.",

"I love how you've helped me grow.",
"I love how you never judge me.",
"I love how you celebrate my achievements.",
"I love how you comfort me when I'm sad.",
"I love that I can trust you with my whole heart.",
"I love imagining the day we finally close the distance.",
"I love how every year with you feels even more special.",
"I love how you make me feel beautiful.",
"I love that you are my favorite person.",
"I love you simply because you're you."
"Your smile lights up my world.",
"You make every day magical.",
"You always make me laugh.",
"You make me feel safe.",
"You believe in us.",
"You never give up on us.",
"You love me exactly as I am.",
"You're incredibly kind.",
"You're patient.",
"You have the cutest smile.",
"I love hearing your voice.",
"You make distance feel smaller.",
"You always cheer me up.",
"You're my best friend.",
"You're my soulmate.",
"I trust you completely.",
"You're handsome.",
"You always support me.",
"You make me proud.",
"You make me feel beautiful.",
"You always listen.",
"You're thoughtful.",
"You remember little things.",
"You make me feel special.",
"You never stop trying.",
"You always make time for me.",
"You understand me.",
"You calm my anxiety.",
"You inspire me.",
"You encourage me.",
"You make ordinary moments unforgettable.",
"I love your laugh.",
"I love your hugs.",
"I love your eyes.",
"I love your heart.",
"You are honest.",
"You are loyal.",
"You protect my heart.",
"You always forgive.",
"You make me feel lucky.",
"You make me smile without trying.",
"You know how to comfort me.",
"You believe in my dreams.",
"You respect me.",
"You make me feel at home.",
"You are gentle.",
"You are caring.",
"You are my peace.",
"You are my happiness.",
"You make life brighter.",

// Continue adding your own if you'd like...
];

function loadReasons(){

const container=document.getElementById("reasons-container");

container.innerHTML="";

reasons.forEach((reason,index)=>{

setTimeout(()=>{

const card=document.createElement("div");

card.className="reason";

card.innerHTML=`
<h3>❤️ Reason ${index+1}</h3>
<p>${reason}</p>
`;

container.appendChild(card);

if(index===99){

setTimeout(showForeverMessage,1200);

}

},index*120);

});

}



/* ===========================
   TIMER
===========================*/

function relationshipTimer(){

const start=new Date("June 30, 2022 00:00:00");

const now=new Date();

let diff=now-start;

const seconds=Math.floor(diff/1000);

const minutes=Math.floor(diff/60000);

const hours=Math.floor(diff/3600000);

const days=Math.floor(diff/86400000);

const years=Math.floor(days/365);

const months=Math.floor(days/30);

document.getElementById("years").innerHTML=years;
document.getElementById("months").innerHTML=months;
document.getElementById("days").innerHTML=days;
document.getElementById("hours").innerHTML=hours;
document.getElementById("minutes").innerHTML=minutes;
document.getElementById("seconds").innerHTML=seconds;

}

/* ===========================
   SECRET MESSAGE
===========================*/

let secret=[];

document.addEventListener("keydown",(e)=>{

secret.push(e.key);

secret=secret.slice(-4);

if(secret.join("")==="love"){

alert("❤️ I will love you forever ❤️");

}

});
/* ==========================
STARS
========================== */

function createStars(){

const sky=document.getElementById("stars");

for(let i=0;i<250;i++){

const star=document.createElement("div");

star.className="star";

star.style.width=Math.random()*4+"px";

star.style.height=star.style.width;

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDelay=Math.random()*5+"s";

sky.appendChild(star);

}

}

createStars();

/* ==========================
HEARTS
========================== */

setInterval(()=>{

if(document.getElementById("website").style.display!="block")
return;

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.bottom="-40px";

document.body.appendChild(heart);

setTimeout(()=>heart.remove(),7000);

},900);

/* ==========================
MUSIC
========================== */

const music=document.getElementById("music");

const musicButton=document.getElementById("musicButton");

let playing=false;

musicButton.onclick=function(){

if(!playing){

music.play();

musicButton.innerHTML="⏸";

playing=true;

}

else{

music.pause();

musicButton.innerHTML="🎵";

playing=false;

}

}

/* ==========================
MAGIC BOOK
========================== */

function openBook(){

document.getElementById("magicBook").style.display="block";

setTimeout(()=>{

document.getElementById("magicBook").style.display="none";

},2500);

}
function showForeverMessage(){

const message=document.createElement("div");

message.id="foreverMessage";

message.innerHTML=`

<h1>❤️ Forever & Always ❤️</h1>

<p>

100 reasons will never be enough...

Because every single day,

I discover another reason

to love you even more.

Happy 4th Anniversary.

I love you forever.

❤️

</p>

`;

document.body.appendChild(message);

setTimeout(()=>{

message.classList.add("show");

},100);

}
const captions=document.querySelectorAll(".captionInput");

captions.forEach(box=>{

box.addEventListener("input",()=>{

box.setAttribute("value",box.value);

});

});
/* =========================
   FIREWORKS ENGINE
========================= */

const canvas=document.getElementById("fireworks");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let particles=[];

class Particle{

constructor(x,y,color){

this.x=x;
this.y=y;

this.color=color;

this.radius=Math.random()*3+2;

this.speedX=(Math.random()-0.5)*8;
this.speedY=(Math.random()-0.5)*8;

this.life=100;

}

update(){

this.x+=this.speedX;
this.y+=this.speedY;

this.life--;

}

draw(){

ctx.beginPath();

ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);

ctx.fillStyle=this.color;

ctx.fill();

}

}

function createExplosion(){

const colors=["#ff4d6d","#ff85a2","#ffd6f5","#ffffff","#ffb3c6"];

const x=Math.random()*canvas.width;
const y=Math.random()*canvas.height/2;

for(let i=0;i<80;i++){

particles.push(
new Particle(x,y,colors[Math.floor(Math.random()*colors.length)])
);

}

}

function animateFireworks(){

ctx.fillStyle="rgba(0,0,0,0.15)";
ctx.fillRect(0,0,canvas.width,canvas.height);

particles.forEach((p,i)=>{

p.update();
p.draw();

if(p.life<=0){
particles.splice(i,1);
}

});

requestAnimationFrame(animateFireworks);

}

animateFireworks();

setInterval(createExplosion,1200);
function typeWriter(text,element,i=0){

if(i<text.length){

element.innerHTML+=text.charAt(i);

setTimeout(()=>typeWriter(text,element,i+1),50);

}

}
window.addEventListener("resize",()=>{

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

});
