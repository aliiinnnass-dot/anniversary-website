// 🔐 PASSWORD FIXED
function checkPassword(){

const pass=document.getElementById("password").value;

if(pass.trim() === "30/6/2022"){

document.getElementById("loginScreen").style.display="none";
document.getElementById("main").style.display="block";

startTimer();
loadReasons();

}else{

alert("Wrong password 💔");

}

}

// ⏳ TIMER
function startTimer(){

const start=new Date("2022-06-30");

setInterval(()=>{

const now=new Date();
const diff=now-start;

const days=Math.floor(diff/(1000*60*60*24));

document.getElementById("timer").innerText=
`Together for ${days} days ❤️`;

},1000);

}

// 💖 50 REASONS
const reasons=[
"You make me feel loved",
"You are my safe place",
"You never give up on us",
"You understand me",
"You are my happiness",
"You are my peace",
"You are my comfort",
"You make me smile",
"You are my home",
"You are my person",
"You support me",
"You care deeply",
"You are my heart",
"You are my world",
"You are my everything",
"You stay with me",
"You believe in me",
"You make life beautiful",
"You are my dream",
"You are my forever",
"You are my soulmate",
"You are my light",
"You are my strength",
"You are my joy",
"You are my laughter",
"You are my calm",
"You are my reason",
"You are my love story",
"You are my destiny",
"You are my safe hug",
"You are my happiness source",
"You are my favorite person",
"You are my best friend",
"You are my forever choice",
"You are my heart’s home",
"You are my comfort zone",
"You are my everything I prayed for",
"You are my future",
"You are my present",
"You are my always",
"You are my forever love",
"You make distance easier",
"You make me stronger",
"You make me feel special",
"You never leave my thoughts",
"You are my sweetest blessing",
"You are my endless love",
"You are my reason to smile",
"You are my forever and always",
"You are my greatest gift"
];

function loadReasons(){

const box=document.getElementById("reasons");

reasons.forEach((r,i)=>{

setTimeout(()=>{

const div=document.createElement("div");

div.innerText="❤️ "+r;

box.appendChild(div);

},i*100);

});

}

function uploadVideo(event){

const file = event.target.files[0];

if(!file) return;

const reader = new FileReader();

reader.onload = function(){

const data = reader.result;

const video = document.getElementById("loveVideo");

video.src = data;

/* Save in browser */
localStorage.setItem("loveVideo", data);

};

reader.readAsDataURL(file);

}
window.onload = function(){

const saved = localStorage.getItem("loveVideo");

if(saved){

document.getElementById("loveVideo").src = saved;

}

};
