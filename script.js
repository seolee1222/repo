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
      { file: 'wtmp,btmp 위치확인.PNG', alt: 'wtmp/btmp 로그 위치', description: 'wtmp, btmp 로그인 기록 파일 위치 확인 및 분석' }
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



/* === Project2 (pj2-namespace) additions — append-only === */
(function(){ 
  const PJ2_SECTIONS = [
  {
    "title": "1. GNS3 네트워크 환경구축 하기",
    "hint": "VLAN/접속/SSH/통신 검증 등 기본 네트워크 인프라 구성 및 테스트",
    "items": [
      {
        "file": "vlan 설정.PNG",
        "alt": "vlan 설정",
        "desc": ""
      },
      {
        "file": "vlan설정.PNG",
        "alt": "vlan설정",
        "desc": ""
      },
      {
        "file": "vlan 10,20,30설정완료후 10에서 20,30통신.PNG",
        "alt": "vlan 10,20,30설정완료후 10에서 20,30통신",
        "desc": ""
      },
      {
        "file": "인사이드에서 텔넷.PNG",
        "alt": "인사이드에서 텔넷",
        "desc": ""
      },
      {
        "file": "r2 r4 로ssh 접속가능.PNG",
        "alt": "r2 r4 로ssh 접속가능",
        "desc": ""
      },
      {
        "file": "r2 에서 R3 ssh정책 주기전.PNG",
        "alt": "r2 에서 R3 ssh정책 주기전",
        "desc": ""
      },
      {
        "file": "ftp접속 불가능.PNG",
        "alt": "ftp접속 불가능",
        "desc": ""
      },
      {
        "file": "http 접속가능.PNG",
        "alt": "http 접속가능",
        "desc": ""
      },
      {
        "file": "https접속가능.PNG",
        "alt": "https접속가능",
        "desc": ""
      },
      {
        "file": "pmm client와 R3 통신가능.PNG",
        "alt": "pmm client와 R3 통신가능",
        "desc": ""
      }
    ]
  },
  {
    "title": "2. 서버 구축",
    "hint": "DNS/FTP/NFS/OSSEC/PMM/SMB/Zabbix/Log 등 서버·모니터링 구성",
    "items": [
      {
        "file": "DNS 서버 구축하기.PNG",
        "alt": "DNS 서버 구축하기",
        "desc": ""
      },
      {
        "file": "ftp 서버 구축 파일질라 cmd통신 성공.PNG",
        "alt": "ftp 서버 구축 파일질라 cmd통신 성공",
        "desc": ""
      },
      {
        "file": "nfs 구축.PNG",
        "alt": "nfs 구축",
        "desc": ""
      },
      {
        "file": "ossec 연결 가능.PNG",
        "alt": "ossec 연결 가능",
        "desc": ""
      },
      {
        "file": "pmm 서버 구축.PNG",
        "alt": "pmm 서버 구축",
        "desc": ""
      },
      {
        "file": "PMM 클라이언트 db확인.PNG",
        "alt": "PMM 클라이언트 db확인",
        "desc": ""
      },
      {
        "file": "smbshare 서버 구축 및 활성화.PNG",
        "alt": "smbshare 서버 구축및 활성화",
        "desc": ""
      },
      {
        "file": "zabbix 활성화.PNG",
        "alt": "zabbix 활성화",
        "desc": ""
      },
      {
        "file": "log analyzer.PNG",
        "alt": "log analyzer",
        "desc": ""
      }
    ]
  },
  {
    "title": "3. 권한 상승 및 시스템 취약점",
    "hint": "권한 상승 실습과 계정·시스템 보안 정책 적용",
    "items": [
      {
        "file": "bof 발생시키기.PNG",
        "alt": "bof 발생시키기",
        "desc": ""
      },
      {
        "file": "비밀번호 90일.PNG",
        "alt": "비밀번호 90일",
        "desc": ""
      },
      {
        "file": "비밀번호 변경.PNG",
        "alt": "비밀번호 변경",
        "desc": ""
      },
      {
        "file": "스티키 비트 설정.PNG",
        "alt": "스티키 비트 설정",
        "desc": ""
      },
      {
        "file": "uid bit설정 권한상승.PNG",
        "alt": "uid bit설정 권한상승",
        "desc": ""
      },
      {
        "file": "wtmp,btmp 위치확인.PNG",
        "alt": "wtmp,btmp 위치확인",
        "desc": ""
      }
    ]
  },
  {
    "title": "4. DB",
    "hint": "데이터베이스 생성/권한/스키마 확인",
    "items": [
      {
        "file": "DB 생성.PNG",
        "alt": "DB 생성",
        "desc": ""
      },
      {
        "file": "DB dev생성.PNG",
        "alt": "DB dev생성",
        "desc": ""
      },
      {
        "file": "DB skillcode생성.PNG",
        "alt": "DB skillcode생성",
        "desc": ""
      },
      {
        "file": "DB 유저 권한 주기.PNG",
        "alt": "DB 유저 권한 주기",
        "desc": ""
      },
      {
        "file": "frontend skill조회.PNG",
        "alt": "frontend skill조회",
        "desc": ""
      }
    ]
  },
  {
    "title": "5. CTF Venus walkthrough",
    "hint": "Venus CTF 진행 결과",
    "items": [
      {
        "file": "ctf userflag.PNG",
        "alt": "ctf userflag",
        "desc": ""
      },
      {
        "file": "venus root플래그.PNG",
        "alt": "venus root플래그",
        "desc": ""
      }
    ]
  }
];

  const el = (tag, attrs = {}, html = "") => {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === "class") n.className = v;
      else if (k.startsWith("on") && typeof v === "function") n.addEventListener(k.slice(2), v);
      else if (v !== undefined && v !== null) n.setAttribute(k, v);
    }
    if (html) n.innerHTML = html;
    return n;
  };

  function renderProject2(rootId = "pj2-content") {
    const root = document.getElementById(rootId);
    if (!root) return;
    root.innerHTML = "";

    PJ2_SECTIONS.forEach((sec, idx) => {
      const section = el("section", { class: "pj2-section", "data-open": "false" });
      const h2 = el("h2", {}, sec.title);
      const hint = el("p", { class: "pj2-hint" }, sec.hint || "");
      section.append(h2, hint);

      const [coverItem, ...rest] = sec.items;
      const cover = el("button", { class: "pj2-cover", "aria-expanded": "false", "aria-controls": `pj2-panel-${idx}`, id: `pj2-cover-${idx}` });
      const coverGrid = el("div", { class: "pj2-cover-grid" });
      const coverImg = el("img", { class: "pj2-cover-img", src: `pj2/${coverItem.file}`, alt: coverItem.alt });
      const coverBar = el("div", { class: "pj2-cover-bar" });
      const coverTitle = el("div", { class: "pj2-cover-title" }, coverItem.alt || coverItem.file);
      const coverCTA = el("div", { class: "pj2-cover-cta" }, "열어서 보기");
      const chev = el("span", { class: "pj2-chev", "aria-hidden": "true" }, "▼");

      coverBar.append(coverTitle, coverCTA);
      coverGrid.append(coverImg, coverBar);
      cover.append(coverGrid, chev);
      section.append(cover);

      const panel = el("div", { class: "pj2-panel", id: `pj2-panel-${idx}`, role: "region", "aria-labelledby": `pj2-cover-${idx}` });
      const panelInner = el("div", { class: "pj2-panel-inner" });

      rest.forEach(it => {
        const card = el("article", { class: "pj2-card" });
        const img = el("img", { class: "pj2-thumb", src: `pj2/${it.file}`, alt: it.alt });
        const cap = el("div", { class: "pj2-caption" }, it.alt || it.file);
        const desc = el("div", { class: "pj2-desc" }, it.desc || "");
        card.append(img, cap, desc);
        panelInner.appendChild(card);
      });

      panel.appendChild(panelInner);
      section.appendChild(panel);
      root.appendChild(section);

      cover.addEventListener("click", () => {
        const open = section.getAttribute("data-open") === "true";
        section.setAttribute("data-open", String(!open));
        cover.setAttribute("aria-expanded", String(!open));
        if (!open) {
          panel.style.maxHeight = panelInner.scrollHeight + "px";
          coverCTA.textContent = "접기";
        } else {
          panel.style.maxHeight = "0";
          coverCTA.textContent = "열어서 보기";
        }
      });

      panel.style.maxHeight = "0";
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    if (document.body.dataset.page === "project2" || document.getElementById("pj2-content")) {
      renderProject2("pj2-content");
    }
  });

  window.Project2 = { render: renderProject2, sections: PJ2_SECTIONS };
})();



