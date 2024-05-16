
    const obj={
        func1:function f1(){
            console.log("i am function f1");
            return {
                function2: function f2(){
                    console.log("i am function f2");
                }
            }
        }
    }

obj.func1();