"use strict";

function cov_173fedmsdn() {
  var path = "/Users/softcore/Downloads/canim-ecommerce-master 2/server/models/cart.model.js";
  var hash = "76b182ac99d65ad23ae8743703e5287dee407a94";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/softcore/Downloads/canim-ecommerce-master 2/server/models/cart.model.js",
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
          column: 19
        },
        end: {
          line: 52,
          column: 1
        }
      },
      "3": {
        start: {
          line: 55,
          column: 13
        },
        end: {
          line: 55,
          column: 47
        }
      },
      "4": {
        start: {
          line: 58,
          column: 0
        },
        end: {
          line: 58,
          column: 22
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
    hash: "76b182ac99d65ad23ae8743703e5287dee407a94"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_173fedmsdn = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_173fedmsdn();
/**
 * Title: Write a program using JavaScript on Cart Model
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
var mongoose = (cov_173fedmsdn().s[0]++, require("mongoose"));
var _ref = (cov_173fedmsdn().s[1]++, mongoose.Schema.Types),
  ObjectId = _ref.ObjectId;

/* create cart schema */
var cartSchema = (cov_173fedmsdn().s[2]++, new mongoose.Schema({
  // for product
  product: {
    type: ObjectId,
    ref: "Product"
  },
  // for user
  user: {
    type: ObjectId,
    ref: "User"
  },
  // for quantity
  quantity: {
    type: Number,
    "default": 1
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

/* create cart schema */
var Cart = (cov_173fedmsdn().s[3]++, mongoose.model("Cart", cartSchema));

/* export cart schema */
cov_173fedmsdn().s[4]++;
module.exports = Cart;