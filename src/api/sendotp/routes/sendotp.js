module.exports = {
  routes: [
    {
      method: "GET",
      path: "/sendotp/:mobileNum",
      handler: "sendotp.send",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "POST",
      path: "/sendotp/:mobileNum",
      handler: "sendotp.verify",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
