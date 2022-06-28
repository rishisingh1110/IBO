/*
You have been given a list of products which is having property productName, quantity and description.


PROBLEM STATEMENTS:

1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

{
  "TV": 2,
  "AC": 2,
  "FAN": 1
}



2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

[{
    productName: "TV",
    quantity: 20,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 10,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
     description: "Ceiling Fan"
  }
]

*/




const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];

document.getElementById('array').innerText = "Original Array : " + JSON.stringify(listOfProducts);

function getUniqueProductCount(arr){
	let mp = new Map();
  for(let i=0; i<arr.length; i++){
  	if(mp.get(arr[i].productName)===undefined) mp.set(arr[i].productName,arr[i].quantity);
    else{
    	let val = mp.get(arr[i].productName);
      mp.set(arr[i].productName,val+arr[i].quantity);
    }
  }
  let obj = {};
  for(let [key,value] of mp){
  	obj[key]=value;
  }
  return obj;
}
document.getElementById('count').innerText = "Unique Product Count : " + JSON.stringify(getUniqueProductCount(listOfProducts));


function getUniqueProducts(arr){
	let mp = new Map();
  for(let i=0; i<arr.length; i++){
  	if(mp.get(arr[i].productName)===undefined) mp.set(arr[i].productName,[arr[i].quantity,arr[i].description]);
    else{
    	let val = mp.get(arr[i].productName);
      mp.set(arr[i].productName,[val[0]+arr[i].quantity,arr[i].description]);
    }
  }
  let ans = [];
  for(let [key,value] of mp){
  	let obj = {};
  	obj["productName"]=key;
    obj["quantity"]=value[0];
    obj["description"]=value[1];
    ans.push(obj);
  }
  return ans;
}

document.getElementById('uniques').innerText = "Unique Products : " + JSON.stringify(getUniqueProducts(listOfProducts));
