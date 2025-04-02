import { create } from "../../models/ProductModel.js"

export default async function (req, res){
    const product = req.body

    const result = await create(product)

    if(!result) {
        return res.status(500).json({
            message: "Erro ao criar o produto!"
        })
    }

    delete result.pass

    return res.json({
        message: "Produto criado com sucesso!",
        user: result
    })
}