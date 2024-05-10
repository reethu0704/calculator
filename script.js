let equalPressed = 0;
let buttonInput = document.querySelectorAll(".button");
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

window.onload = () => {
  input.value = "";
};

buttonInput.forEach((buttonClass) => {
  buttonClass.addEventListener("click", () => {
    input.value += buttonClass.value;
  });
});

equal.addEventListener("click", () => {
  let inputValue = input.value;
  try {
    let solution = eval(inputValue);
    if (Number.isNaN(solution) || !Number.isFinite(solution)) {
      throw new Error("Invalid mathematical expression");
    }
    if (Number.isInteger(solution)) {
      input.value = solution;
    } else {
      input.value = solution.toFixed(4);
    }
  } catch (error) {
    alert(error.message);
  }
});

clear.addEventListener("click", () => {
  input.value = "";
});

erase.addEventListener("click", () => {
  input.value = input.value.substr(0, input.value.length - 1);
});

square.addEventListener("click", () => {
    input.value = Math.pow(input.value , 2);
  });

  root.addEventListener("click" ,() => {
    input.value = Math.pow(input.value , 1/2)
  });

  cuberoot.addEventListener("click" ,() => {
    input.value = Math.pow(input.value , 1/3)
  });

//   sin.addEventListener("click" , () => {
//      input.value = Math.sin(input.value)
//   });

//   cos.addEventListener("click" , () => {
//     input.value = Math.cos(input.value)
//  });

//  tan.addEventListener("click" , () => {
//   input.value = Math.tan(input.value)
// });