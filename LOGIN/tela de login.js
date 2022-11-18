function logar(e){
    console.log(e)
    e.preventDefault()
    var login = document.getElementById("rm").value
    var senha = document.getElementById("senha").value 
    
    let formData = new FormData();
    formData.append("username", login);
    formData.append("password", senha);
    
    axios.post("/api/login.php", formData).then(res => {
        console.log("res")
        console.log(res);
        if(res.data.success) {
            Swal.fire({
                title:"Logado com sucesso!",
                icon:"success"
            })
            location.href = "tela de aluno.html";
        } else {
              Swal.fire({
                title:"Usuário ou senha inválidos",
                icon:"error"
            })
        }
    }).catch(err => {
        console.log("err")
        console.log(err)
    });
    
    // if(rm == 12345 && senha == vivi){
    //     alert('Sucesso');
    //     location.href = "tela de aluno.html";
    // }    
    // else{
    //     alert('login ou senha incorretos');
    // }
}

document.getElementById("login").addEventListener("submit", logar);