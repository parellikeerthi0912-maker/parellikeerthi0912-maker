const roles = ["software experiences", "AI/ML projects", "creative solutions", "secure applications"];
let roleIndex = 0;
const roleNode = document.getElementById("typedRole");
function rotateRole(){ if(!roleNode) return; roleNode.style.opacity = "0"; setTimeout(()=>{roleIndex=(roleIndex+1)%roles.length;roleNode.textContent=roles[roleIndex];roleNode.style.opacity="1";},250); }
if(roleNode){roleNode.style.transition="opacity .25s ease";setInterval(rotateRole,2300);}
const menuToggle=document.getElementById("menuToggle"), navLinks=document.getElementById("navLinks");
menuToggle?.addEventListener("click",()=>navLinks.classList.toggle("open"));
navLinks?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>navLinks.classList.remove("open")));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target);}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
window.addEventListener("scroll",()=>{const max=document.documentElement.scrollHeight-window.innerHeight;document.getElementById("progress").style.width=(max>0?window.scrollY/max*100:0)+"%";});
document.getElementById("year").textContent=new Date().getFullYear();
