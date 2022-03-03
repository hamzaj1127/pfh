var pennies, dollars, quarters, dimes, nickels

function Submitbtn() {
    pennies = document.getElementById("pennyInput").value

    dollars = Math.trunc(pennies / 100).toFixed(0)
    document.getElementById("dollars").innerHTML = dollars
    pennies %=100

    quarters = Math.trunc(pennies / 25).toFixed(0)
    document.getElementById("quarters").innerHTML = quarters
    pennies %=25
    
    dimes = Math.trunc(pennies / 10).toFixed(0)
    document.getElementById("dimes").innerHTML = dimes
    pennies %=10

    nickels = Math.trunc(pennies / 5).toFixed(0)
    document.getElementById("nickels").innerHTML = nickels
    pennies %=5


    document.getElementById("pennies").innerHTML = pennies
    
}

    function ClearResults() {
        document.getElementById("pennyInput").value = ""
        document.getElementById("dollars").innerHTML = "";
        document.getElementById("quarters").innerHTML = "";
        document.getElementById("dimes").innerHTML = "";
        document.getElementById("nickels").innerHTML = "";
        document.getElementById("pennies").innerHTML = "";

    }