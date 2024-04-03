
async function genRandNum(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let randNum=Math.floor(Math.random() *10 )+1;
            console.log(randNum);
            resolve();//as soon as the resolve gets a call it will not call to the second funtion
        }, 1000);
    })
}

async function showNum(){
  await  genRandNum();
  await genRandNum();
}

showNum();