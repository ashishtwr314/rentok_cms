module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: "smtpout.secureserver.net",
        port: 465,
        auth: {
          user: "rentok.studio@gmail.in",
          pass: "rentokstudio.123",
        },
      },
      settings: {
        defaultFrom: "business@rentokstudio.in",
        defaultReplyTo: "business@rentokstudio.in",
      },
    },
  },
});
