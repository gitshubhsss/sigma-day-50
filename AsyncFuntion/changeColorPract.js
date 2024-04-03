let h1=document.querySelector("h1");

function changeColor(color,delay){
   return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let randNum=Math.floor(Math.random()*10);
            if(randNum>5){
               reject("promise rejected");
            }
            h1.style.color=color;
            console.log(color);
            resolve();
        }, delay);
   }) 
}
async function show(){
   try{
    await changeColor("red",1000);
    await changeColor("green",1000);
    await changeColor("yellow",1000);
    await changeColor("purple",1000);
   }
   catch(err){
    console.log("error occure",err);
   }

    let a=5;
    console.log(a+8);
}

show();