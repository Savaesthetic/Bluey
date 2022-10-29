const User = require("../model/User");
const bcrypt = require("bcrypt");

exports.getUser = async (req, res) => {
  let { username, password } = req.body;
  try {
    const foundUser = await User.findOne({
      username: username,
    });
    if (!foundUser) return res.sendStatus(401);

    const match = await bcrypt.compare(password, foundUser.password);
    if (match) {
      res.json(foundUser);
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.createUser = async (req, res) => {
  let { username, password } = req.body;
  try {
    const duplicate = await User.findOne({ username: username });
    if (duplicate) return res.sendStatus(409); // conflict

    const hashedPwd = await bcrypt.hash(password, 10);

    const newUser = new User({
      username: username,
      password: hashedPwd,
    });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
