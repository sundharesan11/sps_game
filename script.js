console.log("hello");
//function to return a random string
function computerplay()
{
   let a= Math.floor(Math.random()*3);
    if(a==0)
    return "stone";
    else if(a==1)
    return "paper";
    else
    return "scissor";
}
let computerselection=computerplay();
console.log(computerselection);
//function to get a string from variable
function selectorplay()
{
    let b=prompt("select element and the choices are stone,paper and scissor" );
    return b.toLocaleLowerCase();
}
let playerselection = selectorplay();
console.log(playerselection);
//main function which declares result
function game(x,y)
{
    if(x==="stone" && y==="paper" || x==="paper" && y==="scissor" || x==="scissor" && y==="stone" )
    return("yeah!you won the game");
    else if(x==="stone" && y==="scissor" || x==="paper" && y==="stone" || x==="scissor" && y==="paper")
    return("sorry! you lost the game.try again!!!");
    else 
    return "game equalised"
    
}
console.log(game(computerselection,playerselection));
