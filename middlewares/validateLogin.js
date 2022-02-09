const validateEmail = (req, res, next) => {
  const { email } = req.body;
  if (!email && email !== '') return res.status(400).json({ message: '"email" is required' });
  if (!email.length) {
    return res.status(400).json({ message: '"email" is not allowed to be empty' });
  }
  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;

  if (!password && password !== '') {
    return res.status(400).json({ message: '"password" is required' });
  }
  if (!password.length) {
    return res.status(400).json({ message: '"password" is not allowed to be empty' });
  }
  next();
};

module.exports = {
  validateEmail,
  validatePassword,
};