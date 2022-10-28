const User = require("../model/User");

exports.getUser = async (req, res) => {
  let { username, password } = req.body;
  try {
    const user = await User.findOne({
      username: username,
      password: password,
    });
    if (!user)
      // TODO need to return rejected promise here
      return res
        .status(204)
        .json({ message: "Need to return something other than" });
    res.json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const duplicate = await User.findOne({ username: req.body.username });
    // TODO if user exist return rejected promise
    if (duplicate) return res.sendStatus(409); // conflict

    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
