const targets = document.querySelectorAll('.hidden');

function checkScrollAnim() {
  targets.forEach(target => {
    const rect = target.getBoundingClientRect();
    // 1. 화면에 들어오면 올라오며 보이기
    if (rect.top < window.innerHeight - 100 && rect.bottom > 0) {
      target.classList.add('active_ani');
      target.classList.remove('leave_ani');
    }
    // 2. 화면에서 벗어나면 아래로 내려가며 사라지기
    else {
      target.classList.remove('active_ani');
      target.classList.add('leave_ani');
    }
  });
}

// 스크롤할 때마다 실행
window.addEventListener('scroll', checkScrollAnim);



// 로드시에도 한 번 실행
window.addEventListener('load', checkScrollAnim);
//   document.addEventListener("DOMContentLoaded", () => {
//   // .speech 클래스가 붙은 모든 li를 가져옴
//   const targets = Array.from(document.querySelectorAll('.speech'));

//   function onScroll() {
//     targets.forEach(el => {
//       // 이미 active_ani를 달았다면 다시 체크하지 않음
//       if (el.classList.contains('active_ani')) return;

//       const rect = el.getBoundingClientRect();
//       // 뷰포트 바닥에서 -200px 안으로 들어오면 (추가 지연 가능)
//       if (rect.top < window.innerHeight - 200) {
//         el.classList.add('active_ani');
//       }
//     });
//   }

//   // 스크롤 이벤트 리스너 등록
//   window.addEventListener('scroll', onScroll);
//   // 페이지 로드 후 첫 체크
//   onScroll();
// });


// 이미지 갤러리
document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('.Information-Architecture');
  const slides = gallery.querySelectorAll('.slides img');
  const prevBtn = gallery.querySelector('.prev');
  const nextBtn = gallery.querySelector('.next');
  let idx = 0;

  function show(i) {
    slides[idx].classList.remove('active');
    idx = (i + slides.length) % slides.length;
    slides[idx].classList.add('active');
  }

  nextBtn.addEventListener('click', () => show(idx + 1));
  prevBtn.addEventListener('click', () => show(idx - 1));
});

