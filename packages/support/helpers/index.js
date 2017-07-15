'use strict';

/**
 * Expose helpers
 */
const arrayToJSON = require('./array-to-json');
const convertKeys = require('./convert-keys');
const deepClone = require('./deep-clone');
const mergeData = require('./merge-data');
const toCamelCase = require('./to-camel-case');
const toSnakeCase = require('./to-snake-case');
const wrapSubstitutions = require('./wrap-substitutions');

/**
 * Export
 */
module.exports = {
  arrayToJSON,
  convertKeys,
  deepClone,
  mergeData,
  toCamelCase,
  toSnakeCase,
  wrapSubstitutions,
};
