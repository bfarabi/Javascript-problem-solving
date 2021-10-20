//Write a javascript program to find the area of a triangle where lengths of the three of its sides are 5,6,7.
const side1 = 5 ;
const side2 = 6 ;
const side3 = 7 ;

const perimeter = (side1 + side2 + side3)/2;
const area = Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3)));
console.log(area);