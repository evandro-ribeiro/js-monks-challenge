document.getElementById("menu_hamburguer").addEventListener("click", () => {
    const menu = document.getElementById("menu_aberto");
    const arteBanner = document.getElementById("banner_monks_logo");
    menu.classList.toggle("hidden");
    arteBanner.classList.toggle("hidden");
});

document.getElementById("fechar_menu").addEventListener("click", () => {
    const menu = document.getElementById("menu_aberto");
    const arteBanner = document.getElementById("banner_monks_logo");
    menu.classList.toggle("hidden");
    arteBanner.classList.toggle("hidden");
});

