import bcrypt from 'bcrypt'

const saltRounds = 10

export async function hashPassword (password:string)  {
    const salt = await bcrypt.genSalt(saltRounds)
    return await bcrypt.hash(password, salt)
}

export async function comparePassword(password:string,hash:string):Promise<boolean> {
    return await bcrypt.compare(password, hash)
}