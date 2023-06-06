"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNewExpirationTime = getNewExpirationTime;
exports.generateId = generateId;

function getNewExpirationTime() {
  return Date.now() + 15 * 1000;
}

var nextId = 0;

function generateId() {
  var result = nextId;
  nextId += 1;
  return result;
}
//# sourceMappingURL=utilities.dev.js.map
