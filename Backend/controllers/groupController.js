let groups = [
    { id: 1, name: 'Group 1', admin: 'groupadmin', members: ['groupadmin', 'user'] },
    { id: 2, name: 'Group 2', admin: 'groupadmin', members: ['groupadmin'] },
  ];
  
  let channels = [
    { groupId: 1, name: 'General' },
    { groupId: 1, name: 'Random' },
    { groupId: 2, name: 'Updates' },
  ];
  
  exports.getGroups = (req, res) => {
    res.json(groups);
  };
  
  exports.addGroup = (req, res) => {
    const { name, admin } = req.body;
    const newGroup = {
      id: groups.length + 1,
      name,
      admin,
      members: [admin],
    };
    groups.push(newGroup);
    res.status(201).json(newGroup);
  };

  exports.addMemberToGroup = (req, res) => {
    const groupId = parseInt(req.params.groupId);
    const { username } = req.body;
    const group = groups.find(group => group.id === groupId);
    if (group && !group.members.includes(username)) {
      group.members.push(username);
      res.status(200).json(group);
    } else {
      res.status(404).json({ message: 'Group not found or user already in group' });
    }
  };
  
  exports.removeMemberFromGroup = (req, res) => {
    const groupId = parseInt(req.params.groupId);
    const { username } = req.params;
    const group = groups.find(group => group.id === groupId);
    if (group) {
      group.members = group.members.filter(member => member !== username);
      res.status(200).json(group);
    } else {
      res.status(404).json({ message: 'Group not found' });
    }
  };
  
  exports.getChannels = (req, res) => {
    const groupId = parseInt(req.params.groupId);
    const groupChannels = channels.filter(channel => channel.groupId === groupId);
    res.json(groupChannels);
  };