export function initWorks(container) {
  const section = document.createElement('section');
  section.id = 'works';
  section.className = 'w-full min-h-screen flex items-center justify-center pb-130 bg-cover bg-center bg-no-repeat';
  
  section.style.backgroundImage = `url('${import.meta.env.BASE_URL}img/background/momiji_BackGround.png')`;
  section.style.backgroundSize = 'cover';
  section.style.backgroundPosition = 'center';
  section.style.backgroundRepeat = 'no-repeat';
  
  section.innerHTML = `
    <div class="max-w-3xl text-center px-4">
      <h2 class="text-6xl font-serif tracking-tight mb-1 text-neutral-950">Works</h2>
      <p class="text-lg font-bold text-neutral-950 font-serif">- 作品一覧 -</p>
    </div>
  `;
  
  container.appendChild(section);
}