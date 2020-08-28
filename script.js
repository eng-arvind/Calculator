function getHistory()
 {
   return document.getElementById("history-value").innerHTML;  
}
function printHistory(nm) {
    document.getElementById("history-value").innerHTML=nm;
}
function getOutput()
{
    return document.getElementById("output-value").innerHTML;
}
function printOutput(nm)
{
    document.getElementById("output-value").innerHTML=getFormattedNumber(nm);
}
function getFormattedNumber(nm)
{
    if( nm=="-")
    {
        return "";
    }
    if(nm=="")
    return "";
    var n=Number(nm);
    var vl=n.toLocaleString("en");
    return vl;
}
function reverseNumberFormate(nm)
{
    return Number(nm.replace(/,/g,''));
}
var operator =document.getElementsByClassName("op");
for(var i=0;i<operator.length;i++)
{
    operator[i].addEventListener('click',function() {
        
        if(this.id=="clear")
        {
            printHistory("");
            printOutput("");
        }
        else if(this.id=="back")
        {
            var output = reverseNumberFormate(getOutput()).toString();
            if(output)
            {
                output = output.substr(0,output.length-1);
                printOutput(output);
            }
        }
        else
        {
            var output = getOutput();
            var history =getHistory();
            if(output=="" && history!="")
            {
                if(isNaN(history[history.length-1]))
                {
                    history = history.substr(0,history.length-1);
                }
            }
            if(output!="" || history!="")
            {
                output =reverseNumberFormate(output);
                history =history+output;
                if(this.id=="equal")
                {
                    var result  = eval(history);
                    printOutput(result);
                    printHistory("");
                }
                else
                {
                    history = history +this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    });
}
var num = document.getElementsByClassName("num");
for(var i=0;i<num.length;i++)
{
    num[i].addEventListener('click',function()
    {
        var output = reverseNumberFormate(getOutput());
        if(output!=NaN)
        {
            output=output+this.id;
            printOutput(output);
        }
    });
}