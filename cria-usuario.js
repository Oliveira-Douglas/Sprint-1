import crypto from "crypto";
export function criaUsuario (nome, email, senha, ) {
    const usuario = {
        id: crypto.randomUUID(),
        nome: nome,
        email: email,
        senha: senha,
        criadoEm: Date(new Date(), "YYYY-MM-DD")
    }
    console.log(usuario);
    return usuario;
}