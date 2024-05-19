const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');


if(bar){
    bar.addEventListener('click',() => {
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click',() => {
        nav.classList.remove('active');
    })
}

document.addEventListener("DOMContentLoaded",function(){
    const navbar =document.getElementById("header");
    window.addEventListener('scroll',() =>{
        if (window.scrollY > 50){
            navbar.style.backgroundColor ='pink';
        }
        else{
            navbar.style.backgroundColor='#E3E6F3';
        }
    });
    const navItems = navbar.getElementsByClassName("nav-item");
    for (const item of navItems){
        item.addEventListener("click", function(){
            for (const otherItem of navItems){
                otherItem.classList.remove("active");
            }
            this.classList.add("active")
        });
    }
    
});