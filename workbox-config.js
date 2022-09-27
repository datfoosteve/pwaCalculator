module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{svg,png,css,html,js,json,md}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};