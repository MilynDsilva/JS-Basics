const video = {
    title:'a',
    tags: ['a','b','c'],
    showTags() {
        //const self = this;
        //replace this with self ,line 8
        //can remove thi from line 10
        //this.tags.forEach(function(tag){
        this.tags.forEach((tag)=>{
            console.log(this.title, tag); //by defaults this reffernces to global object
        //},this);
        //}.bind(this)); //we are in showtag so can use within showtag
        });
    }
};

video.showTags();
//this referces to the obj that is currently executing

// function playVideo() {
//     console.log(this);
// }

// playVideo.call({name:'hello'},1,2);
// playVideo.apply({name:'hello'},[1,2]);
// playVideo.bind({name:'hello'})(); //set an arg to a given function
// playVideo(this); //calls the window function