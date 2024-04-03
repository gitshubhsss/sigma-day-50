let h1=document.querySelector("h1");

async function show(){
    await changeColor("green",1000)
    await changeColor("red",1000)
}

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            h1.style.color=color;
            console.log(color);
            resolve();
        }, delay);
    })
}

show();