
// Configure Router
riot.route.base('/');
riot.route.start(true);

// Mount a tag as a main view
function blog_set_view(view, opts) {
  riot.mount('#view', view, opts);
}

// Home
riot.route('/', function(){
  blog_set_view('blog-roll');
});

// Single Blog Post
riot.route('/*', function(url){
  blog_set_view('post', {post:url});
});