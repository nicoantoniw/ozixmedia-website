let lastScrollTop = 0;
navbar = document.getElementById("navbar");
window.addEventListener("scroll",function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-80px";
    } else {
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
});

window.addEventListener('scroll',function () {
    if (window.scrollY > 150 && window.innerWidth > 600) {
        document.querySelector('#navbar').style.background="white";
        document.querySelector('.navbar-index').style.color="#333333";
        document.querySelector('.navbar-services').style.color="#333333";
        document.querySelector('.navbar-contact').style.color="#333333";
        document.querySelector('.navbar-contact').style.color="#333333";
    }
    else{
        if (window.scrollY > 150 && window.innerWidth < 600) {
        document.querySelector('.navbar-index').style.color="#333";
        document.querySelector('#navbar').style.background="white";
    } else {
            if (window.innerWidth < 600) {
                document.querySelector('.navbar-index').style.color="#333";
                document.querySelector('#navbar').style.background="";
            } else {
                document.querySelector('#navbar').style.background="";
        document.querySelector('.navbar-index').style.color="#fff";
        document.querySelector('.navbar-services').style.color="#fff";
        document.querySelector('.navbar-contact').style.color="#fff";
            }
        }

    }

});

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.uls');
  const links = document.querySelectorAll('.uls li');
  const navbarContent = document.querySelector('.navbar-content');

  burger.addEventListener('click',()=>{
      // toggle nav
     nav.classList.toggle('nav-active');

     // animate links
     links.forEach((link,index)=> {
      if (link.style.animation) {
          link.style.animation = '';
          navbarContent.style.background = '';
      } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
          navbarContent.style.background = '#ffffff';
      }
  });
     // burger animation
      burger.classList.toggle('toggle');
  });

  nav.addEventListener('click',()=>{
      links.forEach((link,index)=> {
          nav.classList.remove('nav-active');
          burger.classList.remove('toggle');
          document.querySelector('.navbar-index').style.color="#333";
        document.querySelector('.navbar-services').style.color="#333";
        document.querySelector('.navbar-contact').style.color="#333";
        link.style.animation = '';
      })
  });

};


navSlide();