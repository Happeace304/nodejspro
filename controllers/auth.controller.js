const login = async (req, res) => {
    // const { email, password } = req.body;
    // const user = await authService.loginUserWithEmailAndPassword(email, password);
    // const tokens = await tokenService.generateAuthTokens(user);
    res.send('Hello');
};
module.exports = {
    login
};