console.log("hello Fetch");

function fetchData(){
const response = fetch("https://dummyjson.com/recipes");

response.then(data=>{
    console.log(data);
    data.json().then((res)=>{
        console.log(res.recipes[0].name);

        let output=`${res.recipes[0].id + " " + res.recipes[0].name + " " + res.recipes[0].ingredients}`;
        document.getElementById("output").innerHTML=output;
    })
})

.catch(error=>console.log(error))
.finally(()=>console.log("Hi, finally closed all resources"))
}
