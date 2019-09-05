const checkbox = document.querySelector('#check');
const label = document.querySelector('.check__text');
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
      let checked = checkbox.checked;
      output.textContent = !checked ? encrypt(text) : decrypt(text);
    });
  })();

  const encrypt = (text) => {
    return text;
  };

  const decrypt = (text) => {
    return text;
  };

  checkbox.addEventListener('change', (e) => {
    let checked = e.target.checked;
    label.textContent = !checked ? 'Encrypting...' : 'Decrypting...';
  });

});