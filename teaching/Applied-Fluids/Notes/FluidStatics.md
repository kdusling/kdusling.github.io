---
layout: course
title: Fluid Statics
---


# Fluid Statics
{:.no_toc}

* A markdown unordered list for the toc
{:toc}

Our discussion of fluid pressure began in the <a href="https://kdusling.github.io/teaching/Applied-Fluids/Notes/FluidProperties#pressure">previous chapter</a>.  As a reminder, *Pressure* is the force applied perpendicular to a surface per unit area.  When we speak of pressure we are typically dealing with a gas or a liquid that is confined to a container.  

$$
\mathrm{Pressure}=\frac{\mathrm{Force}}{\mathrm{Area}}\,, \qquad\qquad p=\frac{F}{A}
$$

In the SI system a force per unit area has units of newtons per square meter $\N/\m^2$, which is called the pascal ($\Pa$).  In the USCS a force per unit area has units of pound per square foot, $\lb/\ft^2$, abbreviated as psf.   For fluids, it is more convenient and customary to express pressure in units of pounds per square inch, $\lb/\inch^2$, abbreviated as psi.  For the remainder of this course we will use psi as the standard unit of pressure when working in the USCS of units.

## Absolute and gauge pressure

The pressure when measured relative to an absolute vacuum is called the *absolute pressure*.  In practice a near absolute vacuum is difficult to obtain.  Therefore most pressure-measuring devices record pressure relative to the local atmospheric pressure.  In this design the pressure gauge is calibrated to read zero when it is at atmospheric pressure and the pressure indicated is actually the difference between the absolute pressure and local atmospheric pressure.  This difference is called the gauge pressure and can be expressed as

$$
p_{\rm absolute}=p_{\rm gauge}+p_{\rm atm}
$$

The figure below summarizes the relationship between gauge and absolute pressure measurements.

<div class="photo" style="width: 800px;  text-align:center">
<img src="img\abs_press_scale.svg">
</div>

<div class="example">
An automobile tire is inflated to a pressure of 30 psi (gauge).  Determine the absolute pressure in the tire.

<hr>

To find the absolute pressure we use the expression

$$
p_{\rm absolute}=p_{\rm gauge}+p_{\rm atm}
$$

Since the atmospheric pressure wasn't explicitly stated we use the standard value of 14.7 psi.  The absolute pressure inside the tire is

$$
p_{\rm absolute}=30~\psi+14.7~\psi=44.7~\psi
$$

</div>

## Pressure vs depth at constant density

The pressure in a fluid increases with depth simply because more fluid sits above the deeper layers of fluid.  In order for the deeper layers of fluid to support the increasing weight resting above it, the pressure of the fluid must increase accordingly.  For a static, homogenous, incompressible fluid the relationship between pressure and depth is

$$
\Delta p = -\gamma \Delta z
$$

where $\Delta p$ is the change in pressure that occurs across an elevation change of $\Delta z$.  $\gamma$ is the specific weight of the fluid.  The minus sign indicates that a decrease in elevation causes an increase in pressure.  In practice I just calculate the magnitude of the change in pressure (ignore the minus sign) and afterwards determine whether the pressure decreased (increase in elevation) or the pressure increased (decrease in elevation).  Just remember that as you increase the amount of fluid above you, the fluid pressure will also increase.


<div class="example">
Compute the change in pressure as you descend to the bottom of an 8 foot deep pool.

<hr>

We use the formula $\Delta p = -\gamma \Delta z$ but I will compute it without the minus sign (take the absolute value).

$$
\Delta p = \left(62.4~\frac{\lb}{\ft^3}\right) \times\left(8 ~\ft\right)=499.2~\frac{\lb}{\ft^2}=499.2~{\rm psf}
$$

Now convert to the customary psi

$$
499.2~\frac{\lb}{\ft^2}\times\left(\frac{1~\ft}{12~\inch}\right)^2=3.47~\psi
$$

As one descends to the bottom of the pool the pressure increases by about 3.5 psi.  This is an increase above atmospheric pressure by about 20%. (Atmospheric pressure is 14.7 psi.)

</div>

Here is another example.

<div class="example">
A hiker's barometer reads 95 kPa at the beginning of her trip and 85 kPa at the end.  Assuming a constant air density of $1.22~\kg/\m^3$ estimate the vertical distance traversed by the hiker.  Was the hiker climbing or descending?

<hr>

Let's first determine whether the hiker was climbing or descending.  The pressure was larger at the start of the trip.  In order for the pressure to decrease the hiker must have been ascending.  As the hiker increases her altitude there is less air above her, compared to when she started.  This results in a decrease in pressure.

The net change in pressure is 10 kPa which is 10,000 Pa. The specific weight of air can be computed from the density

$$
\gamma=g\rho=(9.81~\m/s^2)\left(1.22~\kg/\m^3\right)=11.97~\N/\m^3
$$

We can rearrange the pressure elevation relationship to solve for $\Delta z$. (Again, I dropped the minus sign since we already know the hiker is climbing.)

$$
\Delta z = \frac{\Delta p}{\gamma}=\frac{10,000~\Pa}{11.97~\N/\m^3}=836~\m
$$

