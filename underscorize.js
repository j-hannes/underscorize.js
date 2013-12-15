(function() {
  'use strict';

  var _ = require('underscore');

  Array.prototype.drop = function(n) {return _.drop(this, 2);};
  Array.prototype.each = function(f) {return _.each(this, f);};
  Array.prototype.last = function() {return _.last(this);};
}());
