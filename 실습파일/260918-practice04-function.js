// 1~100 사이 랜덤 숫자 하나
let getTarget = Math.floor(Math.random() * 100) + 1;
console.log(getTarget);
let numberOfTest = 0;
while (true) {
  numberOfTest += 1;
  let setInput = Number(prompt("1~100까지의 숫자 중 하나를 입력하세요"));

  console.log(getTarget);
  console.log(setInput);
  if (isNaN(setInput)) {
    alert("숫자를 제대로 입력하세요");
  }

  if (setInput < getTarget) {
    alert("해당 숫자보다 작습니다");
  } else if (setInput > getTarget) {
    alert("해당 숫자보다 큽니다");
  }

  if (setInput === getTarget) {
    alert(`정답입니다! ${numberOfTest}번 만에 맞추셨습니다`);
    break;
  }
}
