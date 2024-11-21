var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	console.log("Autoplay and loop are turned off")
});

document.querySelector("#play").addEventListener("click", function() {
	video.play()
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
	console.log("volume is updated");
});

document.querySelector("#pause").addEventListener("click", function () {
	video.pause()
	console.log("video is paused")
});




// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

