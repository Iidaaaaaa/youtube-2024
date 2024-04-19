//ボリューム関数
function volumeFn(vol) {
  let currentVol = player.getVolume();
  player.setVolume(vol);
}

//ボリュームイベント
let volumeBtn = document.querySelector("#volume");
let volumeTxt = document.querySelector("#volumeNum");
volumeBtn.addEventListener("change", function () {
  volumeFn(this.value);
});

//ミュートイベント
let onMuteBtn = document.querySelector("#mute");
onMuteBtn.addEventListener("click", function () {
  onMute();
  if (onMuteBtn.innerText === "ミュート") {
    onMuteBtn.innerText = "ミュート解除";
  } else {
    onMuteBtn.innerText = "ミュート";
  }
});
