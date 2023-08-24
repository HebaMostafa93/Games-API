export class Ui {
    constructor() {}

    display(data) {

        let temp =""
        data.forEach((el) => {
        temp+= `<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 game-card">
        <div class="item text-white rounded-top p-3" id='${el.id}'>
    
          <img src="${el.thumbnail}" class="w-100 rounded-top mb-3" alt="game poster">
          
          <div class="item-header d-flex justify-content-between align-items-center">
            <h6 class="d-inline-block">${el.title}</h6>
            <span class="free-btn rounded fw-bold py-1 px-2">Free</span>
          </div>
          <p class="text-center">${el.short_description.split(" ").splice(0,8).join(" ")}</p>
        </div>
        <div class="item-footer rounded-bottom text-white py-2 px-3 border-top-0 d-flex justify-content-between">
          <span>${el.genre}</span>
          <span>${el.platform}</span>
        </div>
      </div>`
      })
      document.getElementById("itemData").innerHTML = temp
    }

    displayDetails(data) {

        document.getElementById("gamePoster").setAttribute("src" , data.thumbnail)
        document.getElementById("title").innerHTML =  `<span>Title : </span>` +  data.title
        document.getElementById("category").innerHTML =  data.genre
        document.getElementById("platform").innerHTML =  data.platform
        document.getElementById("status").innerHTML =  data.status
        document.getElementById("game-desc").innerHTML =  data.description
      
        $(".btn-show").click(function(){
            window.open(data.game_url , "_blank")
        })
      }

}