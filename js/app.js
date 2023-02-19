     
      const BURGEROPEN = document.querySelector('.burger');
      const BURGERCLOSED = document.querySelector('.burgerClosed');
      const MENULIST = document.querySelector('.menuList');
      const SUBMENUSERVICE = document.querySelector('.subMenuService');
      const SUBMENUCLIENT = document.querySelector('.subMenuClient');
      const SUBMENULISTSERVICE = document.querySelector('.subMenuService + .subMenuList');
      const SUBMENULISTCLIENT = document.querySelector('.subMenuClient + .subMenuList');
      
       
      BURGEROPEN.addEventListener('click', () =>{
          MENULIST.classList.add('open');
      });
      BURGERCLOSED.addEventListener('click', () =>{
          MENULIST.classList.remove('open');
      });
      SUBMENUSERVICE.addEventListener('click', () =>{
           SUBMENULISTSERVICE.classList.toggle('open');
           SUBMENUSERVICE.classList.toggle('open');
      });
       
      SUBMENUCLIENT.addEventListener('click', () =>{
            SUBMENULISTCLIENT.classList.toggle('open');
            SUBMENUCLIENT.classList.toggle('open');
      });
      


      const swiper = new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        },
      });