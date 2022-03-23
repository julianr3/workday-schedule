// $(document).ready(function () {
//     let thisMoment = moment().format("dddd, MMMM do YYYY");
//     let todaysDate = document.getElementById(currentDay);
//     todaysDate.innerHTML = thisMoment();
// })

// var thisMoment = moment();
// $("currentDay").text(thisMoment.format("dddd, MMMM do YYYY"));


const currentDate = moment().format('dddd, MMMM Do YYYY');
document.getElementById("currentDay").textContent = currentDate;