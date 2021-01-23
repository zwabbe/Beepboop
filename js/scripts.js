function checkNumber(userInputVar) {
  let empty= [];
  for (let i = 0; i <=userInputVar; i++) {
    if (userInputVar === 13) {
     empty.push("Beep!");
    }
    if (userInputVar === 21){
       empty.push("Boop");
    }
    else if (userInputVar === 32) {
       empty.push("Wont you be my!");
    }
    return empty;
  }
}

$(document).ready(function() {
  $("form").submit(function() { 
    event.preventDefault();
    const userInputVar = parseInt($("input:text[name=userInput]").val());
    const result = checkNumber(userInputVar);
    alert(result)
    });
});

// onsubmit="checkNumber()"
