let option1 = document.getElementById("option1")
let option2 = document.getElementById("option2")
let startGame = document.getElementById("start-game")
let inputLetter = document.getElementById("input-01")
let check = document.getElementById("check")
let welcomeScreen = document.getElementById("welcome")
let categoriesScreen = document.getElementById("contenedor-categories")
let animalsCat = document.getElementById("animals-cat")
let superHerosCat = document.getElementById("superheros-cat")
let disneyCat = document.getElementById("disney-cat")
let pixartCat = document.getElementById("pixart-cat")
let selectCategory = document.getElementById("select-category")
let pcScreen = document.getElementById("pc-screen")
let card1 = document.getElementById("card1")
let card2 = document.getElementById("card2")
let lettersOutContainer = document.getElementById("lettersout-container")
let imgContainer = document.getElementById("img-container")
let idArray = []
let word =""
let strikes = 0
let count = 0
let x= 0
let clueContainer = document.getElementById("clue-container")








startGame.addEventListener("click", () =>{

    if(option1.checked){

        alert("selecciono jugar con un amigo")
        welcomeScreen.style.display = "none"

    }

    else if(option2.checked){
        
        welcomeScreen.style.display = "none"
        categoriesScreen.style.display ="flex"
        /*word = computer().toUpperCase()
        checkLetters()*/
    }

    else{
        alert("seleccione una opcion valida")
    }
})

selectCategory.addEventListener("click", ()=>{

    if(animalsCat.checked){
        console.log("categoria animales")
        word = computer(animals)
        checkLetters()
        categoriesScreen.style.display = "none"
        pcScreen.style.display = "grid"

    }
    else if (superHerosCat.checked){

    }
    else if (disneyCat.checked){

    }
    else if (pixartCat.checked){

    }
    else {

    }


})


check.addEventListener("click", () =>{

    console.log("se disparo el evento")

    if(inputLetter.value.length>1){

        alert("introduce solo un caracter a la vez")
        inputLetter.value=""

    }

    else{


        for (let j = 0; j< word.length; j++) {
      
            console.log("entro al ciclo")
        
            if(inputLetter.value.toUpperCase() === word[j].toUpperCase())
            {
                console.log("las letras son iguales")
                let zebra = document.getElementById(idArray[j])
                console.log(zebra)
                zebra.innerHTML = inputLetter.value.toUpperCase()
                x++
                count++

                if(count === word.length){

                    alert("felicidades ganaste")
                }

                else{

                }
    
            }
    
            else{
               
            }
            
        }
    
        if(x<1){
    
            strikes++
            console.log("strike: "+strikes)
            imgContainer.innerHTML = `<figure>
            <img src="./images/ahorcado/${strikes+1}.png" alt="1">
            </figure>`
            inputLetter.value = ''
    
        }
    
        else{
    
          x=0
        }

    }

   
    inputLetter.value = ''

})



function computer (category){


    let palabra = ""
    let aleatorio = Math.floor(Math.random() * (category.length))




    palabra = category[aleatorio].name

    console.log(palabra)
    clueContainer.innerHTML = category[aleatorio].clue

    return palabra

}


function checkLetters (){

    for (let j = 0; j< word.length; j++) {
      
        lettersOutContainer.innerHTML += `
        <div class="letters-out" id="out-${j}">
                    
                </div>
        
        
        `

        idArray[j]=`out-${j}`
       
    }
}