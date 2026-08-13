import { worksData } from '../datas/worksData.js';

export function initWorks(container) {
  const section = document.createElement('section');
  section.id = 'works';
  section.className = 'w-full flex flex-col items-center justify-start bg-cover bg-center bg-no-repeat pb-16';
  
  section.style.backgroundImage = `url('${import.meta.env.BASE_URL}img/background/momiji_BackGround.png')`;
  section.style.backgroundSize = 'cover';
  section.style.backgroundPosition = 'center';
  section.style.backgroundRepeat = 'no-repeat';
  
  section.innerHTML = `
    <div id="works-paper" class="relative w-full max-w-7xl overflow-hidden rounded-sm px-6 pt-10 sm:px-12 md:px-20 lg:px-28">
      <div class="w-full max-w-3xl mx-auto text-center px-4 mb-12">
        <h2 class="text-center text-5xl sm:text-6xl font-serif italic font-bold text-[#8b4b20] drop-shadow-sm">
          Works
        </h2>
        <p class="font-serif mt-2 text-center text-lg font-bold text-[#704522]">
          - 作品一覧 -
        </p>
      </div>
    </div>
  `;

  // ------------------------------
  // 作品カルーセル
  // ------------------------------
  const worksCarousel = document.createElement('div');
  worksCarousel.className = 'relative z-10 w-screen';

  // ------------------------------
  // カルーセル表示領域
  // ------------------------------
  const worksViewport = document.createElement('div');
  worksViewport.className = 'w-full overflow-x-auto scroll-smooth snap-x snap-mandatory';

  // スクロールバーを非表示
  worksViewport.style.scrollbarWidth = 'none';
  worksViewport.style.msOverflowStyle = 'none';

  // ------------------------------
  // カルーセルトラック
  // ------------------------------
  const worksContainer = document.createElement('div');
  worksContainer.className = 'w-max flex gap-6 sm:gap-8 lg:gap-10 px-[6vw]';

  worksData.forEach((work, workIndex) => {
    const workCard = createWorkCard(work, workIndex);
    worksContainer.appendChild(workCard);
  });

  worksViewport.appendChild(worksContainer);

  // ------------------------------
  // 左ボタン
  // ------------------------------
  const prevButton = document.createElement('button');
  prevButton.className = 'absolute left-4 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-[#fffaf0]/95 hover:bg-white text-[#8b4b20] shadow-lg border border-orange-200 transition-all duration-300 hover:scale-110';
  prevButton.innerHTML = `
    <span class="text-3xl leading-none">‹</span>
  `;
  prevButton.setAttribute('aria-label', '前の作品');

  // ------------------------------
  // 右ボタン
  // ------------------------------
  const nextButton = document.createElement('button');
  nextButton.className = 'absolute right-4 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-[#fffaf0]/95 hover:bg-white text-[#8b4b20] shadow-lg border border-orange-200 transition-all duration-300 hover:scale-110';
  nextButton.innerHTML = `
    <span class="text-3xl leading-none">›</span>
  `;
  nextButton.setAttribute('aria-label', '次の作品');

  // ------------------------------
  // 作品位置ドット
  // ------------------------------
  const positionDots = document.createElement('div');
  positionDots.className = 'flex items-center justify-center gap-3 mt-7';

  const positionDotElements = [];

  worksData.forEach((_, index) => {
    const dot = document.createElement('button');

    dot.className = index === 0
      ? 'w-3 h-3 rounded-full bg-orange-500 shadow-md transition-all duration-300'
      : 'w-3 h-3 rounded-full bg-orange-300/70 shadow-md transition-all duration-300';

    dot.setAttribute('aria-label', `作品${index + 1}を表示`);

    dot.addEventListener('click', () => {
      scrollToWork(index);
    });

    positionDots.appendChild(dot);
    positionDotElements.push(dot);
  });

  // ------------------------------
  // 現在の作品番号
  // ------------------------------
  let currentWorkIndex = 0;

  // ------------------------------
  // 指定した作品へ移動
  // ------------------------------
  function scrollToWork(index) {
    if (index < 0 || index >= worksData.length) {
      return;
    }

    const cards = worksContainer.children;
    const targetCard = cards[index];

    if (!targetCard) {
      return;
    }

    worksViewport.scrollTo({
      left: targetCard.offsetLeft - worksViewport.clientWidth * 0.06,
      behavior: 'smooth'
    });

    currentWorkIndex = index;
    updateNavigation();
  }

  // ------------------------------
  // 左ボタン
  // ------------------------------
  prevButton.addEventListener('click', () => {
    if (currentWorkIndex > 0) {
      scrollToWork(currentWorkIndex - 1);
    }
  });

  // ------------------------------
  // 右ボタン
  // ------------------------------
  nextButton.addEventListener('click', () => {
    if (currentWorkIndex < worksData.length - 1) {
      scrollToWork(currentWorkIndex + 1);
    }
  });

  // ------------------------------
  // カルーセルの現在位置を更新
  // ------------------------------
  function updateNavigation() {
    // 左ボタン
    if (currentWorkIndex === 0) {
      prevButton.classList.add('hidden');
    } else {
      prevButton.classList.remove('hidden');
    }

    // 右ボタン
    if (currentWorkIndex === worksData.length - 1) {
      nextButton.classList.add('hidden');
    } else {
      nextButton.classList.remove('hidden');
    }

    // ドット
    positionDotElements.forEach((dot, index) => {
      if (index === currentWorkIndex) {
        dot.className = 'w-3 h-3 rounded-full bg-orange-500 shadow-md transition-all duration-300';
      } else {
        dot.className = 'w-3 h-3 rounded-full bg-orange-300/70 shadow-md transition-all duration-300';
      }
    });
  }

  // ------------------------------
  // スクロール時に現在位置を判定
  // ------------------------------
  let scrollTimer;

  worksViewport.addEventListener('scroll', () => {
    clearTimeout(scrollTimer);

    scrollTimer = setTimeout(() => {
      const cards = Array.from(worksContainer.children);

      if (cards.length === 0) {
        return;
      }

      const viewportCenter = worksViewport.scrollLeft + worksViewport.clientWidth / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      cards.forEach((card, index) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const distance = Math.abs(viewportCenter - cardCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      currentWorkIndex = closestIndex;
      updateNavigation();
    }, 100);
  });

  // ------------------------------
  // カルーセルを追加
  // ------------------------------
  worksCarousel.appendChild(prevButton);
  worksCarousel.appendChild(worksViewport);
  worksCarousel.appendChild(nextButton);
  worksCarousel.appendChild(positionDots);

  // ------------------------------
  // sectionにカルーセルを追加
  // ------------------------------
  section.appendChild(worksCarousel);

  // 初期状態
  updateNavigation();

  container.appendChild(section);
}


// ======================================================
// 作品カード生成
// ======================================================
function createWorkCard(work, workIndex) {
    const card = document.createElement('article');
    card.className = 'relative w-[88vw] sm:w-[86vw] lg:w-[84vw] h-auto shrink-0 snap-center bg-white/90 rounded-3xl shadow-[0_10px_35px_rgba(80,40,10,0.25)] border border-orange-200 overflow-hidden';

    // ------------------------------
    // 作品番号
    // ------------------------------
    const number = document.createElement('div');
    number.className = 'absolute top-4 left-4 z-20 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-center bg-contain bg-no-repeat drop-shadow-md';
    number.style.backgroundImage = `url('${import.meta.env.BASE_URL}img/icon/momiji.png')`;

    const numberText = document.createElement('span');
    numberText.className = 'text-white font-bold text-sm sm:text-base drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]';
    numberText.textContent = String(worksData.length - workIndex).padStart(2, '0');

    number.appendChild(numberText);
    card.appendChild(number);

    // ------------------------------
    // カード内部
    // ------------------------------
    const cardContent = document.createElement('div');
    cardContent.className = 'flex flex-col lg:flex-row h-full';

    // ==================================================
    // 左側：画像スライド
    // ==================================================
    const imageArea = document.createElement('div');
    imageArea.className = 'relative w-full min-h-[300px] lg:w-3/5 lg:h-full bg-stone-900 overflow-hidden';

    const image = document.createElement('img');
    image.className = 'absolute inset-0 w-full h-full object-cover transition-opacity duration-700';

    let currentImageIndex = 0;

    image.src = `${import.meta.env.BASE_URL}${work.images[currentImageIndex]}`;

    imageArea.appendChild(image);

    // ------------------------------
    // 画像の暗幕
    // ------------------------------
    const imageOverlay = document.createElement('div');
    imageOverlay.className = 'absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none';

    imageArea.appendChild(imageOverlay);

    // ------------------------------
    // 画像切り替えドット
    // ------------------------------
    const dots = document.createElement('div');
    dots.className = 'absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10';

    const dotElements = [];

    work.images.forEach((_, index) => {
        const dot = document.createElement('button');

        dot.className = index === 0
            ? 'w-3 h-3 rounded-full bg-orange-500 border-2 border-white shadow-md transition-all duration-300'
            : 'w-3 h-3 rounded-full bg-white/70 border-2 border-white shadow-md transition-all duration-300';

        dot.setAttribute('aria-label', `画像${index + 1}を表示`);

        dot.addEventListener('click', () => {
            currentImageIndex = index;
            changeImage();
        });

        dots.appendChild(dot);
        dotElements.push(dot);
    });

    imageArea.appendChild(dots);

    // ------------------------------
    // 画像切り替え処理
    // ------------------------------
    function changeImage() {
        image.style.opacity = '0';

        setTimeout(() => {
            image.src = `${import.meta.env.BASE_URL}${work.images[currentImageIndex]}`;

            image.onload = () => {
                image.style.opacity = '1';
            };

            dotElements.forEach((dot, index) => {
                if (index === currentImageIndex) {
                    dot.className = 'w-3 h-3 rounded-full bg-orange-500 border-2 border-white shadow-md transition-all duration-300';
                } else {
                    dot.className = 'w-3 h-3 rounded-full bg-white/70 border-2 border-white shadow-md transition-all duration-300';
                }
            });
        }, 300);
    }

    // ------------------------------
    // 3秒ごとに画像を変更
    // ------------------------------
    if (work.images.length > 1) {
        setInterval(() => {
            currentImageIndex = (currentImageIndex + 1) % work.images.length;
            changeImage();
        }, 3000);
    }

    // ==================================================
    // 右側：作品情報
    // ==================================================
    const infoArea = document.createElement('div');
    infoArea.className = 'relative w-full lg:w-2/5 h-full p-7 sm:p-9 lg:p-12 bg-[#fffaf0] flex flex-col';

    // 紙のような装飾
    const paperDecoration = document.createElement('div');
    paperDecoration.className = 'absolute inset-3 border border-orange-200/70 rounded-2xl pointer-events-none';

    infoArea.appendChild(paperDecoration);

    // ------------------------------
    // 作品タイトル
    // ------------------------------
    const workTitle = document.createElement('h3');
    workTitle.className = 'relative text-3xl sm:text-4xl font-bold text-stone-800 tracking-wide mb-7 pl-1';
    workTitle.innerHTML = `${work.title}`;

    infoArea.appendChild(workTitle);

    // 区切り線
    const titleLine = document.createElement('div');
    titleLine.className = 'w-full h-px bg-gradient-to-r from-orange-400 via-orange-200 to-transparent mb-5';

    infoArea.appendChild(titleLine);

    // ------------------------------
    // 基本情報
    // ------------------------------
    const information = document.createElement('div');
    information.className = 'relative flex flex-col gap-3';

    // 制作期間
    information.appendChild(
        createInfoRow('制作期間', work.period)
    );

    // 制作人数
    information.appendChild(
        createInfoRow('制作人数', work.members)
    );

    // 担当箇所
    information.appendChild(
        createInfoRow('担当箇所', work.roles)
    );

    infoArea.appendChild(information);

    // ------------------------------
    // 説明文
    // ------------------------------
    const descriptionLine = document.createElement('div');
    descriptionLine.className = 'w-full h-px bg-stone-300/70 mb-5';

    infoArea.appendChild(descriptionLine);

    const workDescription = document.createElement('p');
    workDescription.className = 'relative text-sm mb-5 sm:text-base text-stone-700 leading-8';
    workDescription.textContent = work.description;

    infoArea.appendChild(workDescription);

    // ------------------------------
    // GitHubボタン
    // ------------------------------
    const githubButton = document.createElement('a');
    githubButton.href = work.github;
    githubButton.target = '_blank';
    githubButton.rel = 'noopener noreferrer';
    githubButton.className = 'relative w-[200px] mt-auto mx-auto lg:mx-0 px-7 py-3.5 flex items-center justify-center gap-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300';

    githubButton.innerHTML = `
        <span>GitHub</span>
        <span class="text-xl">▶</span>
    `;

    infoArea.appendChild(githubButton);

    // ------------------------------
    // カードに追加
    // ------------------------------
    cardContent.appendChild(imageArea);
    cardContent.appendChild(infoArea);

    card.appendChild(cardContent);

    return card;
}


// ======================================================
// 情報1行を生成
// ======================================================
function createInfoRow(label, value) {
    const row = document.createElement('div');
    row.className = 'grid grid-cols-[90px_1fr] sm:grid-cols-[100px_1fr] items-start gap-2 py-2 border-b border-dashed border-stone-300 last:border-b-0';

    const labelElement = document.createElement('span');
    labelElement.className = 'font-bold text-stone-700 text-sm sm:text-base';
    labelElement.textContent = label;

    const valueElement = document.createElement('span');
    valueElement.className = 'text-stone-700 text-sm sm:text-base leading-6';
    valueElement.textContent = value;

    row.appendChild(labelElement);
    row.appendChild(valueElement);

    return row;
}