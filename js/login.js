$(document).ready(function () {
    $("#btnLogin").click(function () {
        let $user = $("#user").val();
        let $pwd = $("#pwd").val();
        if ($user && $pwd) {
            $.getJSON("../json/users.json", function (registros) {
                if (registros.usuarios.filter($usuario => $usuario.user == $user && $usuario.pwd == $pwd).length > 0) {
                    alert("Usuário válido!");
                } else alert("Usuário inválido!")
            });
        }
        else alert("Erro: favor informar o usuario e senha!")
    });
});