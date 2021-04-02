var primes = [];
var n = 1;
var nfactor = function(){
    n++;
    var factors = [];
    var nn = n;
    for(var i = 0; i < primes.length; i++){
        var prime = primes[i];
        while(nn !== 0 && nn%prime === 0){
            nn /= prime;
            factors.push(prime);
        }
    }
    if(factors.length === 0){
        primes.push(n);
        factors.push(n);
    }
    return factors;
};

var processFactor = function(prime,n,hands){
    //console.log(prime,n,hands);
    if(hands === 0){
        return 0;
    }
    if(prime === 2){
        return hands;
    }else if(prime%4 === 3){
        if(n%2 === 1){//no points, sorry
            return 0;
        }else{
            return hands;
        }
    }else{//factorable
        return 4*n+hands;//n+1 regular factors (4 because of rotation)
    }
};


var loop = function(){//counts the number of gaussian integers on the circle
    var factors = nfactor();
    var nn = n;
    if(nn > 100){
        return  false;
    }
    var npairs = 0;
    var currentTally = 0;
    var previousPrime = 0;
    var first = true;
    var hands = 4;
    for(var i = 0; i < factors.length; i++){
        var p = factors[i];
        if(p === previousPrime){
            currentTally++;
        }else if(!first){
            //process the previous tally
            hands = processFactor(previousPrime,currentTally,hands);
            currentTally = 1;
        }else{
            currentTally++;
        }
        first = false;
        previousPrime = p;
    }
    hands = processFactor(previousPrime,currentTally,hands);
    console.log(nn,factors,hands/*,previousPrime,currentTally,hands*/);
    loop();
};

loop();



