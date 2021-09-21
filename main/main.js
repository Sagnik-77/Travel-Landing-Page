const showMenu = (toggLeId, navId)=>{
    const toggle = document.getElementById(toggLeId),
    nav = document.getElementById(navId)

    //Validate that variables exists
    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            //We add the show-menu class to the div tag
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

//================SWIPER JS=================//

let galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 0,
    slidesPerView: 0,
  })
let galleryTop = new Swiper('.gallery-top', {
    effect: 'fade',
    loop: true,
    
    thumbs: {
      swiper: galleryThumbs
    }
})
//================GSAP ANIMATION=================//
const controlImg = document.querySelectorAll('.controls_img')

function ScrollAnimation(){
    gsap.from('.islands_subtitle', {opacity: 0, duratin: .2, delay:.2, y:-20})
    gsap.from('.islands_title', {opacity: 0, duratin: .3, delay:.3, y:-20})
    gsap.from('.islands_desc', {opacity: 0, duratin: .4, delay:.4, y:-20})
    gsap.from('.islands_button', {opacity: 0, duratin: .5, delay:.5, y:-20})
}

controlImg.forEach(c => c.addEventListener('click',ScrollAnimation))