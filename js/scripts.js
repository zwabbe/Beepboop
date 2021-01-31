function arrayCreator(userInput) {
  let newArray = [];
  for (let i = 0; i <= userInput; i++) {
    newArray.push([i].toString());
  }
  const strungArray = newArray.join(" ");
  let firstCheck = strungArray.replace(/\S*3.?\S*/g, "Won\'t you be my neighbor?");
  let secondCheck = firstCheck.replace(/\S*2.?\S*/g, "Boop!");
  let thirdCheck = secondCheck.replace(/\S*1.?\S*/g, "Beep!");
  return thirdCheck;
}






$(document).ready(function() {
  $("form").submit(function() {
    event.preventDefault();
    const userInput = parseInt($("input:text[name=userInput]").val());
    const result = arrayCreator(userInput);
    $("#output").text(result);
  });
});