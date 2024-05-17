"use strict";

function cov_rgs3imaoj() {
  var path = "/Users/softcore/Downloads/canim-ecommerce-master 2/server/middleware/authorize.middleware.js";
  var hash = "a340093cdb27f295fe78208e2859f5ade375afc8";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/softcore/Downloads/canim-ecommerce-master 2/server/middleware/authorize.middleware.js",
    statementMap: {
      "0": {
        start: {
          line: 17,
          column: 2
        },
        end: {
          line: 31,
          column: 4
        }
      },
      "1": {
        start: {
          line: 19,
          column: 21
        },
        end: {
          line: 19,
          column: 34
        }
      },
      "2": {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 28,
          column: 5
        }
      },
      "3": {
        start: {
          line: 23,
          column: 6
        },
        end: {
          line: 27,
          column: 9
        }
      },
      "4": {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 30,
          column: 11
        }
      },
      "5": {
        start: {
          line: 34,
          column: 0
        },
        end: {
          line: 34,
          column: 27
        }
      }
    },
    fnMap: {
      "0": {
        name: "authorize",
        decl: {
          start: {
            line: 16,
            column: 9
          },
          end: {
            line: 16,
            column: 18
          }
        },
        loc: {
          start: {
            line: 16,
            column: 28
          },
          end: {
            line: 32,
            column: 1
          }
        },
        line: 16
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 17,
            column: 9
          },
          end: {
            line: 17,
            column: 10
          }
        },
        loc: {
          start: {
            line: 17,
            column: 29
          },
          end: {
            line: 31,
            column: 3
          }
        },
        line: 17
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 22,
            column: 4
          },
          end: {
            line: 28,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 22,
            column: 4
          },
          end: {
            line: 28,
            column: 5
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 22
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "a340093cdb27f295fe78208e2859f5ade375afc8"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_rgs3imaoj = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_rgs3imaoj();
/**
 * Title: Write a program using JavaScript on Authorize Middleware
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
 * Date: 20, November 2023
 */

function authorize() {
  for (var _len = arguments.length, role = new Array(_len), _key = 0; _key < _len; _key++) {
    role[_key] = arguments[_key];
  }
  cov_rgs3imaoj().f[0]++;
  cov_rgs3imaoj().s[0]++;
  return function (req, res, next) {
    cov_rgs3imaoj().f[1]++;
    // catch & match the user role
    var userRole = (cov_rgs3imaoj().s[1]++, req.user.role);

    // revoke access based on role
    cov_rgs3imaoj().s[2]++;
    if (!role.includes(userRole)) {
      cov_rgs3imaoj().b[0][0]++;
      cov_rgs3imaoj().s[3]++;
      return res.status(403).json({
        acknowledgement: false,
        message: "Forbidden",
        description: "You're not applicable to access this page and features"
      });
    } else {
      cov_rgs3imaoj().b[0][1]++;
    }
    cov_rgs3imaoj().s[4]++;
    next();
  };
}
cov_rgs3imaoj().s[5]++;
module.exports = authorize;