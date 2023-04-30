


document.addEventListener("DOMContentLoaded",() =>{

    const menuBtns = document.querySelectorAll(".menu__btn");
    const drops = document.querySelectorAll(".dropdown");
   
    document.addEventListener('click', function(e) {
        if (!e.target.classList.contains('dropdown__btn')) { return }
        let curServ = e.target.id
        if (Number(localStorage[curServ])!=1){

       
        localStorage[curServ] = Number(localStorage[curServ] ?? 0) + 1;        
        alert(`${curServ} added into your card`)        
        console.log(localStorage)
        }
      });

    menuBtns.forEach(el=>{

        el.addEventListener("click", (e)=>{
            let currentBtn = e.currentTarget;
            let drop = currentBtn.closest(".menu__item").querySelector(".dropdown");
           
            menuBtns.forEach(el=>{
                if (el!== currentBtn ){
                    el.classList.remove("menu__btn--active"); 
                }
            });
            drops.forEach(el=>{
                if (el!== drop ){
                    el.classList.remove("dropdown--active"); 
                }
            });

            drop.classList.toggle("dropdown--active")
            currentBtn.classList.toggle("menu__btn--active");
        });
    });
    
    document.addEventListener("click",(e)=>{
        if (!e.target.closest(".menu")){
            menuBtns.forEach(el=>{
                    el.classList.remove("menu__btn--active");
                });
            drops.forEach(el=>{
                el.classList.remove("dropdown--active");
            });
        }
    })
});