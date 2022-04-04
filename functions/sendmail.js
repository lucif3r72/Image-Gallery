function sendmail(){
    
	var name = $('#Name').val();
	var email = $('#Sender').val();
	var subject = $('#Subject').val();
     var message = $('#Message').val();

	var Body='Name: '+name+'<br>Email: '+email+'<br>Subject: '+subject+'<br>Message: '+message;

Email.send({
   	SecureToken:"068ad4ab-a9fb-4193-a937-f454e6f76547",
	To: 'lucif3r721@gmail.com',
	From: "na143ki@gmail.com",
	Subject: "New message on website from "+name,
	Body: Body
	}).then(
		message =>{
		//console.log (message);
			if(message=='OK'){
			alert('Your mail has been send. Thank you for connecting.');
			}
			else{
			console.error (message);
			alert('There is error at sending message. ')
						
			}

		}
	);



}