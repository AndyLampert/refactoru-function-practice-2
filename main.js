// #1
var getName = function(obj) {
	return obj.name;
}

// #2
var totalLetters = function(arr){
	return arr.join('').length;
}

// #3  ???
var keyValue = function(key, value){
	// start by creating new instance of an object
	var obj = {};
	obj[key] = value;
	// return o at the end
	return obj;
}

// #4
var negativeIndex = function(arr, negNum){
	return arr[arr.length + negNum];
}

// #5
var removeM = function(str){
	var newArr = str.split('');
	for (var i=0; i<newArr.length; i++){
		if (newArr[i] === 'm') {
			newArr.splice(i, 1);
		}
	}
	return newArr.join('');
}

// #6
var printObject = function(obj){
	for(var key in obj){
		var value = obj[key];
		console.log(key + " is " +  value);	
	}
}

// #7
var vowels = function(str){
	var newStr = str.split('');
	var outputStr = [];
	for(var i=0; i<newStr.length; i++)  {
		if(newStr[i] === 'a' || newStr[i] === 'e' || newStr[i] === 'i' || newStr[i] === 'o' || newStr[i] === 'u') {
			outputStr.push(str[i]);
		}
	}
	return outputStr;
}

// #8
var twins = function(arr){
	console.log('start');
	for(var i=0;i<arr.length;i+=2) {
		console.log(arr[i], arr[i+1]);
		if(arr[i] !== arr[i+1]) {
			return false;
		} 
	}
	return true;
}

// #9
var or = function(booleanArr) {
	for(var i=0; i<booleanArr.length; i++){
		if(booleanArr[i] === true){
			return true;
		}
	}
	return false;
}

// #10
// helper function
var itemCount = function(arr,value) {
	var count = 0;
	for(var i=0;i<arr.length;i++){
		// if the current item === value
		if(arr[i] === value) {
			count++;
		}
	}
	return count;
}

var unique = function(arr) {
	var newArr = [];
	// count the # of times that a given value appears in an array
	for(var i=0;i<arr.length;i++) {
		if(itemCount(newArr,arr[i]) === 0) {
			newArr.push(arr[i]);
		}
	}
	return newArr;
}