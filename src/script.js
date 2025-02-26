function calcularIdade(){
    let anoNascimento = document.getElementById("anoNascimento").value;
    let idade = 2025 - anoNascimento;
    document.getElementById("resultado").innerHTML = `Idade é : ${idade}`;
}

// Tarefas para proxima aula:

// Novas implementações
// - Utilizar o ano atual.
// - Aceitar apenas ano maior do que 1900.
// - Não permitir que o input seja vazio.