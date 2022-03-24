// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

// let currentHour = moment().format("HH");
// console.log(currentHour)


var nineHourBlock = $("#hour9");
var tenHourBlock = $("#hour10");
var elevenHourBlock = $("#hour11");
var twelveHourBlock = $("#hour12");
var oneHourBlock = $("#hour13");
var twoHourBlock = $("#hour14");
var threeHourBlock = $("#hour15");
var fourHourBlock = $("#hour16");
var fiveHourBlock = $("#hour17");


const currentDate = moment().format('dddd, MMMM Do YYYY');
document.getElementById("currentDay").textContent = currentDate;


$(".saveBtn").click(function (event) {
    event.preventDefault();
    var value = $(this).siblings(".time-block").val();
    var time = $(this).parent().attr("id");
    console.log($(this).parent().attr("id"))
    localStorage.setItem("hour-"+time, value);
  });

// add ID to text areas
// select text areas with jquery
// target value with val method
// assign localstorage.getitem to that value.
nineHourBlock.val(localStorage.getItem("hour-nineAm"));
tenHourBlock.val(localStorage.getItem("hour-tenAm"));
elevenHourBlock.val(localStorage.getItem("hour-tenAm"));
twelveHourBlock.val(localStorage.getItem("hour-twelvePm"));
oneHourBlock.val(localStorage.getItem("hour-onePm"));
twoHourBlock.val(localStorage.getItem("hour-twoPm"));
threeHourBlock.val(localStorage.getItem("hour-threePm"));
fourHourBlock.val(localStorage.getItem("hour-fourPm"));
fiveHourBlock.val(localStorage.getItem("hour-fivePm"));


