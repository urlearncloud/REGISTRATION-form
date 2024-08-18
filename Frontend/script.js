function submitForm() {
    event.preventDefault();

    // Get form data
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const country = document.getElementById('country').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    

    // Create request object
    const xhr = new XMLHttpRequest();

    // Set up request
    xhr.open('POST', 'https://vu3oyrhhl1.execute-api.ap-south-1.amazonaws.com/prod/register', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    // Set up response handler
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                alert('Registration successful!');
                document.getElementById('firstname').value = '';
                document.getElementById('lastname').value = '';
                document.getElementById('country').value = '';
                document.getElementById('email').value = '';
                document.getElementById('phone').value = '';
                
            } else {
                alert('Registration failed: ' + xhr.responseText);
            }
        }
    };

    // Send request
    xhr.send(JSON.stringify({
        firstname: firstname,
        lastname: lastname,
        country: country,
        email: email,
        phone: phone,
        
    }));
}
