const moveto = new MoveTo({
  duration: 3000,
});
// new MoveTo({
//   tolerance: 0,
//   duration: 800,
//   easing: 'easeOutQuart',
//   container: window
// })
const link=document.querySelectorAll('a');
link.forEach(aa=>moveto.registerTrigger(aa))

const btn=document.querySelectorAll('button');
btn.forEach(bb=>moveto.registerTrigger(bb))

