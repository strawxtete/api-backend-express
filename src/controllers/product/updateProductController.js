import { update } from "../../models/ProductModel.js"

export default async function(req, res) {
    const { id } = req.params

    const product = req.body

    const result = await update(+id, product)

    if(!result) {
        return res.status(404).json({
            error: "Produto não encontrado",
        })
    }

    return res.json({
        message: "Produto alterado com sucesso",
        produto: result
    })
}