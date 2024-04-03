let h1=document.querySelector("h1");

async function show(){
   try{
    await changeColor("green",1000)
    await changeColor("red",1000)
    await changeColor("yellow",1000)
    await changeColor("purple",1000)
   }
   catch(err){
    console.log(err);
   }

    let a =5;
    console.log("a = ",a);
    console.log(`new number is ${a+3}`);
}

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let randNum=Math.floor(Math.random()*10);
            if(randNum>3){
                reject();
                console.log(randNum);
            }
            h1.style.color=color;
            console.log(color);
            resolve("color has changed")
        }, delay);
    })
}

show();