//title, body, author, views,comments(auto,body)
//islive=t or f
// let post = {
//     title: 'a',
//     body: 'b',
//     author:'c',
//     views :10,
//     comments :[
//         {author:'new a',body:'new body'},
//         {author:'new a',body:'new body'},
//     ],
//     isLive:true
// };
//console.log(post);
let post = new Post('a','b','c'); //calling constructor function

console.log(post);

function Post(title, body,author) {
    this.title = title;
    this.body = body;
    this.author= author;
    this.views=0;
    this.comments=[];
    this.isLive=false;
}