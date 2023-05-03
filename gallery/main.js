const current = document.getElementById("current")
// const current = document.querySelector('#current');
const imgs = document.querySelectorAll(".imgs img")
//.mgs img 상단 class 이름이 imgs 이고 img태그들을 가져오고 싶을 때 사용

imgs.forEach((img) => img.addEventListener("click", imgClick))
//forecch 함수를 사용해 img를 누르면 발생

function imgClick(e) {
  imgs.forEach((img) => (img.getElementsByClassName.opacity = 1))

  current.src = e.target.src

  current.classList.add("fade-in")
  //classlist에 추가 faid-in이라는 css class 추가 current는 메인 화면

  setTimeout(() => current.classList.remove("fade-in"), 500)
  //시간만큼 지나면 remove됨
  e.target.style.opacity = 0.4
}
