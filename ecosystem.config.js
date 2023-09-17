module.exports = {
  apps: [{
    name: "skeleton",
    script: "./node_modules/nuxt/bin/nuxt.js",
    args: "start",
    watch: false,
    instances: 4,
    exec_mode: "cluster",
    env: {
      "PORT": 3000,
      "NODE_ENV": "development"
    },
    env_staging: {
      "PORT": 3000,
      "NODE_ENV": "staging"
    },
    env_production: {
      "PORT": 3000,
      "NODE_ENV": "production"
    }
  }]
}