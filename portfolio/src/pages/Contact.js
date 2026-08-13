import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_4yn82gp';
const EMAILJS_TEMPLATE_ID = 'template_ccn5434';
const EMAILJS_PUBLIC_KEY = 'HdwEmvYIwuFkOXc2w';

emailjs.init({
    publicKey: EMAILJS_PUBLIC_KEY
});

export function initContact(container) {
  const section = document.createElement('section');
  section.id = 'contact';
  section.className = 'w-full min-h-[1000px] flex items-center justify-center bg-cover bg-center bg-no-repeat';
  
  section.style.backgroundImage = `url('${import.meta.env.BASE_URL}img/background/momiji_BackGround.png')`;
  section.style.backgroundSize = 'cover';
  section.style.backgroundPosition = 'center';
  section.style.backgroundRepeat = 'no-repeat';
  
  section.innerHTML = `
    <div id="contact-paper" 
    class="relative w-full max-w-5xl overflow-hidden rounded-sm px-6 py-12 sm:px-12 md:px-20 lg:px-28">
    
    <img
      src="${import.meta.env.BASE_URL}img/background/paper1_BackGround.jpeg"
      alt=""
      class="pointer-events-none absolute inset-0 z-0 h-full w-full object-fill"
    >
    
    <div class="relative z-10">

      <!-- タイトル -->
      <div class="relative z-10 mb-5 mt-5 text-center">
        <h2 class="text-center text-5xl sm:text-6xl font-serif italic font-bold text-[#8b4b20] drop-shadow-sm">
          Contact
        </h2>

        <p class="font-serif mt-2 text-center text-lg font-bold text-[#704522]">
          - お問い合わせ -
        </p>
      </div>

      <!-- 区切り線 -->
      <div class="mb-8 border-t-2 border-[#ead9bd]"></div>

        <!-- 送信先 -->
        <div class="mb-8 ml-2 flex gap-2 text-lg flex-row sm:items-center sm:gap-4">
          <span class="font-bold text-[#59351f]">
            Dear 
          </span>

          <span class="font-bold text-[#d95f27] break-all">
            freemomiji183@gmail.com
          </span>
        </div>

        <!-- Contact Form -->
        <form id="contact-form" class="relative z-10">

          <!-- メールアドレス -->
          <div class="mb-8">
            <label for="user_email" class="mb-3 ml-2 block text-lg font-bold text-[#59351f] sm:text-xl">
              メールアドレス
            </label>

            <input
              id="user_email"
              name="user_email"
              type="email"
              required
              placeholder="example@gmail.com"
              class="w-full rounded-xl border-2 border-[#ead9bd] bg-[#fffdf7] px-5 py-4 text-base text-[#59351f] outline-none transition placeholder:text-[#c7b79f] focus:border-[#d95f27] focus:ring-2 focus:ring-[#d95f27]/20 sm:text-lg"
            />
          </div>

          <!-- 件名 -->
          <div class="mb-3">
            <label for="subject" class="mb-3 ml-2 block text-lg font-bold text-[#59351f] sm:text-xl">
              件名
            </label>

            <input
              id="subject"
              name="subject"
              type="text"
              required
              placeholder="お問い合わせの件名"
              class="w-full rounded-xl border-2 border-[#ead9bd] bg-[#fffdf7] px-5 py-4 text-base text-[#59351f] outline-none transition placeholder:text-[#c7b79f] focus:border-[#d95f27] focus:ring-2 focus:ring-[#d95f27]/20 sm:text-lg"
            />
          </div>

          <!-- 本文 -->
          <div class="mb-3">
            <label for="message" class="mb-3 ml-2 block text-lg font-bold text-[#59351f] sm:text-xl">
               本文
            </label>

            <textarea
              id="message"
              name="message"
              required
              rows="9"
              placeholder="ご用件をご記入ください"
              class="w-full resize-y rounded-xl border-2 border-[#ead9bd] bg-[#fffdf7] px-5 py-4 text-base leading-relaxed text-[#59351f] outline-none transition placeholder:text-[#c7b79f] focus:border-[#d95f27] focus:ring-2 focus:ring-[#d95f27]/20 sm:text-lg"
              ></textarea>
          </div>

          <!-- 名前 -->
          <div class="mb-8">
            <label for="user_name" class="mb-3 ml-2 block text-lg font-bold text-[#59351f] sm:text-xl">
              Best regards,
            </label>

            <input
              id="user_name"
              name="user_name"
              type="text"
              required
              placeholder="お名前をご入力ください"
              class="w-full rounded-xl border-2 border-[#ead9bd] bg-[#fffdf7] px-5 py-4 text-base text-[#59351f] outline-none transition placeholder:text-[#c7b79f] focus:border-[#d95f27] focus:ring-2 focus:ring-[#d95f27]/20 sm:text-lg"
            />
          </div>

          <!-- Send -->
          <div class="flex justify-center">
            <button
              type="submit"
              id="contact-send-button"
              class="group flex items-center gap-3 rounded-2xl bg-[#e8752c] px-10 py-4 text-xl font-bold text-white shadow-lg transition duration-200 hover:-translate-y-1 hover:bg-[#d96520] hover:shadow-xl active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 sm:px-14 sm:py-5 sm:text-2xl"
            >
              <span>Send</span>
              <span class="text-2xl transition-transform duration-200 group-hover:translate-x-1">
                ➤
              </span>
            </button>
          </div>

        </form>

        <!-- 確認モーダル -->
        <div id="contact-confirm-modal"
        class="fixed inset-0 z-[100] hidden items-center justify-center bg-black/40 px-4 backdrop-blur-sm">
          
          <div class="w-full max-w-md rounded-2xl bg-[#fffaf0] p-8 text-center shadow-2xl">

            <h3 class="mb-4 text-2xl font-bold text-[#59351f]">
              お問い合わせを送信しますか？
            </h3>

            <p class="mb-8 leading-relaxed text-[#79583e]">
              入力した内容を送信します。<br/>
              よろしければ「送信する」を押してください。
            </p>

            <div class="flex justify-center gap-4">
              <button
                type="button"
                id="contact-cancel-button"
                class="rounded-xl border-2 border-[#d8c4a5] px-6 py-3 font-bold text-[#59351f] transition hover:bg-[#f2e5d0]"
              >
                キャンセル
              </button>

              <button
                type="button"
                id="contact-confirm-button"
                class="rounded-xl bg-[#e8752c] px-6 py-3 font-bold text-white transition hover:bg-[#d96520]"
              >
                送信する
              </button>
            </div>

          </div>
        </div>

        <!-- 送信結果モーダル -->
        <div id="contact-result-modal"
        class="fixed inset-0 z-[110] hidden items-center justify-center bg-black/40 px-4 backdrop-blur-sm">
          
          <div class="w-full max-w-md rounded-2xl bg-[#fffaf0] p-8 text-center shadow-2xl">
            <h3
              id="contact-result-title"
              class="mb-4 text-2xl font-bold text-[#59351f]">
            </h3>
              <p
              id="contact-result-message"
              class="mb-8 leading-relaxed text-[#79583e]">
              </p>

              <button
              type="button"
              id="contact-result-close"
              class="rounded-xl bg-[#e8752c] px-8 py-3 font-bold text-white transition hover:bg-[#d96520]"
              >
                閉じる
              </button>

          </div>
        </div>
      </div>
    </div>
    `;
  
  container.appendChild(section);

  const form = section.querySelector('#contact-form');

  const confirmModal = section.querySelector('#contact-confirm-modal');
  const resultModal = section.querySelector('#contact-result-modal');

  const cancelButton = section.querySelector('#contact-cancel-button');
  const confirmButton = section.querySelector('#contact-confirm-button');
  const resultCloseButton = section.querySelector('#contact-result-close');

  const resultTitle = section.querySelector('#contact-result-title');
  const resultMessage = section.querySelector('#contact-result-message');


  // Sendボタンを押したとき
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    confirmModal.classList.remove('hidden');
    confirmModal.classList.add('flex');
  });


  // キャンセルボタン
  cancelButton.addEventListener('click', () => {
    confirmModal.classList.add('hidden');
    confirmModal.classList.remove('flex');
  });


  // 「送信する」ボタン
  confirmButton.addEventListener('click', async () => {

    confirmButton.disabled = true;
    confirmButton.textContent = '送信中...';

    try {

      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form
      );

      // 確認ウィンドウを閉じる
      confirmModal.classList.add('hidden');
      confirmModal.classList.remove('flex');

      // 成功メッセージ
      resultTitle.textContent = '送信しました！';
      resultMessage.innerHTML = 'お問い合わせありがとうございます。<br/>メッセージを受け付けました。';

      resultModal.classList.remove('hidden');
      resultModal.classList.add('flex');

      // フォームを空にする
      form.reset();

    } catch (error) {

      console.error('EmailJS Error:', error);

      // 確認ウィンドウを閉じる
      confirmModal.classList.add('hidden');
      confirmModal.classList.remove('flex');

      // エラーメッセージ
      resultTitle.textContent = '送信に失敗しました';
      resultMessage.textContent = 'メールを送信できませんでした。時間をおいてもう一度お試しください。';

      resultModal.classList.remove('hidden');
      resultModal.classList.add('flex');

    } finally {

      confirmButton.disabled = false;
      confirmButton.textContent = '送信する';

    }
});


// 結果ウィンドウを閉じる
resultCloseButton.addEventListener('click', () => {
    resultModal.classList.add('hidden');
    resultModal.classList.remove('flex');
});
}