const filterItem=document.querySelector('.portfolio_filters .filterItems'),
filterImg=document.querySelectorAll('.portfolio_items .portfolio_item'),
prev=document.querySelector('.prev'),
next=document.querySelector('.next'),
num_page=document.querySelector('.num-page'),
maxItems=4;
let index=1,
array=[],
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
    console.log(array.length);
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
    for (let i = 0; i < filterImg.length; i++) {
        if(filterImg[i].classList.contains('show')){
            array.push(filterImg[i])
        }
    }
    for (let j = 0; j < array.length; j++) {
        array[j].classList.add("hide-2")
        array[j].classList.remove("show-2")
        if(j>=(index*maxItems)-maxItems && j<index*maxItems){
        array[j].classList.remove("hide-2")
        array[j].classList.add("show-2")
        }
    }
    pagination=Math.ceil(array.length/maxItems)
    check()
    array=[]
    
    num_page.innerHTML=index+ "/"+pagination;

}

// console.log(filterItem.querySelector('.active'));
window.onload=()=>{
    showItems();
    filterItem.onclick=(selectedItem)=>{
        index=1;
        if(selectedItem.target.classList.contains('portfolio_filter')){
            filterItem.querySelector('.active').classList.remove('active');
            selectedItem.target.classList.add('active');
            let filterName=selectedItem.target.getAttribute('data-name');
            filterImg.forEach(image => {
                let filterImage=image.getAttribute('data-name');
                if(filterName==filterImage || filterName=='all'){
                   image.classList.add('show');
                   image.classList.remove('hide');
                }else{
                    image.classList.add('hide');
                    image.classList.remove('show');
                }
            });
        }
        showItems();
    }
}