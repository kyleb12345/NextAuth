import { hash } from 'bcryptjs';

export async function hashPassword() {
    const hashedPassword = await hash(password, 12);
    return hashPassword;
}