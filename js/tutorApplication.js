$(document).ready(function() {
    $("#tutor_application_form").submit(function(event) {
		//event.preventDefault();
		
        var first_name = $("#Fname").val();
        var middle_name = $("#Mname").val();
        var last_name = $("#Lname").val();
        var phone_num = $("#Phnum").val();
        var id_num = $("#nat_id").val();
        var email = $("#Mail").val();
		var current_schl = $("#curSchool").val();
		var tsc_num = $("#tscNum").val();
		var pass1 = $("#Pass1").val();
		var pass2 = $("#Pass2").val();
		
		//alert(first_name+middle_name+last_name+phone_num+id_num+email+current_schl+tsc_num+pass1+pass2);
		
		//validation
		if(pass1 !== pass2){
			alert("enter the same password");
		}else{
			alert("password matches");
			
			//mailchimp
		}
		

    });
});