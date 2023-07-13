var a=parseInt(prompt("Enter a 1st number"));
var b=parseInt(prompt("Enter a 2nd number"));
var op=(prompt("Enter a operator"));

document.getElementById("1st").textContent="The First value is  '"+(a)+"'";
document.getElementById("2nd").textContent="The Second value is  '"+(b)+"'";
document.getElementById("3rd").textContent="The Operator is  '"+(op)+"'";

switch(op)
{
    case '+' : document.getElementById("result").textContent="Result = "+(a+b); break;
    case '-' : document.getElementById("result").textContent="Result = "+(a-b); break;
    case '*' : document.getElementById("result").textContent="Result = "+(a*b); break;
    case '/' : document.getElementById("result").textContent="Result = "+(a/b); break;
    case '%' : document.getElementById("result").textContent="Result = "+(a%b); break;
    default : document.getElementById("result").textContent="Wrong Operator..!"; break;
}
