"use strict";

function cov_1adcxyjb93() {
  var path = "/Users/softcore/Downloads/canim-ecommerce-master 2/server/models/brand.model.js";
  var hash = "084dccd15638e99a043e0f434209ed5dd9464a89";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/softcore/Downloads/canim-ecommerce-master 2/server/models/brand.model.js",
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
          column: 18
        },
        end: {
          line: 18,
          column: 38
        }
      },
      "2": {
        start: {
          line: 19,
          column: 21
        },
        end: {
          line: 19,
          column: 42
        }
      },
      "3": {
        start: {
          line: 22,
          column: 20
        },
        end: {
          line: 96,
          column: 1
        }
      },
      "4": {
        start: {
          line: 99,
          column: 0
        },
        end: {
          line: 116,
          column: 3
        }
      },
      "5": {
        start: {
          line: 101,
          column: 17
        },
        end: {
          line: 101,
          column: 53
        }
      },
      "6": {
        start: {
          line: 102,
          column: 2
        },
        end: {
          line: 105,
          column: 3
        }
      },
      "7": {
        start: {
          line: 102,
          column: 15
        },
        end: {
          line: 102,
          column: 16
        }
      },
      "8": {
        start: {
          line: 103,
          column: 4
        },
        end: {
          line: 104,
          column: 69
        }
      },
      "9": {
        start: {
          line: 106,
          column: 2
        },
        end: {
          line: 106,
          column: 34
        }
      },
      "10": {
        start: {
          line: 109,
          column: 18
        },
        end: {
          line: 109,
          column: 20
        }
      },
      "11": {
        start: {
          line: 110,
          column: 2
        },
        end: {
          line: 112,
          column: 4
        }
      },
      "12": {
        start: {
          line: 111,
          column: 4
        },
        end: {
          line: 111,
          column: 54
        }
      },
      "13": {
        start: {
          line: 113,
          column: 2
        },
        end: {
          line: 113,
          column: 22
        }
      },
      "14": {
        start: {
          line: 115,
          column: 2
        },
        end: {
          line: 115,
          column: 9
        }
      },
      "15": {
        start: {
          line: 119,
          column: 14
        },
        end: {
          line: 119,
          column: 50
        }
      },
      "16": {
        start: {
          line: 122,
          column: 0
        },
        end: {
          line: 122,
          column: 23
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 99,
            column: 24
          },
          end: {
            line: 99,
            column: 25
          }
        },
        loc: {
          start: {
            line: 99,
            column: 40
          },
          end: {
            line: 116,
            column: 1
          }
        },
        line: 99
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 110,
            column: 20
          },
          end: {
            line: 110,
            column: 21
          }
        },
        loc: {
          start: {
            line: 111,
            column: 4
          },
          end: {
            line: 111,
            column: 54
          }
        },
        line: 111
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
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "084dccd15638e99a043e0f434209ed5dd9464a89"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1adcxyjb93 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1adcxyjb93();
/**
 * Title: Write a program using JavaScript on Brand
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
 * Date: 11, November 2023
 */

/* external imports */
var mongoose = (cov_1adcxyjb93().s[0]++, require("mongoose"));
var validator = (cov_1adcxyjb93().s[1]++, require("validator"));
var _ref = (cov_1adcxyjb93().s[2]++, mongoose.Schema.Types),
  ObjectId = _ref.ObjectId;

/* create brand schema */
var brandSchema = (cov_1adcxyjb93().s[3]++, new mongoose.Schema({
  // for title
  title: {
    type: String,
    required: [true, "Please, provide a valid brand name"],
    trim: true,
    uppercase: true,
    unique: [true, "Same brand already exists"],
    maxLength: [100, "Your title would be at most 100 characters"]
  },
  // for description
  description: {
    type: String,
    required: [true, "Please, provide brand description"],
    trim: true,
    maxLength: [500, "Your description would be at most 500 characters"]
  },
  // for logo
  logo: {
    url: {
      type: String,
      validate: [validator.isURL, "Please provide a valid logo URL"],
      "default": "https://placehold.co/296x200.png"
    },
    public_id: {
      type: String,
      "default": "N/A"
    }
  },
  // for products
  products: [{
    type: ObjectId,
    ref: "Product"
  }],
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
  // for creator
  creator: {
    type: ObjectId,
    ref: "User"
  },
  // for brand  time stamps
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

/* middleware for brand */
cov_1adcxyjb93().s[4]++;
brandSchema.pre("save", function (next) {
  var _this$title;
  cov_1adcxyjb93().f[0]++;
  // Capitalize title
  var splitStr = (cov_1adcxyjb93().s[5]++, (_this$title = this.title) === null || _this$title === void 0 ? void 0 : _this$title.toLowerCase().split(" "));
  cov_1adcxyjb93().s[6]++;
  for (var i = (cov_1adcxyjb93().s[7]++, 0); i < splitStr.length; i++) {
    cov_1adcxyjb93().s[8]++;
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  cov_1adcxyjb93().s[9]++;
  this.title = splitStr.join(" ");

  // replace space with hyphen and lowercase
  var newTags = (cov_1adcxyjb93().s[10]++, []);
  cov_1adcxyjb93().s[11]++;
  this.tags.forEach(function (tag) {
    var _tag$replace;
    cov_1adcxyjb93().f[1]++;
    cov_1adcxyjb93().s[12]++;
    return newTags.push((_tag$replace = tag.replace(" ", "-")) === null || _tag$replace === void 0 ? void 0 : _tag$replace.toLowerCase());
  });
  cov_1adcxyjb93().s[13]++;
  this.tags = newTags;
  cov_1adcxyjb93().s[14]++;
  next();
});

/* create brand model schema */
var Brand = (cov_1adcxyjb93().s[15]++, mongoose.model("Brand", brandSchema));

/* export brand schema */
cov_1adcxyjb93().s[16]++;
module.exports = Brand;