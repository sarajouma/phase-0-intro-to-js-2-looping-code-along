const gifts = ["Guadalupe", "Ollie", "Aki"];
let giftsmessages=[...gifts] ;
function writeCards(gifts,surprise) {
  for (let i = 0; i < gifts.length; i++) {
    giftsmessages[i]=`Thank you, ${gifts[i]}, for the wonderful ${surprise} gift!`;
}

  return giftsmessages;
}

writeCards(gifts);

function countDown(count){
    let countup = count;
    while (countup >= 0) {
      console.log(countup--);
    }
}

countDown(10);