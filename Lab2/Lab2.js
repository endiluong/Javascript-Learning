function ran() {
    var x = prompt("Input your Number: ");
    var a = Math.floor((Math.random() * 10) + 1);
    var result = "";

    if (x == a) {
        result = "Win";
    }
    else {
        result = "Lose";
    }


    document.getElementById("man").innerHTML = x;
    document.getElementById("cpu").innerHTML = a;
    document.getElementById("result1").innerHTML = result;
}

function phuongtrinh1() {
    var a = prompt("Input A: ");

    var b = prompt("Input B: ");

    var result = "";

    if (b != 0) {
        result = (-b / a);
    } else {
        if (a == 0 && b == 0) { result = "Vo So Nghiem"; }
        else {
            result = "Vo Nghiem";
        }
    }

    document.getElementById("vara").innerHTML = a;
    document.getElementById("varb").innerHTML = b;
    document.getElementById("result2").innerHTML = result;
}


function phuongtrinh2() {
    var a = prompt("Input A: ");

    var b = prompt("Input B: ");

    var c = prompt("Input C: ");

    var result = "", delta;
    var x1, x2;

    delta = ((b * b) - (4 * a * c));
    document.getElementById("vara2").innerHTML = a;
    document.getElementById("varb2").innerHTML = b;
    document.getElementById("varc").innerHTML = c;
    document.getElementById("delta").innerHTML = delta;


    if (a == 0) {
        if (b == 0) {
            if (c == 0) {
                result = "PTVSN";
            }
            else { result = "PTVN"; }
        } else {
            if (c == 0) { result = "Phuong trinh co nghiem bang 0" }
            else {
                x1 = -b / c;
                result = "Phuong trinh co 1 nghiem" + x1;
            }
        }
    }
    else {
        if (delta < 0) {
            result = "Phuong trinh vo nghiem";
        } else {
            if (delta == 0) {
                result = "Nghiem kep: " + (-b / (2 * a));
            }
            else {
                x1 = ((-b - Math.sqrt(delta)) / (2 * a));
                x2 = ((-b + Math.sqrt(delta)) / (2 * a));
                result = "PT co 2 nghiem phan biet X1= " + x1 + " va X2= " + x2;
            }
        }
    }//test

    document.getElementById("result3").innerHTML = result;


}
function snt() {
    var y = prompt("Input your Number: ");
    document.getElementById("y").innerHTML = y;
    var result = " La so nguyen to";

    for (var a = 2; a <=(y/2); a += 1) {
        console.log(a);
        if ((y % a) == 0) {        
            result = "Ko phai SNT 3 oi";
            break;
        }
    
    }

    document.getElementById("result4").innerHTML = result;
}







