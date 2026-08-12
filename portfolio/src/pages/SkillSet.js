import { skillCategories } from '../datas/skillData.js';
import { skillLevels } from './SkillLevel.js';

export function initSkillSet(container) {
    const section = document.createElement('section');
    section.id = 'skillset';
    section.className = 'w-full min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat py-16 px-4 sm:px-6 lg:px-10';

    section.style.backgroundImage = `url('${import.meta.env.BASE_URL}img/background/momiji_BackGround.png')`;
    section.style.backgroundSize = 'cover';
    section.style.backgroundPosition = 'center';
    section.style.backgroundRepeat = 'no-repeat';

    // ==================================================
    // コンテンツ全体
    // ==================================================

    const content = document.createElement('div');
    content.className = 'w-full max-w-7xl';

    // ==================================================
    // タイトル
    // ==================================================

    const title = document.createElement('h2');
    title.textContent = 'Skill Set';
    title.className = 'text-center text-5xl sm:text-6xl font-serif italic font-bold text-[#8b4b20] drop-shadow-sm';

    const subtitle = document.createElement('p');
    subtitle.textContent = '- スキルセット -';
    subtitle.className = 'font-serif mt-2 text-center text-lg font-bold text-[#704522]';

    const description = document.createElement('p');
    description.textContent = 'これまでに学んだ技術や、制作に活かしているスキルを紹介します。';
    description.className = 'mt-4 mb-8 text-center text-sm sm:text-base text-[#704522]';

    // ==================================================
    // タブ
    // ==================================================

    const tabContainer = document.createElement('div');
    tabContainer.className = 'w-full flex flex-wrap justify-center gap-2 mb-6';

    // ==================================================
    // スキルカード表示エリア
    // ==================================================

    const cardContainer = document.createElement('div');
    cardContainer.className = 'w-full';

    // ==================================================
    // 現在選択しているジャンル
    // ==================================================

    let currentIndex = 0;

    // ==================================================
    // 🍁画像
    // ==================================================

    const mapleImage = `${import.meta.env.BASE_URL}img/icon/momiji.png`;

    // ==================================================
    // 習熟度の🍁を作る
    // ==================================================

    function createSkillLevel(level) {
        const wrapper = document.createElement('div');
        wrapper.className = 'flex items-center justify-center gap-1';

        for (let i = 1; i <= 5; i++) {
            const maple = document.createElement('img');

            maple.src = mapleImage;
            maple.alt = '';
            maple.className = 'w-7 h-7 sm:w-6 sm:h-6 object-contain transition duration-200';

            if (i > level) {
                maple.classList.add('opacity-20', 'grayscale');
            }

            wrapper.appendChild(maple);
        }

        return wrapper;
    }

    // ==================================================
    // スキルカードを作成
    // ==================================================

    function createSkillCard(skill) {
        const card = document.createElement('div');
        card.className = 'group relative w-full min-h-[250px] bg-[#fffaf0]/95 border border-[#d8c19c] rounded-xl shadow-md overflow-hidden p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl';

        // --------------------------------------------------
        // アイコン
        // --------------------------------------------------

        const iconWrapper = document.createElement('div');
        iconWrapper.className = 'flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 bg-white rounded-xl border border-[#e2cda9] shadow-sm p-2';

        const icon = document.createElement('img');
        icon.src = skill.icon;
        icon.alt = skill.name;
        icon.className = 'w-full h-full object-contain';

        iconWrapper.appendChild(icon);

        // --------------------------------------------------
        // スキル名
        // --------------------------------------------------

        const name = document.createElement('h3');
        name.textContent = skill.name;
        name.className = 'text-center text-3xl sm:text-2xl font-bold text-[#5a4030]';

        // --------------------------------------------------
        // スキルレベル
        // --------------------------------------------------

        function getSkillLevelName(level) {
            const skillLevel = skillLevels.find((item) => item.level === level);

            if (!skillLevel) {
                return '';
            }

            return skillLevel.name;
        }

        const levelLabel = document.createElement('p');
        levelLabel.textContent = getSkillLevelName(skill.level);
        levelLabel.className = 'mt-3 mb-2 text-center text-xm font-semibold text-[#9a6a43]';

        const level = createSkillLevel(skill.level);

        // --------------------------------------------------
        // 区切り線
        // --------------------------------------------------

        const line = document.createElement('div');
        line.className = 'w-full h-px bg-[#e5d5bb] my-4';

        // --------------------------------------------------
        // 説明
        // --------------------------------------------------

        const description = document.createElement('p');
        description.textContent = skill.description;
        description.className = 'text-sm leading-6 text-[#704522] text-center';

        // --------------------------------------------------
        // カードに追加
        // --------------------------------------------------

        card.appendChild(iconWrapper);
        card.appendChild(name);
        card.appendChild(levelLabel);
        card.appendChild(level);
        card.appendChild(line);
        card.appendChild(description);

        return card;
    }

    // ==================================================
    // スキルカードを表示
    // ==================================================

    function renderCards() {
        cardContainer.innerHTML = '';

        const category = skillCategories[currentIndex];

        if (!category) {
            return;
        }

        // ----------------------------------------------
        // 選択中ジャンルのタイトル
        // ----------------------------------------------

        const categoryTitle = document.createElement('div');
        categoryTitle.className = 'flex items-center justify-center gap-3 mb-5';

        const categoryIcon = document.createElement('span');
        categoryIcon.textContent = category.icon;
        categoryIcon.className = 'text-2xl sm:text-3xl';

        const categoryName = document.createElement('h3');
        categoryName.textContent = category.name;
        categoryName.className = 'text-xl sm:text-2xl font-bold text-[#5a4030]';

        categoryTitle.appendChild(categoryIcon);
        categoryTitle.appendChild(categoryName);

        cardContainer.appendChild(categoryTitle);

        // ----------------------------------------------
        // カードグリッド
        // ----------------------------------------------

        const grid = document.createElement('div');
        grid.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5';

        category.skills.forEach((skill) => {
            grid.appendChild(createSkillCard(skill));
        });

        cardContainer.appendChild(grid);
    }

    // ==================================================
    // タブを作成
    // ==================================================

    function renderTabs() {
        tabContainer.innerHTML = '';

        skillCategories.forEach((category, index) => {
            const tab = document.createElement('button');

            tab.type = 'button';
            tab.textContent = category.name;

            tab.className = 'px-4 py-3 rounded-t-xl border border-[#d8c19c] bg-[#fff8e8]/95 text-[#704522] text-sm sm:text-base font-semibold shadow-sm transition-all duration-200 hover:bg-[#f4a340] hover:text-white cursor-pointer';

            if (index === currentIndex) {
                tab.className = 'px-4 py-3 rounded-t-xl border border-[#d47725] bg-[#d86a27] text-white text-sm sm:text-base font-semibold shadow-md -translate-y-1 cursor-pointer';
            }

            tab.addEventListener('click', () => {
                currentIndex = index;

                renderTabs();
                renderCards();
            });

            tabContainer.appendChild(tab);
        });
    }

    // ==================================================
    // 組み立て
    // ==================================================

    content.appendChild(title);
    content.appendChild(subtitle);
    content.appendChild(description);
    content.appendChild(tabContainer);
    content.appendChild(cardContainer);

    section.appendChild(content);
    container.appendChild(section);

    // ==================================================
    // 初期表示
    // ==================================================

    renderTabs();
    renderCards();
}