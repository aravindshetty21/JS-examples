function outerContext(){
    var thisOuter = this;
    function innerContext(){
        return thisOuter === this;
    }
console.log(innerContext())
}

outerContext()
//true