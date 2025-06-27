const hammenu = document.querySelector(".ham-menu");
const offscreenmenu = document.querySelector(".screen-of-menu");
hammenu.addEventListener("click", () => {
  hammenu.classList.toggle("active");
  offscreenmenu.classList.toggle("active");
});

// ლოადერის ბოლოს ჩატვირთვის სიმულაცია
window.onload = function () {
  // ლოადინგის გვერდის დამალვა
  document.getElementById("loading").style.display = "none";

  // კონტენტის ჩვენება
  document.getElementById("content").style.display = "block";
};

window.onload = function () {
  // ხელოვნური დაგვიანება 3 წამით (3000ms)
  setTimeout(function () {
    // ლოადინგის გამორთვა
    document.getElementById("loading").style.display = "none";

    // კონტენტის ჩვენება
    document.getElementById("content").style.display = "block";
    // / 4. განვუახლოთ ფუნქციონირება
    document.body.style.pointerEvents = "auto"; // გაძლევთ შესაძლებლობას დააკლიკოთ.
    document.body.style.overflow = "auto"; // დართვით სკროლი
  }, 2000); // 3 წამი (3000 milliseconds)
};
