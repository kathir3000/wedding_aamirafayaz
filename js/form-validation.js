jQuery(document).ready(function ($) {

	//Vadivamai.in Form
    // hide messages 
    $("#error").hide();
    $("#sent-form-msg").hide();

    // on submit...
    $("#contactForm #submit").click(function () {
        $("#error").hide();

        //required:

        //name
        var name1 = $("input#name").val();
        if (name1 == "") {
            $("#error").fadeIn().text("Name required.");
            $("input#name").focus();
            return false;
        }


        // email
        var email1 = $("input#email").val();
        var pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (!pattern.test(email1)) {
            $("#error").fadeIn().text("Enter Valid Email Id.");
            $("input#email").focus();
            return false;
        }

        //Yes or NO
        var SrNo1 = $("input[name=SrNo]:checked").val();


        // comments
        var comments1 = $("#comments").val();

        // send mail php
        var sendMailUrl1 = $("#sendMailUrl").val();

        //to, from & subject
        //var to1 = $("#to").val();
		var to1 = 'kathir3000@gmail.com,aamira.fathima89@gmail.com,marinefayaz@gmail.com';
        var from1 = $("#from").val();
        var subject1 = $("#subject").val();

       
        // ajax
        $.ajax({
            type: "POST",
            url: sendMailUrl1,
            data: 	{name: name1 , email: email1, SrNo: SrNo1 , comments: comments1, to: to1, from: from1, subject:subject1},
            success: success()
        });
    });


    // on success...
    function success() {
        $("#sent-form-msg").fadeIn();
        $("#contactForm").fadeOut();
    }



    return false;
});