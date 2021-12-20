/*here we are targeting our sign up form where we are 
saving input  in local storage*/

$(document).ready(function () {
    $("#signup-form").submit(function () {
        var nm1 = $("#name1").val();
        var ps1 = $("#pass1").val();
        localStorage.setItem("n1", nm1);
        localStorage.setItem("p1", ps1);
    });
    // targeting the log in form 
    $("#login-form").submit(function () {
        var enteredName = $("#name2").val();
        var enteredPass = $("#pass2").val();

        var storedName = localStorage.getItem("n1");
        var storedPass = localStorage.getItem("p1");
//comparing our input if matches with our saved value in local storage
        if (enteredName == storedName && enteredPass == storedPass) {
            //alert will be updated with modal
            alert("You are logged in");
        }
        else {
            ////alert will be updated with modal
            alert("You entered Wrong Password");
        };
    });
});
