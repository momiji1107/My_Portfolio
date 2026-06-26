const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("#sidebar a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-150;

        if(pageYOffset>=top){

            current=section.getAttribute("id");
        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

/*==========================
    Fade Animation
==========================*/

const fades=document.querySelectorAll(".fade");

window.addEventListener("scroll",()=>{

    fades.forEach(item=>{

        const pos=item.getBoundingClientRect().top;

        if(pos<window.innerHeight-120){

            item.classList.add("show");

        }

    });

});

// 初回表示
window.dispatchEvent(new Event("scroll"));

/*==========================
        Works Tab
==========================*/

const tabs=document.querySelectorAll(".tab");
const pages=document.querySelectorAll(".works-page");

tabs.forEach(tab=>{

    tab.addEventListener("click",()=>{

        tabs.forEach(btn=>btn.classList.remove("active"));
        pages.forEach(page=>page.classList.remove("active-page"));

        tab.classList.add("active");

        document
            .getElementById(tab.dataset.target)
            .classList.add("active-page");

    });

});

/*==========================
    Image Slider
==========================*/

document.querySelectorAll(".slider").forEach(slider=>{

    const slides=slider.querySelectorAll(".slide");

    const prev=slider.querySelector(".prev");

    const next=slider.querySelector(".next");

    let index=0;

    function show(i){

        slides.forEach(s=>s.classList.remove("active-slide"));

        slides[i].classList.add("active-slide");

    }

    prev.addEventListener("click",()=>{

        index--;

        if(index<0) index=slides.length-1;

        show(index);

    });

    next.addEventListener("click",()=>{

        index++;

        if(index>=slides.length) index=0;

        show(index);

    });

});

/*==========================
    Contact Form
==========================*/

const form=document.getElementById("contactForm");

form.addEventListener("submit",function(e){

    e.preventDefault();

    const name=document.getElementById("name").value;
    const mail=document.getElementById("mail").value;
    const message=document.getElementById("message").value;

    if(name===""||mail===""||message===""){

        alert("すべて入力してください。");
        return;

    }

    alert("送信しました。（ダミー）");

    form.reset();

});

/*==========================
    Parallax Maple
==========================*/

const leaves=document.querySelectorAll(".leaf");

window.addEventListener("scroll",()=>{

    const y=window.scrollY;

    leaves.forEach((leaf,index)=>{

        leaf.style.transform=

        `translateY(${y*(0.08+index*0.03)}px)
         rotate(${y*0.03}deg)`;

    });

});

/*==========================
    Card Animation
==========================*/

const cards=document.querySelectorAll(

".skill-card,.news-card,.work-card"

);

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.zIndex=10;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.zIndex=1;

    });

});

/*==========================
    Tilt Animation
==========================*/

document.querySelectorAll(

".paper,.paper-front,.skill-card"

).forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const x=e.offsetX/card.clientWidth-.5;

        const y=e.offsetY/card.clientHeight-.5;

        card.style.transform=

        `rotate(${x*2}deg)
         translateY(${y*6}px)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="";

    });

});

/*==========================
Sidebar Active Smooth
==========================*/

const links=document.querySelectorAll("#sidebar a");

links.forEach(link=>{

link.addEventListener("mouseenter",()=>{

link.style.letterSpacing="3px";

});

link.addEventListener("mouseleave",()=>{

link.style.letterSpacing="0px";

});

});