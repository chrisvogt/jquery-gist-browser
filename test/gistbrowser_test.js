(function ($) {
  module('jQuery#GistBrowser', {
    setup: function () {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('is chainable', function () {
    expect(1);
    strictEqual(this.elems.GistBrowser(), this.elems, 'should be chainable');
  });

  test('is GistBrowser', function () {
    expect(1);
    strictEqual(this.elems.GistBrowser().text(), 'GistBrowser0GistBrowser1GistBrowser2', 'should be GistBrowser');
  });

}(jQuery));
