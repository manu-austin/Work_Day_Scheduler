var timeNowInfo = document.getElementById("time-now");
var currentTime = moment().format('dddd, MMMM Do');
var currentHour = parseInt(moment().format('HH')); //moment was showing a string - parseInt converts to integer
timeNowInfo.textContent = currentTime; // for html purpose show the date in format day, month #th
var actualDate = moment().format('DDMMYYYY');

// put value to dates and extract dates on the value on each key
var nineAmContent = localStorage.getItem("9AM");
var tenAmContent = localStorage.getItem("10AM");
var elevenAmContent = localStorage.getItem("11AM");
var twelvePmContent = localStorage.getItem("12PM");
var onePmContent = localStorage.getItem("1PM");
var twoPmContent = localStorage.getItem("2PM");
var threePmContent = localStorage.getItem("3PM");
var fourPmContent = localStorage.getItem("4PM");
var fivePmContent = localStorage.getItem("5PM");


$(document).ready(function() {


    if (nineAmContent != null) { // verify this is not empty otherwise substring generates error
        var nineAmContentClean = nineAmContent.substring(8, nineAmContent.length);
        var nineAmTimeStored = nineAmContent.substring(0, 8); // get date info was stored

        if (actualDate === nineAmTimeStored) { // compare date it was stored and today's date, if it is today => keep the data, otherwise clean
            $("#9amContent").val(nineAmContentClean);
        } else {
            localStorage.removeItem("9AM");
        }
    }


    if (tenAmContent != null) {
        var tenAmContentClean = tenAmContent.substring(8, tenAmContent.length);
        var tenAmTimeStored = tenAmContent.substring(0, 8);
        if (actualDate === tenAmTimeStored) {
            $("#10amContent").val(tenAmContentClean);
        } else {
            localStorage.removeItem("10AM");
        }
    }

    if (elevenAmContent != null) {
        var elevenAmContentClean = elevenAmContent.substring(8, elevenAmContent.length);
        var elevenAmTimeStored = elevenAmContent.substring(0, 8);
        if (actualDate === elevenAmTimeStored) {
            $("#11amContent").val(elevenAmContentClean);
        } else {
            localStorage.removeItem("11AM");
        }
    }

    if (twelvePmContent != null) {
        var twelvePmContentClean = twelvePmContent.substring(8, twelvePmContent.length);
        var twelvePmTimeStored = twelvePmContent.substring(0, 8);
        if (actualDate === twelvePmTimeStored) {
            $("#12pmContent").val(twelvePmContentClean);
        } else {
            localStorage.removeItem("12PM");
        }
    }

    if (onePmContent != null) {
        var onePmContentClean = onePmContent.substring(8, onePmContent.length);
        var onePmTimeStored = onePmContent.substring(0, 8);
        if (actualDate === onePmTimeStored) {
            $("#1pmContent").val(onePmContentClean);
        } else {
            localStorage.removeItem("1PM");
        }

    }


    if (twoPmContent != null) {

        var twoPmContentClean = nineAmContent.substring(8, twoPmContent.length);
        var twoPmTimeStored = nineAmContent.substring(0, 8);
        if (actualDate === twoPmTimeStored) {
            $("#2pmContent").val(twoPmContentClean);
        } else {
            localStorage.removeItem("2PM");
        }

    }

    if (threePmContent != null) {

        var threePmContentClean = threePmContent.substring(8, threePmContent.length);
        var threePmTimeStored = threePmContent.substring(0, 8);
        if (actualDate === threePmTimeStored) {
            $("#3pmContent").val(threePmContentClean);
        } else {
            localStorage.removeItem("3PM");
        }

    }

    if (fourPmContent != null) {

        var fourPmContentClean = fourPmContent.substring(8, fourPmContent.length);
        var fourPmTimeStored = fourPmContent.substring(0, 8);
        if (actualDate === fourPmTimeStored) {
            $("#4pmContent").val(fourPmContentClean);
        } else {
            localStorage.removeItem("4PM");
        }

    }


    if (fivePmContent != null) {

        var fivePmContentClean = fivePmContent.substring(8, fivePmContent.length);
        var fivePmTimeStored = fivePmContent.substring(0, 8);

        if (actualDate === fivePmTimeStored) {
            $("#5pmContent").val(fivePmContentClean);
        } else {
            localStorage.removeItem("5PM");
        }

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