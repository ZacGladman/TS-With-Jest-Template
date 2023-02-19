const helloWorld = require("./js-sample");

test("sample JS test", () => {
  expect(helloWorld()).toEqual("hello world");
});
