
// var result="000";

// var btn7 = document.getElementById("btn7");
// btn7.addEventListener("click", hamxulikhibam);



// function hamxulikhibam(e) {

//     document.getElementById("screen").innerHTML= result;
// }
var c;
var result = " ";
var tempCacl = 0;
// var temp = 0;
// var tempV = 0;
// var ta = 0;

var showList = document.getElementsByClassName("btn");
var btnList = document.getElementsByClassName("btn-num");
var OPList = document.getElementsByClassName("btn-op");
var pA = 0, pB = 0, temp = 0;



for (var i = 0; i < btnList.length; i += 1) {
    btnList[i].addEventListener("click", xuli);

}

for (var i = 0; i < OPList.length; i += 1) {
    OPList[i].addEventListener("click", xuliop);
}


for (var i = 0; i < showList.length; i += 1) {
    showList[i].addEventListener("click", show);
}

var show = " ";
function show(e) {
    show = show + (e.target.textContent);
    // var pheptoan= str.show((show.length-1),show.length);

    document.getElementById("show").innerHTML = show;
    // console.log(" show: " + show);
}

function xuli(e) {
    result = result + (e.target.textContent);
    document.getElementById("show_result").innerHTML = parseInt(result);
    console.log(" xuli: " + result);

    if (pA == 0) {
        pA = result;
        console.log("pA:  " + pA);
    }
    else {

        pB = result;
        if (pB >= 10) 
        {   //Prob comeup when number over 3 digit
            pA = parseInt(pB) + tempCacl;
            console.log("pB:  " + pB);
            console.log("pA ritenao:  " + pA);
        }
    }

}

function xuliop(e) {

    //de reset man hinh nhap so
    result = " ";
    document.getElementById("show_result").innerHTML = result;


    //
    //
    //
    // b la lay phep toan
    var b = e.target.textContent;
    if (b != "=")
        c = b;
    // console.log("phep toan nhan dc" + c);
    // } else { console.log("bbb" + b); }
    // console.log("c cuoi cung" + c);


    //set result = 0 de hien len show_result cho dep
    //
    result = 0;
    //thuc hien phep toan
    // var tempCacl = 0;

    console.log("show tempCalc:  " + tempCacl);
    if (b == "=") {
        console.log("thuc hien");
        switch (c) {
            case "+":
                console.log("check tempCacl " + tempCacl + " " + typeof (tempCacl));
                // console.log("check pA " + pA + " " + typeof (pA));
                // console.log("check pB " + pB + " " + typeof (pB));
                tempCacl = parseInt(pA) + parseInt(pB);
                console.log("KQ phep toan____ " + tempCacl);
                document.getElementById("show_result").innerHTML = tempCacl;
                break;
            case "-":
                tempCacl = parseInt(pA) - parseInt(pB);
                document.getElementById("show_result").innerHTML = tempCacl;
                break;
            case "X":
                tempCacl = parseInt(pA) * parseInt(pB);
                document.getElementById("show_result").innerHTML = tempCacl;
                break;
            case "/":
                tempCacl = parseInt(pA)/parseInt(pB);
                document.getElementById("show_result").innerHTML = tempCacl;
                break;
            default: break;
            // case "=":
            //     console.log("KQpheptoan: " + tempCacl);
            //     document.getElementById("show_result").innerHTML = tempCacl;
            //     break;
        }

    }
}