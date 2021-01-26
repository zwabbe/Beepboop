$(document).ready(function () {

  function checkNumber(userInputVar) {
    
    var newArray = [];
    for (var i = 0; i <= userInputVar; i++) {
      
      if (newArray.length === 13 || newArray.length === 31) {
        newArray.push("Won\'t you be my neighbor?")
      }
      else if(newArray.length ===1){
        newArray.push("boop")
      }
      else if (newArray.length ===2 || newArray.length === 21 ){
        newArray.push("beep")
      }
      else if (newArray.length ===3){
        newArray.push("Won\'t you be my neighbor?")
      }
      else{newArray.push(i);
      }
      var string = newArray.toString();
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


