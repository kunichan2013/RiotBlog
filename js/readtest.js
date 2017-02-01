/**
 * Created by wa22kanrisha on 2017/01/31.
 */

var fs = require('fs');



getPost = function(fileName) {
    var post = {};  // a Post object
    var postStr = fs.readFileSync(fileName, 'utf8'); // Read Blog Post
    var postStrArray = postStr.split(/\r\n|\r|\n/);
    var line1 =  postStrArray[0];
    var line2 =  postStrArray[1];
    var line3 =  postStrArray[2];
    postStrArray.splice(0,3);
    var message = postStrArray;

    post = {
        title : line1,
        author: line3,
        date: line2,
        url: fileName,
        content: message.join("¥n")
    }
    return post;
}

var postFile = "../posts/161200030.txt";

var aPost = getPost(postFile);

return;