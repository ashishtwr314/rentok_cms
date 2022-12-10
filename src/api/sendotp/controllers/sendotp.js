"use strict";

const otpgenerator = require("otp-generator");
/**
 * A set of functions called "actions" for `sendotp`
 */

const OTP_MAP = {};
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

      ctx.body = {
        data: OTP_MAP[mobileNum],
        error: false,
        message: "OTP sent Successfully",
      };
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
