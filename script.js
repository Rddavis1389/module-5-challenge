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
