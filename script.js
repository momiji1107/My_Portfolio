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