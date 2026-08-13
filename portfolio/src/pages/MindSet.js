const mindsetList = [
    {
        number: '01',
        title: '新しい体験を創る',
        text: 'プレイヤーがまだ見たことのない世界や仕組みを考え、ワクワクする「はじめて」の体験を生み出します。その驚きが、ゲームの原動力になると信じています。'
    },
    {
        number: '02',
        title: '心に残る体験を届ける',
        text: '楽しいだけでなく、感動や共感、時には切なさまで、心を動かす体験を届けたい。プレイ後もふとした瞬間に思い出されるような、記憶に残るゲームを目指します。'
    },
    {
        number: '03',
        title: 'プレイヤーに寄り添う',
        text: 'プレイヤーの気持ちや視点を大切にし、誰もが楽しめるように工夫します。遊びやすさや心地よさを追求し、すべての人にとっての「楽しい」をつくります。'
    },
    {
        number: '04',
        title: 'チームで最高をつくる',
        text: '仲間との信頼や対話を大切にし、それぞれの強みを活かし合うことで、一人ではつくれない最高のゲームを生み出します。'
    }
];

export function initMindSet(container) {
  const section = document.createElement('section');
  section.id = 'mindset';
  section.className = 'relative w-full min-h-screen flex items-center justify-center py-10 pb-20 bg-cover bg-center bg-no-repeat';
  
  section.style.backgroundImage = `url('${import.meta.env.BASE_URL}img/background/momiji_BackGround.png')`;
  section.style.backgroundSize = 'cover';
  section.style.backgroundPosition = 'center';
  section.style.backgroundRepeat = 'no-repeat';
  
  // 背景を少し白くするオーバーレイ
  const overlay = document.createElement('div');
  overlay.className = 'absolute inset-0 bg-orange-50/30';

  // メインコンテンツ
  const content = document.createElement('div');
  content.className = 'relative z-10 w-full max-w-6xl mx-auto';

  // タイトル
  const header = document.createElement('div');
  header.className = 'text-center mb-10';

  header.innerHTML = `
    <div class="max-w-3xl mx-auto text-center px-4">
      <h2 class="text-center text-5xl sm:text-6xl font-serif italic font-bold text-[#8b4b20] drop-shadow-sm">Mind Set</h2>
      <p class="font-serif mt-2 text-center text-lg font-bold text-[#704522]">- 価値観・個人理念 -</p>
    </div>
  `;

  content.appendChild(header);

  // 理念一覧
  const mindsetContainer = document.createElement('div');
  mindsetContainer.className = 'flex flex-col gap-10';

  mindsetList.forEach((mindset, index) => {
    const item = document.createElement('div');

    const isRight = index % 2 === 1;

    item.className = `w-full px-10 max-w-[800px] mx-auto flex ${isRight ? 'justify-end' : 'justify-start'} lg:max-w-full`;

    const inner = document.createElement('div');

    inner.className = `w-full sm:w-4/5 lg:w-3/5 ${isRight ? 'lg:mr-10' : 'lg:ml-40'}`;

    inner.innerHTML = `
      <div class="flex items-center gap-4 mb-3">
        <span class="text-orange-500 text-2xl">✦</span>
        <span class="text-orange-500 text-lg sm:text-xl tracking-[0.2em] font-serif">
          ${mindset.number}
        </span>
        <span class="h-px flex-1 max-w-20 bg-orange-400"></span>
      </div>

      <h3 class="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold tracking-wider text-orange-700 mb-5">
        ${mindset.title}
      </h3>

      <p class="text-base sm:text-lg leading-8 sm:leading-9 tracking-wide text-neutral-800">
        ${mindset.text}
      </p>
    `;

    item.appendChild(inner);
    mindsetContainer.appendChild(item);
  });

  content.appendChild(mindsetContainer);

  section.appendChild(overlay);
  section.appendChild(content);
  
  container.appendChild(section);
}