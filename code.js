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

function msort(a, lo, third1, third2, hi, tmp) {
    msort(a, lo, third1, tmp);
    msort(a, third1, third2, tmp);
    msort(a, third2, hi, tmp);
    merge(a, lo, third1, third2, hi, tmps);
    
}

function mergesort(a) {
    let tmpArray = [];

    let athird = a.length * (1/3);
    let atwothird = a.length * (2/3);

    msort(a, 0, athird, atwothird, a.length - 1, tmp);
}

function merge(a, low, third1, third2, hi, tmp) {
    let x = low, y = third1 + 1, z = third2 + 1;
    let sum = 0;
    for(let i = low; i <= third1l; i++) {
        sum += a[i];
    }
    for(let i = third1; i <= third2; i++) {
        sum += a[i];
    }
    for(let i = third2; i <= hi; i++) {
        sum += a[i];
    }
}

