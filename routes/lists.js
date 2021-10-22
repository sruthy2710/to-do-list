const express = require('express');

const router = express.Router();
const controllers = require('../controller/controlling');


router.get('/lists',controllers.getReq); 

router.post('/lists', controllers.postReq); 
router.patch('/lists/:id',controllers.patchReq);
router.delete('/lists/:id',controllers.deleteReq);

module.exports = router;