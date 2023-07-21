let string1="";
let string2="";
let buttons=document.querySelectorAll('button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(item)=>{
        if(item.target.innerHTML!='=' && item.target.innerHTML!='^'){
            string1=string1+item.target.innerHTML;
            string2=string2+item.target.innerHTML;
            document.querySelector('input').value=string1;
        }
        if(string1.includes('√')){
            const index=string1.indexOf('√');
            let s1="";
            for(let i=0 ; i<index ; i++){
                s1+=string1[i];
            }
            let s2="";
            let s3=""
            for(let i=index+1 ; i<string1.length ; i++){
                if(string1[i]!='+' && string1[i]!='-'  && string1[i]!='/'  && string1[i]!='*'  && string1[i]!='%'  && string1[i]!='^')
                    s2+=string1[i];
                else
                    break;
            }
            for(let i=index+1+s2.length ; i<string1.length ; i++){
                s3+=string1[i];
            }
            string2=s1+s2+'**0.5'+s3;
        }
        if(item.target.innerHTML=='^'){
            string1=string1+item.target.innerHTML;
            string2=string2+'**';
            document.querySelector('input').value=string1;
        }
        if(item.target.innerHTML=='='){
            string2=eval(string2);
            document.querySelector('input').value=string2;
        }
        if(item.target.innerHTML=='AC'){
            string1="";
            string2="";
            document.querySelector('input').value=string1;
        }
    })
})
