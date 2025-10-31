// ==========================================
// 공통 데이터 (Project 2 상세 내용)
// ==========================================

const categoryData = {
  network: {
    title: '네트워크 구성 및 구축',
    content: `
      <h3>🌐 네트워크 인프라 설계 및 구축</h3>
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
      <h3>🔒 보안 취약점 분석 및 대응</h3>
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
      <h3>📊 시스템 모니터링 및 성능 분석</h3>
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
      <h3>📝 시스템 로그 분석 및 보안 이벤트 추적</h3>
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
      <h3>🗄️ MariaDB 데이터베이스 구축 및 권한 관리</h3>
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


// ==========================================
// Project 2 상세 페이지 기능
// ==========================================

function createGalleryHTML(images) {
  if (!images || images.length === 0) {
    return '<p>등록된 이미지가 없습니다.</p>';
  }
  
  // 주의: 이미지 경로는 'pj2/' 폴더를 가정합니다.
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

// 모든 카테고리를 순차적으로 표시하고 이미지를 연결하는 핵심 함수
function renderAllCategoryDetails() {
  const container = document.getElementById('projectDetailsContainer');
  if (!container) return;
  
  let allContent = '';
  // 카테고리 순서 정의
  const categoryOrder = ['network', 'security', 'monitoring', 'log', 'db']; 
  
  categoryOrder.forEach(categoryKey => {
    const data = categoryData[categoryKey];
    if (data) {
      allContent += `
        <div class="card" style="margin-bottom: 2rem;">
          <div class="inner">
            <h2 style="margin-top:0; border-bottom: 2px solid #222; padding-bottom: 0.5rem;">${data.title}</h2>
            <div>
              ${data.content}
              ${createGalleryHTML(data.images)}
            </div>
          </div>
        </div>
      `;
    }
  });
  
  container.innerHTML = allContent;
  attachImageClickEvents();
}


// ==========================================
// Main Page & Common Functions
// ==========================================

// 프로젝트 상세 페이지 열기 (main.html에서 사용)
function openProjectDetail(projectId) {
  // main.html의 onclick 이벤트와 연결됩니다.
  window.open(`${projectId}.html`, '_self');
}

// 검색 & 필터링 기능 (main.html에서 사용)
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

// 맨 위로 버튼 표시/숨김 (공통)
function toggleBackToTop() {
  const toTop = document.getElementById('toTop');
  if (toTop) {
    toTop.style.display = window.pageYOffset > 300 ? 'block' : 'none';
  }
}

// 이미지 모달 & 이벤트 (공통)
function attachImageClickEvents() {
  // .gallery 내부 이미지와 .project-img 클래스를 가진 이미지에 클릭 이벤트 등록
  const images = document.querySelectorAll('.gallery img, .project-img');
  images.forEach(img => {
    const srcToOpen = img.getAttribute('data-src') || img.getAttribute('src');
    img.addEventListener('click', function() {
      openImageModal(srcToOpen);
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

function initImageModal() {
  const modal = document.getElementById('imageModal');
  if (modal) {
    modal.addEventListener('click', closeImageModal);
  }
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeImageModal();
    }
  });
}

function initProject2DetailPage() {
  renderAllCategoryDetails(); 
  initImageModal();
}

// ==========================================
// DOMContentLoaded 이벤트 리스너 (페이지별 초기화)
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
  const toTopBtn = document.getElementById('toTop');
  
  // 1. 공통 기능: 맨 위로 버튼 설정
  if (toTopBtn) {
    toTopBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  window.addEventListener('scroll', toggleBackToTop);
  toggleBackToTop(); 

  // 2. 페이지별 기능 초기화
  
  // A. main.html 페이지 기능 초기화 (제목 기반으로 판단)
  if (document.title.includes('Lee Seok Hyun | Portfolio')) {
    // 프로젝트 필터/검색 기능 연결
    document.querySelectorAll('.filter-group .chip.btn').forEach(btn => {
      btn.addEventListener('click', function() {
        document.querySelector('.filter-group .chip.btn.active')?.classList.remove('active');
        this.classList.add('active');
        filterProjects();
      });
    });
    
    document.getElementById('search')?.addEventListener('input', filterProjects);
  } 

  // B. project2.html 페이지 기능 초기화
  if (document.title.includes('네트워크 및 보안 실습')) {
    initProject2DetailPage();
  }
  
  // C. project3.html 페이지 기능 초기화 (제목 기반으로 판단)
  if (document.title.includes('방화벽(ASAv) 정책 실습')) {
    attachImageClickEvents(); 
    initImageModal(); 
  }
});
