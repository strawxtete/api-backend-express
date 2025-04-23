export const logger = (req, res, next) => {
    //exibir data e hora da requisição
    console.log(`${new Date().toLocaleString()} ${req.method} ${req.url}`)
    next()
}