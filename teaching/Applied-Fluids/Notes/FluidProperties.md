---
layout: course
title: The nature of fluids
---

$$
\require{cancel}
\newcommand{\s}{\mathrm{s}}
\newcommand{\min}{\mathrm{min}}
\newcommand{\hr}{\mathrm{hr}}
\newcommand{\kg}{\mathrm{kg}}
\newcommand{\kN}{\mathrm{kN}}
\newcommand{\inch}{\mathrm{in}}
\newcommand{\ft}{\mathrm{ft}}
\newcommand{\m}{\mathrm{m}}
\newcommand{\km}{\mathrm{km}}
\newcommand{\mi}{\mathrm{mi}}
\newcommand{\cm}{\mathrm{cm}}
\newcommand{\lb}{\mathrm{lb}}
\newcommand{\lbm}{\mathrm{lbm}}
\newcommand{\lbf}{\mathrm{lbf}}
\newcommand{\N}{\mathrm{N}}
\newcommand{\slug}{\mathrm{slugs}}
\newcommand{\Pa}{\mathrm{Pa}}
\newcommand{\mph}{\mathrm{mph}}
\renewcommand{\psi}{\mathrm{psi}}
\newcommand{\C}{^\circ\mathrm{C}}
\newcommand{\F}{^\circ\mathrm{F}}
\newcommand{\sg}{\mathrm{sg}}
$$

# The nature of fluids
{:.no_toc}

* A markdown unordered list for the toc
{:toc}

