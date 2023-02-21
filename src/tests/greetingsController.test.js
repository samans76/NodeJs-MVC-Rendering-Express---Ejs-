const GreetingsController = require("../controllers/greetingsController.js");

describe("greet the visitor by his url name", () => {
  it("greet him by his name (Ali)", () => {
    const req = { params: { name: "Ali" } };
    const res = {
      text: "",
      send: function (input) {
        this.text = input;
      },
    };
    GreetingsController.greetVisitor(req, res);
    expect(res.text).toEqual("Hello Ali!");
    expect(res.text).not.toEqual("Hello Max!");
  });
});
