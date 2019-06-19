;(function(){
	'use strict'
	const markdownSourceElement = document.querySelector('#markdowm-source')
	const markdownResultElement = document.querySelector('#markdown-result')

	markdownSourceElement.addEventListener('keyup', function(){
		const result = marked(markdownSourceElement.value)
		markdownResultElement.innerHTML = result

	})	
})();