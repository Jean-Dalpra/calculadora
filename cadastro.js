const btnCadastro = document.getElementById("cadastro");
btnCadastro.addEventListener("click", () => {
    let nome = document.getElementById("name").value;
    document.getElementById("N").innerHTML = "Nome:" + nome;
    let email = document.getElementById("email").value;
    document.getElementById("E").innerHTML = "E-Mail:"+email;
    let data = document.getElementById("data").value;
    document.getElementById("D").innerHTML = "Data de Nascimento:" + data;

    
});
const btnLimpa = document.getElementById("limpar");
btnLimpa.addEventListener("click", () => {
    let nome = document.getElementById("name").value;
    document.getElementById("N").innerHTML = "Nome:";
    let email = document.getElementById("email").value;
    document.getElementById("E").innerHTML = "E-Mail:";
    let data = document.getElementById("data").value;
    document.getElementById("D").innerHTML = "Data de Nascimento:";
});
