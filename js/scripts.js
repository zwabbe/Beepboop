$(document).ready(function () {

  function checkNumber(userInputVar) {
    
    var newArray = [];
    for (var i = 0; i <= userInputVar; i++) {
      if (newArray.length == 1){
        newArray.push("beep")
      }
      else{newArray.push(i);
      }
      

    }
   return newArray;
  }





$("form").submit(function () {
  event.preventDefault();
  const userInputVar = parseInt($("input:text[name=userInput]").val());
  var result = checkNumber(userInputVar);


  $("#output").append(result);

});
});


// onsubmit="checkNumber()"
