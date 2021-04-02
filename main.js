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

var processFactor = function(prime,n,points){
    //console.log(prime,n,points);
    if(points === 0){
        return 0;
    }
    if(prime === 2){
        return points;
    }else if(prime%4 === 3){
        if(n%2 === 1){//no points, sorry
            return 0;
        }else{
            return points;
        }
    }else{//factorable
        return (n+1)*points;//n+1 regular factors (4 because of rotation)
    }
};

var gaussianIntegers = 5;//because the number starts from 2

var loop = function(){//counts the number of gaussian integers on the circle
    var factors = nfactor();
    var nn = n;
    //if(nn > 100){
    //    return  false;
    //}
    var npairs = 0;
    var currentTally = 0;
    var previousPrime = 0;
    var first = true;
    var points = 1;
    for(var i = 0; i < factors.length; i++){
        var p = factors[i];
        if(p === previousPrime){
            currentTally++;
        }else if(!first){
            //process the previous tally
            points = processFactor(previousPrime,currentTally,points);
            currentTally = 1;
        }else{
            currentTally++;
        }
        first = false;
        previousPrime = p;
    }
    points = processFactor(previousPrime,currentTally,points);
    points *= 4;
    gaussianIntegers += points;
    var pi = gaussianIntegers/nn;//nn = r^2
    console.log(pi);
    
    console.log(nn,factors,points/*,previousPrime,currentTally,points*/);
    document.getElementById("result").innerHTML += "Radius "+nn+": points: "+points+" π: "+pi+"\n";
    setTimeout(loop,30);
};

loop();



