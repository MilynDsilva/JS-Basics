//this r efs to the obj thats executing the curr obj
//method ->obj
//function - > global (window,global)
//if called using constructor func , reffers to the empty object

const video = {
    title:'a',
    tags: ['a','b','c'],
    showTags() {
        this.tags.forEach(function(tag){
            console.log(this.title, tag);
        },this);
    }
};

video.showTags();