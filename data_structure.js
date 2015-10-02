// ########################
// #THE SUM OF RANGE: DONE#
// ########################
// function range(min, max, step){
//     var store = [];
//     for (min; min <= max; min++){
//         store.push(min);
//     }
//     return store;
// }

function sum(range){
    var total = 0;
    for (var number of range){
        total += number;
    }
    return total;
}

console.log(sum(range(1,10)));

function range(min, max, step){
    var store = [];
    var stepType = typeof step;
    // if (stepType == "undefined" || step == 1 || step === 0){
    if (step === 0){
        throw TypeError("Step cannot be zero");
    }
    
    if (stepType == "undefined" && min < max){
        console.log("stepType: " + stepType);
        // console.log("max < min")
        for (min; min <= max; min++){
            store.push(min);
        }
    }else if (stepType == "undefined" && min > max){
        console.log("stepType: " + stepType);
        console.log("max > min");
        // removed step=1 and step= -step for eloquent solution
        // step = 1;
        // step = -step;
        while (step > 0 ? max >= min : max <= min){
            store.push(min);
            min += step;
        }
    }else if(stepType == "number"){
        console.log("stepType: " + stepType);
        // if (max < min){
            // step = -step;
        // }
        while (step > 0 ? max >= min : max <= min){
            store.push(min);
            min += step;
        }
    }
    return store;
}
range(10,2,-2);

// ############################################
// #reverseArray and reverseArrayInPlace: DONE#
// ############################################
function reverseArray(par1){
    // var list = par1;
    var store_rev = [];
    // var count = list.length;
    var count = par1.length;
    for (var item of par1){
        count -= 1;
        store_rev.push(par1[count]);
    }
    return store_rev;
}

function reverseArrayInPlace(par1){
    this.par1 = par1;
    var store = [];
    
    // store the values of par1
    for(var i = 1; i <= par1.length; i++){
        store.push(i);
    }
    // console.log("in var store: ", store);
    
    // empty par1
    while (par1.length > 0){
        par1.pop();
    }
    // console.log("in par1: ", par1);
    
    // reversing the value
    for(var x = store.length; x > 0; x--){
        par1.push(x);
    }
    // console.log("in reverse par1: ", par1);
    return par1;
}

// forEach() example explained
function forEach(array, action){
    for(var i = 0; i < array.length; i++){
        action(array[i]);
    }
}

var numbers = [1,2,3,4,5], sum = 0;
forEach(numbers, function(number){
    console.log("sum is: " + sum);
    console.log("adds " + sum + " and " + number);
    sum += number;
});

// console.log(sum);