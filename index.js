// ==============service toggel
const serviceButtons = document.querySelectorAll(".service__item");
const serviceDetails = document.querySelector(".services__right");
// console.log(serviceDetails)

const getService = (category) => {
  const details = servicesData.find((item) => item.category === category);
  serviceDetails.innerHTML = `
  <h3>${details.title}</h3>
  ${details.descritption
    .map((paragraph) => "<P>" + paragraph + "<p>")
    .join(" ")}
  `;
  console.log(details);
};
const removeClass = () => {
  serviceButtons.forEach((button) => {
    button.classList.remove("active");
  });
};
serviceButtons.forEach((item) => {
  item.addEventListener("click", () => {
    removeClass();
    const serviceclass = item.classList[1];
    console.log(serviceclass);
    getService(serviceclass);
    item.classList.add("active");
  });
});
getService("frontend");

// ============mixitup======
const containerEl = document.querySelector(".projects__container");
var mixer = mixitup(containerEl, {
  animation: {
    enable: false,
  },
});
mixer.filter("*");
// ===========swiper js started===
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
// ============nav bar toooggle=======
const opneBtn = document.querySelector(".nav__toggle-open");
const closeBtn = document.querySelector(".nav__toggle-close");
opneBtn.addEventListener("click", () => {
  document.querySelector(".nav__menu").style.display = "block";
  document.querySelector(".nav__toggle-close").style.display = "inline-block";
  document.querySelector(".nav__toggle-open").style.display = "none";
});
closeBtn.addEventListener("click", () => {
  document.querySelector(".nav__menu").style.display = "none";
  document.querySelector(".nav__toggle-close").style.display = "none";
  document.querySelector(".nav__toggle-open").style.display = "inline-block";
});
