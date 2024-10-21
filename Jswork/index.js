// console.log("Hello js");

// const a = 12;

// if(a>10){
//     var b = 23;
//     a = 40;
//     console.log("a = "+ a);
// }

// console.log("Hi, b = "+ b);

// function fun(a,b){
//     console.log("Hi ");
//     return a+b;
// }
// let data = fun(24,65);
// console.log(data);

// function javaCompiler(){
//     return "java Complier";
// }

function selectlanguage(language = "no compiler selected"){
    let data = language;

    if(language=='c')
    {
        function cCompiler(){
            return "C Compiler";
        }
        data = cCompiler();
    }
    if(language=='java')
        {
            function javaCompiler(){
                return "java Compiler";
            }
            data = javaCompiler();
        }
}   