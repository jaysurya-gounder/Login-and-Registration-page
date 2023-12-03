/*  toggle Login page to Resgistration page */

function openregistration() {
    document.querySelector('.section').classList.remove('shown');
    document.querySelector('.section-reg').classList.remove('hidden');
}

function closepage() {
    document.querySelector('.section').classList.add('shown');
    document.querySelector('.section-reg').classList.add('hidden');
}

/* User Login*/

/* array to store user data */
let users = [];

console.log(users)

/* function to handle registration */
document.getElementById('signup-ctn').addEventListener('submit', (event) => {
    event.preventDefault();

    let fname = document.getElementById('fname-inp').value;
    let lname = document.getElementById('lname-inp').value;
    let email = document.getElementById('email-inp').value;
    let password = document.getElementById('password-inp').value;
    let cpassword = document.getElementById('confirm-inp').value;

    /* Check if the email is already registered */
    if (users.some(user => user.email === email)) {
        document.getElementById('fail').style.display = "flex";
        setTimeout(() => {
            document.getElementById('fail').style.display = "none";
        },5000);
        document.getElementById('email-inp').value = "";
    } else {
        users.push({ fname, lname, email, password });
        document.getElementById('success').style.display = "flex";
        document.getElementById('signup-ctn').reset();
        setTimeout(() => {
            document.getElementById('success').style.display = "none";
        },5000);
    }
});

/* function to handle login */
document.getElementById('main').addEventListener('submit', (event) => {
    event.preventDefault();

    let email = document.getElementById('email-box').value;
    let password = document.getElementById('password-box').value;

    /* Check if the username and password match */
    let user = users.find(user => user.email === email && user.password === password);
    if (user) {
        alert('Login successful. Welcome, ' + user.fname + ' ' + user.lname + '!');
        document.getElementById('main').reset();
        
    } else {
        alert('Incorrect username or password. Please try again.');
        document.getElementById('main').reset();
    }
});