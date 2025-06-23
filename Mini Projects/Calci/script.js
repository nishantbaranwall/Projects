let input = document.getElementById("inputBox");
let buttons = document.getElementById("buttons");

let string = "";

buttons.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    let val = e.target.innerText;

    if (val === "=") {
      try {
        string = eval(string);
      } catch {
        string = "Error";
      }
    }
    else if (val === "AC") {
      string = "";
    }
    else if (val === "C") {
      string = string.slice(0, -1);
    }
    else if (val === "^") {
      string += "**";
    }
    else if ("+-*/".includes(val)) {
      if ("+-*/".includes(string.slice(-1))) {
        string = string.slice(0, -1) + val;
      } else {
        string += val;
      }
    }
    else if (val === "%") {
      string += "/100";
      string = eval(string);
    }
    else {
      string += val;
    }

    input.value = string;
  }
});
