// Code your solutions in this file
const cards = (["moses", "remmy", "king"], "birthday");

function writeCards(name, event) {
    let thankYouCards = []
    for (let i = 0; i < name.length; i++) {
        thankYouCards.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)

    }
    return thankYouCards
}
writeCards(["moses", "remmy", "king"], "birthday");


function countDown(number) {
    while (number > 0) {
        console.log(number);
        number--;
    }
    console.log(number);
}