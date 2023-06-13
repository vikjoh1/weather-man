import bcrypt from 'bcryptjs'

export function hashPassword(password: string): string {
    try {
        const saltRounds: number = 10
        const salt: string = bcrypt.genSaltSync(saltRounds)
        const hash: string = bcrypt.hashSync(password, salt)
        return hash
    } catch (error) {
        console.error('Error hashing password:', error)
        throw error
    } 
}