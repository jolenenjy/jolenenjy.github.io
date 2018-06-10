$('.grid').masonry({
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.grid-item',
  // use element for option
  columnWidth: '.grid-sizer',
  gutter: '.gutter-sizer',
  percentPosition: true
})

// lottie.loadAnimation({
//   container: document.getElementById('illobg'), // the dom element that will contain the animation
//   renderer: 'svg',
//   loop: true,
//   autoplay: true,
//   path: 'wave.json' // the path to the animation json
// });