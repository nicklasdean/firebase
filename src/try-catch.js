const student = {
    "name":"bob",
    "age":25,
    "courses":["introduction to philosophy","western philosophy","history"]
}
try{
    // console.log(students);
}
catch(err){
    alert(err.message);
}

// console.log("More code");
// console.log("More codex2");
// console.log("Even more code");

//Try/catch with an API
try{
    fetch("https://yesno.wtf/api")
        .then((response) => response.text())
        .then(data =>{
            console.log(JSON.parse(data).answer);
        });
}
catch(e){
    alert(e.message);
}