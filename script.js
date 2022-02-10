let winners=[];
//function to return a random string
function computerplay()
{
   let a= Math.floor(Math.random()*3);
    if(a==0)
    return "rock";
    else if(a==1)
    return "paper";
    else
    return "scissors";
}

//function to get a string from variable
function selectorplay()
{
    let b=prompt("select element and the choices are rock,paper and scissors" );
    return b.toLocaleLowerCase();
}
//function to 5 rounds
function game()
{
    for(let i=0;i<5;i++)
    {
        playround(i);
    }
    document.querySelector("button").textContent="Play New Game"
    result();
}

//function to play
function playround(round)
{
    
    const computerselection=computerplay();
    const playerselection = selectorplay();
    const winner=checkwinner(playerselection,computerselection);
    roundList(winner,playerselection,computerselection,round);
    winners.push(winner);

}

//main function which declares result
function checkwinner(x,y)
{
    
    
    if(x==="rock" && y==="paper" || x==="paper" && y==="scissors" || x==="scissors" && y==="rock" )
    return "computer";
    else if(x==="rock" && y==="scissors" || x==="paper" && y==="rock" || x==="scissors" && y==="paper")
    return"player";
    else 
    return "tied"
    
}
function result()
{
    let playerwins= winners.filter((item) => item == "player").length;
    let computerwins= winners.filter((item) => item == "computer").length;
    let game_tied= winners.filter((item) => item == "tied").length;
    console.log("RESULTS:")
    console.log("Games won by player:" + playerwins);
    console.log("Game won by computer:" + computerwins);
    console.log("Games tied:" + game_tied);
}
function roundList(winner,playerselection,computerselection,round)
{
    console.log("ROUND:",round+1);
    console.log("playerselction:" + playerselection);
    console.log("computer selection:"  + computerselection);
    if(winner =="tied")
    console.log("game tied");
    else
    console.log(winner,"won the round:");
    
}
