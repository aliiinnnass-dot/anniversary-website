// 💖 TIMER
const startDate = new Date("2022-06-30");

setInterval(()=>{
const now = new Date();
const diff = now - startDate;

const days = Math.floor(diff / (1000*60*60*24));

document.getElementById("timer").innerText =
`Together for ${days} days ❤️`;

},1000);


// 💖 50 REASONS
const reasons = [
"You make me feel loved",
"You are my safe place",
"I love your smile",
"You care about me",
"You never give up on us",
"You understand me",
"You make me laugh",
"You support my dreams",
"You are my happiness",
"You are my person",
"You make my life better",
"You are kind",
"You are beautiful inside and out",
"You always listen",
"You are my peace",
"You are my comfort",
"You are my strength",
"You believe in me",
"You stay with me no matter what",
"You are my favorite hello",
"You are my hardest goodbye",
"You are my everything",
"You make distance easier",
"You make my heart calm",
"You are my best friend",
"You make me smile without trying",
"You are my love",
"You are my future",
"You are my forever",
"You are my home",
"You are my happiness source",
"You are my dream",
"You are my light",
"You are my warmth",
"You are my reason",
"You are my joy",
"You are my heart",
"You are my world",
"You are my soulmate",
"You are my comfort zone",
"You are my peace of mind",
"You are my love story",
"You are my safe hug",
"You are my favorite person",
"You are my always",
"You are my forever choice",
"You are my destiny",
"You are my happiness forever",
"You are my everything I prayed for",
"You are my love forever"
];

const box = document.getElementById("reasons");

reasons.forEach((r,i)=>{
setTimeout(()=>{
const div = document.createElement("div");
div.innerText = "❤️ " + r;
box.appendChild(div);
}, i*80);
});


// 📸 PHOTO UPLOAD
function addPhoto(event){
const file = event.target.files[0];
const reader = new FileReader();

reader.onload = function(){
const img = document.createElement("img");
img.src = reader.result;
document.getElementById("gallery").appendChild(img);
}

reader.readAsDataURL(file);
}
