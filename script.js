// b) i. onBlur for email validation
document.getElementById('email').addEventListener('blur', function() {
    const email = this.value;
    if (email && !email.includes('@')) {
        alert('Please enter a valid email address');
        this.focus();
    }
});

// b) ii. onFocus for email field
document.getElementById('email').addEventListener('focus', function() {
    this.style.backgroundColor = '#fff9c4';
});

// b) iii. onChange to convert text to uppercase
document.getElementById('studentName').addEventListener('change', function() {
    this.value = this.value.toUpperCase();
});

document.getElementById('fatherName').addEventListener('change', function() {
    this.value = this.value.toUpperCase();
});

document.getElementById('motherName').addEventListener('change', function() {
    this.value = this.value.toUpperCase();
});

// b) iv. Form submission with Bootstrap Modal
document.getElementById('studentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Show success modal
    const modal = new bootstrap.Modal(document.getElementById('successModal'));
    modal.show();
});

// Reset background color when email field loses focus
document.getElementById('email').addEventListener('blur', function() {
    this.style.backgroundColor = '';
});