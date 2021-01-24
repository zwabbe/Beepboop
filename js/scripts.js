$(document).ready(function() {

  $("form").submit(function() { 
    event.preventDefault();
    const userInputVar = parseInt($("input:text[name=userInput]").val());
    let result = checkNumber(userInputVar);
    
function checkNumber(userInputVar) {
    let empty=[];
  for (let i = 0; i < 3; i++) {
    if (userInputVar == 1) {
       empty.push("Boop");
    }
    if (userInputVar === 21){
       empty.push("Boop");
    }
    else if (userInputVar === 31) {
       empty.push("Wont you be my!");
    }

  }
  return empty
}
$("#output").append(result);

});
});


// onsubmit="checkNumber()"
