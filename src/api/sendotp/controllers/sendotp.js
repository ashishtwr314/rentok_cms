"use strict";

const otpgenerator = require("otp-generator");
const fetch = require("cross-fetch");
/**
 * A set of functions called "actions" for `sendotp`
 */

// const fetch = require("node-fetch");

const OTP_MAP = {};

const FAST_2_SMS_API_KEY =
  "6EJFzpmhXGMBlROAVjexuIft4S9cN2KZTU0b3g1Ldq8onCQ5sD6SfIYjQdi4szPN0bnwFkBaK7XpctMu";
module.exports = {
  send: async (ctx, next) => {
    try {
      const { mobileNum } = ctx.params;

      if (!mobileNum) {
        throw "Mobile Number Invalid";
      }

      const otp = otpgenerator.generate(4, {
        upperCaseAlphabets: false,
        specialChars: false,
        lowerCaseAlphabets: false,
      });

      OTP_MAP[mobileNum] = otp;

      let sendSMSRes = await fetch(
        `https://www.fast2sms.com/dev/bulkV2?authorization=${FAST_2_SMS_API_KEY}&message=Welcome to Rent.OK Here is your OTP: ${otp}&language=english&route=q&numbers=${mobileNum}`
      );

      const sendSMS = await sendSMSRes.json();
      console.log(sendSMS);

      if (sendSMS?.return) {
        ctx.body = {
          data: OTP_MAP[mobileNum],
          error: false,
          message: "OTP sent Successfully",
        };
      } else {
        ctx.body = {
          data: null,
          error: true,
          message: `Error sending OTP, Try again later, btw your OTP IS ${otp}`,
        };
      }
    } catch (err) {
      console.log(err);
      ctx.body = err;
    }
  },

  verify: async (ctx, next) => {
    try {
      const { mobileNum } = ctx.params;

      if (!mobileNum) {
        throw "Mobile Number Invalid";
      }
      const { otpFromUser } = ctx.request.body;

      if (OTP_MAP[mobileNum] === otpFromUser) {
        delete OTP_MAP[mobileNum];
        ctx.body = {
          data: true,
          error: false,
          message: "OTP verified Successfully",
        };
      } else {
        ctx.status = 400;
        throw {
          data: null,
          error: true,
          message: "Wrong OTP",
        };
      }
    } catch (err) {
      console.log(err);
      ctx.body = err;
    }
  },
};
