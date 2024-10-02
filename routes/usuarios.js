const { Router } = require('express');
const { findAllController } = require('../controllers/usuario');

const router = Router();

router.get('/', findAllController);

module.exports = router;