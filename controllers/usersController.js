const { User, Thought } = require("../models");

module.exports = {

  // Get single user by ID
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId }).select("-__v");
      // Check if user exists
      !user ? res.status(404).json({ message: "user doesn't exists!" }) : res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Get all users
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Create new user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  },

  // Update an existing user
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId }, { $set: req.body }, { runValidators: true, new: true }
      );
      // Check if user exists
      !user
        ? res.status(404).json({ message: "user doesn't exists!" })
        : res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Remove existing user
  async removeUser(req, res) {
    try {
      const user = await User.findOneAndRemove({ _id: req.params.userId });
      // Check if user exists
      if (!user) {
        res.status(404).json({ message: "user doesn't exists!" });
      } else {
        // Delete associated thoughts
        await Thought.deleteMany({ _id: { $in: user.thoughts } });
        res.json({ message: "User and thoughts deleted" });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Add a friend to user
  async addFriend(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId }, { $addToSet: { friends: req.params.friendId } }, { new: true, runValidators: true }
      );
      // Check if user exists
      !user
        ? res.status(404).json({ message: "user doesn't exists!" })
        : res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Remove friend from user
  async removeFriend(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId }, { $pull: { friends: req.params.friendId } }, { new: true, runValidators: true }
      );
      // Check if user exists
      !user
        ? res.status(404).json({ message: "user doesn't exists!" })
        : res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};