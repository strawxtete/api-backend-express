import { updateName } from "../../models/ProductModel.js"


export default async function (req, res) {
    const { id } = req.params

    const { name } = req.body

    const result = await updateName(+id, name)

    if(!result) {
        return res.status(404).json({
            error: "Produto não encontrado",
        })
    }
    
    return res.json({
        message: "Nome do produto alterado com sucesso",
        product: result
    })
}