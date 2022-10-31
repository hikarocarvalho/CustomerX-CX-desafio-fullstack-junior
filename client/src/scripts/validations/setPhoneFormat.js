export default function(event){
    event.preventDefault();
    let phoneValue = event.target.value.split("");
    if(phoneValue.length >= 2){
        if(!phoneValue.includes("(")){
            phoneValue.splice(0,0,"(");
        }
        if(!phoneValue.includes(")")){
            phoneValue.splice(3,0,")");
        }
    }
    console.log(phoneValue.length);

    if(phoneValue.length > 10){
        if(!phoneValue.includes("-")){ 
            if(phoneValue.length < 13){
                phoneValue.splice(8,0,"-");
            }else{
                if(phoneValue.length > 13){
                    phoneValue.splice(8,0,"-");
                }
            }
           
        }else{
            if(phoneValue.length === 14){
                phoneValue.splice(8,1);
                phoneValue.splice(9,0,"-");
            }
        }
    }
    if(phoneValue.includes("-")){
        event.target.style.boxShadow = "0px 0px 1px 3px green";
    }else{
        event.target.style.boxShadow = "none";
    }
    event.target.value = phoneValue.join('');
}