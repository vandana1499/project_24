var randArray1=[1,2,3,4,5,6,7,8,10,11,12,15,9,13,14,''];
var randArray2=[2,8,14,5,11,3,9,15,6,12,4,10,1,7,13,''];
var randArray3=[3,9,15,6,12,4,10,1,7,13,5,11,2,8,14,''];
var randArray4=[4,10,1,7,13,5,11,2,8,14,6,12,3,9,15,''];
var randArray5=[5,11,2,8,14,6,12,3,9,15,7,13,4,10,1,''];
var randArray6=[6,12,3,9,15,7,13,4,10,1,8,14,5,11,2,''];
var box=document.getElementsByClassName('box')[0];
var box_in=document.getElementsByClassName('in');
var container=document.getElementsByClassName('container')[0];
for(i=0;i<box_in.length;i++)
{
    box_in[i].innerHTML='';
}
function generate()
{
    for(i=0;i<box_in.length;i++)
{
    box_in[i].innerHTML='';
}
var randNum=Math.floor( Math.random()*6)+1;
if(randNum===1)
{
  for(i=0;i<randArray1.length;i++)
  {
     box_in[i].innerHTML=randArray1[i];
     
  }
}
else if(randNum===2)
{
  for(i=0;i<randArray2.length;i++)
  {
     box_in[i].innerHTML=randArray2[i];
 
  }
}
else if(randNum===3)
{
  for(i=0;i<randArray3.length;i++)
  {
     box_in[i].innerHTML=randArray3[i];
  
  }
}
else if(randNum===4)
{
  for(i=0;i<randArray4.length;i++)
  {
     box_in[i].innerHTML=randArray4[i];
    
  }
}
else if(randNum===5)
{
  for(i=0;i<randArray5.length;i++)
  {
     box_in[i].innerHTML=randArray5[i];
   
  }
}
else if(randNum===6)
{
  for(i=0;i<randArray6.length;i++)
  {
     box_in[i].innerHTML=randArray6[i];
    
  }
}
playGame();

}


