export function initSkillSet(container) {
  const section = document.createElement('section');
  section.id = 'skillset';
  section.className = 'w-full min-h-screen flex items-center justify-center pb-130 bg-cover bg-center bg-no-repeat';
  
  section.style.backgroundImage = `url('${import.meta.env.BASE_URL}img/background/momiji_BackGround.png')`;
  section.style.backgroundPosition = 'center';
  section.style.backgroundRepeat = 'no-repeat';
  
  section.innerHTML = `
    <div class="max-w-3xl text-center px-4">
      <h2 class="text-4xl sm:text-6xl font-serif tracking-tight mb-6 text-neutral-950 dark:text-white">Skill Set</h2>
      <p class="text-lg text-neutral-600 font-serif">これまでに習得したスキルとその熟練度</p>
    </div>
  `;
  
  container.appendChild(section);
}