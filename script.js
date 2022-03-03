function compute()
{
    //Create input variables
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value; //rate variable
    var years = document.getElementById("years").value; //years variable
    var interest = principal * years * rate /100; //interest variable
    var year = new Date().getFullYear()+parseInt(years);
    var amount = interest + principal; //total amount variable

    document.getElementById("result").innerHTML="If you deposit '<mark>'"+principal+"'</mark>',\<br\>at an interest rate of '<mark>'"+rate+"'</mark>'%\<br\>You will receive an amount of '<mark>'"+amount+"'</mark>',\<br\>in the year '<mark>'"+year+"'</mark>'\<br\>"
}

//Function that shows range slider value
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate.val").innerText=rateval;
}

//Function to make sure principal values aren't 0 or negative
function validateAmount(){
    var principal = document.getElementById("principal").value;
    var moreThanZero = parseInt(principal) > 0;
    if (!moreThanZero) {
        alert("Enter a positive number please");
        document.getElementById("principal").focus();
    }
}


        