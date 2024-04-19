const SearchList = document.querySelector(".searchlist");

function ytSearch(val) {
  const key = process.env.YOUTUBE_API_KEY; //自分のキーに書き換えます。
  const num = 10;
  const part = "snippet";
  const type = "video";
  const query = val;

  fetch(
    `https://www.googleapis.com/youtube/v3/search?type=${type}&part=${part}&maxResults=${num}&key=${key}&q=${query}&playsinline=1`
  )
    .then((data) => data.json())
    .then((obj) => {
      SearchList.innerHTML = "";
      //現在入っている<option>を全て削除
      for (let i in obj["items"]) {
        //各videoIdとタイトルを取得して変数に代入
        const ytId = obj["items"][i]["id"]["videoId"];
        const ytTitle = obj["items"][i]["snippet"]["title"];
        //optionを作成して、videoIdとtitleを所定の場所に設置し、要素を追加していく。
        const optionTag = document.createElement("option");
        optionTag.textContent = ytTitle;
        optionTag.setAttribute("value", ytId);
        SearchList.appendChild(optionTag);
      }
    });
}

const ytSearchBtn = document.querySelector("#searchBtn");
ytSearchBtn.addEventListener("click", function (e) {
  const ytSearchVal = document.querySelector("#ytSearch").value;
  const List = document.querySelector(".header__List");
  List.style.display = "block";
  e.preventDefault(); //検索ボタンの送信をストップしておく。
  ytSearch(ytSearchVal);
});
SearchList.addEventListener("change", function () {
  youtubeID = SearchList.value;
  if (player) {
    player.destroy();
  }
  onYouTubeIframeAPIReady();
});
