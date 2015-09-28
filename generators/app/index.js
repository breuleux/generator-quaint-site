'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the primo ' + chalk.red('quaint site') + ' generator!'
    ));

    var prompts = [
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?',
            default: "",
            store: true
        },
        {
            type: 'input',
            name: 'name',
            message: 'Give a name for the package.',
            default: "awesome-blog",
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe the site.',
            default: "whatever",
        },
        {
            type: 'input',
            name: 'hostname',
            message: 'What is the hostname?',
            default: "",
            store: true
        },
        {
            type: 'input',
            name: 'root',
            message: 'What is the site root?',
            default: "/",
        },
        {
            type: 'input',
            name: 'author',
            message: 'Your name.',
            default: "bobibob",
            store: true
        },
        {
            type: 'input',
            name: 'defaultLanguage',
            message: 'Default language for highlighting.',
            default: "earlgrey",
            store: true
        },
        {
            type: 'input',
            name: 'port',
            message: 'What port should be used for the test server?',
            default: 3000,
            store: true
        },
    ];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
        var files = {
            "_package.json": "package.json",
            "_gitignore": ".gitignore",
            "gulpfile.eg": true,
            "gulpfile.js": true,
            "template/boilerplate.q": true,
            "template/default.q": true,
            "template/nav.q": true,
            "content/article.q": true,
            "content/index.iq": true,
            "content/style/style.sass": true,
            "content/style/_nav.sass": true,
            "content/style/_util.sass": true,
            "content/lib/config.js": true,
            "content/lib/toc-scroll.js": true,
            "content/lib/hello.js": true,
            "content/lib/bonjour.eg": true,
        }
        var entry = null;
        for (entry in files) {
            var d = files[entry];
            d = typeof d === "string" ? d : entry;
            this.fs.copyTpl(
                this.templatePath(entry),
                this.destinationPath(d),
                this.props
            );
        }
    },

    projectfiles: function () {
    }
  },

  install: function () {
    this.installDependencies();
  }
});
