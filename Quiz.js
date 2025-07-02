const question = "日本の首都はどこ？";
const choices = ["大阪", "京都", "東京", "札幌"];
const correct = "東京";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("question").textContent = question;
  const buttons = document.querySelectorAll(".choice");
  buttons.forEach((button, index) => {
    button.textContent = choices[index];
    button.onclick = () => {
      const result = button.textContent === correct ? "正解！" : "不正解…";
      document.getElementById("result").textContent = result;
    };
  });
});
