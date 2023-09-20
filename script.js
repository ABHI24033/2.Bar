// const bars=document.getElementById('bars');

function barClick(){
    const menu=document.getElementById('ul');
    menu.style.top="0px";
}
function crossClick(){
    const menu=document.getElementById("ul");
    menu.style.top="-120rem"
}


window.addEventListener("scroll",()=>{
    let navbar=document.getElementById('nav');
    let frontlook=document.getElementById("frontlook");
    if(scrollY>=50){
        navbar.classList.add('sticky');
        frontlook.classList.add('topMargin');
        
    }
    else{
        navbar.classList.remove('sticky');
        frontlook.classList.remove('topMargin');
    }
})