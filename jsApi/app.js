let jsonRes='{"fact":"In 1987 cats overtook dogs as the number one pet in America.","length":60}';
let validData=JSON.parse(jsonRes);
console.log(validData);

let jsObject={
    fact: 'In 1987 cats overtook dogs as the number one pet in America.',
    length: 60
}

let jsonData=JSON.stringify(jsObject);//It will convert the javascript object into json
console.log(jsonData);