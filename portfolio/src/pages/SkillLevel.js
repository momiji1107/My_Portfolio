const skillLevels = [
    {
        level: 1,
        name: 'Beginner',
        description: '少しだけ触れたことがある',
    },
    {
        level: 2,
        name: 'Learning',
        description: '調べたり、教えてもらいながら扱える',
    },
    {
        level: 3,
        name: 'Intermediate',
        description: '自力で基本的な作業ができる',
    },
    {
        level: 4,
        name: 'Advanced',
        description: '実践的に扱うことができる',
    },
    {
        level: 5,
        name: 'Expert',
        description: '深い知識を持って扱える',
    },
];

export function initSkillLevel(container) {
  const section = document.createElement('section');
  section.id = 'skilllevel';
  section.className = 'w-full min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat';
  
  section.style.backgroundImage = `url('${import.meta.env.BASE_URL}img/background/momiji_BackGround.png')`;
  section.style.backgroundSize = 'cover';
  section.style.backgroundPosition = 'center';
  section.style.backgroundRepeat = 'no-repeat';
  
  const content = document.createElement('div');

    content.className = `w-full max-w-3xl mx-auto text-center px-5 py-10`;

    // =========================
    // タイトル
    // =========================

    const title = document.createElement('h2');
    title.textContent = 'Skill Level';
    title.className = `text-center text-5xl sm:text-6xl font-serif italic font-bold text-[#8b4b20] drop-shadow-sm`;

    // =========================
    // 説明文
    // =========================

    const description = document.createElement('p');
    description.innerHTML = `- これまでに習得したスキルの熟練度 -`;
    description.className = `font-serif mt-2 mb-5 text-center text-lg font-bold text-[#704522]`;

    // =========================
    // スキルレベル表
    // =========================

    const skillBox = document.createElement('div');
    skillBox.className = `w-full bg-[#fffaf0]/95 border border-[#d8c19c] rounded-xl shadow-lg overflow-hidden text-left`;

    // =========================
    // ヘッダー
    // =========================

    const skillHeader = document.createElement('div');
    skillHeader.textContent = 'スキルレベルの見方（現在の習熟レベルを表示）';
    skillHeader.className = `w-full bg-[#d86a27] text-white font-bold text-base sm:text-lg px-5 py-4 text-center`;

    // =========================
    // レベル一覧
    // =========================

    const skillList = document.createElement('div');
    skillList.className = `divide-y divide-[#e5d5bb]`;

    skillLevels.forEach((skill) => {

      const item = document.createElement('div');
      item.className = `px-5 py-5 sm:py-6`;

      // 🍁マーク
      const maple = document.createElement('div');
      maple.innerHTML = `<img src="${import.meta.env.BASE_URL}img/icon/momiji.png" alt="Momiji" class="w-10 h-10 mx-2">`.repeat(skill.level);
      maple.className = `flex items-center justify-center text-2xl sm:text-3xl tracking-widest text-center mb-2`;

      // レベル名
      const levelName = document.createElement('div');
      levelName.textContent = skill.name;
      levelName.className = `text-center font-semibold text-[#5a4030] text-3xl`;

      // 説明
      const levelDescription = document.createElement('div');
      levelDescription.textContent = `（${skill.description}）`;
      levelDescription.className = `text-center text-sm sm:text-base text-[#806957] mt-1`;

      item.appendChild(maple);
      item.appendChild(levelName);
      item.appendChild(levelDescription);

      skillList.appendChild(item);
    });

    // ==================================================
    // 組み立て
    // ==================================================

    skillBox.appendChild(skillHeader);
    skillBox.appendChild(skillList);

    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(skillBox);

    section.appendChild(content);
  
  container.appendChild(section);
}