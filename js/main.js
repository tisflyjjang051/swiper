// const num = 10;
// const jjang = {
//   name: "장성호",
//   age: 20,
//   weight: 80,
//   hobby: {
//     movie: 80,
//     fising: 20,
//   },
// };

const swiper = new Swiper(".main-visual", {
  speed: 1000,
  loop: true,
  effect: "cube",
  pagination: {
    el: ".main-visual__pagination",
    type: "bullets",
  },
});
