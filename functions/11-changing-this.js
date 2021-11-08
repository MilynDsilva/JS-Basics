const video = {
    title:'a',
    tags: ['a','b','c'],
    showTags() {
        //const self = this;
        //replace this with self ,line 8
        //can remove thi from line 10
        this.tags.forEach(function(tag){
            console.log(this.title, tag);
        },this);
    }
};

video.showTags();
//this referces to the obj that is currently executing