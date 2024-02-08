const output = document.querySelector(".output");
const btns = document.querySelectorAll(".btn");
const cutBtn = document.querySelector(".cut-btn");
cutBtn.addEventListener("click", (e) => {
  let exp = output.value;
  if (exp.length != 0) exp = exp.slice(0, exp.length - 1);
  output.value = exp;
});
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.innerHTML === "=") {
      result();
    } else if (e.target.innerHTML === "AC") {
      output.value = "";
    } else {
      update(e.target.innerHTML);
    }
  });
});
const update = (value) => {
  let s = output.value + value;
  output.value = s;
};
const result = () => {
  try {
    const val = eval(output.value);
    output.value = val;
  } catch (error) {
    alert("Invalid syntax");
  }
};
