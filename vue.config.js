module.exports = {
	publicPath: '',
	devServer: {
		host: 'localhost',
		port: 8080,
		proxy: {
			'/mock': {
				target: 'http://localhost:8080',
				ws: false,
				// 将主机头的源点改为目标的url
				changeOrigin: false
			}
		}
	}
}