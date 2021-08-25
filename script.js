var nameValidated = false;
var phoneValidated = false;
var emailValidated = false;
var messageValidated = false;


$("#nameValidation").keyup(function () {
  if ($("#nameValidation").val().match(/^[A-Za-z][A-Za-z\ ]/)) {
    $("#name-Text").show();
    $("#name-Text").text(" ");
    nameValidated = true;
  } else {
    $("#name-Text").show();
    $("#name-Text").text("Invalid name! try again");
    $("#name-Text").css("class", "invalid-feedback");
    nameValidated = false;
  }
  $("#nameValidation").keypress(function (num) {
    if ((num.charCode >= 33 && num.charCode <= 64) || (num.charCode >= 91 && num.charCode <= 96) || (num.charCode >= 123 && num.charCode <= 126)  ) {
      num.preventDefault();
    }
  });
  if ($("#nameValidation").val().length < 3) {
    $("#name-Text").show();
    $("#name-Text").text("Name should have type morethan 3 characters");
    $("#name-Text").css("class", "invalid-feedback");
    nameValidated = false;
  }
});
$("#nameValidation").blur(function () {
  if ($("#nameValidation").val() == "") {
    $("#name-Text").show();
    $("#name-Text").text("Name should not be empty!");
    $("#name-Text").css("class", "invalid-feedback");
    nameValidated = false;
  }
});


$("#numberValidation").keypress(function (num) {
  return num.charCode >= 48 && num.charCode <= 57;
});
$("#numberValidation").keyup(function () {
  if ($("#numberValidation").val().match(/^\d+$/)) {
    $("#text-Number").show();
    $("#text-Number").text(" ");
    phoneValidated = true;
  }
  if ($("#numberValidation").val().length < 10) {
    $("#text-Number").show();
    $("#text-Number").text("Phone number should be 10 digits!");
    $("#text-Number").css("class", "invalid-feedback");
    phoneValidated = false;
  }
});

$("#numberValidation").blur(function () {
  if ($("#numberValidation").val() == "") {
    $("#text-Number").show();
    $("#text-Number").text("Phone number is required!");
    $("#text-Number").css("class", "invalid-feedback");
    phoneValidated = false;
  }
});

$("#mailValidation").keyup(function () {
  if ($("#mailValidation").val().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    $("#mail-type").text(" ");
    $("#mail-type").show();
    emailValidated = true;
  } else {
    $("#mail-type").show();
    $("#mail-type").text("Invalid email address");
    $("#mail-type").css("class", "invalid-feedback");
    emailValidated = false;
  }
});
$("#mailValidation").blur(function () {
  if ($("#mailValidation").val() == "") {
    $("#mail-type").show();
    $("#mail-type").text("Must enter email");
    $("#mail-type").css("class", "invalid-feedback");
    emailValidated = false;
  }
});


$("#messageValidation").keyup(function () {
  if ($("#messageValidation").val().length < 20) {
    $("#msg-text").show();
    $("#msg-text").text("Message length must be written morethan 20 characters");
    $("#msg-text").css("class", "invalid-feedback");
    messageValidated = false;
  } else {
    $("#msg-text").show();
    $("#msg-text").text(" ");
    messageValidated = true;
  }
  if ($("#messageValidation").val() == "") {
    $("#msg-text").show();
    $("#msg-text").text("You must leave a message ");
    $("#msg-text").css("class", "invalid-feedback");
    messageValidated = false;

  }
});
$('.navbar-collapse a').click(function () {
  $('.navbar-collapse').collapse('hide');
});




$("#submit-form").submit(function (num) {
  if ($("#nameValidation").val() == "" ||  $("#numberValidation").val() == "" || $("#mailValidation").val() == "" || $("#messageValidation").val() == "" ) {
    alert("please fill the form properly");
  }
  if ($("#nameValidation").val() == "" &&  $("#numberValidation").val() == "" && $("#mailValidation").val() == "" && $("#messageValidation").val() == "" ) {
    num.preventDefault();
    $("#name-Text").show();
    $("#text-Number").show();
    $("#mail-type").show();
    $("#msg-text").show();
  } else if (
    nameValidated &&
    phoneValidated &&
    emailValidated &&
    messageValidated
  ) {
    num.preventDefault();
    $.ajax({
      url: "https://script.google.com/macros/s/AKfycbzTkL5i1GncmbTaxtSH7neJUABFhp0WyIxLesoi5EmXWQspp9p1/exec",
      data: $("#submit-form").serialize(),
      method: "post",
      success: function (response) {
        alert("Form submitted successfully");
        window.location.reload();
      },
      error: function (err) {
        alert("Something Error");
      },
    });
  } else {
    num.preventDefault();
  }
});
