const input = document.querySelector('#input');
const output = document.querySelector('#output');
const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
  'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
  'u', 'v', 'w', 'x', 'y', 'z'];
let cipherText = '';

window.addEventListener('load', () => {
  const runAlgorithm = (() => {
    let text = input.value;
    input.addEventListener('input', (key) => {
      text = input.value;
      output.textContent = encrypt(text);
    });
  })();

  const encrypt = (text) => {
    let cipherText = [];
    text.split('').forEach(letter => {
      if (/[a-zA-Z]$/g.test(letter)) {
        let index = alphabets.indexOf(`${letter.toLowerCase()}`);
        let cipherIndex = ((index + 3) % 26);
        cipherText.push(alphabets[cipherIndex]);
      } else {
        cipherText.push(letter);
      }
    });
    return cipherText.join('');
  };
});