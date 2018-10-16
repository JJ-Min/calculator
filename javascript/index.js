(function(){
  console.log('쓸내용');
})();

var one = document.getElementById('one');/**/
console.log(one);

var two = document.getElementById('two');/**/
console.log(two);

var plus = document.getElementById('plus');/**/
console.log(plus);

var equal = document.getElementById('equal');/**/
console.log(equal);

var input = document.querySelector('.input_box');
console.log(input)





one.addEventListener('click', function() {
 input.innerHTML += 1;

});
two.addEventListener('click', function() {
 input.innerHTML += 2;

});
plus.addEventListener('click', function() {
 input.innerHTML += '+';

});
equal.addEventListener('click', function() {
 input.innerHTML = eval(input.innerHTML);

});