/* === PJ2 Lightbox (append-only) === */
(function(){
  function ensureLightboxRoot(){
    if (document.getElementById("pj2-lightbox")) return document.getElementById("pj2-lightbox");

    const lb = document.createElement("div");
    lb.className = "pj2-lightbox";
    lb.id = "pj2-lightbox";
    lb.setAttribute("aria-hidden","true");
    lb.innerHTML = `
      <div class="pj2-lightbox-scrim" data-pj2-close></div>
      <div class="pj2-lightbox-dialog" role="dialog" aria-modal="true">
        <div class="pj2-lightbox-media">
          <img class="pj2-lightbox-img" alt="" />
        </div>
        <aside class="pj2-lightbox-meta">
          <div>
            <div class="pj2-lightbox-title" id="pj2-lightbox-title"></div>
            <div class="pj2-lightbox-desc" id="pj2-lightbox-desc"></div>
          </div>
          <div class="pj2-lightbox-actions">
            <small style="opacity:.75">이미지를 클릭·ESC로 닫기</small>
            <button class="pj2-lightbox-close" type="button" data-pj2-close>닫기</button>
          </div>
        </aside>
      </div>
    `;
    document.body.appendChild(lb);
    return lb;
  }

  function openLightbox({src, alt, title, desc}){
    const lb = ensureLightboxRoot();
    const img = lb.querySelector(".pj2-lightbox-img");
    const ttl = lb.querySelector("#pj2-lightbox-title");
    const dsc = lb.querySelector("#pj2-lightbox-desc");

    img.src = src;
    img.alt = alt || title || "";
    ttl.textContent = title || alt || "";
    dsc.textContent = desc || "";

    lb.setAttribute("aria-hidden","false");
    // focus management (optional)
    setTimeout(()=>{
      const btn = lb.querySelector(".pj2-lightbox-close");
      if (btn) btn.focus({preventScroll:true});
    }, 0);
  }

  function closeLightbox(){
    const lb = document.getElementById("pj2-lightbox");
    if (!lb) return;
    lb.setAttribute("aria-hidden","true");
  }

  function wireGlobalClose(){
    document.addEventListener("keydown", (e)=>{
      if (e.key === "Escape") closeLightbox();
    });
    document.addEventListener("click", (e)=>{
      const t = e.target;
      if (t && t.hasAttribute && t.hasAttribute("data-pj2-close")) closeLightbox();
    });
    // Close when clicking on image itself
    const lb = ensureLightboxRoot();
    lb.querySelector(".pj2-lightbox-img").addEventListener("click", closeLightbox);
  }

  function bindImages(){
    const root = document.getElementById("pj2-content");
    if (!root) return;

    // Item images
    root.querySelectorAll(".pj2-card .pj2-thumb").forEach(img=>{
      img.style.cursor = "zoom-in";
      img.addEventListener("click", (e)=>{
        const card = e.target.closest(".pj2-card");
        const title = card?.querySelector(".pj2-caption")?.textContent?.trim() || "";
        const desc = card?.querySelector(".pj2-desc")?.textContent?.trim() || "";
        openLightbox({src: img.src, alt: img.alt, title, desc});
      });
    });

    // Cover images: stop toggle and open
    root.querySelectorAll(".pj2-cover-img").forEach(img=>{
      img.style.cursor = "zoom-in";
      img.addEventListener("click", (e)=>{
        e.stopPropagation(); // prevent section toggle
        const section = e.target.closest(".pj2-section");
        const title = section?.querySelector("h2")?.textContent?.trim() || "";
        const hint = section?.querySelector(".pj2-hint")?.textContent?.trim() || "";
        openLightbox({src: img.src, alt: img.alt, title, desc: hint});
      });
    });
  }

  function initWhenReady(){
    // run after Project2 render
    const run = ()=>{
      bindImages();
      wireGlobalClose();
    };
    if (document.readyState === "loading"){
      document.addEventListener("DOMContentLoaded", run, {once:true});
    } else {
      run();
    }
  }

  // If Project2 re-renders dynamically, expose a hook
  window.PJ2_Lightbox = { open: openLightbox, close: closeLightbox, bindImages, initWhenReady };

  // Initialize
  initWhenReady();

  // If Project2 exposes render, patch it to re-bind after rendering
  if (window.Project2 && typeof window.Project2.render === "function"){
    const orig = window.Project2.render;
    window.Project2.render = function(...args){
      const res = orig.apply(this, args);
      // re-bind after a tick to ensure DOM is there
      setTimeout(bindImages, 0);
      return res;
    }
  }
})();



