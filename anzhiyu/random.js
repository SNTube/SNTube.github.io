var posts=["posts/HelloWorld/","posts/af320382/","posts/d50a/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};