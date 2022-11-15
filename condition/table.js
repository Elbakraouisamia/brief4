let num = document.getElementById("num");
let btn = document.getElementById("btn");
let output = document.getElementById("output");

btn.addEventListener('click' ,multiplication )

function multiplication(){
    output.innerHTML = "";
   for (let i = 1; i <=10; i++) {
    console.log(` ${i} * ${num.value} = ${i*num.value} `);
    output.innerHTML += ` ${i} * ${num.value} = ${i*num.value}<br> `;
   }

} 