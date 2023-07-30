var recherche = document.getElementById("recherche");

recherche.addEventListener("keyup", logKey);

function logKey(e) {
     const divFilm = document.getElementsByClassName("movie-grid");
   
     if (this.value.length>0){
    
        for (var i = 0; i < divFilm.length; i++) {
            divFilm[i].style.display = "none";
        }

        for (var i = 0; i < divFilm.length; i++) {
            const titel = divFilm[i].getAttribute("data-titel");
            let position = titel.toLowerCase().search(this.value.toLowerCase());
            if(titel && position != -1){
                divFilm[i].style.display = "block";

            }
        }
}else{
    
    for (var i = 0; i < divFilm.length; i++) {
        divFilm[i].style.display = "block";
    }

}

 }