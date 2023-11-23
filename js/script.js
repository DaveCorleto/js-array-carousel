
// Vado a prendermi ogni elemento con classe img-card 

const imgCard = document.getElementsByClassName('img-card');

console.log (imgCard[0])

// Setto la variabile che dovrà "comandare"

let activeImgCard = 0;

// comandi del bottone next 

const next = document.querySelector('.next');

next.addEventListener('click', function() {

    if (activeImgCard < imgCard.length -1) {

        // tolgo lA CLASSE ACTIVE 

        imgCard [activeImgCard].classList.remove('active');

        // Aumentiamo l'indice di imgCard 

        activeImgCard++;

        // Ora che siamo passati al dispatchEvent.img-card successivo gli aggiungiamo la classe .active 

        imgCard [activeImgCard].classList.add('active');

        // se sono alla fine del carousel nascondo il button con classe .next perchè sono arrivato a fine carousel 

        if (activeImgCard === imgCard.length -1) {
            next.classList.add('hidden');
        }
    }


}
)

// comandi del bottone prev 

const prev = document.querySelector('.prev');

prev.addEventListener('click', function() {

    if (activeImgCard > 0) {

        // tolgo lA CLASSE ACTIVE 

        imgCard [activeImgCard].classList.remove('active');

        // diminuiamo l'indice di imgCard 

        activeImgCard--;

        // Ora che siamo passati al dispatchEvent.img-card precedente gli aggiungiamo la classe .active 

        imgCard [activeImgCard].classList.add('active');

        // se sono all'inizio del carousel nascondo il button con classe .next perchè sono arrivato a fine carousel 

        if (activeImgCard === 0) {
            next.classList.add('hidden');
        }
    }


}
)
