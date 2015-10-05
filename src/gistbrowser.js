/*
 * jQuery Gist Browser
 *
 * Copyright (c) 2015 Chris Vogt
 * Licensed under the MIT license.
 */
(function ($) {
  $.fn.GistBrowser = function (username) {
    return this.each(function (i) {
      var username = extractData('username', this),
      	  query    = buildQuery(username);

      /**
       * "Hold on to your butts," 
       */
      makeCall(query, this);

      /**
       * Extract data attributes in the form of `data-gist-*`.
       *
       * @param {string}
       * @param {Object}
       */
      function extractData(field, e) {
      	return $(e).attr('data-gist-' + field)
      }

      /**
       * Builds the query string.
       *
       * @param {string}
       */
	  function buildQuery(u) {
	  	var tpl = "https://api.github.com/users/" + u + "/gists";
	  	return tpl;
	  }

	  /**
	   * Makes the AJAX call.
	   *
	   * @param {string}
	   * @param {Object}
	   */
	  function makeCall(q, e) {
		  return $.ajax({
		      // url: q,
		      url: "_mock.json",
		      success: function(data) {
		      	var html = $(e).empty(),
		      		gists = data,
		      		files = [];

		      	for (var i = 0; i < gists.length; i++) {
		      		var gist = gists[i];

					$.each(gist['files'], function(k, v) {
					    files.push(v);
					});
		      	}

		      	$(e).append($("<ul>", {id: "files"}));

		      	for (var i = 0; i < files.length; i++) {
		      		var file = files[i];
		      		console.log(file);
		      		$("#files").append($("<li><span class=\"octicon octicon-gist\"></span> " + file['filename'] + "</li>", file));
		      	}

		      }
		  });
	  }
    });
  };
}(jQuery));
