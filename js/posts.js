// Posts Mixin
riot.mixin({
    init: function() {
        this.posts = [];
        this.posts[0] = {
            title: 'Title 1',
            author: 'Kuni',
            url: '0001',
            content: 'Hello World'
        };
        this.posts[1] = {
            title: 'Title 222',
            author: 'Tone',
            url: '0002',
            content: 'Hello World 2222'
        };
        // Check for single post
        if (this.opts.post) {
            for (var i in this.posts) {
                if ( this.posts[i].url === this.opts.post ) {
                    this.post = this.posts[i];
                    // Add post index to post object
                    this.post.index = i;
                }
            }
        }
    }

})
