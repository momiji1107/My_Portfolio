export function initContact(container) {
  const section = document.createElement('section');
  section.id = 'contact';
  section.className = 'min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-neutral-100 to-white dark:from-neutral-900 dark:to-neutral-950';
  
  section.innerHTML = `
    <div class="max-w-3xl text-center px-4">
      <h2 class="text-4xl sm:text-6xl font-black tracking-tight mb-6 text-neutral-950 dark:text-white">Contact</h2>
      <p class="text-lg text-neutral-600 dark:text-neutral-400">ここに連絡先の内容が入ります。</p>
    </div>
  `;
  
  container.appendChild(section);
}