/* === PJ2 Lightbox: delegation patch (append-only, idempotent) === */
(function(){
  if (window.__PJ2_LB_DELEGATED__) return; // guard
  window.__PJ2_LB_DELEGATED__ = true;

  function ensureRoot(){
    let lb = document.getElementById("pj2-lightbox");
    if (lb) return lb;
    lb = document.createElement("div");
    lb.className = "pj2-lightbox";
    lb.id = "pj2-lightbox";
    lb.setAttribute("aria-hidden","true");
    lb.innerHTML = `
      <div class="pj2-lightbox-scrim" data-pj2-close></div>
      <div class="pj2-lightbox-dialog" role="dialog" aria-modal="true">
        <div class="pj2-lightbox-media">
          <img class="pj2-lightbox-img" alt="" />
        </div>
        <aside class="pj2-lightbox-meta">
          <div>
            <div class="pj2-lightbox-title" id="pj2-lightbox-title"></div>
            <div class="pj2-lightbox-desc" id="pj2-lightbox-desc"></div>
          </div>
          <div class="pj2-lightbox-actions">
            <small style="opacity:.75">이미지를 클릭·ESC로 닫기</small>
            <button class="pj2-lightbox-close" type="button" data-pj2-close>닫기</button>
          </div>
        </aside>
      </div>`;
    document.body.appendChild(lb);
    return lb;
  }
  function openLB(src, alt, title, desc){
    const lb = ensureRoot();
    const img = lb.querySelector(".pj2-lightbox-img");
    const ttl = lb.querySelector("#pj2-lightbox-title");
    const dsc = lb.querySelector("#pj2-lightbox-desc");
    img.src = src; img.alt = alt || title || "";
    ttl.textContent = title || alt || "";
    dsc.textContent = desc || "";
    lb.setAttribute("aria-hidden","false");
  }
  function closeLB(){
    const lb = document.getElementById("pj2-lightbox");
    if (lb) lb.setAttribute("aria-hidden","true");
  }

  // Global close: ESC + click outside
  document.addEventListener("keydown", (e)=>{ if (e.key === "Escape") closeLB(); });
  document.addEventListener("click", (e)=>{
    const t = e.target;
    if (t && t.matches && (t.matches(".pj2-lightbox-scrim,[data-pj2-close],.pj2-lightbox-img"))) closeLB();
  });

  // Event delegation on the container: works even after dynamic re-render
  document.addEventListener("click", (e)=>{
    const container = document.getElementById("pj2-content");
    if (!container) return;
    if (!container.contains(e.target)) return;

    // 1) Item cards
    const thumb = e.target.closest(".pj2-card .pj2-thumb");
    if (thumb){
      const card = thumb.closest(".pj2-card");
      const title = card?.querySelector(".pj2-caption")?.textContent?.trim() || thumb.alt || "";
      const desc = card?.querySelector(".pj2-desc")?.textContent?.trim() || "";
      openLB(thumb.src, thumb.alt, title, desc);
      e.stopPropagation();
      e.preventDefault();
      return;
    }

    // 2) Cover images (inside a button)
    const coverImg = e.target.closest(".pj2-cover-img");
    if (coverImg){
      const section = coverImg.closest(".pj2-section");
      const title = section?.querySelector("h2")?.textContent?.trim() || coverImg.alt || "";
      const hint = section?.querySelector(".pj2-hint")?.textContent?.trim() || "";
      openLB(coverImg.src, coverImg.alt, title, hint);
      e.stopPropagation();
      e.preventDefault();
      return;
    }
  }, true); // capture to intercept before button toggle
})();

