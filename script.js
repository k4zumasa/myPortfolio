// tooltipを初期化
(function() {
    window.addEventListener("load", function() {
      var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
      var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
      });
    });
  })();

// popoverを初期化
(function() {
    window.addEventListener("load", function() {
        var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
        var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
            return new bootstrap.Popover(popoverTriggerEl)
      });
    });
  })();

// ダークUIと通常UIの切り替え処理
function changeTheme() {
    var currentTheme = document.getElementById("grandBody").getAttribute("data-bs-theme");
    console.log(currentTheme);

    if (currentTheme === "light") {
        document.getElementById("grandBody").setAttribute("data-bs-theme", "dark");
        document.getElementById("changeThemeButton").firstElementChild.innerText = "light_mode"

    } else {
        document.getElementById("grandBody").setAttribute("data-bs-theme", "light");
        document.getElementById("changeThemeButton").firstElementChild.innerText = "dark_mode"
    }
}

// クリップボードにメールアドレスをコピーする
function copyToClipboard(){
    navigator.clipboard.writeText("squier.classic.vibe.telecaster@gmail.com");
}

function changeTooltipText(){
    document.getElementById("mailButton").setAttribute("title","Copied!");
}