const buttons=document.querySelectorAll("button");
const input=document.getElementById("result");
for(let i=0 ; i<buttons.length; i++ )
{
   buttons[i].addEventListener("click",() =>{
   const buttonValue=buttons[i].textContent;
   if(buttonValue=== "c")
   {
       clear();

   }
   else if(buttonValue=== "=")
   {
       calculate();

   }
   else
   {
      append(buttonValue);
   }

   });
} 
  function  clear()
  {
    input.value="";

  } 
  function calculate()
  {
     input.value=eval(input.value);

  }
  function append(buttonValue)
  {
    input.value +=buttonValue;
    console.log(input.value);

  }

