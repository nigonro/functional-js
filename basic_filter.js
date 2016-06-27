'use strict';

function getShortMessages(arr) {
  return arr.filter(obj => {
    return obj.message.length < 50;
  }).map(obj => {
    return obj.message
  });
}

module.exports = getShortMessages;
