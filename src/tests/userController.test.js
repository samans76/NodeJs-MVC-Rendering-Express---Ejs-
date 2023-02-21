const User = require("../models/userSchema.js");
const db = require("../setup/testDatabase.js");
const UserController = require("../controllers/userController.js");

const userData = {
  id: 1,
  name: "saman",
  password: 15,
};

describe("Add User", () => {
  beforeAll(async () => {
    await db.setUp();
  });

  afterEach(async () => {
    await db.dropCollections();
  });

  afterAll(async () => {
    await db.dropDatabase();
  });

  // const req = new Request();
  // const res = new Response();
  const req = { body: userData };
  const res = { render: jest.fn() };
  const next = {};

  it("user should be added to database", async () => {
    const userBefore = await User.findOne({ id: userData.id });
    await UserController.addUser(req, res, next);
    const userAfter = await User.findOne({ id: userData.id });

    expect(userBefore).toBeNull();
    expect(userAfter).not.toBeNull();
    expect(userAfter.name).toBe(userData.name);
    expect(userAfter.password).toBe(userData.password);
  });

  it("should call res.render with specific data", async () => {
    await UserController.addUser(req, res, next);
    const usersList = await User.find({});
    console.log(usersList);

    expect(res.render).toHaveBeenCalledWith("userTable", {
      users: JSON.stringify(usersList),
      messages: JSON.stringify(["New user data added successfully"]),
    });
    expect(res.render).not.toHaveBeenCalledWith("userTable", {
      users: JSON.stringify([]),
      messages: JSON.stringify(["New user data added successfully"]),
    });
  });
});
