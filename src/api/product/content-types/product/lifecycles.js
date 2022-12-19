module.exports = {
  async afterCreate(event) {
    const { result } = event;
    console.log(strapi.plugins["email"]);

    try {
      const emailRes = await strapi.plugins["email"].services.email.send({
        to: "ashishtwr314@gmail.com",
        from: "business@rentokstudio.in",
        subject: "The Strapi Email plugin worked successfully",
        text: "sdFsdfsfsf",
        html: "Hello world!",
      });
      console.log("EMAIL", emailRes);
    } catch (err) {
      console.log("ERR", err);
    }
  },
};
