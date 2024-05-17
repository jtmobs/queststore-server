"use strict";

function cov_18fsah58na() {
  var path = "/Users/softcore/Downloads/canim-ecommerce-master 2/server/middleware/error.middleware.js";
  var hash = "4c2f6f3463ec30388f221f004ccd6357b1badd0e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/softcore/Downloads/canim-ecommerce-master 2/server/middleware/error.middleware.js",
    statementMap: {
      "0": {
        start: {
          line: 17,
          column: 2
        },
        end: {
          line: 21,
          column: 5
        }
      },
      "1": {
        start: {
          line: 24,
          column: 0
        },
        end: {
          line: 24,
          column: 23
        }
      }
    },
    fnMap: {
      "0": {
        name: "error",
        decl: {
          start: {
            line: 16,
            column: 9
          },
          end: {
            line: 16,
            column: 14
          }
        },
        loc: {
          start: {
            line: 16,
            column: 28
          },
          end: {
            line: 22,
            column: 1
          }
        },
        line: 16
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "4c2f6f3463ec30388f221f004ccd6357b1badd0e"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_18fsah58na = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_18fsah58na();
/**
 * Title: Write a program using JavaScript on Error Middleware
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
 * Date: 09, November 2023
 */

function error(err, _, res) {
  cov_18fsah58na().f[0]++;
  cov_18fsah58na().s[0]++;
  res.send({
    acknowledgement: false,
    message: err.name,
    description: err.message
  });
}
cov_18fsah58na().s[1]++;
module.exports = error;