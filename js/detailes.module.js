import { Ui } from "./uiModule.js";

export class Details {
    constructor(id) {
        
        $("#closeBtn").click(()=>{
            document.getElementById("details").classList.add("d-none")
            document.getElementById("main-section").classList.remove("d-none")
        })
        this.ui = new Ui()
        this.loading = document.getElementById("loading")
        this.getDetailes(id)
    }

    async getDetailes(id){
        this.loading.classList.remove("d-none")
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '747d6169b4mshe58532e968d2ce9p112a48jsn71e575295b4f',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
          }
      };
      const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id} ` , options)
      const response = await api.json()
      this.loading.classList.add("d-none")
      this.ui.displayDetails(response)
      }
    
}