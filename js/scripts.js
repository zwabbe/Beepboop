$(document).ready(function() {

    //Business logic 
    function checkNumber(userInputVar){
    let userInputVar1= parseInt($("input:text[name=userInput]").val());
    const a1="Beep!";
    const a2="Boop!";
    const a3="Be my neigh";
    let empty= [];
    for (let i=0; i <= userInputVar; i++){
      while (userInputVar == 13 && 32); {
        empty.push(a1);
      }
      if (userInputVar.includes(1)) {
        empty.push(a2);
      }
      else if (userInputVar === 3) {
        empty.push(a3);
      }
    }

    }


    // User interface
    $("form").submit(function() {
      event.preventDefault();
      userInputVar= parseInt($("input:text[name=userInput]").val());
      $("#output").append()

    });
});


// onsubmit="checkNumber()"
