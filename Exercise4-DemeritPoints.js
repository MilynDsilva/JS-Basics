//under speedlimit =ok message
//speed limit =70
//5->1point
//math.floor(1.3)
//12 pts + print license suspended
checkSpeed(130);

function checkSpeed(speed) {
    const speedlimit=70;
    if (speed <=speedlimit)
        return 'Ok';
    else if (speed >=130)
        return 'License suspended';
    else if (speed >70 || speed <=130)
    {
        points =0;
        currentspeed = speed;
        speed = 70;
        while (speed<=currentspeed)
        {
            speed++;
            if(speed % 5 ==0){
                points=points+1;   
            }
        }
        console.log(points+' points');
    }
    else
        return 'License suspended';
}

