import { list } from "../../models/ProductModel.js"

export default async function listProductController(req, res) {
    const result = await list()

    return res.json(result)
}