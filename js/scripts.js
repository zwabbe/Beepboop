
//Business logic 
function checkNumber(element){
  var a1="Beep!";
  var a2="Boop!";
  var a3="Be my neigh";
  for (let i=0; i < element; i++){
    let outputFinal= element;
    if (element.includes(1)){
      return outputFinal;
    }
    else if (checkNumber.includes(2)){
    return outputString.push(a2);
      }
    else if (checkNumber.includes(3)){
    return outputString.push(a3);
      }
  }
  
}


// User interface
$(document).ready(function() {
  $("form").submit(function() {
    event.preventDefault();
    userInputVar= parseInt($("input:text[name=userInput]").val());
    $("#output").append(outputFinal)

  });
});