So the hiker made a net vertical ascent of 836 meters.  

</div>

## Pressure in the atmosphere

The previous exercise incorporated an important assumption, that the air density remains constant throughout the 800 meter ascent.  This is not entirely realistic.  The temperature of the air changes with altitude and therefore so must the density (think ideal gas law).  In order to simplify our discussions we will make use of the 1976 U.S. Standard Atmosphere.  In this model the atmosphere is broken up into seven layers with each layer having a prescribed linear temperature profile.

Starting from the sea level properties of air (see table below) one can compute other relevant properties, but the procedure goes beyond the scope of this course. Instead, the properties of air at various altitudes should be found by using the
<a href="https://kdusling.github.io/teaching/Applied-Fluids/AtmosphereProperties.html">1976 U.S. Standard Atmosphere Calculator</a>.

<table class="table table-striped">
<caption>
Sea level properties of air in the 1976 U.S. Standard Atmospheric model
</caption>
<thead>
<tr><th> Property </th><th> Symbol </th><th>  SI  </th><th>  USCS </th></tr>
</thead>
<tbody>
<tr><td>Temperature </td><td> $T$ </td><td> $15\C$ </td><td>  $59\F$ </td></tr>
<tr><td>Pressure </td><td> $p$ </td><td> 101.3 kPa (abs) </td><td>  14.7 psia </td></tr>
<tr><td>Density </td><td> $\rho$ </td><td> $1.22~\kg/\m^3$  </td><td>  $2.377\times 10^{-3}~\slug/\ft^3$ </td></tr>
<tr><td>Dynamic viscosity </td><td> $\eta$ </td><td> $1.789\times 10^{-5}~\Pa\cdot s$  </td><td>  $3.737\times 10^{-7}~\lb\cdot s/\ft^2$ </td></tr>

</tbody>
</table>

<div class="example">

A drive to the top of Mt. Washington begins at an elevation of 1600 ft.  The tire pressure, as measured with a standard tire pressure gauge, is 30 psi at the start of the trip.  What will the tire pressure gauge read at the end of the trip at an elevation of 6200 ft.  Work under the assumption that the air in the tires remain at the same temperature.

<hr>

The important thing to note is that a standard tire pressure gauge is measuring a gauge pressure.  So the pressure measurement of 30 psi means that the tire is 30 psi above the ambient pressure.

Our trip starts at an elevation of 1600 ft.  Using the
<a href="https://kdusling.github.io/teaching/Applied-Fluids/AtmosphereProperties.html">1976 U.S. Standard Atmosphere Calculator</a> the ambient air pressure is 13.9 psi.  The absolute pressure in the tire is therefore

$$
p_{\rm absolute}=p_{\rm gauge}+p_{\rm atm}= 30~\psi + 13.9~\psi = 43.9~\psi
$$

Arriving at the top of Mt. Washington the absolute pressure in the tire remains 43.9 psi.  

Using the
<a href="https://kdusling.github.io/teaching/Applied-Fluids/AtmosphereProperties.html">1976 U.S. Standard Atmosphere Calculator</a> we find that the atmospheric pressure has now dropped to 11.7 psi.  When making a measurement of the gauge pressure we find

$$
p_{\rm gauge}=p_{\rm absolute}-p_{\rm atm} = 43.9~\psi - 11.7~\psi = 32.2~\psi.
$$

So the tire pressure increases by 2.2 psi. This is the pressure that dictates how the tires will handle.  

Note the huge assumption that the temperature of the air remains unchanged.  This is unlikely to be the case.  One rule of thumb is that for every $10\F$ increase in temperature the pressure increases by 1 psi.  So if the temperature dropped by $20\F$ throughout the course of the trip it would compensate for the increase from change in atmospheric pressure.

</div>

## Measuring Pressure

### Manometers

One of the most basic pressure measurement devices is the manometer.  A simple U-tube monometer is shown in the figure below.  One end of the manometer is connected to a fluid of unknown pressure.  In the example below we want to find the pressure of the water at point $A$.  The other end of the U-tube manometer is open to atmospheric pressure.  A gauge fluid, that does not mix with the fluid to be measured, sits between the two.  Typical gauge fluids include Mercury (as used in this example), colored light oils, or water.


<div class="photo" style="width: 600px;  text-align:center">
<img src="img\Utube1.svg">
</div>

<div class="example">
Compute the pressure at point A using the manometer shown above.
<hr>

Start at the point labeled $1$ where the pressure is the atmospheric pressure,

$$
p_1=p_{\mathrm{atm}}=0~\kPa\mathrm{(gauge)}
$$  

We now move to point $2$.  The pressure there is higher than that of point $1$ due to the gauge fluid sitting above it.  Using the pressure-elevation relationship we see that the pressure at 2 is larger by $\gamma_m (40~\mm)$, where $\gamma_m$ is the specific weight of mercury.

$$
p_2=p_1+\gamma_m (40~\mm)
$$

