function bisection(f, a, b, tol = 1e-6, maxIter = 10000) {
  
  if (f(a) * f(b) > 0 || b < a) {
    throw new Error("Invalid interval");
  }
  
  
  for (let i = 0; i < maxIter; i++) {
    const c = (a + b) / 2.0;
    if (f(c) == 0 || (b - a)/2.0 < tol) {
      return c;
    }
    if ( f(a) * f(c) > 0 ) {
      a = c;
    } else {
      b = c;
    }
  }

  throw new Error("Exceeded maximum iterations");
}

/*

*/
function HermitePolynomial(x, x0, x1, p0, p1, m0, m1) {
	var t = ( x-x0 )/( x1-x0 );
	return (2*t*t*t - 3*t*t + 1)*p0 + (t*t*t - 2*t*t + t)*m0*(x1-x0) + (-2*t*t*t + 3*t*t)*p1 + (t*t*t - t*t)*m1*(x1-x0);
}

/*
The array x must be ordered.
Returns the interpolated value of y(s) given
the array of data points x[n], y[n], y'[n] 
*/
function cubicHermiteInterp(s, x, y, yp) {
	
		if (s < x[0] || s > x[x.length-1] ) {
			return null;
		}
		
		var indexL = 0;
		
		for (var i = 0; i < x.length; i++) {
			if (x[i+1] >= s) {indexL = i; break;}
		}
		
		return HermitePolynomial(s, x[indexL], x[indexL+1], y[indexL], y[indexL+1], yp[indexL], yp[indexL+1]);
}
	

function RK4(y, deriv, t, dt) {
		
		var k1 = [];
		var s1 = [];
		deriv(t, y, k1);
		
		for (var i = 0; i < y.length; i++) {
			s1[i] = y[i] + 0.5*dt*k1[i];
		}
		
		var k2 = [];
		var s2 = [];
		deriv(t + 0.5*dt, s1, k2);
		
		for (var i = 0; i < y.length; i++) {
			s2[i] = y[i] + 0.5*dt*k2[i];
		}
		
		var k3 = [];
		var s3 = [];
		deriv(t + 0.5*dt, s2, k3);	
		
		for (var i = 0; i < y.length; i++) {
			s3[i] = y[i] + dt*k3[i];
		}	
		
		var k4 = [];
		deriv(t + dt, s3, k4);	
		
		for (var i = 0; i < y.length; i++) {
			y[i] += dt*(k1[i]/6. + k2[i]/3. + k3[i]/3. + k4[i]/6.);
		}

		t = t + dt;	
		
		return [t, dt]
}

function RKF45(y, deriv, t, dt) {
	
		var tol = 2.0E-5;
		
		var k1 = [];
		deriv(t, y, k1);
		
		var s1 = [];
		for (var i = 0; i < y.length; i++) {
			s1[i] = y[i] + 1./4.*dt*k1[i];
		}
		var k2 = [];
		deriv(t + 1./4.*dt, s1, k2);

		
		var s2 = [];		
		for (var i = 0; i < y.length; i++) {
			s2[i] = y[i] + 3./32.*dt*k1[i] + 9./32.*dt*k2[i];
		}
		var k3 = [];
		deriv(t + 3./8.*dt, s2, k3);	
		
		
		var s3 = [];
		for (var i = 0; i < y.length; i++) {
			s3[i] = y[i] + 1932./2197.*dt*k1[i] - 7200./2197.*dt*k2[i] + 7296/2197.*dt*k3[i];
		}
		var k4 = [];		
		deriv(t + 12./13.*dt, s3, k4);	
		
		var s4 = [];
		for (var i = 0; i < y.length; i++) {
			s4[i] = y[i] + 439./216.*dt*k1[i] - 8.*dt*k2[i] + 3680./513.*dt*k3[i] - 845./4104*dt*k4[i];
		}
		var k5 = [];		
		deriv(t + dt, s4, k5);		

		var s5 = [];
		for (var i = 0; i < y.length; i++) {
			s5[i] = y[i] - 8./27.*dt*k1[i] + 2.*dt*k2[i] - 3544./2565.*dt*k3[i] + 1859./4104*dt*k4[i] - 11./40.*dt*k5[i];
		}
		var k6 = [];		
		deriv(t + 0.5*dt, s5, k6);			
		
		var errmax = 0;
		var z = [];
		for (var i = 0; i < y.length; i++) {

			//fifth order estimate
			var zi = (16./135.*k1[i] + 6656./12825.*k3[i] + 28561./56430.*k4[i] - 9./50.*k5[i] + 2./55*k6[i] ) ;
			
			//fourth order estimate
			var yi = (25./216.*k1[i] + 1408/2565.*k3[i] + 2197./4104.*k4[i] - 1./5.*k5[i]);
			
			errmax = Math.max(errmax, Math.abs(zi-yi) );
		}
		
		dtnew = dt*Math.pow( tol/(2.0*errmax), 0.25);

		
		if (errmax > tol){
			return RKF45(y, deriv, t, dtnew)
		}
		
		for (var i = 0; i < y.length; i++) {
			
			//return fourth order estimate
			y[i] = y[i] + dt*(25./216.*k1[i] + 1408/2565.*k3[i] + 2197./4104.*k4[i] - 1./5.*k5[i]);
			
		}
		t = t + dt;
		
		return [t, dtnew]
}
