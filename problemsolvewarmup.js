// solvemefirst
function solveMeFirst(a, b) {
    return a+b;
}

// simpleArraySum
function simpleArraySum(ar) {
    var sum =0;
    for(let i=0;i<ar.length;i++){
        sum += ar[i]
    }
    return sum
}
// compareTriplets
function compareTriplets(a, b) {
    var c1=0;
    var c2= 0;
    for(let i=0;i< a.length;i++){
        if(a[i]==b[i]){
            c1+=0;
            c2+=0;
        }else if(a[i]>b[i]){
            c1+=1;
        }else if(b[i]>a[i]){
            c2+=1
        }
    }
    return [c1,c2]
}

// aVeryBigSum
function aVeryBigSum(ar) {
    var sum=0;
    for(let i=0;i<ar.length;i++){
        sum+=ar[i]
    }
    return sum
}

// diagonalDifference
function diagonalDifference(arr) {
    let diagonal1=0;
    let diagonal2=0;
    for(let row=0;row<arr.length;row++){
        diagonal1+=arr[row][row]
        diagonal2+=arr[row][arr.length- row-1]
    }
    return Math.abs(diagonal2-diagonal1)

}
// plusMinus
function plusMinus(arr) {
    let pos = 0, neg = 0 , zero = 0 , length = arr.length
    arr.forEach( n => {
        if( n > 0 )
            pos++
        else if( n < 0 )
            neg++
        else
            zero++
    } )
    console.log( (pos / length).toFixed(6) )
    console.log( (neg / length).toFixed(6) )
    console.log( (zero / length).toFixed(6) )
}

// staircase
function staircase(n) {
    for (let i = 1; i <= n; i++) {
        console.log(" ".repeat(n-i) + "#".repeat(i))
    }    

}

// miniMaxSum
function miniMaxSum(arr) {
    var min=0;
    var max =0;
    arr.sort((a,b)=>a-b);
    for(let i=0;i<arr.length-1;i++){
        min+=arr[i]
    }
    for(let j=1;j<arr.length;j++){
        max+=arr[j]
    }
    console.log(min,max)
}

// birthdayCakeCandles
function birthdayCakeCandles(candles) {
    let max = 0, count = 0

    for (let candle of candles) {
        if (candle > max) {
            max = candle
            count = 1
        } else if (candle === max) count++
    }

    return count
}



