
    function DragSphere(Re){

      w = Math.log10(Re);
      if (Re < 0.1) {
        return 3./16. + 24./Re;
      }
      if (Re < 20) {
        return 24./Re*(1.0 + 0.1315*Math.pow(Re,0.82-0.05*w) );
      }
      if (Re < 260) {
        return 24./Re*(1.0 + 0.1935*Math.pow(Re,0.6305) );
      }
      if (Re < 1500) {
        return Math.pow(10.,(1.6435 - 1.1242*w + 0.1558*Math.pow(w,2.)));
      }
      if (Re < 12000) {
        return Math.pow(10.,(-2.4571 + 2.5558*w - 0.9295*Math.pow(w,2.) + 0.1049*Math.pow(w,3.)));
      }
      if (Re < 44000) {
        return Math.pow(10.,(-1.9181 + 0.6370*w - 0.0636*Math.pow(w,2.)));
      }
      if (Re < 400000) {
        return Math.pow(10, -0.39*(Math.tanh(12.*((w-5.447158)))+1)+Math.log10(0.4660776));
      }
      if (Re >= 400000) {
        return 0.1*w - 0.560205991+0.0807153;
      }

	    return 0.;
    }

    function DragCylinder(Re){

      w = Math.log10(Re);
      if (Re <= 200000) {
        return 11.*Math.pow(Re,-0.75) + 0.9*(1.0-Math.exp(-1000./Re))+1.2*(1.0-Math.exp(-Math.pow(Re/4500.,0.7)));
      }
      if (Re <= 500000) {
        return Math.pow(10, -0.32*(Math.tanh(8.*(w-5.5563))+1.0)+0.081206842);
      }
      if (Re > 500000) {
        return 0.1*w - 0.2533429;
      }

      return 0.;
    }

    function DragDisk(Re){

      if (Re <= 2.0) {
        return 64/3.14159/Re;
      }
      if (Re <= 30.) {
        return 15.7*Math.pow(Re,-0.59);
      }
      if (Re <= 200.) {
        return 7.45*Math.pow(Re,-0.379);
      }
      if (Re < 2000.) {
        return 1.07;
      }
      if (Re >= 2000.) {
        return 1.17;
      }

      return 0.;
    }
	
	function DragEllipse(Re){

	  if (Re < 10000){
		  return 0.;
	  }
	  
      if (Re <= 100000) {
        return 0.62;
      }
      if (Re <= 500000.) {
        var w = (Math.log10(Re) - 5.0)/(Math.log10(500000) - 5.0);
		return 0.62 - (0.62-0.2)*Math.pow(w,2.0);
      }
      if (Re <= 2200000) {
		var w = Math.log10(Re) - Math.log10(500000);
        return 0.2 - 2*(0.62-0.2)/Math.log10(5.)*w + 6.3*Math.pow(w,2.0) - 12.8*Math.pow(w,3.0) + 10*Math.pow(w,4.0);
      }
     
      return 0.;
    }
	
