const dob = document.querySelector("#dob");
const luckyNumber = document.querySelector("#lucky-num");
const checkBtn = document.querySelector("#check-btn");
const output = document.querySelector("#output");

const calculateSum = (bday) => {
  bday = bday.replaceAll("-", "");
  bday = parseInt(bday);
  let sum = 0;
  while (bday != 0) {
    sum += bday % 10;
    bday = Math.floor(bday / 10);
  }
  return sum;
};

const checkLucky = (bday, lNum) => {
  return bday % lNum === 0;
};

checkBtn.addEventListener("click", () => {
  const dateOfBirth = dob.value;
  const lNum = luckyNumber.value;
  if (dateOfBirth === "" || lNum === "") {
    alert("pls fill all the fields");
  } else {
    const sum = calculateSum(dateOfBirth);
    const lucky = checkLucky(sum, lNum);
    if (lucky) {
      output.innerText = "Your Birthday is lucky 🥳";
    } else {
      output.innerText = "Your Birthday is not that lucky 😐";
    }
  }
});
