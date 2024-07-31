// valores de cadastro
const campoNovoCadasto = document.getElementById("nome");
const campoEmail = document.getElementById("email");
const campoSenha = document.getElementById("novaSenha");
const campoRepitaSenha = document.getElementById("repitaSenha");
// valores campo login
const campoEmailLogin = document.getElementById("email_login");
const campoSenhaLogin = document.getElementById("senha_login");

function logado() {
    let EmailLogin = campoEmailLogin.value;
    let senhaLogin = campoSenhaLogin.value;
    let mensagem = "Usuário ou senha incorreta!";
    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));

    if (!validateEmail(EmailLogin)) {
        alert("Por favor, insira um endereço de e-mail válido.");
        return;
    }

    if (bancoDeDados == null) {
        mensagem = "Nenhum usuário cadastrado até o momento";
    } else {
        for (let usuario of bancoDeDados) {
            if (usuario.email == EmailLogin && usuario.senha == senhaLogin) {
                localStorage.setItem("logado", JSON.stringify(usuario));
                window.location.href = 'logado.html';
                return; // Parar a execução da função após redirecionar
            }
        }
    }

    // Caso as credenciais estejam incorretas ou nenhum usuário esteja cadastrado
    alert(mensagem);
    LimparPlaceHolder();
}

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Função de cadastro e validação se é email

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function cadastrar() {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('novaSenha').value;
    let confirmarSenha = document.getElementById('repitaSenha').value;

    if (nome != '' && email != '' && senha != '' && confirmarSenha != '') {
        if (!isValidEmail(email)) {
            alert('Por favor, insira um e-mail válido.');
            return;
        }
        if (senha == confirmarSenha) {
            const usuario = {
                nome: nome,
                senha: senha,
                email: email,
            };
            let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
            if (bancoDeDados == null) {
                bancoDeDados = [];
            }
            if (existe(usuario, bancoDeDados)) {
                alert('Esse usuário já foi cadastrado!');
            } else {
                bancoDeDados.push(usuario);
                localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados));
                alert("Usuário cadastrado com sucesso!");
                telaLogin();
            }
        } else {
            alert("As senhas são diferentes!");
        }
    } else {
        alert('Preencha todos os campos!');
    }
}

function existe(usuario, bancoDeDados) {

    for (let verificado of bancoDeDados) {
        if (verificado.email == usuario.email) {
            return true;
        }
    }
    return false;
}

function telaApresentacao() {
    window.location.href = 'paginaApresentacao.html';
}


function telaCadastro() {
    window.location.href = 'cadastro.html';
}

function telaInicio() {
    window.location.href = 'index.html';
}

function telaLogin() {
    window.location.href = 'login.html';
}

function voltar() {
    window.location.href = 'index.html';
}

function sair() {
    window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', function () {
    // Seleciona todos os links âncora que começam com #
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Obtém o alvo do href
            const target = document.querySelector(this.getAttribute('href'));

            // Se o elemento existir, rola suavemente até ele
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});



// ======= modal de logado abaixo =======

// Obtém o modal
let modal = document.getElementById("myModal");

// Obtém o botão que abre o modal
let btnAbrir = document.getElementById("abrirModal");

// Obtém o elemento <span> que fecha o modal
let spanFechar = document.getElementsByClassName("close")[0];

// Quando o usuário clicar no botão, abre o modal
btnAbrir.onclick = function () {
    modal.style.display = "block";
}

// Quando o usuário clicar no <span> (x), fecha o modal
spanFechar.onclick = function () {
    modal.style.display = "none";
}

// Quando o usuário clicar fora do modal, ele também fecha
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// ====== finaliza o modal de logado========

// ====== inicia o modal de consulta=====

// Obtém o modal de consulta
let modalConsulta = document.getElementById("modalConsulta");

// Obtém o botão que abre o modal de consulta
let btnAbrirConsulta = document.getElementById("abrirModalConsulta");

// Obtém o elemento <span> que fecha o modal de consulta
let spanFecharConsulta = document.getElementsByClassName("closeConsulta")[0];

