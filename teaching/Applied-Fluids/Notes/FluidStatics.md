---
layout: course
title: Fluid Statics
---

$$
\require{cancel}
\newcommand{\kg}{\mathrm{kg}}
\newcommand{\kN}{\mathrm{kN}}
\newcommand{\inch}{\mathrm{in}}
\newcommand{\ft}{\mathrm{ft}}
\newcommand{\m}{\mathrm{m}}
\newcommand{\cm}{\mathrm{cm}}
\newcommand{\lb}{\mathrm{lb}}
\newcommand{\N}{\mathrm{N}}
\newcommand{\Pa}{\mathrm{Pa}}
$$

# Fluid Statics
{:.no_toc}

* A markdown unordered list for the toc
{:toc}

We gave the basic definition of pressure in the <a href="https://kdusling.github.io/teaching/Applied-Fluids/Notes/FluidProperties#pressure">previous section</a>.  *Pressure* is the force applied perpendicular to a surface per unit area.  When we speak of pressure we are typically dealing with a gas or a liquid that is confined to a container.  

$$
\mathrm{Pressure}=\frac{\mathrm{Force}}{\mathrm{Area}}\, \qquad\qquad p=\frac{F}{A}
$$

In the SI system a force per unit area has units of newtons per square meter $\N/\m^2$, which is called the pascal (Pa).  In the USCS a force per unit area has units of pound per square inch $lb/\inch^2$ (psi).

## Absolute and gauge pressure

The pressure when measured relative to an absolute vacuum is called the *absolute pressure*.  However a near absolute vacuum is difficult to obtain in practice and most pressure-measuring devices measure pressure relative to the local atmospheric pressure.  In this design the pressure gauge is calibrated to read zero when it is at atmospheric pressure and the pressure indicated is actually the difference between the absolute pressure and local atmospheric pressure.  This difference is called the gauge pressure and can be expressed as

$$
p_{\rm absolute}=p_{\rm gauge}+p_{\rm atm}
$$

The figure below summarizes the relationship between gauge and absolute pressure measurements.

<img src="img\abs_press_scale.svg"  style="width:500px; height:auto; display: inline-block; padding: 10px; border: 1px;">


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

The pressure in a fluid increases with depth simply because more fluid sits above the deeper layers.  In order for the deeper layers of fluid to support  the increasing weight above it the pressure must increase accordingly.  For a static, homogenous, incompressible fluid the relationship between pressure and depth is

$$
\Delta p = -\gamma \Delta z
$$

where $\Delta p$ is the change in pressure that occurs across an elevation change of $\Delta z$.  $\gamma$ is the specific weight of the fluid.  The minus sign indicates that a decrease in elevation causes an increase in pressure.  In practice I just calculate the magnitude of the change in pressure (ignore the minus sign) and afterwards determine whether the pressure decreased (going up) or the pressure increased (going down).  More fluid above you results in a larger pressure.


<div class="example">
Compute the change in pressure as you descend to the bottom of an 8 foot deep pool.

<hr>

We use the formula $\Delta p = -\gamma \Delta z$ but I will compute it without the minus sign (take the absolute value).

$$
\vert \Delta p\vert = \left(62.4~\lb/\ft^3) \times\left(8 ~\ft)=499.2~\lb/\ft^2=499.2~{\rm psf}
$$
Now convert to the customary psi
$$
499.2~\lb/\ft^2\times\left(\frac{1~\ft}{12\inch\right)^2=3.47~\psi
$$

So as one descends to the bottom the pressure increases by about 3.5 psi.
This is an increase above atmospheric pressure by about 20\%. (Atmospheric pressure is 14.7 psi.)

</div>

Here is another example.

<div class="example">
A hiker's barometer reads 950 mbars at the beginning of her trip and 850 mbars at the end.  Assuming an air density of $1.22~\kg/\m^3$ compute the vertical distance traversed by the hiker.  Was the hiker climbing or descending?

<hr>

Let's first determine whether the hiker was climbing or descending.  The pressure was larger at the start of the trip.  In order for the pressure to decrease the hiker must have been ascending.  As the hiker increases her altitude there is less air above her, compared to when she started.  This results in a decrease in pressure.

The net change in pressure is 100 mbar.  This is equivalent to $10,000~\Pa$. Check this.  We can rearrange the pressure elevation relationship to solve for $\Delta z$.

$$
\Delta z = \frac{\Delta p}{\gamma}
$$

The specific weight of air can be found from the density
$$
\gamma=g\rho=(9.81~\m/s^2)\left(1.22~\kg/\m^3\right)=11.97~\N/m^3

$$
\Delta z = \frac{\Delta p}{\gamma}=\frac{10,000~\Pa}{11.97~\N/m^3}=836~\m
$$

So the hiker made a net vertical ascent of 836 meters.  

</div>

## Pressure in the atmosphere

## Measuring Pressure

### Manometers

### Barometers

### Pressure expressed as a height of liquid

### Pressure sensors

## Hydraulic systems

## Hydrostatic forces on submerged surfaces
