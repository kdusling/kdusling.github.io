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
<a href="https://kdusling.github.io/teaching/Applied-Fluids/AtmosphereProperties.html">The 1976 U.S. Standard Atmosphere Calculator</a>.

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

## Measuring Pressure

### Manometers


<div class="photo" style="width: 600px;  text-align:center">
<img src="img\Dwyer_Mark_II.jpg">
<p>
My Dwyer Mark II inclined manometer measuring slightly less than 0.4 inWC.    
</p>
</div>

### Barometers

### Pressure expressed as a height of liquid

### Pressure sensors

## Hydraulic systems

## Hydrostatic forces on submerged surfaces
