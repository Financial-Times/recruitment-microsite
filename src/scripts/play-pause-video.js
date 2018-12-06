var playButton = document.getElementById('play-pause');
var video = document.getElementById('recruitment-video');

video.addEventListener('click', function () {
	if (video.paused == true) {
		video.play();

		playButton.className += ':disabled';
	} else {
		video.pause();

		playButton.className = 'play-button';
	}

});

playButton.addEventListener('click', function () {
	if (video.paused == true) {
		video.play();

		playButton.className += ':disabled';
	} else {
		video.pause();

		playButton.className = 'play-button';
	}

});
