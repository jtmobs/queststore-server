"use strict";

function cov_2mlu8yzkjp() {
  var path = "/Users/softcore/Downloads/canim-ecommerce-master 2/server/models/purchase.model.js";
  var hash = "f9219854858d93a5747acf3f46433be0baa38ad6";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/softcore/Downloads/canim-ecommerce-master 2/server/models/purchase.model.js",
    statementMap: {
      "0": {
        start: {
          line: 17,
          column: 17
        },
        end: {
          line: 17,
          column: 36
        }
      },
      "1": {
        start: {
          line: 18,
          column: 21
        },
        end: {
          line: 18,
          column: 42
        }
      },
      "2": {
        start: {
          line: 21,
          column: 23
        },
        end: {
          line: 80,
          column: 1
        }
      },
      "3": {
        start: {
          line: 83,
          column: 17
        },
        end: {
          line: 83,
          column: 59
        }
      },
      "4": {
        start: {
          line: 86,
          column: 0
        },
        end: {
          line: 86,
          column: 26
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "f9219854858d93a5747acf3f46433be0baa38ad6"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2mlu8yzkjp = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2mlu8yzkjp();
/**
 * Title: Write a program using JavaScript on Purchase Model
 * Author: Hasibul Islam
 * Portfolio: https://devhasibulislam.vercel.app
 * Linkedin: https://linkedin.com/in/devhasibulislam
 * GitHub: https://github.com/devhasibulislam
 * Facebook: https://facebook.com/devhasibulislam
 * Instagram: https:/instagram.com/devhasibulislam
 * Twitter: https://twitter.com/devhasibulislam
 * Pinterest: https://pinterest.com/devhasibulislam
 * WhatsApp: https://wa.me/8801906315901
 * Telegram: devhasibulislam
 * Date: 09, January 2024
 */

/* external imports */
var mongoose = (cov_2mlu8yzkjp().s[0]++, require("mongoose"));
var _ref = (cov_2mlu8yzkjp().s[1]++, mongoose.Schema.Types),
  ObjectId = _ref.ObjectId;

/* create purchase schema */
var purchaseSchema = (cov_2mlu8yzkjp().s[2]++, new mongoose.Schema({
  // for customer
  customer: {
    type: ObjectId,
    ref: "User"
  },
  // for products
  products: [{
    product: {
      type: ObjectId,
      ref: "Product"
    },
    quantity: {
      type: Number,
      "default": 1
    }
  }],
  // for customer ID
  customerId: {
    type: String,
    required: true
  },
  // for order ID
  orderId: {
    type: String,
    required: true
  },
  // for total amount
  totalAmount: {
    type: Number,
    required: true
  },
  // order status
  status: {
    type: String,
    "enum": ["pending", "delivered"],
    "default": "pending"
  },
  // for user account time stamps
  createdAt: {
    type: Date,
    "default": Date.now
  },
  updatedAt: {
    type: Date,
    "default": Date.now
  }
}, {
  timestamps: true
}));

/* create purchase model */
var Purchase = (cov_2mlu8yzkjp().s[3]++, mongoose.model("Purchase", purchaseSchema));

/* export purchase model */
cov_2mlu8yzkjp().s[4]++;
module.exports = Purchase;