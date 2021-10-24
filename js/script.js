var tripInfoButton = document.querySelector(".trip-info");
var dailyBudget = document.querySelector(".daily-budget");

var tripInfo = function () {
  var totalBudget = Number(prompt("What is your total budget-Quel est votre budget total-¿Cuál es su presupuesto total?"));
  var accommodation = Number(prompt("What are your accommodation costs-Votre budget pour se loger-¿Cuales son sus costos de alojamiento?"));
  var numDays = Number(prompt("How many days does your trip last-Combien de jours dure votre voyage-¿Cuántos días dura su viaje?"));
  // bottom of your tripInfo function body, call the calculateDailyBudget pass 3 arguments:
  //totalBudget,accomodation,numDays.
  calculateDailyBudget(totalBudget, accommodation, numDays);
};
//write a function called calculateDailyBudget
//This function will accept three parameters:
//totalBudget, accommodation, and numDays
var calculateDailyBudget = function (totalBudget, accommodation, numDays) {
  //he value of daily will be the result of the totalBudget minus the accommodation costs,
  //divided by the number of trip days. Hint: Add parentheses around the totalBudget and accommodation expression,
  //and then divide the number of trip days.
  var daily = ((totalBudget - accommodation) / numDays).toFixed(2);
  //the result doesn’t end up with more than 2 decimal places,
  //wrap the calculation with toFixed(2)
  dailyBudget.innerText = `Votre dépense est $${daily} par jour en nourriture et en divertissement`;
};

tripInfoButton.addEventListener("click", tripInfo);
