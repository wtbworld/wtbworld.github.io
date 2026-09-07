const themeToggle=document.getElementById("themeToggle");
const body=document.body;
if(localStorage.getItem("wtb-theme")==="light") body.classList.add("light");
themeToggle.addEventListener("click",()=>{body.classList.toggle("light");localStorage.setItem("wtb-theme",body.classList.contains("light")?"light":"dark");});

const popover=document.getElementById("rabbitPopover");
const popoverText=document.getElementById("popoverText");
document.querySelectorAll(".rabbit-item").forEach(item=>item.addEventListener("click",()=>{popoverText.textContent=item.dataset.text;popover.classList.add("open");}));
document.getElementById("closePopover").addEventListener("click",()=>popover.classList.remove("open"));
document.addEventListener("keydown",e=>{if(e.key==="Escape")popover.classList.remove("open");});

const messages=[
"You have opened the website. This was unnecessary. Excellent.",
"Achievement unlocked: professionally procrastinating.",
"The dogs have reviewed this website. They demand snacks.",
"Plot twist: the rabbit hole was the website.",
"Somewhere, someone is asking whether this counts as a personality.",
"You could be doing something productive. But here we are."
];
document.getElementById("surpriseButton").addEventListener("click",()=>{document.getElementById("surpriseText").textContent=messages[Math.floor(Math.random()*messages.length)];});

function updateClock(){document.getElementById("clock").textContent=new Date().toLocaleTimeString([], {hour:"2-digit",minute:"2-digit"});}
updateClock();setInterval(updateClock,30000);
