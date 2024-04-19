//再生スピード関数
function playSpeed(num) {
  //setPlaybackRateが再生スピードをセットするメソッド
  console.log(num);
  player.setPlaybackRate(num);
  player.playVideo();
}

//再生スピードイベント
let speedBtn = document.querySelector("#doSpeed");
speedBtn.addEventListener("change", function () {
  //数値でないと効かないので、文字列から数値に変換
  playSpeed(parseFloat(speedBtn.speed.value));
});