// Quando o usuário clicar no botão, abre o modal de consulta
btnAbrirConsulta.onclick = function () {
    modalConsulta.style.display = "block";
}

// Quando o usuário clicar no <span> (x), fecha o modal de consulta
spanFecharConsulta.onclick = function () {
    modalConsulta.style.display = "none";
}

// Quando o usuário clicar fora do modal, ele também fecha
window.onclick = function (event) {
    if (event.target == modalConsulta) {
        modalConsulta.style.display = "none";
    }
}

// ======  finaliza o modal de consulta ======

function existeSala(novaSala,salas) {

    for (let verificadoSala of salas) {
        if (verificadoSala.id == novaSala.id) {
            return true;
        }
    }
    return false;
}
//==================== começa a parte de cadastros de salas aqui

// Função para cadastrar uma sala
function cadastrarSala() {
    // Captura os valores dos campos do formulário
    let id = document.getElementById('id_cadastro_salas').value;
    let cep = document.getElementById('cep_cadastro_salas').value;
    let estado = document.getElementById('estados_cadastro_salas').value;
    let cidade = document.getElementById('cidade_cadastro_salas').value;
    let bairro = document.getElementById('bairro_cadastro_salas').value;
    let data = document.getElementById('data_cadastro_salas').value;
    let preco = document.getElementById('preco_cadastro_salas').value;
    let capacidade = document.getElementById('capacidade_cadastro_salas').value;
    let descricao = document.getElementById('descricao_cadastro_salas').value;
    let imagem = document.getElementById('imagens_salas').value;
    let telefone = document.getElementById('contato').value;
    if (id != '' && cep != '' && estado != '' && cidade != '' && bairro != '' && data != '' && preco != '' && capacidade != '' && descricao != '' && imagem != '' && telefone != '') {
        // Salva os dados no localStorage
        let novaSala = {
            id: id,
            preco: preco,
            capacidade: capacidade,
            cep: cep,
            estado: estado,
            cidade: cidade,
            bairro: bairro,
            data: data,
            descricao: descricao,
            imagem: imagem,
            telefone: telefone
        };

        // Verifica se já existe alguma informação no localStorage
        let salas = JSON.parse(localStorage.getItem('salas')) || [];

        if(existeSala(novaSala,salas)){
            alert('Essa sala já foi cadastrada!');
        }else{

            // Adiciona a nova sala à lista de salas
            salas.push(novaSala);
            // Atualiza o localStorage com a nova lista de salas
            localStorage.setItem('salas', JSON.stringify(salas));
    
            // Mensagem de sucesso
            alert("Sala cadastrada com sucesso!");
            limparCadastro();
        }

    } else {
        alert('Preencha todos os campos!')
    }

}

const lista = document.getElementById("lista_salas");

let aberto = false;
function exibeSalas() {
    // Limpa a div de resultados para garantir que não haja duplicações
    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';

    // Variável para armazenar o HTML das salas
    let salaHTML = '';

    // Recupera as salas do localStorage
    let salas = JSON.parse(localStorage.getItem('salas')) || [];

    // Adiciona cada sala à lista de HTML
    salas.forEach(sala => {
        salaHTML += `
            <div class="sala">
                <p><strong>Código da Sala:</strong> ${sala.id}</p>
                <img src="imagem/${sala.imagem}.jpg" width="500" height="300">
                <br><br>
                <p><strong>CEP:</strong> ${sala.cep}</p>
                <p><strong>Estado:</strong> ${sala.estado}</p>
                <p><strong>Cidade:</strong> ${sala.cidade}</p>
                <p><strong>Bairro:</strong> ${sala.bairro}</p>
                <p><strong>Data de publicação:</strong> ${sala.data}</p>
                <p><strong>Descrição:</strong> ${sala.descricao}</p>
                <p><strong>Capacidade da sala:</strong> ${sala.capacidade} pessoas</p>
                <p><strong>Preço Diária:</strong> ${sala.preco} R$</p>
                <p><strong>Contato:</strong> ${sala.telefone}
                
                <a target="_blank" href="https://wa.me/${sala.telefone}">
                    <img src="imagem/wtss.png" class="img_login" alt="WhatsApp">
                </a></p>
            </div>
            <hr>
        `;
    });

    // Verifica se houve salas encontradas
    if (salaHTML === '') {
        salaHTML = '<p>Não há salas cadastradas no momento!</p>';
    }

    // Exibe as salas cadastradas
    resultadoDiv.innerHTML = salaHTML;
}

function LimparPlaceHolder() {
    campoEmail.value = '';
    campoNovoCadasto.value = '';
    campoSenha.value = '';
    campoRepitaSenha.value = '';
    campoEmailLogin.value = '';
    campoSenhaLogin.value = '';

}
function limparCadastro() {
    document.getElementById('cep_cadastro_salas').value = '';
    document.getElementById('estados_cadastro_salas').value = '';
    document.getElementById('cidade_cadastro_salas').value = '';
    document.getElementById('bairro_cadastro_salas').value = '';
    document.getElementById('data_cadastro_salas').value = '';
    document.getElementById('descricao_cadastro_salas').value = '';
    document.getElementById('preco_cadastro_salas').value = '';
    document.getElementById('capacidade_cadastro_salas').value = '';
    document.getElementById('id_cadastro_salas').value = '';
    document.getElementById('contato').value = '';

    // Limpar campo de seleção de imagens
    let inputImagens = document.getElementById('imagens_salas');
    inputImagens.value = '';
}

const listaDeConsulta = document.getElementById("lista");

let salaEncontrada = -1;


function consultarSala() {

    let salas = JSON.parse(localStorage.getItem("salas"));

    let idPesquisa = document.getElementById("id_cadastro_salas").value;

    for (let i = 0; i < salas.length; i++) {

        if (salas[i].id == idPesquisa) {

            //id.value[i] = salas[i].id;
            document.getElementById('imagens_salas').value = salas[i].imagem;
            document.getElementById('cep_cadastro_salas').value = salas[i].cep;
            document.getElementById('estados_cadastro_salas').value = salas[i].estado;
            document.getElementById('cidade_cadastro_salas').value = salas[i].cidade;
            document.getElementById('bairro_cadastro_salas').value = salas[i].bairro;
            document.getElementById('data_cadastro_salas').value = salas[i].data;
            document.getElementById('descricao_cadastro_salas').value = salas[i].descricao;
            document.getElementById('capacidade_cadastro_salas').value = salas[i].capacidade;
            document.getElementById('preco_cadastro_salas').value = salas[i].preco;
            document.getElementById('contato').value = salas[i].telefone;


            salaEncontrada = i; // Atualiza o índice de encontrado
        }
    }

    document.getElementById('id_cadastro_salas').focus();
    if (salaEncontrada === -1) {
        alert("Nenhuma sala encontrada.");
    }
}


function AtualizarDadosSala() {

    let encontrado = salaEncontrada;
    let salas = JSON.parse(localStorage.getItem("salas"));

    // Verifica se a variável salaEncontrada é válida e se o índice está dentro dos limites do array
    if (encontrado === undefined || encontrado < 0) {
        alert("Por favor, pesquise uma sala antes de atualizar.");
        return;
    }

    salas[encontrado].imagem = document.getElementById('imagens_salas').value;
    salas[encontrado].cep = document.getElementById('cep_cadastro_salas').value;
    salas[encontrado].estado = document.getElementById('estados_cadastro_salas').value;
    salas[encontrado].cidade = document.getElementById('cidade_cadastro_salas').value;
    salas[encontrado].bairro = document.getElementById('bairro_cadastro_salas').value;
    salas[encontrado].data = document.getElementById('data_cadastro_salas').value;
    salas[encontrado].descricao = document.getElementById('descricao_cadastro_salas').value;
    salas[encontrado].capacidade = document.getElementById('capacidade_cadastro_salas').value;
    salas[encontrado].preco = document.getElementById('preco_cadastro_salas').value;
    salas[encontrado].telefone = document.getElementById('contato').value;

    localStorage.setItem("salas", JSON.stringify(salas));

    alert("Dados da sala atualizados com sucesso.");
    limparCadastro();
    document.getElementById('id_cadastro_salas').focus();

}


// Função para abrir o modal de deseja a excluir sala
function openModal() {
    document.getElementById('Modal').style.display = 'block';
}

// Função para fechar o modal
function closeModal() {
    document.getElementById('Modal').style.display = 'none';
}

// Função de excluir sala
function excluirSala() {
    let salaEncontrada = 0; // Defina isso com base na sua lógica
    if (salaEncontrada !== -1) {
        let salas = JSON.parse(localStorage.getItem("salas"));

        salas.splice(salaEncontrada, 1); // Remove a sala encontrada do array

        localStorage.setItem("salas", JSON.stringify(salas)); // Atualiza o localStorage

        limparCadastro(); // Limpa os campos do formulário
        alert('Sala deletada com sucesso.');
        salaEncontrada = -1; // Reseta a variável de sala encontrada

        // Limpar a lista de salas exibida, se estiver aberta
        if (aberto) {
            lista.innerHTML = '';
            aberto = false;
        }

        document.getElementById('id_cadastro_salas').focus(); // Define o foco de volta no campo ID
    } else {
        alert('Nenhuma sala encontrada para deletar.');
    }
    closeModal(); // Fecha o modal após a exclusão
}

limparCadastro();

// Função para buscar as salas com base no termo de pesquisa
function buscarSala() {
    // Captura o valor do campo de pesquisa
    let termo = document.getElementById('pesquisa').value.toLowerCase();

    // Recupera as salas do localStorage
    let salas = JSON.parse(localStorage.getItem('salas')) || [];

    // Variável para armazenar o HTML dos resultados
    let resultadoHTML = '';

    // Percorre as salas e acumula os resultados que correspondem ao termo de pesquisa
    salas.forEach(sala => {
        if (
            sala.estado.toLowerCase().includes(termo) ||
            sala.cidade.toLowerCase().includes(termo) ||
            sala.bairro.toLowerCase().includes(termo) ||
            sala.cep.includes(termo)
        ) {
            resultadoHTML += `
                <div class="sala">
                    <p><strong>Id da sala:</strong> ${sala.id}</p>
                    <img src="imagem/${sala.imagem}.jpg" width="500" height="300">
                    <br><br>
                    <p><strong>CEP:</strong> ${sala.cep}</p>
                    <p><strong>Estado:</strong> ${sala.estado}</p>
                    <p><strong>Cidade:</strong> ${sala.cidade}</p>
                    <p><strong>Bairro:</strong> ${sala.bairro}</p>
                    <p><strong>Data de publicação:</strong> ${sala.data}</p>
                    <p><strong>Descrição:</strong> ${sala.descricao}</p>
                    <p><strong>Capacidade da sala:</strong> ${sala.capacidade} pessoas</p>
                    <p><strong>Preço Diária:</strong> ${sala.preco} R$</p>
                    <p><strong>Contato:</strong> ${sala.telefone}
                    <a target="_blank" href="https://wa.me/${sala.telefone}">
                    <img src="imagem/wtss.png" class="img_login" alt="WhatsApp">
                    </a></p>
                </div>
                <hr>
            `;
        }
    });

    // Verifica se houve resultados encontrados
    if (resultadoHTML === '') {
        resultadoHTML = '<p>Nenhum resultado encontrado.</p>';
    }

    // Exibe os resultados na página
    mostrarResultados(resultadoHTML);
}

// Função para mostrar os resultados na página
function mostrarResultados(resultadoHTML) {
    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = resultadoHTML; // Define o conteúdo da div de resultados
}




// função para mostrara o password no login

function toggleSenha(inputId, iconId) {
    var input = document.getElementById(inputId);
    var icon = document.getElementById(iconId);
    if (input.type === "password") {
        input.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        input.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}


//função para mostrar o password cadastro
function toggleSenha(inputId, iconId) {
    var input = document.getElementById(inputId);
    var icon = document.getElementById(iconId);
    if (input.type === "password") {
        input.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        input.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}
  
