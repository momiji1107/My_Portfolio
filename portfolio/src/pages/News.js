import { newsList } from '../datas/newsData.js';

export function initNews(container) {
  const section = document.createElement('section');
  section.id = 'news';
  section.className = 'w-full min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-x-hidden';
  
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

  // 最新3件だけ表示
  const latestNews = sortedNews.slice(0, 3);

  section.innerHTML = `
  <div class="w-full min-h-screen flex flex-col items-center py-10">
    <div class="text-center">
      <h2 class="tracking-wide mb-1 text-center text-5xl sm:text-6xl font-serif italic font-bold text-[#8b4b20] drop-shadow-sm">
        News
      </h2>
      <p class="font-serif z-20 mt-2 text-center text-lg font-bold text-[#704522]">
        - 最新情報 -
      </p>
    </div>

    <!-- ニュース一覧 -->
    <div class="space-y-6 items-center justify-center mt-10 max-w-3xl mx-auto px-4">

      ${latestNews.map(news => {
        let iconPath = '';
        if (news.type === 'youtube') { iconPath = `${import.meta.env.BASE_URL}img/icon/youtube_icon.png`; }
        else if (news.type === 'x') { iconPath = `${import.meta.env.BASE_URL}img/icon/x_icon.png`; }
        else if (news.type === 'update') { iconPath = `${import.meta.env.BASE_URL}img/icon/momiji.png`; }

        return `<a href="${news.url}" target="_blank" rel="noopener noreferrer"
        class="block w-full max-w-3xl min-w-0 bg-orange-50 rounded-3xl px-5 py-4 sm:px-8 sm:py-4 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
        ">
          <div class="flex items-center gap-6">

            <!-- アイコン -->
            <div class="shrink-0 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
              <img
                src="${iconPath}"
                alt="${news.type}"
                class=" w-full h-full object-contain"
              >
            </div>
          
            <!-- ニュース内容 -->
            <div class="flex-1">
              <!-- 日付 -->
              <p class="text-lg font-bold text-gray-700 mb-2">
                ${news.date}
              </p>

              <!-- タイトル -->
              <h3 class="text-xl md:text-2xl font-bold text-gray-800">
                ${news.title}
              </h3>

              <!-- 説明 -->
              ${news.description ? 
                `
                <p class="mt-2 text-gray-600 min-w-0">
                  ${news.description}
                </p>
                ` 
                : ''
              }
            </div>

          </div>

        </a>`;
      }).join('')}

    </div>


    <!-- さらに見る -->
    <div class="items-center justify-end mt-20">
      <a href="${import.meta.env.BASE_URL}news.html"
      class="px-10 py-4 bg-orange-400 text-white text-lg font-bold rounded-2xl shadow-lg hover:bg-orange-300 hover:-translate-y-1 transition">
        さらに見る　▶
      </a>
    </div>
  </div>
  `;
  
  container.appendChild(section);
}