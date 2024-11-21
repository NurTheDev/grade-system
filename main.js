function grading() {
  let bangla = +prompt("Enter your Bangla score:");
  let english = +prompt("Enter your English score:");
  let math = +prompt("Enter your Math score:");
  let science = +prompt("Enter your Science score:");
  let social = +prompt("Enter your Social score:");
  let result = (bangla + english + math + science + social) / 5;
  let total = bangla + english + math + science + social;

  if (isNaN(result)) {
    document.getElementById("grade").innerHTML =
      "Please enter your score in number";
  } else if (result >= 90) {
    document.getElementById(
      "grade"
    ).innerHTML = `Congratulation, You got Golden A+. Your total marks is ${total}`;
  } else if (result >= 80) {
    document.getElementById(
      "grade"
    ).innerHTML = `Congratulation, You got A+. Your total marks is ${total}`;
  } else if (result >= 70) {
    document.getElementById(
      "grade"
    ).innerHTML = `You got A. Your total marks is ${total}`;
  } else if (result >= 60) {
    document.getElementById(
      "grade"
    ).innerHTML = `You got A-. Your total marks is ${total}`;
  } else if (result >= 50) {
    document.getElementById(
      "grade"
    ).innerHTML = `You got B. Your total marks is ${total}`;
  } else if (result >= 40) {
    document.getElementById(
      "grade"
    ).innerHTML = `You got C. Your total marks is ${total}`;
  } else if (result >= 33) {
    document.getElementById(
      "grade"
    ).innerHTML = `You got D. Your total result is ${total}`;
  } else {
    document.getElementById(
      "grade"
    ).innerHTML = `Sorry, You are fail. Your total marks is ${total}`;
  }
}
grading();
