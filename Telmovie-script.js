document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const logo = document.getElementById('logo');
    const sidebarContents = document.getElementsByClassName('sidebar-contents');

    function addActiveClass() {
        sidebar.classList.add('active');
    }

    function removeActiveClass(event) {
        if (!sidebar.contains(event.relatedTarget)) {
            sidebar.classList.remove('active');
        }
    }

        sidebar.addEventListener('mouseenter', addActiveClass);
        sidebar.addEventListener('mouseleave', removeActiveClass);

        logo.addEventListener('mouseenter', addActiveClass);
        logo.addEventListener('mouseleave', removeActiveClass);

        Array.from(sidebarContents).forEach(sidebarContents => {
            sidebarContents.addEventListener('mouseenter', addActiveClass);
            sidebarContents.addEventListener('mouseleave', removeActiveClass);
        })
});


// hovering over the elements of the nav tab 

document.addEventListener('DOMContentLoaded',function () {
    const navItem = document.getElementsByClassName('nav-item');

    Array.from(navItem).forEach(navItem => {
        
        function addActiveClass () {
            navItem.classList.add('active');
            console.log('mousein');
        }
    
        function removeActiveClass (event) {
            if (!navItem.contains(event.relatedTarget)){
                navItem.classList.remove('active');
                console.log('mouseout');
            }
        }
        navItem.addEventListener('mouseover', addActiveClass);
        navItem.addEventListener('mouseleave', removeActiveClass);
    })
});




document.addEventListener('DOMContentLoaded' ,function(){

    let slideNo = 0;
    let Prev = document.querySelector(".prev");
    let Next = document.querySelector(".next");
    let slides = document.getElementsByClassName("Slides");
    let dots = document.querySelectorAll(".dot");

    function showSlide(n){
        let i,j;
        if(n >= slides.length){
            slideNo = 0;
        }
        if(n < 0){
            slideNo = slides.length -1;
        }
        for(i=0;i<slides.length;i++)
            {
                slides[i].style.display = "none";
            }

        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove("active1");
        }
            j=(4*slideNo)+slideNo
            slides[slideNo].style.display = "block";
            dots[j].classList.add("active1");
        }
    showSlide(slideNo);
    setInterval(nextslide, 3000)
        
    Prev.addEventListener("click",function (){
        slideNo-= 1;
        showSlide(slideNo);
        

    })

    function nextslide(){
        slideNo+= 1;
        showSlide(slideNo);
        
    }

    Next.addEventListener("click",function (){
        slideNo+= 1;
        showSlide(slideNo);
        
    })

    
});

document.addEventListener('DOMContentLoaded',function(){
    let dots = document.querySelectorAll(".dot");
    Array.from(dots).forEach((dot, index) => {
        dot.addEventListener("dbclick", function() {
            
            index=index%4;
            showSlide(index); 
            console.log(dot + index);


            
        });
    });
});





