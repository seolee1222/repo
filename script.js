// ==========================================
// 프로젝트 상세 페이지 열기
// ==========================================

function openProjectDetail(projectId) {
  if (projectId === 'project2') {
    // project2.html로 이동
    window.open('project2.html', '_blank');
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
  
  // 프로젝트 상세 페이지 전용 초기화
  initProjectDetailPage();
});

// ==========================================
// 프로젝트 상세 페이지 전용 기능
// ==========================================

// 카테고리 데이터
const categoryData = {
  network: {
    title: '네트워크 구성 및 구축',
    content: `
      <h3>네트워크 인프라 설계 및 구축</h3>
      <p>VLAN 설정, 라우터 간 통신, 파일 서버(NFS/SMB) 구축, SSH/FTP 서비스 설정 등 네트워크 인프라 전반의 구축과정을 담은 스크린샷들입니다.</p>
    `,
    images: [
      { file: 'vlan 설정.PNG', alt: 'VLAN 설정 화면', description: 'VLAN 10, 20, 30 구성 및 설정 완료' },
      { file: 'vlan 10,20,30설정완료후 10에서 20,30통신.PNG', alt: 'VLAN 간 통신 테스트', description: 'VLAN 10에서 20, 30번 VLAN으로 통신 테스트 성공' },
      { file: 'r2 r4 로ssh 접속가능.PNG', alt: 'SSH 접속 성공', description: 'R2에서 R4로 SSH 원격 접속 가능 확인' },
      { file: 'r2 에서 R3 ssh정책 주기전.PNG', alt: 'SSH 정책 설정 전', description: 'R2에서 R3 SSH 보안 정책 적용 전 상태' },
      { file: 'nfs 구축.PNG', alt: 'NFS 서버 구축', description: 'NFS 파일 서버 구축 및 설정 완료' },
      { file: 'smbshare 서버 구축 및 활성화.PNG', alt: 'SMB 서버 구축', description: 'SMB Share 서버 구축 및 서비스 활성화' },
      { file: '인사이드에서 텔넷.PNG', alt: '텔넷 접속', description: '내부 네트워크에서 텔넷 접속 테스트' },
      { file: 'ftp 서버 구축 파일질라 cmd통신 성공.PNG', alt: 'FTP 서버 구축', description: 'FTP 서버 구축 및 FileZilla, CMD 통신 테스트 성공' }
    ]
  },
  security: {
    title: '보안솔루션 & 취약점 실습',
    content: `
      <h3>보안 취약점 분석 및 대응</h3>
      <p>BOF(Buffer Overflow) 공격, CTF 문제 해결, 권한 상승, 접근 제어, 패스워드 정책 등 보안 관련 실습 과정입니다.</p>
    `,
    images: [
      { file: 'bof 발생시키기.PNG', alt: 'Buffer Overflow 실습', description: 'BOF(Buffer Overflow) 취약점 발생 시키기 실습' },
      { file: 'ctf userflag.PNG', alt: 'CTF User Flag', description: 'CTF 해킹 대회 - User Flag 획득 성공' },
      { file: 'venus root플래그.PNG', alt: 'Venus Root Flag', description: 'Venus 시스템 - Root 권한 플래그 획득' },
      { file: 'uid bit설정 권한상승.PNG', alt: 'UID Bit 권한 상승', description: 'UID Bit 설정을 통한 권한 상승 실습' },
      { file: '스티키 비트 설정.PNG', alt: '스티키 비트 설정', description: '스티키 비트(Sticky Bit) 파일 권한 설정' },
      { file: 'ossec 연결 가능.PNG', alt: 'OSSEC 연결', description: 'OSSEC HIDS 연결 및 모니터링 활성화' },
      { file: 'ftp접속 불가능.PNG', alt: 'FTP 접속 차단', description: '보안 정책에 의한 FTP 접속 차단 확인' },
      { file: 'http 접속가능.PNG', alt: 'HTTP 접속 허용', description: 'HTTP 프로토콜 접속 허용 상태 확인' },
      { file: 'https접속가능.PNG', alt: 'HTTPS 접속 허용', description: 'HTTPS 보안 접속 허용 상태 확인' },
      { file: '비밀번호 90일.PNG', alt: '패스워드 정책 90일', description: '패스워드 만료 기간 90일 정책 설정' },
      { file: '비밀번호 변경.PNG', alt: '패스워드 변경', description: '사용자 패스워드 변경 실행' }
    ]
  },
  monitoring: {
    title: '모니터링 & 성능 관리',
    content: `
      <h3>시스템 모니터링 및 성능 분석</h3>
      <p>PMM, Zabbix 등을 활용한 시스템 모니터링 구축 과정입니다.</p>
    `,
    images: [
      { file: 'pmm client와 R3 통신가능.PNG', alt: 'PMM 클라이언트 통신', description: 'PMM 클라이언트와 R3 라우터 간 통신 연결 확인' },
      { file: 'pmm 서버 구축.PNG', alt: 'PMM 서버 구축', description: 'Percona Monitoring Management 서버 구축 완료' },
      { file: 'PMM 클라이언트 db확인.PNG', alt: 'PMM DB 모니터링', description: 'PMM 클라이언트를 통한 데이터베이스 상태 모니터링' },
      { file: 'zabbix 활성화.PNG', alt: 'Zabbix 모니터링 활성화', description: 'Zabbix 모니터링 시스템 활성화 및 에이전트 연결' },
      { file: 'frontend skill조회.PNG', alt: '프론트엔드 스킬 조회', description: '모니터링 대시보드에서 기술 스택 정보 조회' }
    ]
  },
  log: {
    title: '로그 분석 및 관리',
    content: `
      <h3>시스템 로그 분석 및 보안 이벤트 추적</h3>
      <p>로그 분석 도구 구축 및 로그인 기록 분석입니다.</p>
    `,
    images: [
      { file: 'log analyzer.PNG', alt: '로그 분석기', description: '시스템 로그 분석 도구를 통한 로그 파일 분석' },
      { file: 'wtmp.btmp 위치확인.PNG', alt: 'wtmp/btmp 로그 위치', description: 'wtmp, btmp 로그인 기록 파일 위치 확인 및 분석' }
    ]
  },
  db: {
    title: '데이터베이스 관리',
    content: `
      <h3>MariaDB 데이터베이스 구축 및 권한 관리</h3>
      <p>MariaDB 생성, 사용자 계정 관리, 권한 설정 등입니다.</p>
    `,
    images: [
      { file: 'DB dev생성.PNG', alt: 'Dev DB 생성', description: '개발용 데이터베이스(dev) 생성' },
      { file: 'DB skillcode생성.PNG', alt: 'SkillCode DB 생성', description: 'SkillCode 프로젝트용 데이터베이스 생성' },
      { file: 'DB 생성.PNG', alt: '데이터베이스 생성', description: 'MariaDB 새 데이터베이스 생성 과정' },
      { file: 'DB 유저 권한 주기.PNG', alt: 'DB 사용자 권한 설정', description: '데이터베이스 사용자 계정 권한 부여 설정' }
    ]
  }
};

