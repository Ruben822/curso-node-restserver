const { Router } = require('express');
const router = Router();
const {
    getUsuarios,
    postUsuarios,
    putUsuarios,
    deleteUsuarios
} = require('../controllers/user');


router.get('/get', getUsuarios);
router.post('/post', postUsuarios);
router.put('/put/:id', putUsuarios);
router.delete('/delete', deleteUsuarios);

module.exports = router;