/* [APPEND] HTML-First Category Render (safe-id: pj2-html-first) */
(function(){
  const $ = (s, el=document) => el.querySelector(s);
  function showCategoryFromHTML(category){
    const src = document.getElementById('cat-'+category);
    const wrap = $('#categoryContent'); const title = $('#categoryTitle'); const details = $('#categoryDetails');
    if (!src || !wrap || !title || !details) return false;
    const t = src.getAttribute('data-title') || src.querySelector('h3')?.textContent?.trim() || category;
    title.textContent = t; details.innerHTML = src.innerHTML; wrap.hidden = false; wrap.scrollIntoView({behavior:'smooth', block:'start'});
    details.querySelectorAll('.gallery img').forEach(img=>{
      img.addEventListener('click', ()=>{
        const src = img.getAttribute('data-src') || img.src;
        const alt = img.getAttribute('alt') || '';
        const ttl = img.getAttribute('title') || alt;
        const desc = img.closest('.gallery-item')?.querySelector('.image-caption')?.textContent?.trim() || '';
        if (typeof window.openLB === 'function') window.openLB(src, alt, ttl, desc);
        else if (typeof window.openImageModal === 'function') window.openImageModal(src);
      }, {passive:true});
    });
    return true;
  }
  document.addEventListener('click', (e)=>{
    const btn = e.target.closest('[data-category]'); if (!btn) return;
    const cat = btn.getAttribute('data-category'); if (!cat) return;
    if (showCategoryFromHTML(cat)) { e.preventDefault(); e.stopPropagation(); }
  });
})();
/* [APPEND] PJ3 Card toggle (safe-id: pj3-card-toggle) */
(function(){
  document.addEventListener('click', function(e){
    const btn = e.target.closest('.pj3-toggle'); if(!btn) return;
    const id = btn.getAttribute('aria-controls'); if(!id) return;
    const sec = document.getElementById(id); if(!sec) return;
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', expanded ? 'false' : 'true');
    btn.textContent = expanded ? '열어서 보기' : '닫기';
    sec.hidden = expanded;
    if (!expanded) sec.scrollIntoView({behavior:'smooth', block:'start'});
  });
})();
