// call variables 
const main_header=document.querySelector("header"),
search_icon=document.querySelector(".search-icon"),
mobile_nav=document.querySelector(".mobile_nav"),
toggle_content=document.querySelectorAll(".accordion_item .toggle_content"),
faders=document.querySelectorAll(".fade_in"),
sliders=document.querySelectorAll(".slide_in"),
video=document.querySelector("video"),
playVideoBtn=document.querySelector('.video_play'),
video_overlay=document.querySelector('.video_overlay'),
// read more link 
wprs_rd_more=document.querySelectorAll('.wprs_rd_more'),
wprs_rd_more_text=document.querySelectorAll('.wprs_rd_more_text'),
wprs_rd_less=document.querySelectorAll('.wprs_rd_less'),
pgdgLanguage=document.querySelector('#pgdg-language'),
pgdgLangActive=document.querySelector('.pgdg-lang-active'),
pgdgHover=pgdgLanguage.querySelectorAll('.pgdg-hover');

//  !call variables 
  
// custum choice of langues 

function openPgdgLanguage(){
    pgdgLanguage.classList.toggle('opened');
}
document.onclick=function(e){
    if(e.target.id !=='collapsible'){
        pgdgLanguage.classList.remove('opened');
    }
}
for(let i=0;i<pgdgHover.length;i++){
    pgdgHover[i].setAttribute('onclick','choice(this)');
}

function choice(element){
   pgdgLangActive.children[0].src=element.children[0].src;
   pgdgLangActive.querySelector('.current').innerHTML=element.querySelector('.choice').textContent;
}
// !custum choice of langues 

// show and hide text 
for(let i=0;i<wprs_rd_more.length;i++){
    wprs_rd_more[i].setAttribute('onclick','showhiddentext(this)');
}
for(let i=0;i<wprs_rd_less.length;i++){
    wprs_rd_less[i].setAttribute('onclick','hidshowntext(this)');
}
function hidshowntext(element){
    element.parentElement.style.display='none';
    element.parentElement.parentElement.children[1].style.display='block'
    }
function showhiddentext(element){
element.parentElement.children[2].style.display='block';
element.style.display='none';
}
// !show and hide text 
// custum video 
function playvideo(){
    video_overlay.classList.add('videoactived');
    video.play();
}
function toggleVideoStatus(){
    if(video.paused){
        video.play()
    }else{
        video.pause()
    }
}
// !custum video 
// animation while scrolling 
const appearoptions={
    threshold:0,
    rootMargin:"0px 0px -100px 0px"
};
const appearOnscroll=new IntersectionObserver(function(entries,appearOnscroll){
    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            return ;
        }else{
            entry.target.classList.add('appear');
            appearOnscroll.unobserve(entry.target);
        }
    })
},appearoptions);

faders.forEach(fader=>{
    appearOnscroll.observe(fader)
})

// !animation while scrolling 

// show and hide search bar 
function searchclick(){
    main_header.classList.add("change");
}
function unsearchclick(){
    main_header.classList.remove("change");
}
// !show and hide search bar 
// open and close menu of mobile forme 
function togglemenu(){
    mobile_nav.classList.toggle("tooglenav");
}
// !open and close menu of mobile forme 

// fixed the header while scrolling down 
$(window).scroll(function(){
    if(this.scrollY>20){
        $(".top-line").css("display","none");
        $('.main-header').addClass("header-fixed");
    }else{
        $(".top-line").css("display","block");
        $('.main-header').removeClass("header-fixed");
    }
});
// !fixed the header while scrolling down 

// owl-carousel 
$(".slide-inner").owlCarousel({
 items:1,
 loop:true,
 nav:true,
 dots:true,
 autoplay:true,
 autoplaySpeed:1000,
 smartSpeed:1500,
 autoplayHoverPause:true
});
$(".choosetour.owl-carousel").owlCarousel({
    items:1,
    loop:true,
    nav:true,
    dots:true,
    autoplay:true,
    autoplaySpeed:1000,
    smartSpeed:1500,
    autoplayHoverPause:true
   });
$(".section11 .owl-carousel").owlCarousel({
    items:3,
    loop:true,
    nav:false,
    dots:true,
    autoplay:false,
    margin:10,
    smartSpeed:1000,
    responsive:{
        0:{
            items:1
            
        },
        600:{
            items:2
        },
        990:{
            items:3
        }
    }
   });

// !owl-carousel 

setInterval(() => {
    for(let i=0;i<toggle_content.length;i++){
        if(!toggle_content[i].classList.contains("show")){
            toggle_content[i].parentElement.classList.add("toggle_close");
            toggle_content[i].parentElement.classList.remove("toggle_open");
        }else{
            toggle_content[i].parentElement.classList.add("toggle_open");
            toggle_content[i].parentElement.classList.remove("toggle_close");
        }
    }
}, 100);



