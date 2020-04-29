const User = require('../models/User');

module.exports = {
    // Create a new user
    async userRegister(req, res, next) {
        try {
            const user = new User(req.body);
            await user.save();
            //const token = await user.generateAuthToken();
            res.status(201).send({ user })
        } catch (error) {
            res.status(400).send(error)
        }
    },
    // Login a registered user
    async userLogin(req, res, next) {
        try {
            const { email, password } = req.body;
            const user = await User.findByCredentials(email, password)
            if (!user) {
                return res.status(401).send({ error: 'Login failed! Check authentication credentials' })
            }
            const token = await user.generateAuthToken();
            const { _id } = user;
            res.send({ token, _id })
        } catch (error) {
            res.status(400).send(error)
        }
    },
    // View logged in user profile
    userMe(req, res, next) {
        res.send(req.token);
    },
    // Log user out of the application
    async userLogout(req, res, next) {
        try {
            req.user.tokens = req.user.tokens.filter((token) => {
                return token.token != req.token
            })
            await req.user.save()
            res.send()
        } catch (error) {
            res.status(500).send(error)
        }
    },
    // Log user out of all devices
    async userLogoutAll(req, res, next) {
        try {
            req.user.tokens.splice(0, req.user.tokens.length)
            await req.user.save()
            res.send()
        } catch (error) {
            res.status(500).send(error)
        }
    }
}
