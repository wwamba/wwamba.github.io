const form = document.querySelector("#user-subscribe");

//saving data
form.addEventListener('submit', (e) =>{
	e.preventDefault();
	ValidateEmail(form.inputEmail.value);
	document.getElementById('inputEmail').value = '';
});


function ValidateEmail(mail) 
{
 var user_email = mail.toLowerCase();
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user_email))
  {
	//var isEmailAlreadyInDB = "";
    //isEmailExist(user_email, isEmailAlreadyInDB);


    //alert(isEmailAlreadyInDB);
    /*if (isEmailExist(user_email))
    {
    	alert("The email you have entered already exists!")
    	return (false)
    }
    else {*/
		uploadEmail(user_email);
	    alert("Thank you! You have successfully subscribed!");
		return (true)
	//}
  }
     alert("You have entered an invalid email address!")
    return (false)
};

function uploadEmail(mail) {
	db.ref('/subscription-entries/').push().set({
		email: mail
	});
};

function isEmailExist(mail){
	var rootRef = db.ref('/subscription-entries/');
	rootRef.orderByChild("email").equalTo(mail).on("child_added", function(snapshot) {
	  output = "exists in db";
	});
	//return "not exists in db";
};