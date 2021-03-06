window.addEventListener("load",function(){
    document.querySelector(".preloader").classList.add("opacity-0");
 
    setTimeout(function(){
    document.querySelector(".preloader").style.display="none";
    },3000)
})

function bodyScrollingToggle(){
    document.body.classList.toggle("stop-scrolling");
}
// Portfolio Item Filter and Popup

// const filterContainer = document.querySelector(".portfolio-filter"),
//       filterBtns = filterContainer.children,
//       totalFilterBtn = filterBtns.length,
//       portfolioItems = document.querySelectorAll(".portfolio-item");
//       totalPortfolioItem = portfolioItems.length;
     

//       for(let i=0; i<totalFilterBtn; i++){
//         filterBtns[i].addEventListener("click",function(){
//             filterContainer.querySelector(".active").classList.remove("active");
//             this.classList.add("active");

//             const filterValue=this.getAttribute("data-filter");
//             for(let k=0; k<totalPortfolioItem; k++){
//                 if(filterValue === portfolioItems[k].getAttribute("data-category")){
//                     portfolioItems[k].classList.add("show");
//                     portfolioItems[k].classList.remove("hide");
//                 }
//                 else{
//                     portfolioItems[k].classList.add("hide");
//                     portfolioItems[k].classList.remove("show");
//                 }
//                 if(filterValue === "all"){
//                     portfolioItems[k].classList.add("show");
//                     portfolioItems[k].classList.remove("hide");
//                 }
//             }
//         })
//       }
// (() =>{

    const filterContainer = document.querySelector(".portfolio-filter"),

    portfolioItemsContainer = document.querySelector(".portfolio-items"),
    portfolioItems = document.querySelectorAll(".portfolio-item"),
    totalPortfolioItem = portfolioItems.length,
    popup = document.querySelector(".portfolio-popup"),
    prevBtn = popup.querySelector(".pp-prev"),
    nextBtn = popup.querySelector(".pp-next"),
    closeBtn = popup.querySelector(".pp-close"),
    projectDetailsContainer = popup.querySelector(".pp-details"),
    projectDetailsBtn = popup.querySelector(".pp-project-details-btn");
    let slideIndex, screenshots;

    // filter portfolio items
    filterContainer.addEventListener("click",(event)=>{
       if(event.target.classList.contains("filter-item") &&
       !event.target.classList.contains("active")){
        // *deactivate existing active "filter-item"
        filterContainer.querySelector(".active").classList.remove("active");
        // *activate new "filter-item"
        event.target.classList.add("active");
        const target = event.target.getAttribute("data-filter");
        portfolioItems.forEach((item) =>{
            if (target === item.getAttribute("data-category") || target === 'all'){
                item.classList.remove("hide");
                item.classList.add("show");
            }else{
                item.classList.remove("show");
                item.classList.add("hide");
            }
        })
       }
    })
    let itemIndex=0;
    for(let i=0; i<totalPortfolioItem; i++){
        portfolioItems[i].addEventListener("click",function(){
            itemIndex = i;
            popupToggle();
            popupSlideshow();
            popupDetails();
        })
    }

    // portfolioItemsContainer.addEventListener("click", (event) =>{
    //    if (event.target.closest(".portfolio-item-inner")){
      
    //        slideIndex = 0;
    //        popupToggle();
    //        popupSlideshow();
    //        popupDetails();
    //     }
    // })
    closeBtn.addEventListener("click", () =>{
        popupToggle();
        if(projectDetailsContainer.classList.contains("active")){
            popupDetailsToggle();
        }
    })
    function popupToggle(){
        popup.classList.toggle("open");
        bodyScrollingToggle();
    }
function popupSlideshow(){
    imgSrc = portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("data-screenshots");
    const popupImg = popup.querySelector(".pp-main-inner img");
    popupImg.src = imgSrc;

}

//*next slide
nextBtn.addEventListener("click", (next) =>{
    console.log("hi")
    if (itemIndex == totalPortfolioItem-1){
        itemIndex = 0;
    }
    else{
        itemIndex++;
    }
    popupSlideshow();
    popupDetails();
})
//*prev slide 
prevBtn.addEventListener("click", () =>{
    if (itemIndex == 0){
        itemIndex = totalPortfolioItem-1;
    }
    else{
        itemIndex--;
    }
    popupSlideshow();
    popupDetails();
})


