window.addEventListener("load",init)

const wordInput = document.querySelector("#word-input")
const currentWord = document.querySelector("#current-word")
const scoreDisplay = document.querySelector("#score")
const timeDispaly = document.querySelector("#time")
const message = document.querySelector("#message")

let score = 0;
let time = 10


    



const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'defintion'
    ];
    
    function init(){
    showWords(words) 
    wordInput.addEventListener("input",startMatch)   
    setInterval(countdown,1000)
    setInterval(checkstatus,50)
    }

    function checkstatus(){
        if(time==0){
            message.innerHTML = "Game Over!!!"
        }
    }

    
    

    function countdown(){
                
        if(time>0){
            time--
            
        }
        timeDispaly.innerHTML = time
    }


    function showWords(word){
        const randomIndex = Math.floor(Math.random()*words.length)
      //  console.log(words[randomIndex])
        currentWord.innerHTML = words[randomIndex]
    }

    function matchWords(){
       if(wordInput.value == currentWord.innerHTML){
        return true
       }else{
        return false
       }

    }

    function startMatch(){
        console.log("start!!!")
        if(matchWords()){
            showWords(words)
            message.innerHTML = "good"
            wordInput.value = ""
            score++
            time = 6
        }else{
            message.innerHTML = "try again"
        }
       scoreDisplay.innerHTML = score
    }
    