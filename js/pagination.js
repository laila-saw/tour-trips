const filterImg=document.querySelectorAll('.portfolio_items .portfolio_item'),
prev=document.querySelector('.prev'),
next=document.querySelector('.next'),
num_page=document.querySelector('.num-page'),
maxItems=8;
let index=1,
pagination=Math.ceil(filterImg.length/maxItems);
prev.addEventListener('click',function(){
    index--;
    showItems();
})
next.addEventListener('click',function(){
    index++;
    showItems();
})
function check(){
    console.log(filterImg.length);
    if(index==pagination){
        next.classList.add('disabled')
    }else{
        next.classList.remove('disabled')
    }
    if(index==1){
        prev.classList.add('disabled')
    }else{
        prev.classList.remove('disabled')
    }
}
function showItems(){
    
    for (let j = 0; j < filterImg.length; j++) {
        filterImg[j].classList.add("hide-2")
        filterImg[j].classList.remove("show-2")
        if(j>=(index*maxItems)-maxItems && j<index*maxItems){
        filterImg[j].classList.remove("hide-2")
        filterImg[j].classList.add("show-2")
        }
    }
    pagination=Math.ceil(filterImg.length/maxItems)
    check()
    num_page.innerHTML=index+ "/"+pagination;

}
showItems();
