window.addEventListener('load', () => {
  // 해시가 #home 이 아니면 강제로 홈으로 이동
  if (location.hash !== '#home') {
    // 1) 해시를 #home 으로 바꿔 버리기
    history.replaceState(null, '', '#home');
    // 2) 스크롤 최상단으로
    window.scrollTo(0, 0);
  }
});





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



// 왼쪽 화살표(이전)
const prevBtnImg = document.querySelector('.prev img');
document.querySelector('.prev').addEventListener('mousedown', () => {
  prevBtnImg.src = 'img/왼쪽 화살표 클릭.png';
});
document.querySelector('.prev').addEventListener('mouseup', () => {
  prevBtnImg.src = 'img/왼쪽 화살표.png';
});
document.querySelector('.prev').addEventListener('mouseleave', () => {
  prevBtnImg.src = 'img/왼쪽 화살표.png';
});

// 오른쪽 화살표(다음)
const nextBtnImg = document.querySelector('.next img');
document.querySelector('.next').addEventListener('mousedown', () => {
  nextBtnImg.src = 'img/오른쪽 화살표 클릭.png';
});
document.querySelector('.next').addEventListener('mouseup', () => {
  nextBtnImg.src = 'img/오른쪽 화살표.png';
});
document.querySelector('.next').addEventListener('mouseleave', () => {
  nextBtnImg.src = 'img/오른쪽 화살표.png';
});


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

