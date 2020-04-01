'use strict';

/**
 * Implement method shift
 */
function applyCustomShift() {
  [].__proto__.shift2 = function() {
    const items = this;
    const shiftItem = items[0];

    if (items.length > 0) {
      for (let i = 0; i < items.length; i++) {
        items[i] = items[i + 1];
      }
      items.length--;
    }

    return shiftItem;
  };
}

module.exports = applyCustomShift;
