const is_palindrome = (candidate => {
    const re = /[\W_]/g;
    const lowRegStr = candidate.toLowerCase().replace(re, '');
    const reverseStr = lowRegStr.split('').reverse().join('');
    const palindrom_val = reverseStr === lowRegStr ? true : false;
    return palindrom_val;
});

module.exports = is_palindrome;
