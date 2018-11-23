var uploadInput = document.getElementById('upload-cv');

uploadInput.addEventListener('change', function(event) {
    if (uploadInput.files[0].size / 1024 >= 300) {
        alert('We have so many applications, and so little space to store them. Please provide a smaller version of your CV which size would be less that 300KB. Thank you for your understanding.');
    }
});