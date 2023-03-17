var password = document.getElementById("password");
var strengthBar = document.getElementById("password_strength");

let lowerCase = /[a-z]/g;
let upperCase = /[A-Z]/g;
let digits = /[0-9]/g;
let symbols = /[^a-zA-Z-0-9]/g;

let strong_pass = {
  lowerCase: 8,
  upperCase: 3,
  digits: 2,
  symbols: 2,
};

let medium_pass = {
  lowerCase: 5,
  upperCase: 1,
  digits: 1,
  symbols: 1,
};


password.addEventListener("input", function () {
  let pass = this.value;
  var lc_len =
    pass.match(lowerCase) !== null ? pass.match(lowerCase).length : 0;
  var uc_len =
    pass.match(upperCase) !== null ? pass.match(upperCase).length : 0;
  var d_len = pass.match(digits) !== null ? pass.match(digits).length : 0;
  var sym_len = pass.match(symbols) !== null ? pass.match(symbols).length : 0;

  var strength, strength_text, strengthClass;

  if (
    lc_len >= strong_pass.lowerCase &&
    uc_len >= strong_pass.upperCase &&
    d_len >= strong_pass.digits &&
    sym_len >= strong_pass.symbols
  ) {
    strength = 100;
    strength_text = "Şifrə güclüdür! 100%";
    strengthClass = "bg-primary";
  } else if (
    lc_len >= medium_pass.lowerCase &&
    uc_len >= medium_pass.upperCase &&
    d_len >= medium_pass.digits &&
    sym_len >= medium_pass.symbols
  ) {
    strength = 66.66;
    strength_text = "Şifrə yaxşıdır! 66%";
    strengthClass = "bg-success";
  } else if (pass.length > 0) {
    strength = 33.33;
    strengthClass = "bg-danger";
    strength_text = "Şifrə zəifdir! 33%";
  } else {
    strength = 0;
    strengthClass = "";
    strength_text = "";
  }

  var strengthBar_progress = strengthBar.querySelector(".progress-bar");

  strengthBar_progress.classList.remove("bg-primary");
  strengthBar_progress.classList.remove("bg-success");
  strengthBar_progress.classList.remove("bg-danger");

  if (strengthClass !== "") strengthBar_progress.classList.add(strengthClass);

  strengthBar_progress.style.width = strength + "%";
  strengthBar_progress.setAttribute("aria-valuenow", strength);

  if (strength_text !== "")
    strengthBar.querySelector(".progress-bar").innerText = strength_text;
});
