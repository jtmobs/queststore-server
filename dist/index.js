"use strict";

function cov_2p1umajzon() {
  var path = "/Users/softcore/Downloads/canim-ecommerce-master 2/server/index.js";
  var hash = "1c1acb7f438229fe38e35a6f769788a0ead1d58e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/softcore/Downloads/canim-ecommerce-master 2/server/index.js",
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
          column: 0
        },
        end: {
          line: 18,
          column: 27
        }
      },
      "2": {
        start: {
          line: 21,
          column: 12
        },
        end: {
          line: 21,
          column: 28
        }
      },
      "3": {
        start: {
          line: 22,
          column: 23
        },
        end: {
          line: 22,
          column: 54
        }
      },
      "4": {
        start: {
          line: 23,
          column: 13
        },
        end: {
          line: 23,
          column: 37
        }
      },
      "5": {
        start: {
          line: 26,
          column: 0
        },
        end: {
          line: 32,
          column: 64
        }
      },
      "6": {
        start: {
          line: 31,
          column: 14
        },
        end: {
          line: 31,
          column: 68
        }
      },
      "7": {
        start: {
          line: 32,
          column: 20
        },
        end: {
          line: 32,
          column: 62
        }
      },
      "8": {
        start: {
          line: 35,
          column: 0
        },
        end: {
          line: 37,
          column: 3
        }
      },
      "9": {
        start: {
          line: 36,
          column: 2
        },
        end: {
          line: 36,
          column: 70
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 31,
            column: 8
          },
          end: {
            line: 31,
            column: 9
          }
        },
        loc: {
          start: {
            line: 31,
            column: 14
          },
          end: {
            line: 31,
            column: 68
          }
        },
        line: 31
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 32,
            column: 9
          },
          end: {
            line: 32,
            column: 10
          }
        },
        loc: {
          start: {
            line: 32,
            column: 20
          },
          end: {
            line: 32,
            column: 62
          }
        },
        line: 32
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 35,
            column: 17
          },
          end: {
            line: 35,
            column: 18
          }
        },
        loc: {
          start: {
            line: 35,
            column: 23
          },
          end: {
            line: 37,
            column: 1
          }
        },
        line: 35
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 23,
            column: 13
          },
          end: {
            line: 23,
            column: 37
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 23,
            column: 13
          },
          end: {
            line: 23,
            column: 29
          }
        }, {
          start: {
            line: 23,
            column: 33
          },
          end: {
            line: 23,
            column: 37
          }
        }],
        line: 23
      }
    },
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
      "9": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "1c1acb7f438229fe38e35a6f769788a0ead1d58e"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2p1umajzon = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2p1umajzon();
/**
 * Title: Write a program using JavaScript on Index
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
 * Date: 09, November 2023
 */

/* external imports */
var mongoose = (cov_2p1umajzon().s[0]++, require("mongoose"));
cov_2p1umajzon().s[1]++;
require("dotenv").config();

/* internal imports */
var app = (cov_2p1umajzon().s[2]++, require("./app"));
var consoleMessage = (cov_2p1umajzon().s[3]++, require("./utils/console.util"));
var port = (cov_2p1umajzon().s[4]++, (cov_2p1umajzon().b[0][0]++, process.env.PORT) || (cov_2p1umajzon().b[0][1]++, 3000));

/* database connection */
cov_2p1umajzon().s[5]++;
mongoose.connect(process.env.ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  cov_2p1umajzon().f[0]++;
  cov_2p1umajzon().s[6]++;
  return consoleMessage.successMessage("Connected to MongoDB.");
})["catch"](function (error) {
  cov_2p1umajzon().f[1]++;
  cov_2p1umajzon().s[7]++;
  return consoleMessage.errorMessage(error.message);
});

/* establish server port */
cov_2p1umajzon().s[8]++;
app.listen(port, function () {
  cov_2p1umajzon().f[2]++;
  cov_2p1umajzon().s[9]++;
  consoleMessage.warningMessage("Server is running on port ".concat(port, "."));
});