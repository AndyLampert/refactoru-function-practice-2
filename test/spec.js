// #1
describe("getName", function() {
    it("takes a single object argument and returns the value of the 'name' property of the given object", function() {
        expect(getName({ name: 'Luisa', age: 25 })).toEqual('Luisa');
    });
});

// #2
describe("totalLetters", function() {
	it("takes an array of strings and returns the total number of letters in all strings", function() {
		expect(totalLetters(['javascript', 'is', 'awesome'])).toEqual(19);
		expect(totalLetters(['what', 'happened', 'to', 'my', 'function'])).toEqual(24);
	});
});

// #3
describe("keyValue", function(){
	it("takes two arguments and returns an object with a key of the first argument and the value of the second argument", function() {
		expect(keyValue('city', 'Denver')).toEqual('{city: "Denver"}');
	});
});

// #4
describe("negativeIndex", function() {
	it("takes an array and a negative number, and returns the value from the array at the given negative index, as if the array was circular, i.e. arr.length+num", function(){
		expect(negativeIndex(['a', 'b', 'c', 'd', 'e'], -2)).toEqual('d');
		expect(negativeIndex(['jerry', 'sarah', 'sally'], -1)).toEqual('sally');
	});
});

// #5
describe("removeM", function() {
	it("takes a single string argument and removes all 'm' characters from the string and returns a new string", function(){
		expect(removeM('family')).toEqual('faily');
		expect(removeM('memory')).toEqual('eory');
	});
});

// #6
describe("printObject", function() {
	it("takes a single object argument and console.log's each key-value pair in the format key is value on separate lines", function(){
		expect(printObject({ a: 10, b: 20, c: 30 })).toEqual('a is 10, b is 20, c is 30');
	});
});

// #7
describe("vowels", function() {
	it("takes a string and returns an array of all the vowels in the string, including duplicates", function(){
		expect(vowels('alabama')).toEqual(['a', 'a', 'a', 'a']);
		expect(vowels('What lets in youth?')).toEqual(['a', 'e', 'i', 'o', 'u']);
	});
});

// #8
describe("twins", function() {
	it("takes an array and returns true if every pair of items in the array is the same", function(){
		expect(twins(['a', 'a', 'b', 'b', 'c', 'c'])).toEqual(true);
		expect(twins(['a', 'a', 'b', 'z'])).toEqual(false);
		expect(twins(['a', 'a', 'b'])).toEqual(false);
		expect(twins(['a', 'a', 'b', undefined])).toEqual(false);
	});
});

// #9
describe("or", function() {
	it("takes an array of booleans and returns true if any one of them is true. Given an empty array, return false. If you find an item that is true, the function should return true immediately and not continue checking further values.", function(){
		expect(or([false, false, true, false])).toEqual(true);
		expect(or([false, false, false])).toEqual(false);
		expect(or([])).toEqual(false);

	});
});

// #10
describe("unique", function() {
	it("takes an array of strings, and returns a new array consisting of the unique values (no duplicates)", function(){
		expect(unique(['a', 'b', 'a', 'c', 'd', 'd'])).toEqual(['a', 'b', 'c', 'd']);
		expect(unique(['todd', 'avery', 'maria', 'avery'])).toEqual(['todd', 'avery', 'maria']);
	});
});