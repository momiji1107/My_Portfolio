/**
 * 共通ヘッダーコンポーネントを初期化し、ページ上部に挿入します。
 * スクロール位置に応じてアクティブな項目を自動切り替え（Scrollspy）します。
 */
export function initHeader() {
  const app = document.querySelector('#app');
  if (!app) return;

  const headerHtml = `
    <header class="sticky top-0 z-50 w-full border-b border-neutral-200/80 bg-white/80 backdrop-blur-md dark:border-neutral-800/80 dark:bg-neutral-900/80">
      <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <!-- ロゴ / サイト名 -->
        <div class="flex items-center">
          <a href="#home" class="flex items-center gap-2 text-xl font-black tracking-wider text-neutral-950 dark:text-white transition-opacity hover:opacity-80">
            <span>深隧</span>
          </a>
        </div>

        <!-- ナビゲーションリンク -->
        <nav class="hidden md:flex items-center gap-8">
          <a href="#home" class="nav-link text-sm font-medium text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white transition-colors relative py-2" data-page="home">
            ホーム
          </a>
          <a href="#news" class="nav-link text-sm font-medium text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white transition-colors relative py-2" data-page="news">
            おしらせ
          </a>
          <a href="#play" class="nav-link text-sm font-medium text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white transition-colors relative py-2" data-page="play">
            あそびかた
          </a>
          <a href="#gallery" class="nav-link text-sm font-medium text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white transition-colors relative py-2" data-page="gallery">
            ギャラリー
          </a>
          <a href="#support" class="nav-link text-sm font-medium text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white transition-colors relative py-2" data-page="support">
            サポート
          </a>
          <a href="#download" class="nav-link text-sm font-medium text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white transition-colors relative py-2" data-page="download">
            ダウンロード
          </a>
        </nav>

        <!-- アクションボタン -->
        <div class="flex items-center gap-4">
          <!-- モバイルメニュー開閉ボタン -->
          <button id="mobile-menu-btn" class="rounded-lg p-2 text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800 md:hidden" aria-label="メニューを開閉" aria-expanded="false">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path id="menu-icon-path" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <!-- モバイルナビゲーションメニュー -->
      <div id="mobile-menu" class="hidden md:hidden border-t border-neutral-200/80 bg-white/95 dark:border-neutral-800/80 dark:bg-neutral-900/95 px-4 py-3 space-y-1">
        <a href="#home" class="block rounded-lg px-3 py-2.5 text-base font-medium text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white" data-page="home">ホーム</a>
        <a href="#news" class="block rounded-lg px-3 py-2.5 text-base font-medium text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white" data-page="news">おしらせ</a>
        <a href="#play" class="block rounded-lg px-3 py-2.5 text-base font-medium text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white" data-page="play">あそびかた</a>
        <a href="#gallery" class="block rounded-lg px-3 py-2.5 text-base font-medium text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white" data-page="gallery">ギャラリー</a>
        <a href="#support" class="block rounded-lg px-3 py-2.5 text-base font-medium text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white" data-page="support">サポート</a>
        <a href="#download" class="block rounded-lg px-3 py-2.5 text-base font-medium text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white" data-page="download">ダウンロード</a>
      </div>
    </header>
  `;

  // #app の先頭にヘッダーを挿入
  app.insertAdjacentHTML('afterbegin', headerHtml);

  // モバイルメニューの開閉制御
  const mobileMenuBtn = app.querySelector('#mobile-menu-btn');
  const mobileMenu = app.querySelector('#mobile-menu');
  const menuIconPath = app.querySelector('#menu-icon-path');

  if (mobileMenuBtn && mobileMenu && menuIconPath) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');

      if (isExpanded) {
        menuIconPath.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
      } else {
        menuIconPath.setAttribute('d', 'M6 18L18 6M6 6l12 12');
      }
    });

    // リンククリック時にモバイルメニューを閉じる
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        menuIconPath.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
      });
    });
  }

  // --- Scrollspy & アクティブ表示制御 ---
  const sections = ['home', 'news', 'play', 'gallery', 'support', 'download'];
  const navLinks = app.querySelectorAll('[data-page]');

  // 指定されたページのアクティブ表示を更新する関数
  const setActiveLink = (activePage) => {
    navLinks.forEach(link => {
      const isPageMatch = link.getAttribute('data-page') === activePage;
      const isNavLink = link.classList.contains('nav-link');
      
      // 初期状態に戻す
      link.classList.remove('text-neutral-950', 'font-semibold', 'dark:text-white');
      link.classList.add('text-neutral-600', 'dark:text-neutral-400');
      
      // 下線をクリア
      const line = link.querySelector('.active-line');
      if (line) line.remove();

      // アクティブな要素にのみクラスと下線を追加
      if (isPageMatch) {
        link.classList.remove('text-neutral-600', 'dark:text-neutral-400');
        link.classList.add('text-neutral-950', 'font-semibold', 'dark:text-white');
        
        if (isNavLink) {
          link.insertAdjacentHTML('beforeend', '<span class="active-line absolute bottom-0 left-0 h-0.5 w-full bg-neutral-950 dark:bg-white rounded-full"></span>');
        }
      }
    });
  };

  // Intersection Observer の設定（セクションの表示検知）
  const observerOptions = {
    root: null, // ビューポートを基準とする
    rootMargin: '-30% 0px -50% 0px', // 画面中央付近にセクションが入った時に判定
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        setActiveLink(id);
      }
    });
  }, observerOptions);

  // セクションの監視を開始
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
}