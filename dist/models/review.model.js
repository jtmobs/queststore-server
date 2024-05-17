"use strict";

function cov_1b090xl0r1() {
  var path = "/Users/softcore/Downloads/canim-ecommerce-master 2/server/models/review.model.js";
  var hash = "780a8249a55908d87c314f30ecf845220d858070";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/softcore/Downloads/canim-ecommerce-master 2/server/models/review.model.js",
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
          column: 21
        },
        end: {
          line: 61,
          column: 1
        }
      },
      "3": {
        start: {
          line: 64,
          column: 15
        },
        end: {
          line: 64,
          column: 53
        }
      },
      "4": {
        start: {
          line: 67,
          column: 0
        },
        end: {
          line: 67,
          column: 24
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
    hash: "780a8249a55908d87c314f30ecf845220d858070"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1b090xl0r1 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1b090xl0r1();
/**
 * Title: Write a program using JavaScript on Review Model
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
var mongoose = (cov_1b090xl0r1().s[0]++, require("mongoose"));
var _ref = (cov_1b090xl0r1().s[1]++, mongoose.Schema.Types),
  ObjectId = _ref.ObjectId;

/* create review schema */
var reviewSchema = (cov_1b090xl0r1().s[2]++, new mongoose.Schema({
  // for reviewer
  reviewer: {
    type: ObjectId,
    ref: "User"
  },
  // for product
  product: {
    type: ObjectId,
    ref: "Product"
  },
  // for rating
  rating: {
    type: Number,
    required: [true, "Please, provide a rating"],
    min: 1,
    max: 5
  },
  // for comment
  comment: {
    type: String,
    required: [true, "Please, provide a comment"],
    maxLength: [200, "Your comment should be at most 200 characters"]
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

/* create review model */
var Review = (cov_1b090xl0r1().s[3]++, mongoose.model("Review", reviewSchema));

/* export Review model */
cov_1b090xl0r1().s[4]++;
module.exports = Review;