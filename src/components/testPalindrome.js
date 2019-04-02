import is_palindrome from "./palindrome";

const testPalindrome = (() => {
    const sentence = document.getElementById('palindrome');
    const button = document.getElementById('checkPalindrome');
    const palindromeConteiner = document.querySelector('.zad-1 .container');

    button.onclick = () => {
        let checkPalindrome = sentence.value;
        let result = is_palindrome(checkPalindrome);
        let response = document.createElement("p");
        
        if (result === true) {
          response.innerText = `${checkPalindrome} is Palindrom`;
        } else {
          response.innerText = `${checkPalindrome} is not Palindrom`;
        }
        palindromeConteiner.insertAdjacentElement('beforeend', response);
      }
});

export default testPalindrome;