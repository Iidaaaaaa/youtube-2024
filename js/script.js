var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// ①APIの読み込み

var player;
let youtubeID = "210R0ozmLwg";
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    videoId: youtubeID,
    playerVars: {
      //③パラメータの設定
      playsinline: 1,
      controls: 0,
    },
    onReady: function (event) {
      event.target.playVideo(); // プレイヤーが準備できたら自動的に再生
    },
    onStateChange: onPlayerStateChange,
  });
}

function onPlayerStateChange(event) {
  switch (event.data) {
    case YT.PlayerState.PLAYING:
      console.log("Video is playing");
      break;
    case YT.PlayerState.PAUSED:
      console.log("Video is paused");
      break;
    // 他の状態もここでハンドルできます
  }
}

let pauseBtn = document.querySelector(".Doplay");
let DoImage = document.querySelector(".DoImage");

let playState;
pauseBtn.addEventListener("click", function () {
  if (playState === 1) {
    playState = 0;
    player.playVideo();
    DoImage.src = "img/Stop.svg";
  } else {
    playState = 1;
    player.pauseVideo();
    DoImage.src = "img/Play.svg";
  }
});

//10秒前へイベント
let onePrevBtn = document.querySelector("#do10sPrev");
onePrevBtn.addEventListener("click", function () {
  let currentTime = player.getCurrentTime();
  player.seekTo(currentTime - 10);
});

//10秒後へイベント
let oneNextBtn = document.querySelector("#do10sNext");
oneNextBtn.addEventListener("click", function () {
  let currentTime = player.getCurrentTime();
  player.seekTo(currentTime + 10);
});

const MuteBtn = document.querySelector("#mute");
const MuteIMG = document.querySelector(".muteimg");
MuteBtn.addEventListener("click", function () {
  if (player.isMuted()) {
    player.unMute();
    console.log("ミュートしました");
    MuteIMG.src = "img/Mute.svg";
  } else {
    player.mute();
    console.log("ミュート解除");
    MuteIMG.src = "img/UnMute.svg";
  }
});
