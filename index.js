const questions = document.querySelectorAll(".Ques");
// const anwsers = document.querySelectorAll(".anwser");

questions.forEach((Ques)=> {
  const btn = Ques.querySelector(".fa")

  btn.addEventListener("click", ()=> {
    Ques.classList.toggle("show-text")
  })
})