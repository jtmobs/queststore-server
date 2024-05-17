"use strict";

function cov_2sin9z8zs() {
  var path = "/Users/softcore/Downloads/canim-ecommerce-master 2/server/models/favorite.model.js";
  var hash = "2b5a4b9a3d555f3a1abcfdf4965821c0058c987c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/softcore/Downloads/canim-ecommerce-master 2/server/models/favorite.model.js",
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
          line: 46,
          column: 1
        }
      },
      "3": {
        start: {
          line: 49,
          column: 17
        },
        end: {
          line: 49,
          column: 59
        }
      },
      "4": {
        start: {
          line: 52,
          column: 0
        },
        end: {
          line: 52,
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
    hash: "2b5a4b9a3d555f3a1abcfdf4965821c0058c987c"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2sin9z8zs = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2sin9z8zs();
/**
 * Title: Write a program using JavaScript on Favorite Model
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
var mongoose = (cov_2sin9z8zs().s[0]++, require("mongoose"));
var _ref = (cov_2sin9z8zs().s[1]++, mongoose.Schema.Types),
  ObjectId = _ref.ObjectId;

/* create favorite schema */
var favoriteSchema = (cov_2sin9z8zs().s[2]++, new mongoose.Schema({
  // for user
  user: {
    type: ObjectId,
    ref: "User"
  },
  // for product
  product: {
    type: ObjectId,
    ref: "Product"
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

/* create favorite model */
var Favorite = (cov_2sin9z8zs().s[3]++, mongoose.model("Favorite", favoriteSchema));

/* export favorite model */
cov_2sin9z8zs().s[4]++;
module.exports = Favorite;