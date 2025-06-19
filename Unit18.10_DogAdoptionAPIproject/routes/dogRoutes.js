const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const {
  registerDog,
  adoptDog,
  removeDog,
  listRegisteredDogs,
  listAdoptedDogs,
} = require('../controllers/dogController');

router.post('/', auth, registerDog);
router.post('/:id/adopt', auth, adoptDog);
router.delete('/:id', auth, removeDog);
router.get('/my', auth, listRegisteredDogs);
router.get('/adopted', auth, listAdoptedDogs);

module.exports = router;