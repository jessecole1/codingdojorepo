console.log("page loaded...");

function startPreview(vid) {
    vid.play();
}
function endPreview(vid) {
    vid.pause();
    vid.currentTime = 0;
}