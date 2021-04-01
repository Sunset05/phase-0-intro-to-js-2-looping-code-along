// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    //debugger;
  }

  return gifts;
}
wrapGifts(gifts); 

/*writeCards(["Ada", "Brendan", "Ali"], "birthday"); 
[
  "Thank you, Ada, for the wonderful birthday gift!",
  "Thank you, Brendan, for the wonderful birthday gift!",
  "Thank you, Ali, for the wonderful birthday gift!"
]; 
*/
const cards = [];

function writeCards(array, event){ 
    for(let i=0; i<array.length; i++){
        array[i]= (`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }
    return array;
}

writeCards(cards);
/*
//the test is looking for a returned value as type number. 
this is a solution that does not use a while loop

function countDown(number){
    for(let i=number ; i >= 0; i--){
    console.log(number);
    number = number - 1;
    }
}
*/
//this solution uses a while loop :D
function countDown(number){
  let count = number;
  while(count>=0){
    console.log(count--);
  }
}