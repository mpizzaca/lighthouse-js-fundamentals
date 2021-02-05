for (let i = 100; i <= 200; i++) {
  let str = '';
  if (i % 3 === 0) { str += 'Loopy'; }
  if (i % 4 === 0) { str += 'Lighthouse'; }
  if (str === '') { console.log(i); }
  else { console.log(str); }
}
