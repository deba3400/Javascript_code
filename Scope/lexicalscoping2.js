"strict mode" //this is for enable strict mode to stop auto global creation

var teacher="sanket singh";// global scope
function fun(){// global scope
    var teacher="anurag";// scope of fun()
    content="js";// this is not a formal declaration that's why Js makes it auto global mean this a global variable
    console.log(content,teacher);

}
function gun(){// global scope
    var student="deba";// scope of gun()
    console.log(teacher,student);
}

fun();
gun();
console.log(content,teacher);