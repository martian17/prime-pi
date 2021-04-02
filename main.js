

var n = 2;//square root of n = radius
var main = function(){
    if(){
        
    }
    n++;
};

var primes = [2];
var n = 2;
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


var loop = function(){
    
}