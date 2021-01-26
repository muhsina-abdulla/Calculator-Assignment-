function display(a)
{
    document.getElementById("result").value += a;
}

function calculate()
{
    var x = eval(document.getElementById("result").value);
    document.getElementById("result").value = x;
}

function clearScreen()
{
    
    document.getElementById("result").value = "";

}