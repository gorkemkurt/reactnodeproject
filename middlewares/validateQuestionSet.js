module.exports = (req, res, next) => {
  if (!req.body.question1) {
    return res.status(400).send({ error: 'Question1 can not be empty!' });
  }
  if (!req.body.question2) {
    return res.status(400).send({ error: 'Question2 can not be empty!' });
  }
  if (!req.body.subject) {
    return res.status(400).send({ error: 'Subject can not be empty!' });
  }
  if (!req.body.author) {
    return res.status(400).send({ error: 'Auhtor can not be empty!' });
  }

  next();
};
