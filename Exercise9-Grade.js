const marks = [ 120 , 90 , 50];

console.log(calculategrade(marks));

function calculategrade(marks) {
    let sum = 0;
    let average = 0;
        for (key in marks)
        {    
            if (true){
               sum = sum + marks[key];
               console.log(marks[key]);
            }
        }
        console.log('value',sum);
        average = sum/marks.length;
        console.log('Average',average);
        if (average >=1 && average <=59)
            console.log('F');
        else if (average >=60 && average <=69)
            console.log('D');
        else if (average >=70 && average <=79)
            console.log('C');
        else if (average >=80 && average <=89)
            console.log('B');
        else if (average >=90 && average <=100)
            console.log('A');
        else 
            console.log('Invalid marks!');
    }
   