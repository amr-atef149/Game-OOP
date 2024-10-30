import { Ui } from "./ui.module.js";

export class Details {
   
   constructor(id) {
   
      this.ui = new Ui();

      document.getElementById("btnClose").addEventListener("click", () => {
   
         document.querySelector(".games").classList.remove("d-none");
   
         document.querySelector(".details").classList.add("d-none");
   
      });

      this.getDetails(id);
   }

   getDetails(idGames) {
   
      const url = 'https://free-to-play-games-database.p.rapidapi.com/api/game?id=452';
   
      const options = {
   
         method: 'GET',
   
         headers: {
            'x-rapidapi-key': 'f486d070b5msh077f03e4a5917f3p1805dbjsnc6c3ada33c02',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
   
         }
   
      };

      fetch(url, options)
   
      .then((response) => response.json())
   
      .then((response) => this.ui.displayDetails(response))
   
      .catch((err) => console.error(err))
   
      .finally(() => {
   
         loading.classList.add("d-none");
   
      });
   
   }

}
