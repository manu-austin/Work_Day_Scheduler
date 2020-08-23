var timeNowInfo = document.getElementById("time-now");
var currentTime = moment().format('dddd, MMMM Do');
var currentHour = parseInt(moment().format('HH')); //moment was showing a string - parseInt converts to integer
timeNowInfo.textContent = currentTime; // for html purpose show the date in format day, month #th
var actualDate = moment().format('DDMMYYYY');

// put value to dates and extract dates on the value on each key
var nineAmContent = localStorage.getItem("9AM");
var nineAmContentClean = nineAmContent.substring(8, nineAmContent.length);
var nineAmTimeStored = nineAmContent.substring(0, 8);



$(document).ready(function() {

    if (actualDate === nineAmTimeStored) {
        $("#9amContent").val(nineAmContentClean);
    } else {
        localStorage.removeItem("9AM");
    }


    // put color in boxes based on the time of the day time passed -> grey, current hour -> red, time after -> green
    switch (currentHour) {
        case 9:
            $(".form-control").attr("style", "background-color: green");
            $("#9AM").attr("style", "background-color: red");
            break;
        case 10:
            $(".form-control").attr("style", "background-color: green");
            $("#10AM").attr("style", "background-color: red");
            $("#9AM").attr("style", "background-color: grey");
            break;
        case 11:
            $(".form-control").attr("style", "background-color: green");
            $("#11AM").attr("style", "background-color: red");
            $("#9AM, #10AM").attr("style", "background-color: grey");
            break;
        case 12:
            $(".form-control").attr("style", "background-color: green");
            $("#12PM").attr("style", "background-color: red");
            $("#9AM, #10AM, #11AM").attr("style", "background-color: grey");
            break;
        case 13:
            $(".form-control").attr("style", "background-color: grey");
            $("#1PM").attr("style", "background-color: red");
            $("#2PM, #3PM, #4PM, #5PM").attr("style", "background-color: green");
            break;
        case 14:
            $(".form-control").attr("style", "background-color: grey");
            $("#2PM").attr("style", "background-color: red");
            $("#3PM, #4PM, #5PM").attr("style", "background-color: green");
            break;
        case 15:
            $(".form-control").attr("style", "background-color: grey");
            $("#3PM").attr("style", "background-color: red");
            $("#4PM, #5PM").attr("style", "background-color: green");
            break;
        case 16:
            $(".form-control").attr("style", "background-color: grey");
            $("#4PM").attr("style", "background-color: red");
            $("#5PM").attr("style", "background-color: green");
            break;
        case 17:
            $(".form-control").attr("style", "background-color: grey");
            $("#5PM").attr("style", "background-color: red");
            break;
        default:
            if (currentHour < 9) {
                $(".form-control").attr("style", "background-color: green");
            } else {
                $(".form-control").attr("style", "background-color: grey");
            }
            break;

    }
});

$(".fas").on("click", function(event) {
    var buttonclicked = this.id;

    switch (buttonclicked) {
        case "9AM":
            localStorage.setItem("9AM", actualDate + $("#9amContent").val());
            break;
        case "10AM":
            localStorage.setItem("10AM", actualDate + $("#10amContent").val());
            break;
        case "11AM":
            localStorage.setItem("11AM", actualDate + $("#11amContent").val());
            break;
        case "12PM":
            localStorage.setItem("12PM", actualDate + $("#12pmContent").val());
            break;
        case "1PM":
            localStorage.setItem("1PM", actualDate + $("#1pmContent").val());
            break;
        case "2PM":
            localStorage.setItem("2PM", actualDate + $("#2pmContent").val());
            break;
        case "3PM":
            localStorage.setItem("3PM", actualDate + $("#3pmContent").val());
            break;
        case "4PM":
            localStorage.setItem("4PM", actualDate + $("#4pmContent").val());
            break;
        case "5PM":
            localStorage.setItem("5PM", actualDate + $("#5pmContent").val());
            break;
    }
});