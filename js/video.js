var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	console.log("Autoplay and loop are turned off")
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
	console.log("volume is updated");
});

document.querySelector("#pause").addEventListener("click", function () {
	video.pause();
	console.log("video is paused")
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log("video speed is " + video.playbackRate.toFixed(5));
});
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate / 0.9;
	console.log("video speed is " + video.playbackRate.toFixed(5));
});
document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime = video.currentTime + 10;
	console.log("video is at " + video.currentTime);
	if (video.currentTime > video.duration) {
		video.currentTime = 0;
		console.log("video is at " + video.currentTime);
	}
});
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted){
		video.muted = false;
		this.innerHTML = "Mute";
	console.log("Video unmuted");
	} else {
		video.muted = true;
		this.innerHTML = "Unmute";
		console.log("Video muted");
	}
});

document.querySelector("#slider").addEventListener("input", function() {
    video.volume = this.value / 100;
    document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
    console.log("Volume is " + video.volume * 100 + "%");
});
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
	console.log("video is in vintage mode");
});
document.querySelector("#orig").addEventListener("click", function() {
    video.classList.remove("oldSchool");
    console.log("video is in original mode");
});


// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

