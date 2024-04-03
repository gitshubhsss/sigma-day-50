let url = "https://catfact.ninja/fact";

fetch(url)
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data) => {
    console.log("data 1",data.fact);
  })
  .catch((err) => {
    console.log("error occured", err);
  });