function popupDetails(){
    //* if portfolio-item-detals not exists
    if(!portfolioItems[itemIndex].querySelector(".portfolio-item-details")){
        projectDetailsBtn.style.display = "none";
        return; //*end function execution
    }
    projectDetailsBtn.style.display = "block";
    //*get the project details
    const title = portfolioItems[itemIndex].querySelector(".detail-title").innerHTML;
   //*set the project details
   
    popup.querySelector(".pp-title").innerHTML = title;
    
    // const info = portfolioItems[itemIndex].querySelector(".detail-title p").innerHTML;
    // popup.querySelector(".pp-title p").innerHTML = info;
    
    const services = portfolioItems[itemIndex].querySelector(".project-services").innerHTML;
    popup.querySelector(".pp-info").innerHTML = services;
  
    const pLink = portfolioItems[itemIndex].querySelector(".project-link a").getAttribute("href");
    const popupLink = popup.querySelector(".pp-project-link a");
    popupLink.href = pLink;
    // const title = portfolioItems[itemIndex].querySelector(".portfolio-item-title").innerHTML;
    // popup.querySelector(".pp-title h2").innerHTML = title;
    // const category = portfolioItems[itemIndex].getAttribute("data-category");
    // popup.querySelector(".pp-project-category").innerHTML = category.split("-");


    
};

projectDetailsBtn.addEventListener("click", ()=>{
    popupDetailsToggle()
} )

function popupDetailsToggle(){
    const popupimggTop = popup.querySelector(".pp-main-inner");
if(projectDetailsContainer.classList.contains("active")){
    projectDetailsBtn.querySelector("i").classList.remove("fa-minus");
    projectDetailsBtn.querySelector("i").classList.add("fa-plus");
    projectDetailsContainer.classList.remove("active");
    projectDetailsContainer.style.maxHeight = 0 + "px";
    popupimggTop.classList.remove("active");
}else{
    projectDetailsBtn.querySelector("i").classList.remove("fa-plus");
    projectDetailsBtn.querySelector("i").classList.add("fa-minus");
    projectDetailsContainer.classList.add("active");
    projectDetailsContainer.style.maxHeight = projectDetailsContainer.scrollHeight + "px" ;
    popup.scrollTo(0,projectDetailsContainer.offsetTop);
    popupimggTop.classList.add("active");
}

}
// })();

   

// Aside Navbar
const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;


      for(let i=0; i<totalNavList; i++){
          const a = navList[i].querySelector("a");
          a.addEventListener("click", function(){
           
            //   *remove back section Class
                    removeBackSectionClass();

            for(let i=0; i<totalSection; i++){
                allSection[i].classList.remove("back-section");
            }

              for(let j=0; j<totalNavList; j++){
                  if(navList[j].querySelector("a").classList.contains("active")){
                        //   *add back section Class
                    addBackSectionClass(j); 
                  }
                navList[j].querySelector("a").classList.remove("active");
              }
            this.classList.add("active");
            showSection(this);
            
            if(window.innerWidth<1980){
                asideSectionTogglerBtn();
            }

          })
      }
      function removeBackSectionClass(){
        for(let i=0; i<totalSection; i++){
            allSection[i].classList.remove("back-section");
        }
      }
      function addBackSectionClass(num){
          allSection[num].classList.add("back-section");
      }    
    
      function showSection(element){
        for(let i=0; i<totalSection; i++){
            allSection[i].classList.remove("active");
        }
          const target = element.getAttribute("href").split("#")[1];
          document.querySelector("#"+target).classList.add("active")
      }
 
      function updateNav(element){
        for(let i=0; i<totalNavList; i++){
            navList[i].querySelector("a").classList.remove("active")
          const target = element.getAttribute("href").split("#")[1];
            if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
                navList[i].querySelector("a").classList.add("active");
            }
        }
      }

    document.querySelector(".hire-me").addEventListener("click",function(){
        const sectionIndex = this.getAttribute("data-section-index");
       
        showSection(this);
        updateNav(this);
        removeBackSectionClass();
        addBackSectionClass(sectionIndex);
    })

    const navTogglerBtn = document.querySelector(".nav-toggler"),
        aside = document.querySelector(".aside");

        navTogglerBtn.addEventListener("click",() =>{
            asideSectionTogglerBtn();
        })

        function asideSectionTogglerBtn(){
            aside.classList.toggle("open");
            navTogglerBtn.classList.toggle("open");
            for(let i=0; i<totalSection; i++){
                allSection[i].classList.toggle("open");
            }
        }

        // Download resume
       

        function download(file){
            var link = document.getElementById("btnDownload");
            link.setAttribute("download",file);
            link.preventDefault();
            link.click();

        }