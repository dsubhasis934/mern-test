const express = require('express');
const register = require('../modal/registerModal');
const router = express.Router();
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
var jwt = require('jsonwebtoken');
const jwtSecret = "abc";
router.post('/signup', (req, res) => {
    const { email, password } = req.body;
    const saltedPassword = bcrypt.hashSync(password, salt);
    register.create({ email: email, password: saltedPassword })
        .then(resp => res.status(200).json({ success: true, message: "data sucessfully received", data: resp }))
        .catch(cat => res.status(200).json({ success: false, message: "data not registered", err: cat.message }))
})
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    // const comparePassword = bcrypt.compareSync(password, bcrypt.hashSync(password, salt));
    register.find({ email: email })
        .then(response => bcrypt.compare(password, response[0].password)
            .then((result) => result ? jwt.sign({ email: response[0].email },
                jwtSecret, (err, data) => {
                    if (err) {
                        res.status(200).json({ success: false, message: err.message })
                    } else {
                        res.status(200).json({ success: true, message: "login successfull", data: response, tok: data })
                    }
                }
            ) : res.status(200).json({ success: false, message: "data not found" }))
        )


        .catch(err => res.status(200).json({ success: false, err: err.message }))

})
router.get('/show', (req, res) => {
    register.find({})
        .then(resp => res.status(200).json({ success: true, message: "data successfully fetched", data: resp }))
        .catch(cat => res.status(200).json({ success: false, message: "data not fetched", err: cat.message }))
})
router.delete('/delete', (req, res) => {
    console.log(req.body)
    const { email } = req.body;
    if (!email) {
        return res.status(200).json({ success: false, message: "email not found" })
    }
    register.findOneAndDelete({
        email: email,
    }
    ).then(resp => res.status(200).json({ success: true, message: "data successfully deleted", data: resp }))
        .catch(cat => res.status(200).json({ success: false, message: "data not deleted", err: cat.message }))
})
router.patch('/update', (req, res) => {
    const { email, updatedPassword } = req.body;
    const saltedPassword = bcrypt.hashSync(updatedPassword, salt)
    register.findOneAndUpdate({ email: email },
        { password: saltedPassword },
        { new: true })
        .then(resp => res.status(200).json({ success: true, message: "data successfully updated", data: resp }))
        .catch(cat => res.status(200).json({ success: false, message: "data not updated", err: cat.message }))
})
module.exports = router;