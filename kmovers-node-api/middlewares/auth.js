const jwt = require("jsonwebtoken");
module.exports = {
    authMiddleware: (req, res, next) => {
        let token = req.header('x-auth-token');

        if (!token) return res.status(401).json({ errored: true, error: "Access denied. No Authorization provided" });

        try {
            const data = jwt.verify(token, process.env.SECRET_KEY)
            
            req.user = jwt.decode(data)
            // decode the data before sending
            next();
        } catch (error) {
            res.status(400).json({ message: "Invalid access token" })
        }
    }
}
// DETAILS->SIGN->GENTOKEN->SEND FRONTEND
// GETTOKEN(AUTH HEADERS)->VERIFY->NEXT()
// const user = req.user
// I want to get my transctinons
//route.get('/transactions', isAuth, getTransaction)