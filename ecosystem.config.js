module.exports = {
  apps : [{
    name   : "landingpage",
    script : "serve",
    env: {
      PM2_SERVER_PATH: '.',
      PM2_SERVER_PORT: '8080',
      PM2_SERVE_HOMEPAGE: './index.html'
    }
  }]
}
