underscorize.js
===============

In place bindings of [underscore.js](http://underscorejs.org) to get rid of the
underscore.

Installation
------------

    npm install underscorize

Usage
-----

Instead of

    var _ = require('underscore');
  
    var args = _.drop(process.argv, 2);

use

    require('underscorize');

    var args = process.argv.drop(2);

etc. pp.

