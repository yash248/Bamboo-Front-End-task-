$(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form[name='counter']").validate({
    // Specify validation rules
    rules: {
      num: "required",
    },
    ,
    
    submitHandler: function(form) {
      form.start();
    }
  });
});