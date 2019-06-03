https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript?fbclid=IwAR1rmJyYoKUEGEnAWjhizKf5fJ0rkXCcFVQ9Ko-C3HetVDhCnlEiOT-XyQ0

function circleCircumference(circle) {
return  circle.radius * Math.PI * 2; 
}

https://www.codewars.com/kata/training-js-number-13-number-object-and-its-properties/train/javascript?fbclid=IwAR02c5NWkRIIHF9kSwkEZCGIwx1m4a2dp2E7BIcd0UhASc_vxpZkDGk6Yi4
function whatNumberIsIt(n){
   if (isNaN(n)) {
      return 'Input number is Number.NaN';
  } 
  if  (Number.MAX_VALUE === n) {
     return 'Input number is Number.MAX_VALUE';
  } else if ( Number.MIN_VALUE === n) {
      return 'Input number is Number.MIN_VALUE';
    } else if ( Number.NEGATIVE_INFINITY === n) {
      return 'Input number is Number.NEGATIVE_INFINITY';
    } else if (Number.POSITIVE_INFINITY === n) {
      return 'Input number is Number.POSITIVE_INFINITY';
  } else return 'Input number is ' + n;
}
