var max = (a,b,c,d)=>(a>b?(a>c? (a>d?a:d):(c>d?c:d)):(b>c?(b>d?b:d):(c>d?c:d)))
max(1,2,3,4)
//4
max(10,40,3,9)
//40
