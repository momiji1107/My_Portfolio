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