A *fluid* is a substance that continually deforms or flows under an applied shear stress.  Under the ordinary usage of the word fluid we usually have a liquid in mind.   In the sciences a fluid can be a liquid or a gas.  What is the dividing line between a gas and a liquid if they are both fluids?  For this course, our working definition of a *liquid* is a fluid that is incompressible ([see below](#Compressibility)).

The sections below will go through a number of physical properties that are commonly used to characterize fluids.  

## Density, specific weight & specific gravity

### Density

The *density* of the fluid is its mass per unit volume:

$$
\textrm{density}=\textrm{mass}/\textrm{Volume}\\
$$

The density is represented by the Greek letter rho ($\rho$).  If a quantity of fluid has a mass $m$ and a volume $V$, its density is

$$
\rho=m/V
$$

The units for density are $\kg/\m^3$ in the SI system and $\slug/\ft^3$ in the U.S. Customary System.

### Specific weight

The *specific weight* of the fluid is its weight per unit volume:

$$
\textrm{specific weight}=\textrm{weight}/\textrm{Volume}\\
$$

The specific weight is represented by the Greek letter gamma ($\gamma$).  If a quantity of fluid has a weight $w$ and a volume $V$, its specific weight is

$$
\gamma=w/V
$$

The units for density are $\N/\m^3$ in the SI system and $\lb/\ft^3$ in the U.S. Customary System.

It is straightforward to convert between density and specific weight.  Since the weight of a fluid is just its mass times gravity, $w=mg$ ($g$ being the acceleration due to gravity), the specific weight can be computed from the density via

$$
\gamma=\rho g
$$

### Specific gravity

It is often convenient to report the density of a fluid with respect to a given reference fluid (water at $4\C$ will be used in this course).  The density of water at $4\C$ is:

$$
\rho=1000~\text{kg}/\text{m}^3\quad \textrm{SI}\,, \qquad\qquad \rho=1.94~\text{slugs}/\text{ft}^3\quad \textrm{USCS}
$$

The specific gravity of a substance is defined by the fluid's density divided by the density of water at $4\C$.

$$
\sg=\frac{\rho}{1000~\kg/\m^3}\quad \textrm{SI}\,, \qquad\qquad
\sg=\frac{\rho}{1.94~\slug/\ft^3} \quad \textrm{USCS}
$$

Alternatively, the specific weight can be used to calculate the specific gravity.  In this case the specific gravity is defined as the fluid's specific weight dividing by the specific weight of water at $4\C$.   The specific weight of water at $4\C$ is:

$$
\gamma=9.81~\text{kN}/\text{m}^3\quad \textrm{SI}\,, \qquad\qquad \gamma=62.4~\text{lb}/\text{ft}^3\quad \textrm{USCS}
$$

And the specific gravity (sg) of a fluid can be computed from its specific weight ($\gamma$) by computing

$$
\sg=\frac{\gamma}{9.81~\kN/\m^3}\quad \textrm{SI}\,, \qquad\qquad
\sg=\frac{\gamma}{62.4~\lb/\ft^3} \quad \textrm{USCS}
$$

Note that the two definitions for the specific gravity (the one using density and the one using specific weight) are equivalent.   This is because specific weight is just the density times mass and the factor of mass cancels in the ratios.  The example below will explicitly illustrate this.

Note that the specific gravity of a fluid is dimensionless. Don't get confused, the three quantities (density, specific weight and specific gravity) are three ways of representing the same thing (the amount of fluid per unit volume).  In the following examples we will demonstrate how these concepts are commonly used.

<div class="example">
An oil barrel has a volume of $0.16~\m^3$ and a mass of $140~\kg$.  Compute the weight of the barrel.  Then compute the density, specific weight and specific gravity of the oil.  

<hr>

To compute the weight we use $w=mg$ where $g=9.81~\m/s^2$.  We have

$$
w=140~\kg\times 9.81~\m/s^2=1373~\kg\cdot\m/s^2
$$

A $\kg\cdot\m/s^2$ is a Newton (N) and the weight is therefore

$$
w=1373~\N=1.373\times 10^3~\N=1.373~\kN
$$

The density is the mass of the oil divided by the volume of oil.

$$
\rho=\frac{m}{V}=\frac{140~\kg}{0.16~\m^3}=875~\frac{\kg}{\m^3}
$$

The specific weight is the weight of the oil divided by the volume of oil.

$$
\gamma=\frac{w}{V}=\frac{1.373~\kN}{0.16~\m^3}=8.581~\frac{\kN}{\m^3}
$$

We can solve for the specific gravity by dividing the oil's density (or specific weight) with that of water at $4\C$.  Both should yield the same result.

$$
\sg=\frac{\rho}{1000~\kg/\m^3}=\frac{875~\kg/\m^3}{1000~\kg/\m^3}=0.875
$$

or equivalently

$$
\sg=\frac{\gamma}{9.81~\kN/\m^3}=\frac{8.581~\kN/\m^3}{9.81~\kN/\m^3}=0.875
$$

We note that the units cancel when computing the specific gravity leaving us with a dimensionless quantity as expected.

</div>

<div class="example">

Glycerine at $77\F$ has a specific gravity of 1.263.  Compute its density and specific weight.  How much does a gallon of Glycerine weigh?

<hr>

Since Fahrenheit was used in the statement of the problem it makes sense to work in the US system of units.  The density and specific weight can be found by multiplying the given specific gravity of Glycerine with the density and specific weight of water.  First compute the density:

$$
\rho=\sg\times 1.94~\slug/\ft^3=1.263\times 1.94~\slug/\ft^3=2.45~\slug/\ft^3
$$

And now the specific weight:

$$
\gamma=\sg\times 62.4~\lb/\ft^3=1.263\times 62.4~\lb/\ft^3=78.81~\lb/\ft^3
$$

To find the weight of a gallon of Glycerine we use the relation $\gamma=w/V$ and solve for $w$:

$$
w=\gamma \times V = 78.81~\lb/\ft^3\times 1~\cancel{\text{gal}}\left( \frac{\ft^3}{7.48~\cancel{\text{gal}}}\right)=10.5~\lb
$$

</div>

## Viscosity

A fluid's *viscosity* is a measure of the fluid's resistance to motion under an applied shear force.  When you stir a pot of honey the spoon generates the "applied shear force".  The difficulty in moving the spoon due to the fluid's resistance is a specific property of the honey, *i.e.* the honey's viscosity.  

In the following sections we will introduce two different (but very closely related) definitions of the viscosity.  The so-called *dynamic viscosity* will be represented by the Greek letter eta ($\eta$).  Imagine you have a tube or pipe (or drinking straw) held horizontally with a fluid inside.  You blow into the tube in order to move the fluid a certain distance in the tube.  The amount of force required to perform this task will depend on the fluid's dynamic viscosity.

The second viscosity is called the *kinematic viscosity* and will be represented by the Greek letter nu ()$\nu$).  Imagine a tank filled with a liquid that has a crack or small opening.  The amount of time it takes for the liquid to leak or drain from the tank under its own weight will depend on the fluid's kinematic viscosity.


### Dynamic Viscosity

We start off in the same way as every other fluids textbook.  Imagine two flat surfaces separated by the fluid of interest.  The plates are large so that we can ignore what is going on at the edges.  A force $F$ is applied to the upper surface in order for it to maintain a constant velocity $v$.  The lower surface remains stationary.  The distance between the surfaces (the thickness of the layer of fluid) is $y$.  Here is a picture of the setup I have in mind.

<div class="photo" style="width: 800px;">
  <img src="img\CouetteFlow.png" alt="Couette Flow">
  <p>
  Velocity profile of a thin layer of fluid between to parallel plates (known as Couette Flow).
  </p>
</div>

The upper plate creates an applied shear stress of magnitude $\tau=F/A$, where $A$ is the contact area between the fluid and plate.  This applied shear stress continuously deforms the fluid.

So what is the fluid doing between these two plates; one stationary, one moving. Well, a basic condition, which we state without justification, is that a fluid in contact with a surface has the same velocity as that surface.  This is known as the *no-slip condition*.  Therefore, the velocity of the fluid in contact with the bottom plate is zero and the velocity of the fluid in contact with the top plate is $v$.

If the thickness of the fluid is small we assume that the velocity increases from the lower stationary plate to the upper moving plate in a straight-line (linear) fashion.  This rate-of-change in velocity from the bottom plate to the top is known as the *shear rate* or *velocity gradient* or *strain* and expressed as $\Delta v/\Delta y$ (*i.e.* it's the slope of the velocity profile).  The shear rate is often written as $\dot{\gamma}$ (the Greek letter gamma with a dot--the dot represents a derivative) and has units $1/s$ (*i.e.* reciprocal seconds or inverse seconds).

The amount of applied shear stress that is necessary to generate a certain strain is a measure of the fluids viscosity.  For example, the external force required to generate the same upper-plate velocity in honey and water would be much larger for the honey (the honey is more viscous).

In practice a series of measurements would be performed where the external force (applied shear stress) is varied and the resultant strain rates recorded.  The graph below shows the results of such an experiment using Olive Oil.  Each data point (square) represents one such measurement.  For each applied shear stress (y-axis) there is one corresponding shear rate (x-axis).  

<div class="photo" style="width: 500px;">
  <img src="img\OliveOil.png" alt="Rheogram for Olive Oil">
  <p>
  Rheogram for Olive Oil -- a Newtonian fluid -- at $40\C$. Data from <a href="https://sites.google.com/site/jfsteffe/">Steffe</a>.
  </p>
</div>

One readily observes a linear relationship between the stress and strain for this particular fluid.   A fluid that exhibits this type of behavior is known as *Newtonian*.  The slope of the line in the stress-strain curve is known as the *dynamic* or *absolute viscosity*.  For a Newtonian fluid we therefore have

$$
\tau=\eta \left(\frac{\Delta v}{\Delta y}\right)
$$

where $\eta$ (Greek letter eta) is the dynamic viscosity, $\tau$ is the applied shear stress and $\Delta v/\Delta y$ is the shear rate.  

The dynamic viscosity has units of $\Pa\cdot s$ in the SI system and $\lb \cdot s/\ft^2$ in the US system.  Coming back to our example of Olive Oil we see that it has a dynamic viscosity of $\eta=0.0363\,\Pa \cdot s$.  

In many fluid property resources the dynamic viscosity will be given in an older unit call the centipoise (cP).  A centipoise is equivalent to a milli-Pa$\cdot s$ which is $1.0\times 10^{-3}\,\Pa\cdot s$.  So the viscosity of the Olive Oil considered above has a dynamic viscosity of $\eta=36.3 {\rm cP}$.

### Kinematic Viscosity

The *kinematic viscosity*, represented by the Greek letter nu ($\nu$) is defined as the ratio of the dynamic viscosity over the density of the fluid.

$$
\nu=\frac{\eta}{\rho}
$$

The reason for introducing the kinematic viscosity is that many calculations will end up involving precisely this ratio.  Based on the definition given above the units for kinematic viscosity in the SI system is $m^2/s$ and in the US system $\ft^2/s$.  Kinematic viscosities are oftentimes reported in an older unit called the centistoke whish is $1.0\times 10^{-6}\,\m^2/s=1~\mm^2/s$.

### Non-Newtonian fluids

The previous section described a fluid as Newtonian if there was a linear relationship between the applied stress and resulting strain.  This is an idealization and while it serves as a reasonable description of many of the fluids we will encounter other fluids are not so simple.


<div class="photo" style="width: 500px;">
  <img src="img\ShearStrainNonNewtonian.png" alt="Rheogram for Olive Oil">
  <p>

  </p>
</div>


<div class="photo" style="width: 500px;">
  <img src="img\ApparentViscosity.png" alt="Rheogram for Olive Oil">
  <p>

  </p>
</div>


### Temperature Dependence of Viscosity

The viscosity of a fluid can change drastically with temperature.  As far as I'm aware, all liquids experience a decrease in viscosity with an increase in temperature.  Think of motor oil, which is difficult to pour when cold but flows easily when the temperature is increased.  Gases follow the opposite trend, their viscosity increases with increasing temperature. Note that the viscosity of gases are less sensitive to temperature changes than liquids.   As an example, the dynamic viscosity of liquid water (curve below $100\C$) and water-vapor (curve above $100\C$) is shown in the figure below.  Note that the y-axis is a logarithmic scale.

<div class="photo" style="width: 500px;">
  <img src="img\VisWaterSteam.png" alt="Dynamic viscosity of liquid water and water-vapor.">
  <p>
Dynamic viscosity of liquid water and water-vapor on a log-linear plot.
  </p>
</div>

Viscosity Index



### Viscosity Measurement

## Pressure

### Pressure Measurement

## Compressibility

## Vapor pressure

## Surface tension






References:
