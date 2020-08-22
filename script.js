var timeNowInfo = document.getElementById("time-now");
var currentTime = moment().format('dddd, MMMM Do');
var currentHour = parseInt(moment().format('HH')); //moment was showing a string - parseInt convert to integer
timeNowInfo.textContent = currentTime;


$(document).ready(function() {

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
    console.log(buttonclicked);
});