// establish current hour in the selected format
let currentHour = moment().format("H");
// console.log(currentHour)

// assigning a variable for the timeblocks
var nineHourBlock = $("#hour9");
var tenHourBlock = $("#hour10");
var elevenHourBlock = $("#hour11");
var twelveHourBlock = $("#hour12");
var oneHourBlock = $("#hour13");
var twoHourBlock = $("#hour14");
var threeHourBlock = $("#hour15");
var fourHourBlock = $("#hour16");
var fiveHourBlock = $("#hour17");


// used to display current day in header
const currentDate = moment().format('dddd, MMMM Do YYYY');
document.getElementById("currentDay").textContent = currentDate;

// this is to save user input after clicking save box
$(".saveBtn").click(function (event) {
    event.preventDefault();
    var value = $(this).siblings(".time-block").val();
    var time = $(this).parent().attr("id");
    console.log($(this).parent().attr("id"))
    localStorage.setItem("hour-"+time, value);
  });

// this calls to retrieve user input in timeblock
nineHourBlock.val(localStorage.getItem("hour-nineAm"));
tenHourBlock.val(localStorage.getItem("hour-tenAm"));
elevenHourBlock.val(localStorage.getItem("hour-elevenAm"));
twelveHourBlock.val(localStorage.getItem("hour-twelvePm"));
oneHourBlock.val(localStorage.getItem("hour-onePm"));
twoHourBlock.val(localStorage.getItem("hour-twoPm"));
threeHourBlock.val(localStorage.getItem("hour-threePm"));
fourHourBlock.val(localStorage.getItem("hour-fourPm"));
fiveHourBlock.val(localStorage.getItem("hour-fivePm"));


// this is the condition to control timeblock color based on current time
for(i=9; i<18; i++) {
    if (currentHour<i) {
        $("#hour"+i).addClass("future")
    }
    
    else if (currentHour>i) {
        $("#hour"+i).addClass("past")
    }
    
    else {
        $("#hour"+i).addClass("present")
    }
    
}