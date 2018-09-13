const ghpages = require('gh-pages');

ghpages.publish('build', {
    user: {
        name: 'CircleCI',
        email: 'circle@ci.com'
    }
}, function(err) {
    console.error(err);
});
