//your JS code here. If required.
let btn=document.getElementById("button");
btn.addEventListener("click",function(e){
	e.preventDefault();
	let input=document.querySelectorAll("form input");
	let fisrname=input[0].value;
	let lastname=input[1].value;
	let phno=input[2].value;
	let email=input[3].value;
	alert(`First Name: ${fisrname} Last Name: ${lastname} Phone Number: ${phno} Email ID: ${email}`);
});