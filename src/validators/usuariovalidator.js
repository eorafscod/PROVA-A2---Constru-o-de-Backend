const yup = require('yup')

// Definição do schema de validação com mensagens de erro melhoradas
const schema = yup.object().shape({
    nome: yup
        .string("O campo 'nome' precisa ser um texto")
        .required("O campo 'nome' é obrigatório"),
    email: yup
        .string("O campo 'email' precisa ser um texto")
        .email("O campo 'email' precisa ser um e-mail válido")
        .required("O campo 'email' é obrigatório"),
    senha: yup
        .string("O campo 'senha' precisa ser um texto")
        .min(6, "A 'senha' deve ter no mínimo 6 caracteres")
        .required("O campo 'senha' é obrigatório"),
    dataCriacao: yup
        .date("Data de criação inválida")
        .default(() => new Date())
        .required("O campo 'dataCriacao' é obrigatório"),
    dataAtualizacao: yup
        .date("Data de atualização inválida")
        .default(() => new Date())
        .required("O campo 'dataAtualizacao' é obrigatório"),
});

// Função middleware de validação do usuário
function validarUsuario(req, res, next) {
    schema
        .validate(req.body, { abortEarly: false })
        .then(() => next())
        .catch(err => {
            const erros = err.inner.map(e => ({
                campo: e.path,
                erros: e.errors
            }));
            
            res.status(400).json({
                mensagem: "Falha na validação dos campos",
                erros
            });
        });
}

module.exports = {
    validarUsuario
};