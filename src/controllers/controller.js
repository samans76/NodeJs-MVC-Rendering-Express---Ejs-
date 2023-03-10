class Controller {
  constructor() {}

  error(message, status = 500) {
    const err = new Error(message);
    err.status = status;
    throw err;
  }
}

module.exports = Controller;
