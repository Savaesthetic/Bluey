const User = require("../model/User");

exports.getUser = async (req, res) => {
  let { username, password } = req.body;
  try {
    const user = await User.findOne({
      username: username,
      password: password,
    });
    if (!user) return res.sendStatus(404);
    res.json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const duplicate = await User.findOne({ username: req.body.username });
    if (duplicate) return res.sendStatus(409); // conflict

    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
