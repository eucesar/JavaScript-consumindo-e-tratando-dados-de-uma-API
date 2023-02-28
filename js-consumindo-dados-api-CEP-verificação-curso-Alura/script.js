/*async seria o leque de THANS, so q resumido - API*/ 
async function buscaEndereco(cep) {

    /*erro*/ 
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";

    /*API*/ 
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCEPConvertida = await consultaCEP.json();
        /*se o cep for escrito errado*/ 
        if (consultaCEPConvertida.erro) {
            throw Error('CEP não existente!');
        }
    /*API*/

        /*tds os dons juntos*/ 
        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado');

        /*sincronizando as APIS com oq o cliente escrever - VAI ESCREVER O CEP de acordo com a pesquisa da URL*/ 
        cidade.value = consultaCEPConvertida.localidade;
        logradouro.value = consultaCEPConvertida.logradouro;
        estado.value = consultaCEPConvertida.uf;

        console.log(consultaCEPConvertida);
        return consultaCEPConvertida;

    /*mensagem de erro - se digitar errado*/ 
    } catch (erro) {
        mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`
        console.log(erro);
    }
}

/*quando focar, escrever algo - vai aparecer um ex.*/ 
var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));

/**/ 