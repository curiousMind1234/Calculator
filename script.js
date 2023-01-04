var string = "";
var buttons = document.querySelectorAll("button");
Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (event) => {
        if (event.target.innerHTML == "=") {
            string = eval(string);
            document.querySelector("input").value = string;
        }       
        else if (event.target.innerHTML == "%") {
            var val = document.querySelector("input").value;
            document.querySelector("input").value =  val * 1/100;
        }
        else if (event.target.innerHTML == "AC") {
            string = "";
            document.querySelector("input").value = string;
        }
        else if (event.target.innerHTML == "CE") {
            var val = document.querySelector("input").value;
            document.querySelector("input").value = val.substring(0, val.length - 1);
        }    
        else if (event.target.innerHTML == "ln") {
            var val = document.querySelector("input").value;
            document.querySelector("input").value = Math.log(val);
        }
        else if (event.target.innerHTML == "lg") {
            var val = document.querySelector("input").value;
            document.querySelector("input").value = Math.log10(val);
        }
        else if (event.target.innerHTML == "sin") {
            var val = document.querySelector("input").value;
            document.querySelector("input").value = Math.sin(val);
        }
        else if (event.target.innerHTML == "cos") {
            var val = document.querySelector("input").value;
            document.querySelector("input").value = Math.cos(val);
        }
        else if (event.target.innerHTML == "tan") {
            var val = document.querySelector("input").value;
            document.querySelector("input").value = Math.tan(val);
        }
        else if (event.target.innerText == "x^2") {
            var val = document.querySelector("input").value;
            document.querySelector("input").value = Math.pow(val, 2);
        }
        else if (event.target.innerHTML == "x^3") {
            var val = document.querySelector("input").value;
            document.querySelector("input").value = Math.pow(val, 3);
        }
        else if (event.target.innerHTML == "√") {
            var val = document.querySelector("input").value;
            document.querySelector("input").value = Math.pow(val, 1 / 2);
        }
        else if (event.target.innerHTML == "1/x") {
            var val = document.querySelector("input").value;
            document.querySelector("input").value = 1 / val;
        }
        else if (event.target.innerHTML == "e") {
            document.querySelector("input").value =   2.71828182846;
        }
        else if (event.target.innerHTML == "π") {
            document.querySelector("input").value = 3.14159265359;
        }
        else if (event.target.innerHTML == "X!") {
            var val = document.querySelector("input").value;
            var i, num, f;
            f = 1
            num = val;
            for (i = 1; i <= num; i++) {
                f = f * i;
            }
            i = i - 1;
            document.querySelector("input").value = f;
        }
        else {
            console.log(event.target);
            string = string + event.target.innerHTML;
            document.querySelector("input").value = string;
        }
    });
});

var action = 1;
var basicCal = document.querySelector("#shuffle");
 basicCal.addEventListener("click", function(event) {
    if (action == 1){
        displayScientific();
        formatScientific();
        action = 2;
      }
      else {
         displayBasic();
         formatBasic();
         action = 1;
      }
    string = "";
   document.querySelector("input").value = string;
});

function displayBasic(){
    var temp = document.querySelectorAll("#myDIV");
        temp.forEach((key) => {
          key.style.display = "none";
        });
}

function displayScientific() {
  var temp = document.querySelectorAll("#myDIV");
        temp.forEach((key) => {
          key.style.display = "inline-block";
        });
  
}

function formatBasic() {
  document.body.children[1].style.width= "300px";
  document.body.children[1].querySelector("#text-input").style.width= "250px";
  document.body.children[1].querySelector("#equal").style.padding = "10px";
}

function formatScientific() {
    document.body.children[1].style.width= "380px";
  document.body.children[1].querySelector("#text-input").style.width= "318px";
  document.body.children[1].querySelector("#equal").style.padding = "12px 70px";
}



