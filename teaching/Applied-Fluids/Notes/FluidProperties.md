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

A *fluid* is a substance that continually deforms or flows under an applied shear stress.  While in common parlance a fluid typically refers to a liquid, in the sciences the term fluid can refer to a liquid or a gas.  For this course, our working definition of a *liquid* is a fluid that is incompressible ([see below](#Compressibility)).

The sections below will go through a number of physical properties that are commonly used to characterize fluids.  

## Density, specific weight & specific gravity

### Density

The *density* of the fluid is its mass per unit volume:

$$
\textrm{density}=\textrm{mass}/\textrm{Volume}\\
$$

The density is represented by the Greek letter $\rho$ (rho).  If a quantity of fluid has a mass $m$ and a volume $V$, its density can be expressed as

$$
\rho=m/V
$$

The units for density are $\kg/\m^3$ in the SI system and $\slug/\ft^3$ in the U.S. Customary System.

### Specific weight

The *specific weight* of the fluid is its weight per unit volume:

$$
\textrm{specific weight}=\textrm{weight}/\textrm{Volume}\\
$$

The specific weight is represented by the Greek letter $\gamma$ (gamma).  If a quantity of fluid has a weight $s$ and a volume $V$, its specific weight can be expressed as

$$
\gamma=w/V
$$

The units for density are $\N/\m^3$ in the SI system and $\lb/\ft^3$ in the U.S. Customary System.

It is simple to convert between the density and specific weight.  Since the weight of a fluid is just its mass times gravity, $w=mg$ ($g$ being the acceleration due to gravity), the specific weight can be computed from the density via

$$
\gamma=\rho g
$$

### Specific gravity

It is often convenient to report the density or specific weight of a fluid with respect to a given reference fluid (water at $4\C$ will be used in this class).  The specific weight and density of water at $4\C$ is:

$$
\gamma=9.81~\text{kN}/\text{m}^3=62.4~\text{lb}/\text{ft}^3 \qquad
\rho=1000~\text{kg}/\text{m}^3=1.94~\text{slugs}/\text{ft}^3
$$

The specific gravity of a substance is its density (or specific weight) divided by the density (or specific weight) of water at $4\C$.

$$
\begin{align}
\sg&=\frac{\gamma}{9.81~\kN/\m^3}=\frac{\rho}{1000~\kg/\m^3} \qquad\qquad \textrm{SI system}\\
\sg&=\frac{\gamma}{62.4~\lb/\ft^3}=\frac{\rho}{1.94~\slug/\ft^3} \qquad\qquad \textrm{USCS}
\end{align}
$$

Note that the specific gravity of a fluid is dimensionless. Remember, that the three quantities (density, specific weight and specific gravity) we just introduced are three ways of representing the same thing (the amount of fluid per unit volume).  In the following examples we will demonstrate how the concepts are commonly used.

<div class="example">
An oil barrel has a volume of $0.16~\m^3$ and a mass of $140~\kg$.  Compute the weight of the barrel.  Then compute the density, specific weight and specific gravity of the oil.  

<hr>

To compute the weight we use $w=mg$ where $g=9.81~\m/s^2$.  We have

$$
w=140~\kg\times 9.81~\m/s^2=1373~\kg\cdot\m/s^2
$$

A $\kg\cdot\m/s^2$ is a Newton (N) and the weight is therefore

$$
w=1373~\N=1.373\times 10^3 \N=1.373 \kN
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

We note that the units cancel when compute the specific gravity leaving us with a dimensionless quantity as expected.

</div>

<div class="example">

Glycerine at $77\F$ has a specific weight of 1.263.  Compute its density and specific weight.  How much does a gallon of Glycerine weigh?

<hr>

Since Fahrenheit was used in the statement of the problem it makes sense to work in the US system of units.  The density and specific weight can be found by multiplying the specific gravity with the density and specific weight of water.  First compute the density:

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

## Pressure

## Compressibility

## Vapor pressure

## Surface tension


## Viscosity




References:
