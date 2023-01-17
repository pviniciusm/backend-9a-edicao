function obterUsuarioSincrono() {
    return {
        nome: "Fulano",
        idade: 20,
    };
}

let condicao = false;

function obterUsuario() {
    return new Promise<any>((resolve, reject) => {
        console.log("Iniciou");

        if (!condicao) {
            reject("A condicao está errada");
        }

        setTimeout(() => {
            resolve({
                nome: "Fulano",
                idade: 20,
                assincrono: true,
            });
        }, 3000);

        console.log("Após o setTimeout()");
    });
}

function salvarUsuario(usuario: any) {
    console.log(usuario);

    usuario.idade = usuario.idade + 1;

    return new Promise<any>((resolve, reject) => {
        setTimeout(() => {
            resolve(usuario);
        }, 2000);
    });
}

function mostrarResultado(usuario: any) {
    console.log(usuario);
    console.log("usuario salvo com sucesso");
}

function executarObterThenCatch() {
    obterUsuario()
        .then(salvarUsuario)
        .then(salvarUsuario)
        .then(salvarUsuario)
        .then(salvarUsuario)
        .then(salvarUsuario)
        .then(mostrarResultado)
        .catch((error: any) => {
            console.log("Deu ruim " + error);
        })
        .finally(() => {
            console.log("Finally executou");
        });
}

async function executarObterAsync() {
    try {
        let user = await obterUsuario();
        console.log(user);

        let retorno = await salvarUsuario(user);
        console.log(retorno);
    } catch (error: any) {
        console.log("Erro: " + error);
    } finally {
        console.log("Finally!!!");
    }
}

executarObterAsync();
