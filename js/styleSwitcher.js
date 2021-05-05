
const links = document.querySelectorAll(".alternate-style"),
      totalLinks = links.length ;


function setActiveStyle(color) {
    for(let i=0; i<totalLinks; i++){
        if(color === links[i].getAttribute("title")){
            links[i].removeAttribute("disabled");    
        }
        else{
            links[i].setAttribute("disabled", "true");
        }
    }
}


// Body skin
// const bodySkin = document.querySelectorAll(".body-skin"),
//       totalSkin = bodySkin.length;
//       for(let i=0; i<totalSkin; i++){
//         bodySkin[i].addEventListener("change",function(){
//             if(this.title === "dark"){
//                 document.body.className = "dark";
//             }
//             else{
//                 document.body.className = "";
//             }
//         })
//       }




    const dayNight = document.querySelector(".day-night"); 

    dayNight.addEventListener("click", () =>{
        if(!document.body.classList.contains("dark")){
            dayNight.querySelector("i").classList.add("fa-sun");
            dayNight.querySelector("i").classList.remove("fa-moon");
     }
     else{
        dayNight.querySelector("i").classList.add("fa-moon");
        dayNight.querySelector("i").classList.remove("fa-sun");
     }
        document.body.classList.toggle("dark")
    })



document.querySelector(".toggle-style-switcher").addEventListener("click",() =>{
    document.querySelector(".style-switcher").classList.toggle("open");
})
// window.addEventListener("scroll",() =>{
//     if(document.querySelector(".style-switcher").classList.contains("open")){
//         document.querySelector(".style-switcher").classList.remove("open");
//     }
// })



