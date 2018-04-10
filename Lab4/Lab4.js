var h, m, s;
var t, r;

function start() {
    updt();

    t = setInterval(updt, 1000);

    //set timeout reload    
    r = setTimeout(reload, 5000);

    console.log("start timeout: " + r);
    console.log("start timeout: " + t);
}


function updt() {
    var date = new Date();
    h = date.getHours();
    m = date.getMinutes();
    s = date.getSeconds();
    document.getElementById("clock").innerText = h + ":" + m + ":" + s;
}

function reload() {
    alert("Reloaded");
    location.reload();
}

//stopbtn

function stop() {
    console.log("stop timeout: " + r);
    console.log("stop timeout: " + t);

    var s1 = clearTimeout(r);
    var s = clearTimeout(t);

}


function open() {
    var myWindow = window.open("", "myWindow", "height=(window.innerHeight-100),width=(window.innerWidth-100)");

}
function close() {
    myWindow.close();
}

//data shop basic
var total = 0;

var table = document.getElementById("table");


var evenHandlerFactory = function(productName, productPrice){
    console.log("aaaaaaaaaaa");
    return function(e){
        console.log(productName + ": " + productPrice);
    }
}

for (var i = 0; i < table.rows.length; i++) {
    var productName = table.rows[i].cells[0].innerText;
    var productPrice = table.rows[i].cells[1].innerText;
    table.rows[i].cells[2].onclick = evenHandlerFactory(productName, productPrice);
}

// for (var i = 0; i < table.rows.length; i++) {
//     var productName = table.rows[i].cells[0].innerText;
//     var productPrice = table.rows[i].cells[1].innerText;
//     table.rows[i].cells[2].onclick = function(){
//         console.log(productName + ": " + productPrice);
//     };
// }



// function buy(name,price){
//     total+=price;

//     var newE=document.createElement("p");
//     newE.setAttribute("id","newE");
//     newE.setAttribute("class","shop");

//     document.getElementById("cart").appendChild(newE);
//     newE.appendChild(document.createTextNode(name+"-----------"+price));

//     var text=document.getElementById("newE");
//     console.log(text);

// }


