//your code here
let num=parseInt(prompt("enter num : "))
let result=floor(n/2);
let max=-Infinite;
let map=new Map();
for(let t of num){
	if(map.has(t)){
		let v=map.get(t,1);
		map.set(t,v+1);
	}
	else{
		map.set(t,1);
	}
}
for(let [key,value] of map){
	if(max<value)
	{
		max=value;
	}
}
if(max>result){
	return max;
}
