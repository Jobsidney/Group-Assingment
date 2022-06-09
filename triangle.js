function findTriangleType(side1,side2,side3){
    if(side1===side2 &&side1===side3){
        console.log('Equilateral triangle');

    }else if(side1==side2 || side1==side3){
        console.log("Isosceles triangle");
    }
    else{
        console.log("Scalene");
    }

}
//example
findTriangleType(2,2,2);
