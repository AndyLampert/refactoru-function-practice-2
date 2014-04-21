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
			// think about how does i have to
			// change after removing an item?
		}
	}
	return str;
	// another option is to go through the array 
	// and only keep items I want
}

// #6
var printObject = function(obj){
	// var key = obj.key;
	// var value = obj.value;
	// console.log(key + "is " +  value);
}

// #7
var vowels = function(str){
	var newStr = str.split('');
	var outputStr = [];
	for(var i=0; i<newStr.length; i++)  {
		if(newStr[i] !== 'm') {
			outputStr.push(str[i]);
		}
	}
}

// #8
var twins = function(){

}

// #9
var or = function(booleanArr) {
	for(var i=0; i<booleanArr.length; i++){
	}
}

// #10
var unique = function(arr) {
	var arrOfStrings = arr.split();
	
}





