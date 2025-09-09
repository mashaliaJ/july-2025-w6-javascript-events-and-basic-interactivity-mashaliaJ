const button = document.getElementById("btn");
    button.onclick = function () {
    document.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    };

    
    const text = document.getElementById("pictures");
    text.onmouseover = function () {
    text.style.color = "pink";
    text.style.fontWeight = "bold";
    };
    text.onmouseout = function () {
    text.style.color = "black";
    text.style.fontWeight = "normal";
    };

    const form = document.getElementById("form");
    const email = document.getElementById("email");
    const errorMessage = document.getElementById("errorMessage");

    form.onsubmit = function (e) {
        if (!email.value) {
            e.preventDefault(); // Prevent form submission
            errorMessage.textContent = "Email is required!";
        }
    }; 
