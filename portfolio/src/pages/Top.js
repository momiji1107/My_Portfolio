export function initTop(container) {
  const section = document.createElement('section');
  section.id = 'top';
  section.className = 'w-full min-h-screen flex items-center justify-center pt-130 bg-cover bg-center bg-no-repeat dark:from-neutral-900 dark:to-neutral-950';
  
  section.style.backgroundImage = `url('${import.meta.env.BASE_URL}img/background/CharaImage_BackGround.png')`;
  section.style.backgroundPosition = 'center';
  section.style.backgroundRepeat = 'no-repeat';

  section.innerHTML = `
    <div class="max-w-3xl text-center px-4">

      <h2 class="text-7xl font-serif font-bold tracking-tight mb-1 text-white"
      style="text-shadow: 3px 3px 6px rgba(0,0,0,1);">
        もみじ
      </h2>

      <p class="text-2xl font-serif font-bold text-white"
      style="text-shadow: 3px 3px 6px rgba(0,0,0,1);">
        新しいと懐かしいを創り出す
      </p>

    </div>
  `;
  
  container.appendChild(section);
}