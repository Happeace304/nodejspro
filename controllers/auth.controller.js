const {catchAsync} = require('../utils/request.utils');
const login = catchAsync(async (req, res) => {
    const { email, password } = req.body;
    // const user = await authService.loginUserWithEmailAndPassword(email, password);
    // const tokens = await tokenService.generateAuthTokens(user);
    res.send(`${email}, ${password}`);
});
module.exports = {
    login
};