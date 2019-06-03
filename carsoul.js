const carousel = document.querySelector(".grid-carousel");
const slides = document.querySelectorAll(".grid-carousel__item");
const leftButton = document.querySelector(".js-left");
const rightButton = document.querySelector(".js-right");

const getOrder = elem => {
  const styles = getComputedStyle(elem);
  const orderValue = styles.order;
  const order = parseInt(orderValue);
  return order;
};

const moveRight = () => {
  slides.forEach(function(slide) {
    order = getOrder(slide);

    if (order == 2) {
      slide.classList.add("featured");
    } else {
      slide.classList.remove("featured");
    }

    if (order < slides.length) {
      slide.style.order = order += 1;
    } else {
      slide.style.order = 1;
    }
  });
};

const moveLeft = () => {
  slides.forEach(function(slide) {
    order = getOrder(slide);

    if (order == 4) {
      slide.classList.add("featured");
    } else {
      slide.classList.remove("featured");
    }

    if (order > 1) {
      slide.style.order = order -= 1;
    } else {
      slide.style.order = slides.length;
    }
  });
};

leftButton.addEventListener("click", () => {
  moveLeft();
});

rightButton.addEventListener("click", () => {
  moveRight();
});
