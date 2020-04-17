function ValidateEmail() 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("inputEmail").value))
  {
    alert("Thank you! You have successfully signed-up!")
    saveToFirebase(document.getElementById("inputEmail").value)
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

function saveToFirebase(email) {
    var emailObject = {
        email: email
    };

    firebase.database().ref('subscription-entries').push().set(emailObject)
        .then(function(snapshot) {
            success(); // some success method
        }, function(error) {
            console.log('error' + error);
            error(); // some error method
        });
}

saveToFirebase(email);