function logar(){
    var login = document.getElementById(rm).value
    var senha = document.getElementById(senha).value 

    if(rm == 12345 && senha == vivi){
        alert('Sucesso');
        location.href = "tela de aluno.html";
    }    
    else{
        alert('login ou senha incorretos');
    }
}