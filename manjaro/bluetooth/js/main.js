const btn_xfce = document.getElementById("toggleBtnxfce");
const btn_kde = document.getElementById("toggleBtnkde");
const gnome_kde = document.getElementById("toggleBtngnome");
const xfceblock = document.getElementById("xfce_block");
const kde_block = document.getElementById("kde_block");
const gnome_block = document.getElementById("gnome_block");

btn_xfce.addEventListener("click", () => {
    xfce_block.classList.toggle("hidden");
});

btn_kde.addEventListener("click", () => {
    kde_block.classList.toggle("hidden");
});
