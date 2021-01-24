$(document).ready(function () {



  function checkNumber(userInputVar) {
    var newArray = [];
    for (var i = 0; i <= userInputVar; i++) {
      newArray.push(i);
      }
    const stringedArray= newArray.toString(" ");
    stringedArray.replace(/\d*3\d*/g, "Won't you be my neighbor?");
    console.log(stringedArray)
    return result;
  }





$("form").submit(function () {
  event.preventDefault();
  const userInputVar = parseInt($("input:text[name=userInput]").val());
  var result = checkNumber(userInputVar);
  var checker = doesItHave(result);

  $("#output").append(result);

});
});


// onsubmit="checkNumber()"
