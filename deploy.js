const ghpages = require('gh-pages');

ghpages.publish('dist', {
    user: {
        name: 'CircleCI',
        email: 'circle@ci.com'
    }
}, function(err) {});
