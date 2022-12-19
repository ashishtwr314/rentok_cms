"use strict";

const order = require("../../order/controllers/order");
const dayjs = require("dayjs");

/**
 * product controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::product.product", ({ strapi }) => ({
  async find(ctx) {
    const { data, meta } = await super.find(ctx);

    // const orderEntity = await strapi
    //   .service("api::order.order", {
    //     populate: "*",
    //   })
    //   .find();

    const orderEntity = await strapi.entityService.findMany(
      "api::order.order",
      {
        populate: ["product"],
      }
    );

    const orders = await this.sanitizeOutput(orderEntity, ctx);
    let products = data;
    const today = new Date();

    orders.forEach((order) => {
      products.forEach((product) => {
        if (product.id === order.product.id) {
          let minutesLeft = dayjs(order.endDate).diff(dayjs(), "minutes");
          if (minutesLeft) {
            product.attributes["activeOrder"] = minutesLeft;
          }
        }
      });
    });

    return { data: products, meta };
  },
}));
