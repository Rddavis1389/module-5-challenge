var currentDate = moment().format('dddd, MMMM Do, YYYY')

$("#currentDay").text(currentDate);

var currentHour = moment().hour();

$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        var text = $(this).siblings(".blockHour").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
    })

    function timeTracker() {
        //get current number of hours.
        var currentHour = moment().hour();

            // loop over time blocks
            $(".blockHour").each(function () {
                var blockHour = $(this).attr("id");
                console.log(blockHour)

                if (blockHour < currentHour) {
                    $(this).addClass("past")
                    $(this).removeClass("present")
                    $(this).removeClass("future")
                }
                else if (blockHour === currentHour) {
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
    }

        // local storage
        $("#9 .blockHour").val(localStorage.getItem("9"));
        $("#10 .blockHour").val(localStorage.getItem("10"));
        $("#11 .blockHour").val(localStorage.getItem("11"));
        $("#12 .blockHour").val(localStorage.getItem("12"));
        $("#1 .blockHour").val(localStorage.getItem("1"));
        $("#2 .blockHour").val(localStorage.getItem("2"));
        $("#3 .blockHour").val(localStorage.getItem("3"));
        $("#4 .blockHour").val(localStorage.getItem("4"));
        $("#5 .blockHour").val(localStorage.getItem("5"));

        timeTracker();
})