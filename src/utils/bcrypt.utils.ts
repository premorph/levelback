import { compare, hash } from "bcryptjs"

const comparation =async(textPlain:string, textHash:string):Promise<boolean>=>{
    return compare(textPlain,textHash)
}
const encrypt = async(textPlain:string):Promise<string>=>{
    const textHash = await hash(textPlain,10)
    return textHash
}
export {encrypt,comparation}