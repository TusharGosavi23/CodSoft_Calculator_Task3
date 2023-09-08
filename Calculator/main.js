let String="";
let OP1="/";
let OP2="*";
let buttons=document.querySelectorAll(".key");
Array.from(buttons).forEach((key)=>{
    key.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            String=eval(String);
            document.querySelector('input').value=String;
        }
        else if(e.target.innerHTML =='AC'){
            console.log(e.target);
            String='';
            document.querySelector('input').value=String;
        }
        else if(e.target.innerHTML=='÷'){
            console.log(e.target);
            String=String+OP1;
            document.querySelector('input').value=String;
        }
        else if(e.target.innerHTML=='×'){
            console.log(e.target);
            String=String+OP2;
            document.querySelector('input').value=String;
        } 
        else{
            console.log(e.target);
            String=String+e.target.innerHTML;
            document.querySelector('input').value=String;
        }
    })
})