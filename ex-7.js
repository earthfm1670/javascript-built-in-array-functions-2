function isPalindrome(string) {
  // Start coding here
  return string.split("").reverse().join("") === string;
}
//ทบทวน: จำการกลับด้านstring ว่าต้องใช้ split reverse join
//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
