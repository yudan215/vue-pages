module.exports = {
	baseUrl:'./',
	// devServer: {
	//   proxy: {
	//    '/api': {
	//     target: '<url>',
	//     ws: true,
	//     changeOrigin: true
	//    },
	//    '/foo': {
	//     target: '<other_url>'
	//    }
	//   }
	// },
	pages: {
		index: {
		  // entry for the page
		  entry: 'src/pages/index/main.js',
		  // the source template
		  template: 'public/index.html',
		  // output as dist/index.html
		  filename: 'index.html'
		},
		subpage: {
		  // entry for the page
		  entry: 'src/pages/subpage/main.js',
		  // the source template
		  template: 'public/subpage.html',
		  // output as dist/index.html
		  filename: 'subpage.html'
		},
	}
}