function playGame()
{
  
  window.addEventListener('keypress',(e)=>{

   var num;
    for(i=0;i<box_in.length;i++)
    {
         if(box_in[i].textContent=='')
         { 
          
           num=i+1;
         }
    }

    if(num%4==0&&num!=0&&(num==4||num==8||num==12||num==16))
    {
         if(e.keyCode===65||e.keyCode===97)
         {
             var x=box_in[num-2].textContent;
             console.log(x);

             box_in[num-2].textContent=box_in[num-1].textContent;
             box_in[num-1].textContent=x;
         }
         else if(e.keyCode===119||e.keyCode===87&& num!=4)
         {
             var x=box_in[num-4-1].textContent;
             console.log(box_in[num-4-1].textContent);
             box_in[num-4-1].textContent=box_in[num-1].textContent;
             box_in[num-1].textContent=x;
         }
         else if(e.keyCode===100 ||e.keyCode===68)
         {
          var x=box_in[num-3-1].textContent;
          box_in[num-3-1].textContent=box_in[num-1].textContent;
          box_in[num-1].textContent=x;

         }
         else if(e.keyCode===115 ||e.keyCode===83&& num!=16)
         {
          var x=box_in[num+4-1].textContent;
          box_in[num+4-1].textContent=box_in[num-1].textContent;
          box_in[num-1].textContent=x;

         }

    }
    else if(num%3==0&&(num==15||num==3))
    {
      if(e.keyCode===65||e.keyCode===97)
         {
             var x=box_in[num-2].textContent;
             box_in[num-2].textContent=box_in[num-1].textContent;
             box_in[num-1].textContent=x;
         }
         else if(e.keyCode===119||e.keyCode===87&& num!=3)
         {
             var x=box_in[num-4-1].textContent;
             console.log(box_in[num-4-1].textContent);
             box_in[num-4-1].textContent=box_in[num-1].textContent;
             box_in[num-1].textContent=x;
         }
         else if(e.keyCode===100 ||e.keyCode===68)
         {
          var x=box_in[num].textContent;
          box_in[num].textContent=box_in[num-1].textContent;
          box_in[num-1].textContent=x;

         }
         else if(e.keyCode===115 ||e.keyCode===83&& num!=15)
         {
          var x=box_in[num+4-1].textContent;
          box_in[num+4-1].textContent=box_in[num-1].textContent;
          box_in[num-1].textContent=x;

         }
    }

    else if(num%3==0&&(num==9||num==6))
    {
      if(e.keyCode===65||e.keyCode===97&&num!=9)
         {
             var x=box_in[num-2].textContent;
             box_in[num-2].textContent=box_in[num-1].textContent;
             box_in[num-1].textContent=x;
         }
         else if(e.keyCode===119||e.keyCode===87)
         {
             var x=box_in[num-4-1].textContent;
             console.log(box_in[num-4-1].textContent);
             box_in[num-4-1].textContent=box_in[num-1].textContent;
             box_in[num-1].textContent=x;
         }
         else if(e.keyCode===100 ||e.keyCode===68)
         {
          var x=box_in[num].textContent;
          box_in[num].textContent=box_in[num-1].textContent;
          box_in[num-1].textContent=x;

         }
         else if(e.keyCode===115 ||e.keyCode===83)
         {
          var x=box_in[num+4-1].textContent;
          box_in[num+4-1].textContent=box_in[num-1].textContent;
          box_in[num-1].textContent=x;

         }
    }
    else if(num%2==0&&(num==2||num==14))
    {
      if(e.keyCode===65||e.keyCode===97)
         {
             var x=box_in[num-2].textContent;
             box_in[num-2].textContent=box_in[num-1].textContent;
             box_in[num-1].textContent=x;
         }
         else if(e.keyCode===119||e.keyCode===87&&num!=2)
         {
             var x=box_in[num-4-1].textContent;
             
             box_in[num-4-1].textContent=box_in[num-1].textContent;
             box_in[num-1].textContent=x;
         }
         else if(e.keyCode===100 ||e.keyCode===68)
         {
          var x=box_in[num].textContent;
          box_in[num].textContent=box_in[num-1].textContent;
          box_in[num-1].textContent=x;

         }
         else if(e.keyCode===115 ||e.keyCode===83&&num!=14)
         {
          var x=box_in[num+4-1].textContent;
          box_in[num+4-1].textContent=box_in[num-1].textContent;
          box_in[num-1].textContent=x;

         }
    }

    else if(num%5==0&&(num==5||num==10))
    {
      if(e.keyCode===65||e.keyCode===97&&num!=5)
         {
             var x=box_in[num-2].textContent;
             box_in[num-2].textContent=box_in[num-1].textContent;
             box_in[num-1].textContent=x;
         }
         else if(e.keyCode===119||e.keyCode===87)
         {
             var x=box_in[num-4-1].textContent;
           
             box_in[num-4-1].textContent=box_in[num-1].textContent;
             box_in[num-1].textContent=x;
         }
         else if(e.keyCode===100 ||e.keyCode===68)
         {
          var x=box_in[num].textContent;
          box_in[num].textContent=box_in[num-1].textContent;
          box_in[num-1].textContent=x;

         }
         else if(e.keyCode===115 ||e.keyCode===83)
         {
          var x=box_in[num+4-1].textContent;
          box_in[num+4-1].textContent=box_in[num-1].textContent;
          box_in[num-1].textContent=x;

         }
    }


    else if(num==1||num==13)
    {
      
         if(e.keyCode===119||e.keyCode===87&&num!=1)
         {
             var x=box_in[num-4-1].textContent;
            
             box_in[num-4-1].textContent=box_in[num-1].textContent;
             box_in[num-1].textContent=x;
         }
         else if(e.keyCode===100 ||e.keyCode===68)
         {
          var x=box_in[num].textContent;
          box_in[num].textContent=box_in[num-1].textContent;
          box_in[num-1].textContent=x;

         }
         else if(e.keyCode===115 ||e.keyCode===83&&num!=13)
         {
          var x=box_in[num+4-1].textContent;
          box_in[num+4-1].textContent=box_in[num-1].textContent;
          box_in[num-1].textContent=x;

         }
    }

    else if(num==7||num==11)
    {
      if(e.keyCode===65||e.keyCode===97)
         {
             var x=box_in[num-2].textContent;
             box_in[num-2].textContent=box_in[num-1].textContent;
             box_in[num-1].textContent=x;
         }
         else if(e.keyCode===119||e.keyCode===87)
         {
             var x=box_in[num-4-1].textContent;
             console.log(box_in[num-4-1].textContent);
             box_in[num-4-1].textContent=box_in[num-1].textContent;
             box_in[num-1].textContent=x;
         }
         else if(e.keyCode===100 ||e.keyCode===68)
         {
          var x=box_in[num].textContent;
          box_in[num].textContent=box_in[num-1].textContent;
          box_in[num-1].textContent=x;

         }
         else if(e.keyCode===115 ||e.keyCode===83)
         {
          var x=box_in[num+4-1].textContent;
          box_in[num+4-1].textContent=box_in[num-1].textContent;
          box_in[num-1].textContent=x;

         }
    }


  });
 
}


function finalGame()
{
   count=0;
    var finalArray=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,''];
    for(i=0;i<box_in.length;i++)
    {
      if(box_in[i]==finalArray[i])
      {
        count++;
      }
    }
    if(count==16)
    {
       container.innerHTML="<h1>CONGRATULATIONS YOU WON!!</h1>";

    }
    else
    {
      playGame();
    }
}