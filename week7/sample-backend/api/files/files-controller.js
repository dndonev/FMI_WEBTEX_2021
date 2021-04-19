const { Router } = require('express');
const verifyTokenMiddleware = require('../../middleware/verify-token');

const router = Router();

router.post('/create');
router.get('/:fileId', verifyTokenMiddleware);

module.exports = router;