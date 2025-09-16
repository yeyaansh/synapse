import jwt from "jsonwebtoken";
import user from "../../models/userSchema";

const userAuthMiddleware = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    const validToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!validToken) {
      throw new Error("Unauthenticated User!");
    }

    const userExist = await user.findById(validToken._id);

    if (!userExist) {
      throw new Error("Unauthenticated User!");
    }

    req.result = userExist;

    next();
  } catch (err) {
    console.log(err);
     return res.status(401).send(err.message);
  }
};

export default userAuthMiddleware;
