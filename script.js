function Solve(val) {
   var v = document.getElementById('res');
   v.value += val;
}
function Result() {
   try{
   var num1 = document.getElementById('res').value;
   var num2 = eval(num1);
   document.getElementById('res').value = num2;
}
catch(err){
   document.getElementById('res').value="error;"
}
}
function Clear() {
   var inp = document.getElementById('res');
   inp.value = '';
}
function Back() {
   var ev = document.getElementById('res');
   ev.value = ev.value.slice(0,-1);
}