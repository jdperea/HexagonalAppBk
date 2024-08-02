import { SignJWT, jwtVerify } from 'jose';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';
const JWT_ISSUER = process.env.JWT_ISSUER || 'http://localhost:3000';

type Payload = {
    id: string;
};

export const generateToken = async (payload: Payload) => {
    const iat = Math.floor(Date.now() / 1000);
    const exp = iat + 60 * 60 * 24;

    return new SignJWT(payload)
        .setExpirationTime(exp)
        .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
        .setIssuedAt(iat)
        .setIssuer(JWT_ISSUER)
        .setNotBefore(iat)
        .sign(new TextEncoder().encode(JWT_SECRET));
};

export const verifyToken = async (token: string) => {
    try {
        const decoded = await jwtVerify(
            token,
            new TextEncoder().encode(JWT_SECRET)
        );
        
        return decoded;
    } catch (error) {
        throw error;
    }
};
