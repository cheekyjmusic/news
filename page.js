function fullscreen() {
    if (!document.fullscreenElement) {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}
function goToNews(article){
    window.location.href = 'https://cheekyjmusic.github.io/news/read?article=' + article;
}
function redirect(url){
    window.location.href = url;
}

var settingsMenuOpened = false;
function settings(){
const settingsMenu = document.querySelector('.settings-container');
if (settingsMenuOpened === false){
settingsMenu.classList.add("settings-showing");
settingsMenuOpened = true;
} else {
settingsMenu.classList.remove("settings-showing");
settingsMenuOpened = false;
}
}
