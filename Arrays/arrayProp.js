var arr = [1,2,3,4]

delete arr.length;
//false

Object.defineProperties(arr,{
    sum:{
        value: function(){
					var i=0;
					for(var j=0;j<arr.length;j++){
						i+=arr[j];
					}
					return i;
				}
		}
	});

arr
//(4) [1, 2, 3, 4, sum: ƒ]
arr.sum()
//10

delete arr.sum
//false