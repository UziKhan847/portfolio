// patch-crypto.js
import { createHash } from 'node:crypto';

if (!crypto.hash) {
    crypto.hash = async (algorithm, data) => {
        return createHash(algorithm).update(data).digest();
    };
}
