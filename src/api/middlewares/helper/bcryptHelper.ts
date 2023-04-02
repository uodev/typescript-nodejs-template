import bcrypt from 'bcrypt'

const saltRounds = 10

export async function hashPassword (password:string): Promise<string>  {
    const salt = await bcrypt.genSalt(saltRounds)
    const hash = await bcrypt.hash(password,salt)
    return hash
}

export async function compare(password:string,hash:string):Promise<boolean> {
    const result = await bcrypt.compare(password,hash)
    return result
}