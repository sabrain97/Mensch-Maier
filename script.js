if(numberToGuess > myNumber.value) {
    headline.innerHTML = 'Die Zahl ist größer!';
    document.body.style.backgroundImage = "url('background_groesser.jpg')";
}

if(numberToGuess < myNumber.value) {
    headline.innerHTML = 'Die Zahl ist kleiner!';
    document.body.style.backgroundImage = "url('background_kleiner.jpg')";
}
myNumber.value = '';