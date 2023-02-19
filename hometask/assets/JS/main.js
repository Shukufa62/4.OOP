let button=document.getElementById('btn')
let input=document.getElementById('inp')
let body=document.getElementById('bd')


button.onclick=function(){
    let color=document.getElementById('inp').value;
if(color!='black'){
    body.style.backgroundColor=color;
}
   else{
    body.style.color='white'
    body.style.backgroundColor=color;

   }
    
    
}



let minus = document.getElementById("minus");
let count = document.getElementById("count");
let plus = document.getElementById("plus");


let countNum = 0;
count.innerHTML = countNum;

minus.onclick=function(){
    countNum -= 1;
	count.innerHTML = countNum;
}

plus.onclick=function(){
    countNum += 1;
	count.innerHTML = countNum;
}

function multyplayAll(arr) {
    if (arr[0] > arr[1]) 
      arr.sort((a, b) => a - b)
  
    let product= 01
    for (let i = arr[0]; i <= arr[1]; i++) 
      product *= i
    
    return product
  }
  
  console.log(multyplayAll([15,10]))




