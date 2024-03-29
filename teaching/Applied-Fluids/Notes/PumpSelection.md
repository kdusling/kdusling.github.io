---
layout: course
title: Flow Measurement
---

# Pump Selection
{:.no_toc}

* A markdown unordered list for the toc
{:toc}

## Types of pumps

<div class="photo" style="width: 800px;  text-align:center">
  <img src="img\venturi.jpg"  style="width:250px; height:auto; display: inline-block; padding: 10px;">
  <img src="img\FlowNozzle.jpg"  style="width:250px; height:auto; display: inline-block; padding: 10px;">
  <img src="img\OrificePlate.jpg"  style="width:250px; height:auto; display: inline-block; padding: 10px;">
  <p>
  Three common types of variable head meters.  From left to right: Venturi Tube, Flow Nozzle, and Orifice Plate. From: <a href="https://control.com/textbook/continuous-fluid-flow-measurement/pressure-based-flowmeters/">Lessons In Industrial Instrumentation</a>
  </p>
</div>


### Venturi Meter

A venturi tube is a device for measuring the volume flow rate.  It operates on the principle that when a fluid stream is restricted, its pressure decrease by an amount that is dependent on the volume flow rate.  The measurement of this pressure drop can be converted to a flow rate.


In a venturi tube the fluid in the main pipe section, labeled as point 1 in the figure below, is accelerated into the throat section, labeled as point 2.  The fluid pressure decreases in going from point 1 to 2 and that drop in pressure can be measured using a differential pressure gauge.  The venturi tube shown below uses a manometer to measure the pressure, but any pressure measurement device will do.  Using the continuity equation and Bernoulli's equation we will show that by measuring this pressure drop we can determine the volume flow rate of the fluid.   

After the throat section, the flow than expands through a diverging portion in order to return to the main pipe section, labeled as point 3 below.  Without any losses the flow conditions at point 1 and point 3 should be identical.  Of course in any real device there is friction and there would be a (hopefully small) pressure drop between points 1 and 3.  The venturi tube is designed with a smooth and gradual contraction and a long enlargement following the throat in order to minimize these energy losses.

<div class="photo" style="width: 600px;">
  <img src="img/venturi.svg" alt="Venturi meter">
  <p>
  Schematic of a venturi meter
  </p>
</div>



The volume flow rate is related to the pressure difference between points 1 and 2 through the relation:

$$
Q=A_1\sqrt{\frac{2g\left(p_1-p_2\right)/\gamma}{\left(A_1/A_2\right)^2-1}}
$$

<div class="photo" style="width: 800px;  text-align:center">
  <img src="img/Venturi-PFS.jpg"  style="width:250px; height:auto; display: inline-block; padding: 10px;">
  <img src="img/Venturi-TriFlow.jpg"  style="width:250px; height:auto; display: inline-block; padding: 10px;">
  <img src="img/Venturi-Hyspan.jpg"  style="width:250px; height:auto; display: inline-block; padding: 10px;">
  <p>
  A few commercially available venturi meters<BR>
  Left to Right: <a href="https://www.primaryflowsignal.com/products/venturi-flow-meters/">Primary Flow Signal</a>, <a href="https://www.triflotech.com/">Tri Flow Tech LLC</a>, <a href="https://www.hyspan.com/Venturi5000.html">Hyspan Precision Products, Inc.</a>
  </p>
</div>

## Velocity probes

### Pitot tubes




For a pitot tube, the flow velocity is related to the difference between the static pressure in the main fluid stream, $p_1$, and the stagnation pressure, $p_s$:

$$
v_1=\sqrt{2g\left(p_s-p_1\right)/\gamma}
$$


<div class="photo" style="width: 400px;">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Cessna_172_Skyhawk_II_-_Pitot_tube.jpg/512px-Cessna_172_Skyhawk_II_-_Pitot_tube.jpg" alt="Pitot tube">
  <p>
  Cessna 172 Skyhawk II - Pitot tube<BR><BR>

  By Cjp24 (Own work) [CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0)], via Wikimedia Commons
  </p>
</div>

<div class="photo" style="width: 600px;">
  <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/2020_Formula_One_tests_Barcelona%2C_Williams_FW43%2C_Russell%2C_pitot_tubes_%28cropped%29.jpg">
  <p>
  Formula 1 Pre-Season Testing 2020 / Circuit de Barcelona<BR>
  The pitot tube is in white at the front of the chassis.  The aero rake is a grid of kiel probes, a variation of the pitot probe.  <BR><BR>

  Original:  Artes Max from SpainDerivative work:  Adriel 00, [CC BY-SA 2.0 (https://creativecommons.org/licenses/by-sa/2.0), via Wikimedia Commons
  </p>
</div>




