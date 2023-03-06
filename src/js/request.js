import loader from "./loader"

const reques = async (resourse) => {
    loader(true)
    const req = await fetch(resourse)
    if(!req.ok){
        loader(false)
        throw new Error(`Something went wrong :(`)
    }
    const data = await req.json()
    loader(false)
    return data
}
export default reques