function createGalleryHTML(images) {
  if (!images || images.length === 0) {
    return '<p>등록된 이미지가 없습니다.</p>';
  }
  
  const galleryItems = images.map(item => `
    <div class="gallery-item">
      <img 
        src="pj2/${item.file}" 
        alt="${item.alt}" 
        title="${item.description}"
        data-src="pj2/${item.file}"
      >
      <div class="image-caption">${item.description}</div>
    </div>
  `).join('');
  
  return `<div class="gallery">${galleryItems}</div>`;
}

function showCategory(category) {
  const categoryContent = document.getElementById('categoryContent');
  const categoryTitle = document.getElementById('categoryTitle');
  const categoryDetails = document.getElementById('categoryDetails');
  
  if (!categoryContent || !categoryTitle || !categoryDetails) return;
  
  const data = categoryData[category];
  
  if (data) {
    categoryTitle.textContent = data.title;
    categoryDetails.innerHTML = data.content + createGalleryHTML(data.images);
    categoryContent.style.display = 'block';
    categoryContent.scrollIntoView({ behavior: 'smooth' });
    
    // 이미지 클릭 이벤트 재등록
    attachImageClickEvents();
  }
}

function attachImageClickEvents() {
  const images = document.querySelectorAll('.gallery img');
  images.forEach(img => {
    img.addEventListener('click', function() {
      openImageModal(this.getAttribute('data-src'));
    });
  });
}

function openImageModal(src) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  if (modal && modalImg) {
    modalImg.src = src;
    modal.classList.add('active');
  }
}

function closeImageModal() {
  const modal = document.getElementById('imageModal');
  if (modal) {
    modal.classList.remove('active');
  }
}

function initProjectDetailPage() {
  // 카테고리 네비게이션이 있으면 프로젝트 상세 페이지
  const categoryItems = document.querySelectorAll('.category-item');
  if (categoryItems.length === 0) return;
  
  categoryItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const category = this.getAttribute('data-category');
      if (category) {
        showCategory(category);
      }
    });
  });
  
  // 모달 클릭 시 닫기
  const modal = document.getElementById('imageModal');
  if (modal) {
    modal.addEventListener('click', closeImageModal);
  }
  
  // ESC 키로 모달 닫기
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeImageModal();
    }
  });
}
