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
      <h2 class="text-center text-5xl sm:text-6xl font-serif italic font-bold text-[#8b4b20] drop-shadow-sm">Works</h2>
      <p class="font-serif mt-2 text-center text-lg font-bold text-[#704522]">- 作品一覧 -</p>
    </div>
  `;
  
  container.appendChild(section);
}