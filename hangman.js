const words=[
    ["monkey","Eats banana"],
    ["python","Weird Computer Language"],
    ["Cuba","sugar bowl of the world"],
    ["Japan","The land of the rising sun"],
    ["Madrid","Capital of spain"],
    ["Vegemite"," Australian food spread"],
    ["Maggie","Hostliers go to food"],
    ["Arijit","Heartbroken's Favourite"],
    ["Brain","Its in your head"],
    ["Puppy","Baby dog"]

];
let lives=10;
let index;
let w;
const checkLives=()=>{
    if(lives==0)
    {
        alert("Sorry You lost the game, Try a new word");
        lives=10;
        generateWord()
    }
}
const generateWord=()=>{
    index=Math.ceil(Math.random()*10);
    const hintword=document.getElementById('hintword');
    const word=document.getElementById('word');
    hintword.innerHTML=words[index][1];
    w=words[index][0]
    let concat=""
    for(let i=0;i<w.length;i++)
    {
        concat+=`<div class="letterBox" id='letter${i}'>_</div>`
    }
    
    word.innerHTML=concat;
    initialiseFillword()
}
// it will contain the filled word 
let fillword=[];
const initialiseFillword=()=>{
    for(let i=0;i<w.length;i++)
{
    fillword[i]="_"
}

}
const Checktheletter=()=>{
    const guessBox=document.getElementById('guessbox')
    let guessLetter=guessBox.value
    guessBox.value=""
    let check=false;
    
   
    // guess letter and word letter to upper case
    guessLetter=guessLetter.toUpperCase()

    for(let i=0;i<w.length;i++)
    {
        let letter=w[i].toUpperCase()
        if(letter==guessLetter)
        {
            check=true;
            fillword[i]=w[i];
            console.log(w[i])
        }
    }
    if(check==false)
    {
        lives-=1;
        
        alert("Sorry wrong guess , try again ")
        document.getElementById('lives').innerHTML=lives
        checkLives()
    }
    else 
    {
        for(let i=0;i<w.length;i++)
        {
            const div=document.getElementById(`letter${i}`)
            div.innerHTML=fillword[i]
        }
    }

    console.log(fillword)
}
generateWord();

