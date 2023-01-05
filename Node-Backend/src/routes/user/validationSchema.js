const Joi = require("joi");

const signupUserSchema = (user) => {
  const schema = Joi.object().keys({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(3).required()
  });

  return schema.validate(user);
};

const loginUserSchema = (user) => {
  const schema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required()
  });

  return schema.validate(user);
};

module.exports = {
  signupUserSchema: signupUserSchema,
  loginUserSchema: loginUserSchema
};