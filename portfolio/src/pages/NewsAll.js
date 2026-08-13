import { newsList } from '../datas/newsData.js';

export function initNewsAll(container) {
  const section = document.createElement('section');
  section.id = 'news-all';
  section.className = 'w-full min-h-screen flex flex-col items-center bg-cover bg-center bg-no-repeat px-4 py-16';

  section.style.backgroundImage = `url('${import.meta.env.BASE_URL}img/background/momiji_BackGround.png')`;
  section.style.backgroundSize = 'cover';
  section.style.backgroundPosition = 'center';
  section.style.backgroundRepeat = 'no-repeat';

  // ========================================
  // ニュースを日付の新しい順に並べる
  // ========================================
  const sortedNews = [...newsList].sort((a, b) => {
    const dateA = new Date(a.date.replace(/\./g, '-'));
    const dateB = new Date(b.date.replace(/\./g, '-'));

    return dateB - dateA;
  });

  // 1ページに表示するニュース数
  const newsPerPage = 5;

  // 現在のページ
  let currentPage = 0;

  // 総ページ数
  const totalPages = Math.ceil(sortedNews.length / newsPerPage);

  // ========================================
  // アイコンのパスを取得
  // ========================================
  const getIconPath = (type) => {
    if (type === 'youtube') {
      return `${import.meta.env.BASE_URL}img/icon/youtube_icon.png`;
    }

    if (type === 'x') {
      return `${import.meta.env.BASE_URL}img/icon/x_icon.png`;
    }

    if (type === 'update') {
      return `${import.meta.env.BASE_URL}img/icon/momiji.png`;
    }

    return `${import.meta.env.BASE_URL}img/icon/momiji.png`;
  };

  // ========================================
  // ニュースを表示
  // ========================================
  const renderNews = () => {

    const startIndex = currentPage * newsPerPage;
    const endIndex = startIndex + newsPerPage;

    const currentNews = sortedNews.slice(startIndex, endIndex);

    section.innerHTML = `
      <!-- タイトル -->
      <div class="text-center">

        <h1 class="tracking-wide mb-1 text-center text-5xl sm:text-6xl font-serif italic font-bold text-[#8b4b20] drop-shadow-sm">
          News
        </h1>

        <p class="font-serif mt-2 text-center text-lg font-bold text-[#704522]">
          - 最新情報 -
        </p>

      </div>

      <!-- ニュース一覧 -->
      <div class="w-full max-w-3xl space-y-6 mt-10">

        ${currentNews.map(news => `
          <a
            href="${news.url}"
            target="_blank"
            rel="noopener noreferrer"
            class="block mx-auto w-full rounded-3xl bg-orange-50 px-6 py-5 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-xl sm:px-8"
          >

            <div class="flex items-center gap-5 sm:gap-6">

              <!-- アイコン -->
              <div class="flex h-20 w-20 shrink-0 items-center justify-center sm:h-24 sm:w-24">
                <img
                  src="${getIconPath(news.type)}"
                  alt="${news.type}"
                  class="h-full w-full object-contain"
                >
              </div>

              <!-- ニュース内容 -->
              <div class="min-w-0 flex-1">

                <!-- 日付 -->
                <p class="mb-1 text-base font-bold text-gray-700 sm:text-lg">
                  ${news.date}
                </p>

                <!-- タイトル -->
                <h2 class="text-lg font-bold text-gray-800 sm:text-2xl">
                  ${news.title}
                </h2>

                <!-- 説明 -->
                ${news.description ?
                  `
                  <p class="mt-2 text-sm leading-relaxed text-gray-600 sm:text-base">
                    ${news.description}
                  </p>
                  `
                  : ''
                }

              </div>

            </div>

          </a>
        `).join('')}

      </div>

      <!-- ページ切り替え -->
      <div class="mt-10 flex items-center justify-center gap-6">

        <!-- 左矢印 -->
        ${
          currentPage > 0
            ? `
              <button
                id="news-prev-button"
                type="button"
                class="flex h-12 w-12 items-center justify-center rounded-full bg-orange-400 text-2xl font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-orange-300 hover:shadow-xl"
                aria-label="前のニュース"
              >
                ◀
              </button>
            `
            : `
              <div class="h-12 w-12"></div>
            `
        }

        <!-- ページ番号 -->
        <span class="min-w-[100px] text-center text-lg font-bold text-[#704522]">
          ${currentPage + 1} / ${totalPages}
        </span>

        <!-- 右矢印 -->
        ${
          currentPage < totalPages - 1
            ? `
              <button
                id="news-next-button"
                type="button"
                class="flex h-12 w-12 items-center justify-center rounded-full bg-orange-400 text-2xl font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-orange-300 hover:shadow-xl"
                aria-label="次のニュース"
              >
                ▶
              </button>
            `
            : `
              <div class="h-12 w-12"></div>
            `
        }

      </div>

      <!-- 元のサイトに戻る -->
      <div class="mt-12">

        <a
          href="${import.meta.env.BASE_URL}"
          class="inline-flex items-center justify-center rounded-2xl bg-[#e8752c] px-10 py-4 text-lg font-bold text-white shadow-lg transition duration-200 hover:-translate-y-1 hover:bg-[#d96520] hover:shadow-xl"
        >
          ◀ ポートフォリオに戻る
        </a>

      </div>
    `;

    // ========================================
    // 前のページ
    // ========================================
    const prevButton = section.querySelector('#news-prev-button');

    if (prevButton) {
      prevButton.addEventListener('click', () => {

        if (currentPage > 0) {
          currentPage--;

          renderNews();

          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }

      });
    }

    // ========================================
    // 次のページ
    // ========================================
    const nextButton = section.querySelector('#news-next-button');

    if (nextButton) {
      nextButton.addEventListener('click', () => {

        if (currentPage < totalPages - 1) {
          currentPage++;

          renderNews();

          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }

      });
    }
  };

  renderNews();

  container.appendChild(section);
}