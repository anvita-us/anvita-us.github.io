let up = 0;
let down = 0;
let left = 0;
let right = 0;
let overall = 0;

document.onkeyup = function(e) {
    switch (e.keyCode) {
        case 37:
            // alert('left');
        left++;
            break;
        case 38:
            // alert('up');
        up++;
            break;
        case 39:
            // alert('right');
        right++;
            break;
        case 40:
            // alert('down');
        down++;
            break;
    }
  overall = (right + up) - (left+down);
  document.getElementById("up").innerHTML = `UP=${up}`;
  document.getElementById("right").innerHTML = `RIGHT=${right}`;
  document.getElementById("down").innerHTML = `DOWN=${down}`;
  document.getElementById("left").innerHTML = `LEFT=${left}`;
  document.getElementById("overall").innerHTML = `OVERALL=${overall}`;
};

// function getScore(){
//   return `${left}-${up}-${down}-${right}`;
// }