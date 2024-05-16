function fun(){
    console.log("old function implementation ");
}

fun();


(function(){
    function fun(){
        console.log("new function created");
    }
    console.log("calling entern function");
    fun();
})();
fun();