const btnPrint = document.getElementById("btnPrint");
const inpNum = document.getElementById("inpNum");
const listNum = document.getElementById("listNum");

// DOM = document object model


btnPrint.onclick = function() {
  const start = Date.now()
  const num = parseInt(inpNum.value);
  
  for (let i = 1; i <= num; i++) {
    const li = document.createElement('li')
    li.innerText = i
    listNum.appendChild(li)
  }

  const end = Date.now()
  console.log("time taken = " + (end - start))
}