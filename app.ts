window.onload = function () {
    let emailEmpty: boolean = true;
    let checkBoxChecked: boolean = false;
    let otherMediaChannel: boolean = false;

    let firstNameCorrect: boolean = false;
    let lastNameCorrect: boolean = false;
    let emailCorrect: boolean = true;


    //hides the default fields
    $("#emailMandatory").hide();
    $("#otherMediaChannel").hide();
    checkSubmitBtn();

    //Events to show/hide the messages
    $("#firstName").on("input", function () {
        if (!$("#firstName").val()) {
            $("#firstNameMandatory").show();
            firstNameCorrect = false;
        } else {
            $("#firstNameMandatory").hide();
            firstNameCorrect = true;
        }
        checkSubmitBtn();
    });
    $("#lastName").on("input", function () {
        if (!$("#lastName").val()) {
            $("#lastNameMandatory").show();
            lastNameCorrect = false;
        } else {
            $("#lastNameMandatory").hide();
            lastNameCorrect = true;
        }
        checkSubmitBtn();
    });
    $("#email").on("input", function () {
        if (!$("#email").val()) {
            emailEmpty = true;
        } else {
            emailEmpty = false;
        }
        checkEmail();
    });
    $("#newsletter").click(function () {
        if ($("#newsletter").is(":checked")) {
            checkBoxChecked = true;
        } else {
            checkBoxChecked = false;
        }
        checkEmail();
    });
    $("#mediaChannelSelect").on("change", function () {
        if ($("#mediaChannelSelect").find(":selected").text() === "Other") {
            $("#otherMediaChannel").show();
        } else {
            $("#otherMediaChannel").hide();
        }
    });


    function checkEmail() {
        if (checkBoxChecked && emailEmpty) {
            //Email-Checkbox checked AND email-field is empty
            $("#emailMandatory").show();
            emailCorrect = false;
        } else if (checkBoxChecked && !emailEmpty) {
            //Email-Checkbox checked AND email-field is not empty
            $("#emailMandatory").hide();
            emailCorrect = true;
        } else if (!checkBoxChecked) {
            //Email-Checkbox not checked
            $("#emailMandatory").hide();
            emailCorrect = true;
        }
        checkSubmitBtn();
    }

    function checkSubmitBtn() {
        if (firstNameCorrect && lastNameCorrect && emailCorrect) {
            $(":submit").prop("disabled", false);
        } else {
            $(":submit").prop("disabled", true);
        }
    }
}