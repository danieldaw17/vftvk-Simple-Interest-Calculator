
function compute() {

    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years / 100;
    var year = new Date().getFullYear()+parseInt(years);

    if (!principal || principal < 1) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }

    document.getElementById("result").innerHTML = `
        If you deposit <span style="background-color:yellow;"><b>${principal}</b></span>,
        at an interest rate of <span style="background-color:yellow;"><b>${rate}</b></span>.
        You will receive an amount of <span style="background-color:yellow;"><b>${interest}</b></span>,
        in the year <span style="background-color:yellow;"><b>${year}</b></span>
    `;
}

function updateRate() {
    
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;

}
