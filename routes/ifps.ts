import express from 'express';
import assert from 'assert';

export const router = express.Router();

const IPFS_GATEWAY = process.env.IPFS_GATEWAY || 'https://dweb.link';
assert(IPFS_GATEWAY, 'missing IPFS_GATEWAY env variable');

/** GET ipfs page. */
router.get('/', (req, res) => {
    const url = new URL(req.originalUrl, IPFS_GATEWAY);
    res.redirect(url.toString());
});
export default router;

