$(document).ready(function(){
$("#login").click(function(){
var email = $("#email").val();
var password = $("#password").val();
// Checking for blank fields.
if( email =='' || password ==''){
$('input[type="text"],input[type="password"]').css("border","2px solid red");
$('input[type="text"],input[type="password"]').css("box-shadow","0 0 3px red");
alert("Please fill all fields...!!!!!!");
}else {
/*$.post("login.php",{ email1: email, password1:password},
function(data) {
if(data=='Invalid Email.......') {
$('input[type="text"]').css({"border":"2px solid red","box-shadow":"0 0 3px red"});
$('input[type="password"]').css({"border":"2px solid #00F5FF","box-shadow":"0 0 5px #00F5FF"});
alert(data);
}else if(data=='Email or Password is wrong...!!!!'){
$('input[type="text"],input[type="password"]').css({"border":"2px solid red","box-shadow":"0 0 3px red"});
alert(data);
} else if(data=='Successfully Logged in...'){
$("form")[0].reset();
$('input[type="text"],input[type="password"]').css({"border":"2px solid #00F5FF","box-shadow":"0 0 5px #00F5FF"});
alert(data);
} else{
alert(data);
}
});*/


 $.ajax({
     type:'POST',
     url:'logme/login.php',
     data:{email1:$('#email').val(),password1:$('#password').val()},
     success: function(r_data){
		 //if(data.substring(0,4)=="true")
			 			var data=r_data.split("#");

		 if(data[0]=="true")
		 {
       console.log(data[1]);
	   sessionStorage.setItem('key', data[1]);
	   sessionStorage.setItem('usc', data[2]);
	   
		window.open("NFI Form.html",'_self');
		
		 }
		 else{
			 alert(data);
		 }
	   //datos = data;
       //datos = $.parseJSON(datos);
         }
      });
}
});
});