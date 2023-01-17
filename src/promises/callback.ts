export function obterUsuario(callback: any) {
    console.log("Iniciou");

    setTimeout(() => {
        callback.call(null, {
            nome: "Fulano",
            idade: 20,
            assincrono: true,
        });
    }, 3000);

    console.log("Após o setTimeout()");
}

function salvarUsuario(usuario: any, callback: any) {
    usuario.idade = usuario.idade + 1;

    setTimeout(() => {
        callback.call(null, usuario);
    }, 2000);
}

obterUsuario((result: any) => {
    console.log(result);
    salvarUsuario(result, (result: any) => {
        console.log(result);
        salvarUsuario(result, (result: any) => {
            console.log(result);
            salvarUsuario(result, (result: any) => {
                console.log(result);
                salvarUsuario(result, (result: any) => {
                    console.log(result);
                    salvarUsuario(result, (result: any) => {
                        console.log(result);
                        salvarUsuario(result, (result: any) => {
                            console.log(result);
                            salvarUsuario(result, (result: any) => {
                                console.log(result);
                                salvarUsuario(result, (result: any) => {
                                    console.log(result);
                                    salvarUsuario(result, (result: any) => {
                                        console.log(result);
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});
