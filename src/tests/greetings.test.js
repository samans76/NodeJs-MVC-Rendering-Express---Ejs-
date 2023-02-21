const request = require("supertest");
const express = require("express");
const router = require("../routes/greetings.js");

const app = new express();
app.use("/", router);

describe("Test Greeting Route", function () {
  it("responds to /greetings/John", async () => {
    const res = await request(app).get("/John");
    expect(res.statusCode).toBe(200);
    expect(res.text).toEqual("Hello John!");
    expect(res.text).not.toEqual("Hello Saman!");
  });
});
