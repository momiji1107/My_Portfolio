export function initTop(container) {
  const section = document.createElement('section');
  section.id = 'top';
  section.className = 'min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-neutral-100 to-white dark:from-neutral-900 dark:to-neutral-950';
  
  section.innerHTML = `
    <div class="max-w-3xl text-center px-4">
      <h2 class="text-4xl sm:text-6xl font-black tracking-tight mb-6 text-neutral-950 dark:text-white">もみじ Portfolio</h2>
      <p class="text-lg text-neutral-600 dark:text-neutral-400">ここにホームページのトップ画面やアイコンが入ります。</p>
    </div>
  `;
  
  container.appendChild(section);
}