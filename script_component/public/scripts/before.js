console.log("BEFORE INTERACTIVE script executed");

const el = document.createElement("p");
el.innerText = "BeforeInteractive Script Executed";
el.style.color = "red";
el.style.fontWeight = "bold";

document.body.appendChild(el);