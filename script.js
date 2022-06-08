let cep = document.querySelector("#cep");
let cidade = document.querySelector("#cidade");
let estado = document.querySelector("#estado");

cep.addEventListener("blur", function(e){
    let cep = e.target.value;
    
    let script = document.createElement("script")
    script.src = "http://viacep.com.br/ws/"+cep+"/json/?callback=retorno";
    document.body.appendChild(script);
});

function retorno(resposta){
    cidade.value = resposta.localidade;
    estado.value = resposta.uf
}




function validar(){
    var validacao = 0

    var senha = document.getElementById("senha").value;
    var csenha = document.getElementById("csenha").value;
    var email = document.getElementById("email").value;
    var cemail = document.getElementById("cemail").value;

    if(cemail === email){
        validacao = validacao + 1
    }
    else{
        alert("Os email não são idênticos")
    }if((csenha === senha)) {
        validacao = validacao + 1
    }
    else{
        alert("As senhas não são idênticas")
       
    }
    
    
    if(validacao == 2){
        return true;
    }
    else{
        return false;
    }
}
