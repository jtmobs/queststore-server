"use strict";

function cov_3qatb5rdt() {
  var path = "/Users/softcore/Downloads/canim-ecommerce-master 2/server/models/store.model.js";
  var hash = "9e8d18736ea4c76a938d212fa52851d789f6cba9";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/softcore/Downloads/canim-ecommerce-master 2/server/models/store.model.js",
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
          column: 20
        },
        end: {
          line: 105,
          column: 1
        }
      },
      "4": {
        start: {
          line: 108,
          column: 0
        },
        end: {
          line: 117,
          column: 3
        }
      },
      "5": {
        start: {
          line: 110,
          column: 18
        },
        end: {
          line: 110,
          column: 20
        }
      },
      "6": {
        start: {
          line: 111,
          column: 2
        },
        end: {
          line: 113,
          column: 4
        }
      },
      "7": {
        start: {
          line: 112,
          column: 4
        },
        end: {
          line: 112,
          column: 54
        }
      },
      "8": {
        start: {
          line: 114,
          column: 2
        },
        end: {
          line: 114,
          column: 22
        }
      },
      "9": {
        start: {
          line: 116,
          column: 2
        },
        end: {
          line: 116,
          column: 9
        }
      },
      "10": {
        start: {
          line: 120,
          column: 14
        },
        end: {
          line: 120,
          column: 50
        }
      },
      "11": {
        start: {
          line: 123,
          column: 0
        },
        end: {
          line: 123,
          column: 23
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 108,
            column: 24
          },
          end: {
            line: 108,
            column: 25
          }
        },
        loc: {
          start: {
            line: 108,
            column: 40
          },
          end: {
            line: 117,
            column: 1
          }
        },
        line: 108
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 111,
            column: 20
          },
          end: {
            line: 111,
            column: 21
          }
        },
        loc: {
          start: {
            line: 112,
            column: 4
          },
          end: {
            line: 112,
            column: 54
          }
        },
        line: 112
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
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "9e8d18736ea4c76a938d212fa52851d789f6cba9"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_3qatb5rdt = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_3qatb5rdt();
/**
 * Title: Write a program using JavaScript on Store Model
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
 * Date: 11, November 2023
 */

/* external imports */
var mongoose = (cov_3qatb5rdt().s[0]++, require("mongoose"));
var _ref = (cov_3qatb5rdt().s[1]++, mongoose.Schema.Types),
  ObjectId = _ref.ObjectId;
var validator = (cov_3qatb5rdt().s[2]++, require("validator"));

/* create store schema */
var storeSchema = (cov_3qatb5rdt().s[3]++, new mongoose.Schema({
  // for title
  title: {
    type: String,
    required: [true, "Please, provide a valid store name"],
    trim: true,
    unique: [true, "Same store already exists"],
    maxLength: [100, "Your title would be at most 100 characters"]
  },
  // for description
  description: {
    type: String,
    required: [true, "Please, provide store description"],
    trim: true,
    maxLength: [500, "Your description would be at most 500 characters"]
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
  // for owner
  owner: {
    type: ObjectId,
    ref: "User"
  },
  // for products
  products: [{
    type: ObjectId,
    ref: "Product"
  }],
  // for status
  status: {
    type: String,
    "enum": {
      values: ["active", "inactive"],
      message: "Invalid status, choose active/inactive"
    },
    "default": "active"
  },
  // for keynotes
  keynotes: [{
    type: String,
    trim: true
  }],
  // for tags
  tags: [{
    type: String,
    trim: true
  }],
  // for category  time stamps
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

/* middleware for store */
cov_3qatb5rdt().s[4]++;
storeSchema.pre("save", function (next) {
  cov_3qatb5rdt().f[0]++;
  // replace space with hyphen and lowercase
  var newTags = (cov_3qatb5rdt().s[5]++, []);
  cov_3qatb5rdt().s[6]++;
  this.tags.forEach(function (tag) {
    var _tag$replace;
    cov_3qatb5rdt().f[1]++;
    cov_3qatb5rdt().s[7]++;
    return newTags.push((_tag$replace = tag.replace(" ", "-")) === null || _tag$replace === void 0 ? void 0 : _tag$replace.toLowerCase());
  });
  cov_3qatb5rdt().s[8]++;
  this.tags = newTags;
  cov_3qatb5rdt().s[9]++;
  next();
});

/* create store schema model */
var Store = (cov_3qatb5rdt().s[10]++, mongoose.model("Store", storeSchema));

/* export store schema */
cov_3qatb5rdt().s[11]++;
module.exports = Store;