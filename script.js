

//Button function
function showMessage() {
    document.getElementById("message").innerText = "Welcome To Coconut  Lounge";
}

//Form Validation
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    if (name == "" || email == "") {
        alert("Please fill all fields");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}

function reserveTable() {
    alert("Table reserved successfully! Our team will contact you shortly.");
}

// Mobile Menu Toggle
function toggleMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
}

