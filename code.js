function divideAndConquerSum(a) {
    let alength = a.length;
    if((alength == 0) || (alength == 1)) {
        return a;
    }
    else {
        a = mergesort(a);
    }
    
    return a;
}

function msort(x, lo, hi, tmp) {
    let athird = Math.floor((lo+hi)*(1/3));
    let atwothird = Math.floor((lo+hi) * (2/3));
    msort(x, lo, athird, tmp);
    msort(x, athird + 1, atwothird + 1, tmp);
    msort(x, atwothird + 1, hi, tmp);
}

function mergesort(a) {
    let tmpArray = [];

    msort(a, 0, a.length - 1, tmpArray);
}


function merge(a, low, third1, third2, hi, tmp) {
    let x = low, y = third1 + 1, z = third2 + 1;
    let sum = 0;
    for(let i = low; i <= third1; i++) {
        sum += a[i];
    }
    for(let i = third1; i <= third2; i++) {
        sum += a[i];
    }
    for(let i = third2; i <= hi; i++) {
        sum += a[i];
    }
}
let array = [1,2,3,4,5];
divideAndConquerSum(array);
    for(let i = third2; i <= hi; i++) {
        sum += a[i];
    }
}

