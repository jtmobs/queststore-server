"use strict";

function cov_1lh67jnt5x() {
  var path = "/Users/softcore/Downloads/canim-ecommerce-master 2/server/models/category.model.js";
  var hash = "75a04d32e9806bf3316b08d6b757ae3b628244b9";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/softcore/Downloads/canim-ecommerce-master 2/server/models/category.model.js",
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
          column: 23
        },
        end: {
          line: 95,
          column: 1
        }
      },
      "4": {
        start: {
          line: 98,
          column: 0
        },
        end: {
          line: 115,
          column: 3
        }
      },
      "5": {
        start: {
          line: 100,
          column: 17
        },
        end: {
          line: 100,
          column: 53
        }
      },
      "6": {
        start: {
          line: 101,
          column: 2
        },
        end: {
          line: 104,
          column: 3
        }
      },
      "7": {
        start: {
          line: 101,
          column: 15
        },
        end: {
          line: 101,
          column: 16
        }
      },
      "8": {
        start: {
          line: 102,
          column: 4
        },
        end: {
          line: 103,
          column: 69
        }
      },
      "9": {
        start: {
          line: 105,
          column: 2
        },
        end: {
          line: 105,
          column: 34
        }
      },
      "10": {
        start: {
          line: 108,
          column: 18
        },
        end: {
          line: 108,
          column: 20
        }
      },
      "11": {
        start: {
          line: 109,
          column: 2
        },
        end: {
          line: 111,
          column: 4
        }
      },
      "12": {
        start: {
          line: 110,
          column: 4
        },
        end: {
          line: 110,
          column: 54
        }
      },
      "13": {
        start: {
          line: 112,
          column: 2
        },
        end: {
          line: 112,
          column: 22
        }
      },
      "14": {
        start: {
          line: 114,
          column: 2
        },
        end: {
          line: 114,
          column: 9
        }
      },
      "15": {
        start: {
          line: 118,
          column: 17
        },
        end: {
          line: 118,
          column: 59
        }
      },
      "16": {
        start: {
          line: 121,
          column: 0
        },
        end: {
          line: 121,
          column: 26
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 98,
            column: 27
          },
          end: {
            line: 98,
            column: 28
          }
        },
        loc: {
          start: {
            line: 98,
            column: 43
          },
          end: {
            line: 115,
            column: 1
          }
        },
        line: 98
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 109,
            column: 20
          },
          end: {
            line: 109,
            column: 21
          }
        },
        loc: {
          start: {
            line: 110,
            column: 4
          },
          end: {
            line: 110,
            column: 54
          }
        },
        line: 110
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
    hash: "75a04d32e9806bf3316b08d6b757ae3b628244b9"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1lh67jnt5x = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1lh67jnt5x();
/**
 * Title: Write a program using JavaScript on Category Model
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
var mongoose = (cov_1lh67jnt5x().s[0]++, require("mongoose"));
var validator = (cov_1lh67jnt5x().s[1]++, require("validator"));
var _ref = (cov_1lh67jnt5x().s[2]++, mongoose.Schema.Types),
  ObjectId = _ref.ObjectId;

/* create category schema */
var categorySchema = (cov_1lh67jnt5x().s[3]++, new mongoose.Schema({
  // for title
  title: {
    type: String,
    required: [true, "Please, provide a category name"],
    trim: true,
    unique: [true, "Same category already exists"],
    maxLength: [100, "Your title would be at most 100 characters"]
  },
  // for description
  description: {
    type: String,
    required: [true, "Please, provide category description"],
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
  // for products
  products: [{
    type: ObjectId,
    ref: "Product"
  }],
  // for creator
  creator: {
    type: ObjectId,
    ref: "User"
  },
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

/* middleware for category */
cov_1lh67jnt5x().s[4]++;
categorySchema.pre("save", function (next) {
  var _this$title;
  cov_1lh67jnt5x().f[0]++;
  // Capitalize title
  var splitStr = (cov_1lh67jnt5x().s[5]++, (_this$title = this.title) === null || _this$title === void 0 ? void 0 : _this$title.toLowerCase().split(" "));
  cov_1lh67jnt5x().s[6]++;
  for (var i = (cov_1lh67jnt5x().s[7]++, 0); i < splitStr.length; i++) {
    cov_1lh67jnt5x().s[8]++;
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  cov_1lh67jnt5x().s[9]++;
  this.title = splitStr.join(" ");

  // replace space with hyphen and lowercase
  var newTags = (cov_1lh67jnt5x().s[10]++, []);
  cov_1lh67jnt5x().s[11]++;
  this.tags.forEach(function (tag) {
    var _tag$replace;
    cov_1lh67jnt5x().f[1]++;
    cov_1lh67jnt5x().s[12]++;
    return newTags.push((_tag$replace = tag.replace(" ", "-")) === null || _tag$replace === void 0 ? void 0 : _tag$replace.toLowerCase());
  });
  cov_1lh67jnt5x().s[13]++;
  this.tags = newTags;
  cov_1lh67jnt5x().s[14]++;
  next();
});

/* create category model schema */
var Category = (cov_1lh67jnt5x().s[15]++, mongoose.model("Category", categorySchema));

/* export category schema */
cov_1lh67jnt5x().s[16]++;
module.exports = Category;