const menu=document.querySelectorAll("#sidebar a");

menu.forEach(item=>{

    item.addEventListener("click",()=>{

        menu.forEach(x=>x.classList.remove("active"));

        item.classList.add("active");

    });

});