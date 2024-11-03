function divideAndConquerSum(a) {
    let alength = a.length;
    let sum = 0;
    if(alength == 0) {
        sum = 0;
    }
    else if(alength == 1) {
        sum = 1; 
    }
    else if(alength == 2) {
        sum = a[0] + a[1];
    }
    else {
        sum = mergearrays(a);
    }
    
    return sum;
}

function mseparate(x, lo, hi, tmp) {
    //console.log(`${lo}`);
    let athird = Math.floor((lo+hi)*(1/3));
    //console.log(`${athird}`);
    let atwothird = Math.floor((lo+hi) * (2/3));
    //console.log(`${atwothird}`);
    return merge(x, lo, athird, atwothird, hi, tmp)
}

function mergearrays(a) {
    let tmpArray = [];
    //console.log(`${a.length}`);
    return mseparate(a, 0, a.length, tmpArray);
}


function merge(a, low, third1, third2, hi, tmp) {
    let x = low, y = third1 + 1, z = third2 + 1;
    let sum = 0;
    for(let i = low; i < third1; i++) {
        sum += a[i];
        //console.log("for" + `${sum}`);
        //console.log("variable: " + `${third1}`);
    }
    //console.log(`${sum}`);
    for(let i = third1; i < third2; i++) {
        sum += a[i];
        //console.log("for" + `${sum}`);
        //console.log("variable: " + `${third1}`);
    }
    //console.log(`${sum}`);
    for(let i = third2; i < hi; i++) {
        sum += a[i];
    }
    //console.log(`${sum}`);
    return sum;
}
//let array = [1,2,3,4,5];
//divideAndConquerSum(array);

