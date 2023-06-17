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