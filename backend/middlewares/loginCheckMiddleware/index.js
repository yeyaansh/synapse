const loginCheckMiddleware = async (req, res) => {
  const { token } = req.cookies;

  const validToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
  if (!validToken) {
    return res.status(403).send({
      message: "user is not logged-in",
    });
  }

  const userExist = await user.findById(validToken._id);

  if (!userExist) {
    return res.status(403).send({
      message: "user is not logged-in",
    });
  }

  const userData = {
    full_name: userExist.full_name,
    email_id: userExist.email_id,
  };

  return res.status(200).send({
    userData,
    message: "user is logged-in",
  });
};

export default loginCheckMiddleware;
