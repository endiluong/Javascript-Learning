
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
        if (pB >= 10) {   //Prob comeup when number over 3 digit
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
                tempCacl = parseInt(pA) / parseInt(pB);
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

// Guest It Game
var b2A, b2B, XXX;
var count = 0;
var result = " ";

//func randoom
function RandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//
//
//
var randN, cond = "new";
function game() {

    //      
    //
    //
    //Kiem tra xem la lan New Game hay la Restart

    if (cond == "new") {
        b2A = prompt("Nhap A: ");
        b2B = prompt("Nhap B: ");
        check();
        randN = RandomInt(b2A, b2B);
        console.log("rand" + randN);
        cond = "process";
    } else {
        cond = "process";
        console.log("process cond check first: " + cond);
    }

    //Get user input and process
    //
    //

    XXX = prompt("Ban doan so may: ");
    document.getElementById("usrinp").innerHTML = ("Random from " + "<b>" + b2A + "</b>" + " to " + "<b>" + b2B + "</b>" + "<br>" + " User Selection is: " + "<b>" + XXX + "</b>");

    //Process
    //
    //
    if (XXX == randN) {
        result = (" Congraz, You win !, Randnumb is: " + randN);
        document.getElementById("rslt").innerHTML = result;
        cond = "win";
    }
    else {


        if (XXX > randN) {
            result = "RandNumb is Smaller, play again?" + "<br><br>" + "<b>" + (4 - count) + " Attempt left";
            document.getElementById("rslt").innerHTML = result;
            console.log("process cond check 2nd: " + cond);
        }
        else {
            result = "RandNumb is Bigger, play again? " + "<br><br>" + "<b>" + (4 - count) + " Attempt left";
            document.getElementById("rslt").innerHTML = result;
            console.log("process cond check 2nd: " + cond);
        }

    }
}

// Playagain or Start New ( On first Click)

function repeat() {
    if (cond == "win" || cond == "new") {
        reset();
        game();

    }
    else {
        if (count <= 3) {
            count += 1;
            game();
        }
        else {
            result = ("LOSE, dude !, randNumb is:" + "<b>" + randN + "</b>");
            document.getElementById("rslt").innerHTML = result;
            console.log(count);
            reset();
        }
    }
}

//Reset state
//
//
function reset() {
    cond = "new";
    count = 1;
    randN = 0;
    b2A = b2B = 0;
    result = "";
}


//check if input is not a Number 
//
//
//
function check() {
    if (isNaN(b2A) || isNaN(b2B)) {
        alert("Number Only Dude !!!!!!!!!!!!!!!");
        throw new Error("Input Number Only pleaz !");
    }
    else {
        b2A = Math.abs(b2A);
        b2B = Math.abs(b2B);
    }
}

