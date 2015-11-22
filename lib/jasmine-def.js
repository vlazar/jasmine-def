/**
 * jasmine-def: Lazy test subjects for Jasmine inspired by RSpec
 * Copyright (c) 2015 Vladislav Zarakovsky
 * MIT license https://github.com/vlazar/jasmine-def/blob/master/LICENSE
 */
(function (root) {
  /* global beforeEach, lade */

  function def (prop, value) {
    beforeEach(function () {
      lade(this, prop, value)
    })
  }

  function subject (value) {
    def('subject', value)
  }

  root.def = def
  root.subject = subject
})(this)
