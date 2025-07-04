import jwt from 'jsonwebtoken';
import { z } from 'zod';
import { email } from 'zod/v4';

const JWT_SECRET = 'secret';

const emailSchema = z.string().email();
const passwordSchema = z.string().min(5);

function signJwt(username, password) {
    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);

    if (!usernameResponse.success || !passwordResponse.success) {
        return null;
    }

    const signature = jwt.sign({
        username
    }, JWT_SECRET);

    return signature;
}

function decodeJwt (token) {
    const decoded = jwt.decode(token);
    if (decoded) {
        return true;
    } else {
        return false;
    }
}

function verifyJwt (token) {
    let ans = true;
    try {
        const verified = jwt.verify(token, JWT_SECRET);
    } catch (e) {
        console.log(e);
        ans = false;
    }
    return ans;
}

const ans = signJwt("random@gmail.com","hello123");
console.log(ans);

const decodedAns = decodeJwt(ans);
console.log(decodedAns);

const verifiedJwt = verifyJwt("goeihrguoiehgouher");
console.log(verifiedJwt);