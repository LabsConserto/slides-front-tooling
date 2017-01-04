require('reveal.js/lib/js/head.min.js');
require('reveal.js/lib/js/classList.js');

// Styles
require('../scss/main.scss');

if (window.location.search.match( /print-pdf/gi )) {
	require('reveal.js/css/print/pdf.css');
} else {
	require('reveal.js/css/print/paper.css');
}

// Slides

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}
requireAll(require.context('raw!../public/slides', true));

window.Reveal = require('reveal.js');

require('highlight.js').initHighlightingOnLoad();
require('reveal.js/plugin/markdown/marked.js');
require('reveal.js/plugin/markdown/markdown.js');

Reveal.initialize({
	controls: true,
	progress: true,
	history: true,
	center: true,
	transition: 'slide', // none/fade/slide/convex/concave/zoom
	slideNumber: true
});

require.ensure([], function(require) {
  require('reveal.js/plugin/zoom-js/zoom.js');
	require('reveal.js/plugin/notes/notes.js');
	require('reveal.js/plugin/math/math.js');
});
