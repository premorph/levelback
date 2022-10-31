import { IUser } from '../interfaces'
import { verify, sign } from 'jsonwebtoken'
import { EXPIRESTOKEN, JWT_SECRET } from '../enviroments/env.enviroments'
async function VerifyJWT(token: string) {
    try {
        return verify(token, JWT_SECRET)
    } catch (r) {
        return null
    }
    return
}
async function SignJWT(user: IUser): Promise<string> {
    const Sign = sign(
        {
            _id: user._id,
            role: user.role,
        },
        JWT_SECRET,
        {
            expiresIn: EXPIRESTOKEN,
        }
    )
    return Sign
}
export { VerifyJWT, SignJWT }
