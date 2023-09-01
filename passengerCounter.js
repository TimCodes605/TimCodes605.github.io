let count = 0;
function increment ()
{
    count = count + 1;
    document.getElementById("count-el").innerText = count;
}

function save ()
{
    document.getElementById ("memo-el").textContent += (count + " - ");  
}
function reset ()
{
    document.getElementById("count-el").innerText = 0;
    count = 0;
}
function clearAll ()
{
    document.getElementById("count-el").innerText = 0;
    document.getElementById("memo-el").innerText = "Previous: "
    count = 0;
}


