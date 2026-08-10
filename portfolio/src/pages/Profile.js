export function initProfile(container) {
  const section = document.createElement('section');
  section.id = 'profile';
  section.className = 'relative w-full min-h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat';
  
  section.style.backgroundImage = `url('${import.meta.env.BASE_URL}img/background/momiji_BackGround.png')`;
  section.style.backgroundSize = 'cover';
  section.style.backgroundPosition = 'center';
  section.style.backgroundRepeat = 'no-repeat';

  section.innerHTML = `
    <div class="relative max-w-[1200px] max-h-[1000px]">
      <img
        src="${import.meta.env.BASE_URL}img/background/paper1_BackGround.jpeg"
        alt="縦向きの紙の背景"
        class="w-auto h-full min-h-[900px] block sm:hidden"
      >

      <img
        src="${import.meta.env.BASE_URL}img/background/paper2_BackGround.jpeg"
        alt="横向きの紙の背景"
        class="w-full h-auto max-h-[500px] hidden sm:block lg:hidden"
      >

      <img
        src="${import.meta.env.BASE_URL}img/background/paper3_BackGround.png"
        alt="横向きの細長い紙の背景"
        class="w-full h-auto hidden lg:block"
      >

      <!-- プロフィール内容 -->
      <div class="absolute inset-0 flex flex-col items-center justify-start pt-20 text-center px-8
      lg:pt-10">
        <img
          src="${import.meta.env.BASE_URL}img/profile/koma_stand.png"
          alt="koma立ち絵"
          class="absolute w-full h-auto bottom-0 max-w-sm z-10
          sm:bottom-0 sm:right-0 sm:w-auto sm:h-auto
          lg:bottom-0 lg:right-10 lg:w-auto lg:h-auto"
        >

        <h2 class="text-6xl font-serif tracking-tight mb-1 text-neutral-950 z-20
        sm:pr-55">
          Profile
        </h2>

        <p class="text-lg font-bold text-neutral-950 font-serif z-20
        sm:pr-55">
          - 自己紹介 -
        </p>

        <div class="absolute inset-0 flex flex-col text-left
        items-center justify-start pt-60 px-15
        sm:items-start sm:justify-center sm:pt-5 sm:pr-35
        lg:pr-60">
          <p class ="text-lg text-neutral-950 font-bold font-mono leading-relaxed max-w-3xl z-20"
          style ="text-shadow: 2px 2px 4px rgb(200, 200, 200);
          ">
            ゲームクリエイターを目指す大学生。<br/>
            幼い頃から"ものづくり"が大好きで、現在はその情熱をゲーム制作に注いでいる。<br/>
            新しい体験へのわくわくと心に残る想い出を届けたい。<br/>
            好きな食べ物はお寿司。
          </p>
        </div>

      </div>

    </div>
  `;
  
  container.appendChild(section);
}