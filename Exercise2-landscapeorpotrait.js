let picture = isLandscape(200,100);

function isLandscape(width, height){
    return (width>height ? 'Landscape':'Potrait');//condnl op
    //return (width>height); //returns true or false value
}

console.log(picture);