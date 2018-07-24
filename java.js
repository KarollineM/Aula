var nome = document.querySelector("#nome");
var email = document.querySelector("#email");
var senha = document.querySelector("#senha");
var botao = document.querySelector("#botao");

botao.addEventListener("click",function(){
    if(nome.value == ""){
        alert("Digite o Nome");        
    }
    if(email.value ==""){
        alert("Digite o E-mail")
    }
    if(senha.value == ""){
        alert("Digite a Senha")
    }
    if(nome.value!="" &&  email.value!="" && senha.value!="" ) {
        if(email.value.indexOf("@")!= -1){
            if(email.value.split("@").length==2){
                 if(email.value.indexOf(".com")!= -1){
                    if(email.value.split(".com").length==2){
                        alert("Acesso Permetido!!")
                    }else{
                        alert("E=mail inválido")
                    }  
                }
            }else{
                alert("E=mail inválido")}
            
        }
    }
})    
    
    