import { newsList } from '../datas/newsData.js';

export function initNews(container) {
  const section = document.createElement('section');
  section.id = 'news';
  section.className = 'w-full min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat';
  
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
  <div class="w-full min-h-screen flex flex-col items-center py-16">
    <div class="text-center">
      <h2 class="text-6xl font-serif tracking-tight mb-1 text-neutral-950">
        News
      </h2>
      <p class="text-lg font-bold text-neutral-950 font-serif">
        - 最新情報 -
      </p>
    </div>

    <!-- ニュース一覧 -->
    <div class="space-y-6 items-center justify-center mt-10 max-w-3xl mx-auto px-4">

      ${latestNews.map(news => {
        let iconPath = '';
        if (news.type === 'youtube') { iconPath = `${import.meta.env.BASE_URL}img/icon/youtube_icon.png`; }
        else if (news.type === 'x') { iconPath = `${import.meta.env.BASE_URL}img/icon/x_icon.png`; }

        return `<a href="${news.url}" 
        class=" block bg-orange-50 w-100 rounded-3xl px-8 py-4 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200
        sm:w-130
        md:w-180">
          <div class="flex items-center gap-6">

            <!-- アイコン -->
            <div class="shrink-0 w-24 h-24 flex items-center justify-center">
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
                <p class="mt-2 text-gray-600">
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
    <div class="items-center justify-end mt-10">
      <a href="#"
      class="px-10 py-4 bg-orange-400 text-white text-lg font-bold rounded-2xl shadow-lg hover:bg-orange-300 hover:-translate-y-1 transition">
        さらに見る　▶
      </a>
    </div>
  </div>
  `;
  
  container.appendChild(section);
}