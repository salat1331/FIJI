function show ( name ){
  var elem = document.getElementById(name); 
  if ( elem ) 
    elem.style.display = "block";
}
function sver ( name ){
  var elem = document.getElementById(name); 
  if ( elem ) 
    elem.style.display = "none";
}
function check()
{
if ( calc.answer.value == "���������" )
     alert("���������!");
else alert("�����������!");
}
