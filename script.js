document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const firstname = document.querySelector('input[name="First Name"]').value;
    const lastname = document.querySelector('input[name="Last Name"]').value;
    const phno = document.querySelector('input[name="Phone Number"]').value;
    const email = document.querySelector('input[name="Email ID"]').value;

    alert(`First Name: ${firstname} Last Name: ${lastname} Phone Number: ${phno} Email ID: ${email}`);
  });
});
