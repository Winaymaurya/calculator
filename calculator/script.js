 let str=" "

 let buttons=document.querySelectorAll('.btn');
 Array.from(buttons).forEach((button)=>{
 button.addEventListener('click',(e)=>{
     if(e.target.innerHTML=="="){
         if(str.includes("+") || str.includes("*") || str.includes("/") ||str.includes("%")|| str.includes("-")){
         str=eval(str);
         document.querySelector('input').value=str; 
         }
         else{
             alert("No operation selected")
         }
     }
     else if(e.target.innerHTML=="C"){
         str=""
         document.querySelector('input').value=str; 
     }
     else{
     console.log(e.target)
     str=str+e.target.innerHTML;
     document.querySelector('input').value=str;
     }
 })

 })

