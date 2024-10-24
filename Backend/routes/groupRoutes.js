const express = require('express');
const router = express.Router();
const groupController = require('../controllers/groupController');

router.get('/', groupController.getGroups);
router.post('/', groupController.addGroup);
router.post('/:groupId/members', groupController.addMemberToGroup);
router.delete('/:groupId/members/:username', groupController.removeMemberFromGroup);
router.get('/:groupId/channels', groupController.getChannels);

module.exports = router;
