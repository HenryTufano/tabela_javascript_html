function cadPessoa(nome,email,telefone){
    var tb = document.getElementById("tbPessoas")
    const qtdlinha = tb.rows.length;
    var linha = tb.insertRow(qtdlinha);

    var cellCodigo=linha.insertCell(0)
    var cellNome=linha.insertCell(1)
    var cellEmail=linha.insertCell(2)
    var cellTelefone=linha.insertCell(3)

    cellCodigo.innerHTML = qtdlinha;
    cellNome.innerHTML = nome;
    cellEmail.innerHTML = email;
    cellTelefone.innerHTML = telefone;
}