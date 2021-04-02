<h1>Calculating pi using complex factorization</h1>
<h2>Brief description</h2>
<p>
Inspired by <a target="_blank" href="https://www.youtube.com/watch?v=NaL_Cb42WyY">this video from 3b1b</a>, I decided to create a program athat calculates pi using complex prime factorization.<br>
Basic premise is to draw increasingly large circles on a complex plane from the origin, and count up the number of <a target="_blank" href="https://en.wikipedia.org/wiki/Gaussian_integer">gaussian integers</a>, (bascally points with integer coordinates), that lies on those circles.<br>
To do this, we start at radius of √(1), and count up till you get to a sufficiently large value √(n)<br>
We're not going to miss any points because any gaussian integers have a magnitude of √(ℕ) due to the pythagorean theorem.<br>
With all that out of the way, we can look at the algorithm.<br>
To count the number of gaussian integers that lies on a circle with radius √(n), we first take the prime factors of n, and then multiply them to get conjugate pairs.<br>
Here we use a sweet loophole. The number of factors can actually be calculated without calculating the exact factors.<br>
Prime numbers that follow p%4=1 always results in a pair of conjugates,<br>
Prime numbers that follow p%4=3 always does not decompose further into complex numbers<br>
Now we count the combination of those factors that results in a point on the circle. To do this, we use make conjugate pairs.<br>
Note that if you multiply a conjugate pairs, it will result in n. Therefore, the magnitude of those conjugate pairs will be a square root of the base number n.<br>
The combination can be calculated using the following pseudocode (it's half javascript)<br>
(when I say code speaks better than words, this is what I mean:)<br>
<pre>
    //this function is basically in javascipt, so it works irl
    var processFactor = function(prime,tally,points){//n is the number of prime factors
        if(points === 0){//0*n=0
            return 0;
        }
        if(prime === 2){//prime is two, special case, does not affect the result
            return points;
        }else if(prime%4 === 3){
            if(tally%2 === 1){//when there is odd number of integer factors, the whole thing breaks, returning zero
                return 0;
            }else{//when there are even number of integer factors, the result is not affected
                return points;
            }
        }else{//factorable
            return (tally+1)*points;//tally+1 regular factors (4 because of rotation)
        }
    };

    //this part is pseudocode, it doesn't work irl, if you're curious, look at my implementation:)
    //didn't put my actual code because it's obfuscated as a result of optimization
    var countPoints = function(n){
        var factors = factorize(n);//normal factor
        var points = 1;
        while(prime and tally in factors){
            points = processFactor(prime,tally,points);//mutate points
        }
        points *= 4;//because there are four quadrants
        return points;
    };
</pre>
<a target="_blank" href="https://codepen.io/MartianLord/full/zYNwOry">demo</a><br>
<a target="_blank" href="https://github.com/martian17/prime-pi">Github</a><br>