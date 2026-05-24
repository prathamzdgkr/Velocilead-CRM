const User = require('../models/User');

// @desc    Update user profile & settings
// @route   PUT /api/users/profile
// @access  Private (Requires Token)
const updateProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Update basic fields
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;

        // If your User model doesn't have a notifications object yet, 
        // Mongoose will ignore it unless you add it to your User schema.
        // Let's assume you've added it, or we just save what is passed.
        if (req.body.notifications) {
            user.notifications = req.body.notifications;
        }

        const updatedUser = await user.save();

        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            notifications: updatedUser.notifications,
        });
    } catch (error) {
        console.error("Profile Update Error:", error);
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get current user profile
// @route   GET /api/users/profile
const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select('-password');
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { updateProfile, getProfile };