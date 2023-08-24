import { Details } from "./detailes.module.js"
import { Ui } from "./uiModule.js"

export class Home {
    constructor() {

        this.changeNavPosition()
        this.loading = document.getElementById("loading")
        const link = document.querySelectorAll(".nav-link")
        link.forEach((el)=>{
            el.addEventListener("click" , ()=>{
                document.querySelector(".navbar-nav .active").classList.remove("active")
                el.classList.add("active")
                const category = el.getAttribute("data-category")
                this.getGames(category);
            })
        })
        this.ui = new Ui()
        this.getGames('mmorpg')
       
    }

    async getGames(type) {
      this.loading.classList.remove("d-none")
        const options = {
        method: 'GET',
	    headers: {
		'X-RapidAPI-Key': '747d6169b4mshe58532e968d2ce9p112a48jsn71e575295b4f',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        } 
    };
  const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${type} ` , options)
  const response = await api.json()
  this.ui.display(response)
  this.loading.classList.add("d-none")

  const card = document.querySelectorAll(".game-card .item")
  card.forEach((el)=>{
    el.addEventListener("click" , ()=>{
        document.getElementById("details").classList.remove("d-none");
        document.getElementById("main-section").classList.add("d-none");
        new Details(el.getAttribute("id"))
    })
  })
}

// to change navbar position-------------------
changeNavPosition() {
    const topSpace = $("nav").offset().top
    $(window).scroll(function(){
    const scrollTop = $(window).scrollTop()
    if(scrollTop >= topSpace) {
      $(".navbar").css({position: "fixed" , top: "30px" , left: "50%" , transform: "translateX(-50%)" })
    }
    else{
      $(".navbar").css({position: "relative" , top: "0px" , left: "0%" , transform: "translateX(0%)" })
    }
})
}
}