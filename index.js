colors=["green","red","yellow","blue"];
game=[];
user=[];
level=0;
start=false;
$(document).keypress(function ()
{
    if(!start){
        start=true;
    sequence();
 
    }
})
function sequence()
{
    user=[];
    level++;
    $("#level-title").text("Level "+level );
    let n= Math.floor(Math.random()*4);
    game.push(colors[n])
    playsound(colors[n]);
    animate(colors[n]);
}
function playsound(v)
{
    audio= new Audio("sounds/"+v+".mp3");
    audio.play();
}
function animate(v)
{
    $("#"+v).addClass("pressed");
    setTimeout(function ()
{
    $("#"+v).removeClass("pressed");
},100);
}
$(".btn").click(function ()
{
   let p=$(this).attr("id");
   user.push(p);
   playsound(p);
   animate(p);
   check(user.length-1);
})
 function check(lev)
{
    if(game[lev]===user[lev])
    {
        if(game.length === user.length)
        {
         setTimeout(function ()
        {
            sequence();
        },1000);  
        }
    }
    else
    {
        gameover();
    }
}
function gameover()
{
    $("#level-title").text("Game over,press any key to restart");
      $("body").addClass("game-over");
      setTimeout(function()
    {
        $("body").removeClass("game-over"); 
    },1000);
    start=false;
    level=0;
    game=[];
}