Because points $2$ and $3$ are at the same height, at rest, and with the same fluid the pressures are equal, $p_3=p_2$.  Next we go to point $4$.  The pressure at $4$ is lower than the pressure at $3$ by an amount $\gamma_w (70\mm)$ where $\gamma_w$ is the specific weight of water.

Finally, because point $A$ and $4$ are at the same level their pressures are the same.

$$
p_A=p_1+\gamma_m (40~\mm)-\gamma_w(70~\mm)
$$

Using

$$
\gamma_w=9.81~\kN/\m^3\,,\quad\quad \gamma_w=(13.54)(9.81~\kN/\m^3)=132.8~\kN/\m^3
$$

we can solve for the pressure at point $A$:

$$
p_A=0~\kPa\mathrm{(gauge)} + 132.8~\kN/\m^3 (0.04~\m) - 9.81~\kN/\m^3 (0.07~\m)=4.63~\kPa\mathrm{(gauge)}
$$

</div>


<div class="photo" style="width: 500px;  text-align:center">
<img src="img\Dwyer_Mark_II.jpg">
<p>
My Dwyer Mark II inclined manometer measuring slightly less than 0.4 inWC.  The manometer measures the pressure drop across the air filter.  As the air filter accumulates dust over time the pressure drop across it increases.
</p>  56tsqwz8uiqwaujiswakoswl;sewss.s/
</div>

### Barometers

A barometer is used for measuring the atmospheric pressure. In its simplest form it is a long tube that is submerged in mercury with the other end exposed to a near perfect vacuum.

<div class="photo" style="width: 500px;  text-align:center">
<img src="img\barometer.svg">
<p>A barometer</p>
</div>

If we analyze the above barometer in the same manner as a manometer we can derive the relationship

$$
p_{atm}=\gamma_m h
$$

For example, let's say that a mercury barometer measured a height of 760 mm.  This would correspond to an atomospheric pressure of

$$
p_{atm}=\frac{133.3 \kN}{\m^3}\times 0.760~\m=101~\kPa
$$


### Pressure expressed as a height of liquid

In some contexts it will be convenient to express the pressure in a fluid as a height of water column.  For example, in the previous section on barometers, instead of stating the atmospheric pressure as 101 kPa we could have said the pressure is 760 mm of mercury.  Of course, "mm of mercury" is not a unit of pressure, but when stated as such we should know to interpret this as the pressure that would cause a rise of 760 mm of mercury in a manometer.

To convert we can there use that

$$
\text{1.0 mmHg}=\text{1.0 mm of mercury}=133.3~\Pa
$$

For smaller pressure inches of water (inH$_2$O or inWC), the WC stands for water column, is used instead of psi.

$$
\text{1.0 inH}_2\text{O}=0.01934~\psi
$$

### Pressure gauges

A mechanical pressure sensor coverts fluid pressure into a force that displaces a flexible element.  The movement in the element moves a dial which reflects  moves a dial.  Common styles of mechanical pressure sensors are discussed below.   

<div class="photo" style="width: 600px;  text-align:center">
  <img src="img\pressure_gauge_schematic.webp"  style="height:auto; display: inline-block; padding: 10px;">
  <p>
  The bellows, the diaphragm, and the bourdon tube.  From: <a href="https://control.com/textbook/continuous-pressure-measurement/mechanical-pressure-elements/">Mechanical Pressure Elements</a> licensed under <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>.
  </p>
</div>

<div class="photo" style="width: 600px;">

<iframe width="560" height="315" src="https://www.youtube.com/embed/mF1pW-xL3vI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<p>
Video: Bellows For Pressure Sensing
</p>
</div>

<div class="photo" style="width: 600px;">

<iframe width="560" height="315" src="https://www.youtube.com/embed/f9MJAXhLSv0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<p>
Video: How a Bourdon tube works
</p>
</div>

<div class="photo" style="width: 600px;">

<iframe width="560" height="315" src="https://www.youtube.com/embed/JnPSeEW-EeA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<p>
Video: Diaphragm element compared to Bourdon tube
</p>
</div>



## Hydraulic systems

<div class="photo" style="width: 800px;  text-align:center">
<img src="img\hydraulic_lift.svg">
</div>

<div class="example">

A car weighing 2000 pounds is supported on the hydraulic lift shown below.  What weight, $w$, is needed to support the car?  What is the pressure, in psi, of the hydraulic fluid?

<div class="photo" style="width: 800px;  text-align:center">
<img src="img\hydraulic_lift_car_exercise.svg">
</div>

<hr>

The ratio of the areas of the two pistons is the mechanical advantage.  The force required to the support the car is a factor of 10 less.

$$
F_1=\frac{A_1}{A_2}F_2=\frac{10~\ft^2}{100~\ft^2}2000~\lb=200~\lb
$$

The pressure in the hydraulic fluid is

$$
p=\frac{F_2}{A_2}=\frac{2000~\lb}{100~\ft^2}\times\left(\frac{1~\ft}{12~\inch}\right)^2=0.14~\psi
$$

</div>

## Hydrostatic forces on submerged surfaces

<div class="photo" style="width: 800px;  text-align:center">
<img src="img\VerticalWallPressure.svg">
</div>
