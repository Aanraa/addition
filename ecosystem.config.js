module.exports = {
  apps: [
    {
      name: "project_one_front_end",
      script: "npm run dev",
      // args: "start",
    },
  ],
  deploy: {
    development: {
      user: "program",
      host: "10.0.19.116",
      key: "~/.ssh/newkey",
      ref: "origin/dev",
      repo: "git@gitlab.nomin.mn:purevbadar.d/project-one.git",
      path: "/home/program/project-one",
      "pre-deploy-local": "",
      "post-setup": "npm install && npm run build",
      "post-deploy":
        "cd /home/program/project-one/source/ && pm2 startOrRestart ecosystem.config.js",
      "pre-setup": "rm -rf /home/program/project-one/*",
    },
  },
};
