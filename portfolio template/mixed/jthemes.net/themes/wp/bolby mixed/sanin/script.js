$(document).ready(function(){
    // $("#submit-form").validate({
    //     rules:{
    //         name:{
    //             required:true,
    //             minlength:4,
    //             maxlength:20
    //         },
    //         email:{ 
    //             required:true,
    //             email:true
    //         },
    //         message:{
    //             required:true
    //         },
    //         subject:{
    //             required:true,
    //             minlength:5
    //         }
    //     },
        
    // }),
    $("#submit-form").submit((e) => {
        var isvalidate = $("#submit-form")[0].checkValidity();
        if (isvalidate) {
        e.preventDefault()
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbzd4DrtpnKeG_ZD0Wf-MTOFUl2x8NjjKrCq0Ce1I6bGxTURf1IlTK4Si0AMNuM3WrQA0A/exec",
            data: $("#submit-form").serialize(),
            method: "post",
            success: function (response) {
                alert("Form submitted successfully")
                window.location.reload()
                //window.location.href="https://google.com"
            },
            error: function (err) {
                alert("Something Error")
    
            }
        })
    }
    })
    // $('#submit-form')[0].checkValidity();
})
