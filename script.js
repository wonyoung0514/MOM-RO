  const targets = document.querySelectorAll('.hidden');

  window.addEventListener('scroll', () => {
    targets.forEach(target => {
      const rect = target.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        target.classList.add('active_ani');
      }
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
  // .speech 클래스가 붙은 모든 li를 가져옴
  const targets = Array.from(document.querySelectorAll('.speech'));

  function onScroll() {
    targets.forEach(el => {
      // 이미 active_ani를 달았다면 다시 체크하지 않음
      if (el.classList.contains('active_ani')) return;

      const rect = el.getBoundingClientRect();
      // 뷰포트 바닥에서 -200px 안으로 들어오면 (추가 지연 가능)
      if (rect.top < window.innerHeight - 200) {
        el.classList.add('active_ani');
      }
    });
  }

  // 스크롤 이벤트 리스너 등록
  window.addEventListener('scroll', onScroll);
  // 페이지 로드 후 첫 체크
  onScroll();
});
