<<<<<<< HEAD
import { compare, hash } from "bcryptjs"

const comparation =async(textPlain:string, textHash:string):Promise<boolean>=>{
    return compare(textPlain,textHash)
}
const encrypt = async(textPlain:string):Promise<string>=>{
    const textHash = await hash(textPlain,10)
=======
import { compare, hash } from 'bcryptjs'

/**
 * 
 * @param textPlain 
 * @param textHash 
 * @returns true or false
 */
const comparation= async(textPlain:string,textHash:string):Promise<boolean>=>{
return compare(textPlain,textHash)
}

/**
 * 
 * @param textPlain 
 * @returns string hashed
 */
const encrypt= async(textPlain:string):Promise<string>=>{
    const textHash= await hash(textPlain,10);
>>>>>>> 8cba15b (fixed json)
    return textHash
}
export {encrypt,comparation}