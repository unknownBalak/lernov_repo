import Messages from "./dbMessages.js";

const postRequest = (req, res) => {
  const dbMessages = req.body;
  Messages.create(dbMessages, (err, docs) => {
    err ? res.status(500).send(err) : res.status(200).send(docs);
  });
};

export default postRequest;
