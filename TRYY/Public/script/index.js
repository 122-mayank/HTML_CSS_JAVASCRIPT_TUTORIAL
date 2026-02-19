document
  .querySelector('#loginForm')
  .addEventListener('submit', async (e) => {

    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!email || !password) {
        alert('Please enter email and password!');
        return; // ⭐ stop here
    }

    try {

        const response = await fetch('/submit_form', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();
        console.log(data);

        alert(data.message);

    } catch (error) {
        console.log(error);
    }

});
