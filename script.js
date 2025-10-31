// ==========================================
// 프로젝트 상세 페이지 열기
// ==========================================

function openProjectDetail(projectId) {
  if (projectId === 'project2') {
    // 새 창에서 프로젝트 상세 페이지 열기
    window.open('project2', '_blank');
  }
}

// ==========================================
// 검색 & 필터링 기능
// ==========================================

function filterProjects() {
  const searchTermEl = document.getElementById('search');
  const searchTerm = searchTermEl ? searchTermEl.value.toLowerCase() : '';
  const activeFilterBtn = document.querySelector('.filter-group .chip.btn.active');
  const activeFilter = activeFilterBtn ? activeFilterBtn.dataset.filter : 'all';
  const projects = document.querySelectorAll('.project');
  
  projects.forEach(project => {
    const tags = (project.dataset.tags || '').toLowerCase();
    const title = (project.querySelector('h3') ? project.querySelector('h3').textContent.toLowerCase() : '');
    const desc = (project.querySelector('p') ? project.querySelector('p').textContent.toLowerCase() : '');
    
    const matchesSearch = searchTerm === '' || tags.includes(searchTerm) || title.includes(searchTerm) || desc.includes(searchTerm);
    const matchesFilter = activeFilter === 'all' || tags.includes(activeFilter);
    
    project.style.display = (matchesSearch && matchesFilter) ? 'block' : 'none';
  });
}

// ==========================================
// 맨 위로 버튼 표시/숨김
// ==========================================

function toggleBackToTop() {
  const toTop = document.getElementById('toTop');
  if (toTop) {
    toTop.style.display = window.pageYOffset > 300 ? 'block' : 'none';
  }
}

// ==========================================
// 네비게이션 투명도 조절
// ==========================================

function handleNavTransparency() {
  const nav = document.querySelector('.nav');
  if (nav) {
    nav.classList.toggle('transparent', window.scrollY <= 50);
  }
}

// ==========================================
// 부드러운 스크롤 초기화
// ==========================================

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ==========================================
// 검색 & 필터 이벤트 리스너 초기화
// ==========================================

function initSearchAndFilters() {
  const searchInput = document.getElementById('search');
  const filterButtons = document.querySelectorAll('.filter-group .chip.btn');
  
  // 검색 입력 이벤트
  if (searchInput) {
    searchInput.addEventListener('input', filterProjects);
  }

  // 필터 버튼 클릭 이벤트
  filterButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      filterButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      filterProjects();
    });
  });
}

// ==========================================
// 프로젝트 클릭 이벤트 초기화
// ==========================================

function initProjectClicks() {
  const projects = document.querySelectorAll('.project');
  projects.forEach(project => {
    project.addEventListener('click', function() {
      const projectId = this.dataset.project;
      if (projectId) {
        openProjectDetail(projectId);
      }
    });
  });
}

// ==========================================
// 연락 폼 제출 처리
// ==========================================

function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      window.location.href = `mailto:you@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    });
  }
}

// ==========================================
// 맨 위로 버튼 클릭 처리
// ==========================================

function initBackToTopButton() {
  const toTopBtn = document.getElementById('toTop');
  if (toTopBtn) {
    toTopBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// ==========================================
// 스크롤 이벤트 통합 처리
// ==========================================

function handleScroll() {
  toggleBackToTop();
  handleNavTransparency();
}

// ==========================================
// 페이지 로드 시 초기화
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
  // 검색 & 필터 초기화
  initSearchAndFilters();
  
  // 프로젝트 클릭 이벤트
  initProjectClicks();
  
  // 부드러운 스크롤
  initSmoothScroll();
  
  // 연락 폼
  initContactForm();
  
  // 맨 위로 버튼
  initBackToTopButton();
  
  // 스크롤 이벤트 리스너
  window.addEventListener('scroll', handleScroll);
  
  // 초기 상태 설정
  handleScroll();
});
