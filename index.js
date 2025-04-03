document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault();
 
 
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const phone = document.getElementById('phone').value;
    const street = document.getElementById('street').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zip = document.getElementById('zip').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (email === '' || !/^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)) {
        alert("Please complete all the fields correctly. Enter a valid email.");
    } else {
        alert("Your form has been submitted!");
    }
    if (phone === '' || !(/^\d{3}-\d{3}-\d{4}$/).test(phone)) {
        alert("Please enter a valid phone number in the format 123-456-7890");
    } else {
        alert("Phone Number Submitted Successfully!");
    }
    //all other checks are handled in the HTML
    if (age < 18){
        alert('you have to be 18 or older');
    }
    else{
        alert('Feedback submitted successfully!');
    }
 });
 