let value="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!#@%&"
let result=" ";
function generate(){
for(var i=1;i<=9;i++){
    var char= Math.floor(Math.random()*value.length);
    result+=value.charAt(char);
    document.getElementById("password").value=result;
}}