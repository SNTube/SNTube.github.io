var posts=["posts/4692779/","posts/HelloWorld/","posts/af320382/","posts/d50a/","posts/6a8fb549/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};