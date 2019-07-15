function smallestCommons(arr) {
    //find prime factors
    function findPrimeFactors(num){
        let primes = [2];
        let primeFactors = [];
        while( num%2 === 0 ){
            console.log('num', num);
            num = num/2;
            primeFactors.push(2);
        };
        console.log('8 says hello');
        console.log('num ', num);
        console.log(primeFactors);
        if(num === 1){ 
            return primeFactors
        }else{
            for(let i=2; i<=num; ++i){
                if(primes.every( x => !Number.isInteger(i/x)) && !primes.includes(i)){ primes.push(i) };
            };
            for(let i=0;;){
                if( num % primes[i] === 0 && num != primes[i]){
                    num = num / primes[i];
                    primeFactors.push(primes[i]);
                    continue;
                }else if(primes.includes(num)){
                    primeFactors.push(num);
                    return primeFactors;
                }else{
                    ++i;
                };
            };
        };
    };

    function countOccurences(arr){
        let counts = {};
        for(let i=0; i<arr.length; ++i){
            let num = arr[i];
            counts[num] = counts[num] ? counts[num] += 1 : 1;
        };
        return counts;
    }

    function mergeCounts(obj1, obj2){
        mergeCount = obj1;
        keys = [...new Set(Object.keys(obj1).concat(Object.keys(obj2)))];
        console.log('keys ', keys);
        for(x of keys){
            if( !mergeCount[x]){
                mergeCount[x] = obj2[x];
            }else if( obj2[x] > obj1[x] ){
                mergeCount[x] = obj2[x];
            }
        }
        return mergeCount;
    }

    one = findPrimeFactors(arr[0]);
    console.log(one);
    two = findPrimeFactors(arr[1]);
    console.log(two);
    count1 = countOccurences(one);
    count2 = countOccurences(two);
    count = mergeCounts(count1, count2);
    console.log(count);
    lcm = Object.keys(count).map( x => Math.pow(x, count[x])).reduce( (total, x) => total*x );
    console.log(one, two);
    console.log(lcm);

    
    return arr;
}
  
  
  smallestCommons([1, 5]);