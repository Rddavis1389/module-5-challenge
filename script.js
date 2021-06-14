var currentDate = moment().format('dddd, MMMM Do, YYYY')

$("#currentDay").text(currentDate);

var currentHour = moment().hour();

$(".blockHour").each(function(){
    var blockHour = $(this).attr("id");
    console.log(blockHour)

    if(blockHour < currentHour){
        $(this).addClass("past")
        $(this).removeClass("present")
        $(this).removeClass("future")
    }
    else if(blockHour == currentHour){
        $(this).addClass("present")
        $(this).removeClass("past")
        $(this).removeClass("future")
    }
    else {
        $(this).addClass("future")
        $(this).removeClass("past")
        $(this).removeClass("present")
    }

})

// local storage
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#1 .description").val(localStorage.getItem("1"));
$("#2 .description").val(localStorage.getItem("2"));
$("#3 .description").val(localStorage.getItem("3"));
$("#4 .description").val(localStorage.getItem("4"));
$("#5 .description").val(localStorage.getItem("5"));