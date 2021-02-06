function loopyLighthouse(range, multiples, words) {

  for (let i = range[0]; i <= range[1]; i++) {
    let str = '';
    if (i % multiples[0] === 0) { str += words[0]; }
    if (i % multiples[1] === 0) { str += words[1]; }
    if (str === '') { console.log(i); }
    else { console.log(str); }
  }
}
