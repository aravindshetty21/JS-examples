var arr = [
	{
		name:
		{
			first: "Aravind",
			last: "Emmadishetty",
		},
		branch: "ECE",
		state: "Telangana"
	},
	{
		name:
		{
			first: "Charan",
			last: "Netha",
		},
		branch: "CSE",
		state: "Telangana"
	},
	{
		name:
		{
			first: "Ashok",
			last: "Polarapu",
		},
		branch: "EEE",
		state: "Andhra Pradesh"
	},
	{
		name:
		{
			first: "Krishna",
			last: "Ganugapenta",
		},
		branch: "CSE",
		state: "Andhra Pradesh"
	},
	{
		name:
		{
			first: "Dheeraj",
			last: "Guntupalli",
		},
		branch: "ECE",
		state: "Andhra Pradesh"
	},
	{
		name:
		{
			first: "Usha",
			last: "Bollepalli",
		},
		branch: "ECE",
		state: "Andhra Pradesh"
	},
	{
		name:
		{
			first: "Prasanna",
			last: "Ankam",
		},
		branch: "IT",
		state: "Andhra Pradesh"
	},
	{
		name:
		{
			first: "Priyanka",
			last: "Jampani",
		},
		branch: "CSE",
		state: "Andhra Pradesh"
	},
	{
		name:
		{
			first: "Swathi",
			last: "Nallajarla",
		},
		branch: "CSE",
		state: "Andhra Pradesh"
	},
];
	
	
	
arr.filter( x => x.branch === "ECE");

/*
(3) [{…}, {…}, {…}]

0:
branch: "ECE"
name: {first: "Aravind", last: "Emmadishetty"}
state: "Telangana"
__proto__: Object
1:
branch: "ECE"
name: {first: "Dheeraj", last: "Guntupalli"}
state: "Andhra Pradesh"
__proto__: Object
2:
branch: "ECE"
name: {first: "Usha", last: "Bollepalli"}
state: "Andhra Pradesh"
__proto__: Object
length: 3
__proto__: Array(0)
*/

arr.map(x=>x.fullname = x.name.first + ' ' + x.name.last);
//{name: {…}, branch: "ECE", state: "Telangana", fullname: "Aravind Emmadishetty"}

arr.find(x=> x.name.first === "Charan");
/*{name: {…}, branch: "CSE", state: "Telangana"}
branch: "CSE"
name: {first: "Charan", last: "Netha"}
state: "Telangana"
__proto__: Object*/

arr.forEach(function(x){
if(arr.indexOf(x)<5){
x.gender='male'
}
else {x.gender = "female";}});

arr
/*
(9) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
0:
branch: "ECE"
gender: "male"
name: {first: "Aravind", last: "Emmadishetty"}
state: "Telangana"
__proto__: Object
1: {name: {…}, branch: "CSE", state: "Telangana", gender: "male"}
2: {name: {…}, branch: "EEE", state: "Andhra Pradesh", gender: "male"}
3: {name: {…}, branch: "CSE", state: "Andhra Pradesh", gender: "male"}
4: {name: {…}, branch: "ECE", state: "Andhra Pradesh", gender: "male"}
5:
branch: "ECE"
gender: "female"
name: {first: "Usha", last: "Bollepalli"}
state: "Andhra Pradesh"
__proto__: Object
6: {name: {…}, branch: "IT", state: "Andhra Pradesh", gender: "female"}
7: {name: {…}, branch: "CSE", state: "Andhra Pradesh", gender: "female"}
8: {name: {…}, branch: "CSE", state: "Andhra Pradesh", gender: "female"}
length: 9
__proto__: Array(0)
*/