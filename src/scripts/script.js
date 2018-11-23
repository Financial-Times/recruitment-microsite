var uploadInput = document.getElementById('upload-cv');

uploadInput.addEventListener('change', function(event) {
    if (uploadInput.files[0].size / 1024 >= 300) {
        alert('We have so many applications, and so little space to store them!  Please provide a smaller file version, less than 300kb.  If this is a problem, please let us know you were unable to send your CV when we respond to your form submission');
    }
});
