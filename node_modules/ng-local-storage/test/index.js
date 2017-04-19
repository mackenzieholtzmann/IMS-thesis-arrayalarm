'use strict';

// Jasmine, Chai and Angular Mocks will be global

var expect = window.chai.expect;

describe('ng-local-storage', function () {
  var $localStorage, $timeout;

  beforeEach(window.module('ngLocalStorage'));
  beforeEach(window.inject(function (_$localStorage_, _$timeout_) {
    $timeout = _$timeout_;
    $localStorage = _$localStorage_;
  }));

  afterEach(function () {
    window.localStorage.clear();
  });

  describe('#set', function () {
    it('Should store a string in window.localStorage', function (done) {
      var ls = $localStorage.getAdapter();

      ls.set('testkey', 'testval')
        .then(function () {
          var storedVal = window.localStorage.getItem('testkey');
          expect(storedVal).to.equal('testval');
          done();
        }, done);

      // Tell timeout to run
      $timeout.flush();
    });
  });

});
