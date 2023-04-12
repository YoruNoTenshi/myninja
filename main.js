function bodyLoad() 
{
  document.getElementById("bt").style.fontSize= "15px";
  
document.getElementById("bt").style.background="darkred";

document.getElementById("bt").style.borderRadius="20px";
  
 document.getElementById("bt").style.color="white";

document.getElementById("bt").style.padding="10px";
  
document.getElementById("bt").style.borderStyle="none";

 document.getElementById("btV").style.fontSize= "15px";
  
document.getElementById("btV").style.background="darkred";

document.getElementById("btV").style.borderRadius="20px";
  
 document.getElementById("btV").style.color="white";

document.getElementById("btV").style.padding="10px";
  
document.getElementById("btV").style.borderStyle="none";
}
function reset_all(){
    document.getElementById("body").style.backgroundColor="darkorange";

    document.getElementById("nametitulo").style.backgroundColor="darkorange";

    document.getElementById("anchorTag").style.color="white";

    document.getElementById("anchorTag").style.borderStyle="solid";
}

function changeTheme()
{
  document.getElementById("body").style.backgroundColor="white";
  
 document.getElementById("nometitulo").style.backgroundColor="darkorange";
  
document.getElementById("anchorTag").style.color="darkblue";
  
document.getElementById("anchorTag").style.borderWidth="0px";
}
function changeImageOver()
{

document.getElementById("img_desenho").src="https://raw.githubusercontent.com/ShravantiHable/C49-C51/main/myCartoon1.png";
}

function changeImageLeave()
{
  document.getElementById("img_desenho").src ="https://raw.githubusercontent.com/ShravantiHable/C49-C51/main/myCartoon.png";
}