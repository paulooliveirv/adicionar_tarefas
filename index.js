function processa_nome(){
    var super_nome=document.getElementById("inserir_nome").value;

    if (super_nome == ""){
        alert('Digite um nome válido');
    }else{
        var list_nomes=document.getElementById("lista").innerHTML;

        list_nomes=list_nomes+"<li>"+super_nome+"</li>";

    document.getElementById("lista").innerHTML=list_nomes;

    document.getElementById("inserir_nome").focus();

    inserir_nome.value="";
    }
}
