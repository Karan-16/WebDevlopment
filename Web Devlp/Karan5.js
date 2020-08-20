function myfunction() 
{

   alert("Submitted");
}

function validateFirstName()
{
var fName = document.getElementById("firstName").value; //takes input from user as first name
var re1 = /^[a-zA-Z\s\'\-]{2,15}$/; //accepts a 2-15 letter name
 if(re1.test(fName))
{
document.getElementById("firstNamePrompt").style.color = "green";
document.getElementById("firstNamePrompt").innerHTML="<strong>valid</strong>"; //tests input and gives output in green if valid
return true;
}
else
{
document.getElementById("firstNamePrompt").style.color="red";
document.getElementById("firstNamePrompt").innerHTML="<strong>invalid</strong>"; //tests input and gives output in red if invalid
return false;
}
}

function validateLastName()
{
var lName=document.getElementById("lastName").value; //takes input from user as last name
var re2=/^[a-zA-Z\s\'\-]{2,25}$/; //accepts a 2-25 letter name
 if(re2.test(lName))
{
document.getElementById("lastNamePrompt").style.color="green";
document.getElementById("lastNamePrompt").innerHTML="<strong>valid</strong>"; //tests input and gives output in green if valid
return true;
}
else
{
document.getElementById("lastNamePrompt").style.color="red";
document.getElementById("lastNamePrompt").innerHTML="<strong>invalid</strong>"; //tests input and gives output in red if invalid
return false;
}
}

function validatePhone()
{
var phoneNumber=document.getElementById("phone").value; //takes input from user as phone number
var re3=/^\d{3}-\d{3}-\d{4}$/; //accepts a phone number in xxx-xxx-xxxx format
if(re3.test(phoneNumber))
{
document.getElementById("phonePrompt").style.color="green";
document.getElementById("phonePrompt").innerHTML="<strong>valid</strong>"; //tests input and gives output in green if valid
return (true);
}
else
{
document.getElementById("phonePrompt").style.color="red";
document.getElementById("phonePrompt").innerHTML="<strong>invalid</strong>"; //tests input and gives output in red if invalid
return (false);
}
}