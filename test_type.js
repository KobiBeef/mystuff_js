// pyramind
var char = ""
for (var count = 1; count <= 7; count+=1){
	console.log(char+="#");
};

// FizzBuzz
for (var count = 1; count <= 100; count += 1){
	if ((count%3 == 0) && (count%5 == 0))
      console.log(count, "FizzBuzz");
  	else if (count%5 == 0)
      console.log(count, "Buzz");
  	else if (count%3 == 0)
      console.log(count, "Fizz");
};

// fucking chessboar
var char = ""
var size = 8
for (var y = 0; y < size; y++){
  for (var x = 0; x < size; x++){
  	if((y+x) % 2 == 0)
      char += "#";
    else
      char += " "
  };
  char += "\n"
};

console.log(char)

// #############
// #EX: MINIMUM#
// #############
function min(par1, par2){
  if (par1 < par2)
    return par1;
  else
    return par2;
};

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

// #####################
// #EX: RECUSION (DONE)#
// #####################
// question regarding "undefined" property 
// when using a negative number in a function when using negativeNumber%2 == 0/1

function isEven(number){
  if (number < 0){
      return isEven(-number)
  }
  else if (number == 1){
      return false
  }
  else if (number == 0){
      return true;
  }
  else
      return isEven(number - 2);
}
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

// #########################
// #EX: BEAN COUNTING: DONE#
// #########################
function countBs(par1){
  var word = par1;
  var letter_pos = 0;
  var letter_count = 0;
  var word_length = word.length;
  
  for (count = 0; count < word_length; count++){
    var letter = word.charAt(letter_pos);
    letter_pos++;
    if (letter == "B")
      letter_count++;
  }
  return letter_count;
}

function countChar(par1, par2){
  var word = par1;
  var letter_to_count = par2;
  var letter_pos = 0;
  var letter_count = 0;
  var word_length = word.length;
  
  for (count = 0; count < word_length; count++){
    var letter = word.charAt(letter_pos)
    letter_pos++;
    if (letter == letter_to_count)
      letter_count++
  }
  return letter_count;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4