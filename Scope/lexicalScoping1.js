var teacher="debashis adhikari";// global
function fun(){// functipn fun() is in global scope
    var teacher="rupam das";// variable teacher is in scope of fun()
    console.log(teacher);
}

function gun(){// global
    var student="deba";// gun()
    console.log(student);

}
fun();
gun();