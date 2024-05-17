"use strict";

function cov_1bk06j7yb4() {
  var path = "/Users/softcore/Downloads/canim-ecommerce-master 2/server/models/product.model.js";
  var hash = "95124d16148d393b787af7249461e8aa0ede3e67";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/softcore/Downloads/canim-ecommerce-master 2/server/models/product.model.js",
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
          line: 19,
          column: 18
        },
        end: {
          line: 19,
          column: 38
        }
      },
      "3": {
        start: {
          line: 22,
          column: 22
        },
        end: {
          line: 165,
          column: 1
        }
      },
      "4": {
        start: {
          line: 74,
          column: 10
        },
        end: {
          line: 74,
          column: 35
        }
      },
      "5": {
        start: {
          line: 168,
          column: 16
        },
        end: {
          line: 168,
          column: 56
        }
      },
      "6": {
        start: {
          line: 171,
          column: 0
        },
        end: {
          line: 171,
          column: 25
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 73,
            column: 19
          },
          end: {
            line: 73,
            column: 20
          }
        },
        loc: {
          start: {
            line: 73,
            column: 36
          },
          end: {
            line: 75,
            column: 9
          }
        },
        line: 73
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "95124d16148d393b787af7249461e8aa0ede3e67"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1bk06j7yb4 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1bk06j7yb4();
/**
 * Title: Write a program using JavaScript on Product
 * Author: Hasibul Islam
 * Portfolio: https://devhasibulislam.vercel.app
 * Linkedin: https://linkedin.com/in/devhasibulislam
 * GitHub: https://github.com/devhasibulislam
 * Facebook: https://facebook.com/devhasibulislam
 * Instagram: https://instagram.com/devhasibulislam
 * Twitter: https://twitter.com/devhasibulislam
 * Pinterest: https://pinterest.com/devhasibulislam
 * WhatsApp: https://wa.me/8801906315901
 * Telegram: devhasibulislam
 * Date: 10, November 2023
 */

/* external imports */
var mongoose = (cov_1bk06j7yb4().s[0]++, require("mongoose"));
var _ref = (cov_1bk06j7yb4().s[1]++, mongoose.Schema.Types),
  ObjectId = _ref.ObjectId;
var validator = (cov_1bk06j7yb4().s[2]++, require("validator"));

/* create product schema */
var productSchema = (cov_1bk06j7yb4().s[3]++, new mongoose.Schema({
  // for title
  title: {
    type: String,
    required: [true, "Please, provide a product title"],
    trim: true,
    unique: [true, "Same product already exists"],
    maxLength: [100, "Your title would be at most 100 characters"]
  },
  // for summary
  summary: {
    type: String,
    required: [true, "Please, provide product summary"],
    trim: true,
    maxLength: [500, "Your summary would be at most 500 characters"]
  },
  // for thumbnail
  thumbnail: {
    url: {
      type: String,
      validate: [validator.isURL, "Please provide a valid thumbnail URL"],
      "default": "https://placehold.co/296x200.png"
    },
    public_id: {
      type: String,
      "default": "N/A"
    }
  },
  // for gallery
  gallery: {
    type: [{
      url: {
        type: String,
        "default": "https://placehold.co/296x200.png",
        validate: [validator.isURL, "Please, provide a valid garry photo URL"]
      },
      public_id: {
        type: String,
        "default": "N/A"
      }
    }],
    validate: {
      validator: function validator(value) {
        cov_1bk06j7yb4().f[0]++;
        cov_1bk06j7yb4().s[4]++;
        return value.length <= 5;
      },
      message: "Won't able to add more than 5 gallery"
    }
  },
  // for feature
  features: [{
    title: {
      type: String,
      required: [true, "Please, provide a feature title"],
      maxLength: [100, "Your title would be at most 100 characters"]
    },
    content: {
      type: [String],
      required: [true, "Please, provide a feature content"],
      maxLength: [200, "Your content would be at most 200 characters"]
    }
  }],
  // for variations
  variations: {
    colors: [String],
    sizes: [String]
  },
  // for campaigns
  campaign: {
    title: {
      type: String,
      required: [true, "Please, provide a campaign title"]
    },
    state: {
      type: String,
      required: [true, "Please, provide a campaign state"],
      "enum": ["new-arrival", "discount", "sold-out", "on-sale"]
    }
  },
  // for price
  price: {
    type: Number,
    required: [true, "Please, provide a product price"]
  },
  // for category
  category: {
    type: ObjectId,
    ref: "Category"
  },
  // for brand
  brand: {
    type: ObjectId,
    ref: "Brand"
  },
  // for store
  store: {
    type: ObjectId,
    ref: "Store"
  },
  // for buyers
  buyers: [{
    type: ObjectId,
    ref: "User"
  }],
  // for reviews
  reviews: [{
    type: ObjectId,
    ref: "Review"
  }],
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

/* create product schema */
var Product = (cov_1bk06j7yb4().s[5]++, mongoose.model("Product", productSchema));

/* export product schema */
cov_1bk06j7yb4().s[6]++;
module.exports = Product;