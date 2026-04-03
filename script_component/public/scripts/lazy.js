console.log("LAZY ONLOAD running");

setTimeout(() => {
  const elll = document.createElement("div");
  elll.innerText = "4) LAZY ONLOAD (Browser Idle)";
  elll.style.fontSize = "40px";
  elll.style.color = "blue";
  elll.style.marginTop = "20px";

  document.body.appendChild(elll);
}, 5000);