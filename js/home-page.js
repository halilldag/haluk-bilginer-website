const navToggle = document.querySelector(".nav_toggle"),
navMenu = document.querySelector(".nav_menu");

navToggle.addEventListener("click", () => {
   navMenu.classList.toggle("show-menu");
   navToggle.classList.toggle("active");
})
   

let typed = new Typed(".profession_text", {
   strings: ["Usta Aktör", "Usta Yazar", "Usta Şahsiyet"],
   typeSpeed: 70,
   backSpeed: 70,
   loop: true
})

