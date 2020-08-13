---
layout: course
title: Fluid flow and the continuity equation
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
\newcommand{\R}{~\mathrm{R}}
\newcommand{\K}{~\mathrm{K}}
$$

# Fluid flow and the continuity equation
{:.no_toc}

* A markdown unordered list for the toc
{:toc}

## Flow rates

There are three closely related ways to express the amount of fluid flowing in a system per unit time.  The most basic one is the *volume flow rate* ($Q$) having dimensions of volume divided by time.  For example, a household faucet has a volume flow rate of about 2 gallons per minute.  If you close the drain in your sink and leave your faucet open for one minute your sink will contain about 2 gallons of water.

The volume flow rate through a section of pipe can be related to the pipe's cross-sectional area ($A$) and the average flow velocity ($v$) by the relation

$$Q=A\times v$$

Two quantities closely related to the volume flow rate are the *weight flow rate* ($W$) and the *mass flow rate* ($M$) which represent the weight or mass of the fluid flowing in the system per unit time.


<div class="table-responsive-lg">
<table class="table">
<caption>
Summary of flow rates
</caption>
<thead class="thead-dark">
<tr><th> Symbol </th><th> Name </th><th>  Definition</th><th> SI  </th><th>  USCS </th></tr>
</thead>
<tbody>
<tr><td>$Q$ </td><td> Volume flow rate </td><td> $Q=Av$  </td><td>  $\m^3/\s$</td><td>$\ft^3/\s$ </td></tr>
<tr><td>$W$ </td><td> Weight flow rate </td><td>$W=\gamma Q$ <BR> $W=\gamma A Q$  </td><td>  $\N/\s$</td><td>$\lb/\s$ </td></tr>
<tr><td>$M$ </td><td> Mass flow rate </td><td>$M=\rho Q$ <BR> $M=\rho A V$  </td><td>  $\kg/\s$</td><td>$\slug/\s$ </td></tr>
</tbody>
</table>
</div>

The standard flow rates of $\m^3/\s$ and $\ft^3/\s$ are very large flow rates and we will therefore more frequently use liters per minute (L/min) and gallons per minute (gpm).  Some useful conversion factors that are available on our <a href="https://kdusling.github.io/teaching/Applied-Fluids/ConversionFactors.html">table of conversion factors</a> include the following:

$$
\frac{\text{449 gal/min}}{\ft^3/\s}\qquad
\frac{\text{60,000 L/min}}{\m^3/\text{s}}\qquad
\frac{\text{3.785 L/min}}{\text{gal/min}}\qquad
\frac{\text{2119 ft$^3$/min}}{\m^3/\s}\qquad
\frac{\text{CFM}}{\ft^3/\text{min}}\qquad
\frac{\text{60 CFM}}{\ft^3/\s}
$$




<div class="example">
A 2&frac12;-inch discharge outlet on a fire hydrant has a flow rate of 500 gpm.  Convert this flow rate to L/min and to $\m^3/\s$.  Then estimate the average flow velocity in units of $\ft/\s$.

<hr>

First, convert the 500 gpm to L/min using the volume flow rate conversion factors listed above,

$$
500~\cancel{\text{gal/min}}\times \left(\frac{\text{3.785 L/min}}{\cancel{\text{gal/min}}}\right)=1,892.5~\text{L/min}
$$

Next, convert this result into $\m^3/\s$,

$$
1,892.5~\cancel{\text{L/min}}\times\left(\frac{\text{m}^3/\s}{60,000~\cancel{\text{L/min}}}\right)=0.0315~\m^3/\s
$$

In order to find the average flow velocity we make use of the definintion of the volume flow rate, $Q=Av$, and solve this for the flow velocity

$$
v=\frac{Q}{A}
$$

Since we want the flow velocity in units of $\ft/\s$ first convert the volume flow rate to $\ft^3/\s$:

$$
500~\cancel{\text{gal/min}}\times \frac{\ft^3/\s}{449~\cancel{\text{gal/min}}}=1.14~\ft^3/\s
$$

The cross sectional area of the 2&frac12;-inch pipe is

$$
A=\frac{\pi}{4}\left(0.208~\ft\right)^2 =0.0341~\ft^2
$$

The average flow velocity is therefore

$$
v=\frac{Q}{A}=\frac{1.14~\ft^3/s}{0.0341~\ft^2}=33~\ft/\s
$$

</div>

## Continuity equation

The continuity equation is a consequence of the conservation of mass, which  says that mass cannot be created or destroyed.  Consider the pipe system shown below.

<div class="photo" style="width: 600px;  text-align:center">
<img src="img\continuity.svg">
</div>



<a href="https://youtu.be/G4CgOF4ccXk">Volume flow rate and equation of continuity | Fluids | Physics | Khan Academy</a>


## Commercially available piping

First, the difference between pipe and tubes.  Tubing is generally used for structural purposes and therefore tends to be more expensive.  The sizing is typically specified by the tube's outer diameter and wall thickness.  Piping is used to transports fluids (gases or liquids).  Sizing for pipes is based on a nominal diameter and schedule number.  In many instances the terms piping and tubing are used interchangeably.  This class will be interested in piping.

### ASTM A53 standard

The ASTM A53 standard is the most common standard for carbon steel pipes.  It will also be the standard that we use most frequently, if not exclusively, in this class.  Here are two steel pipe data tables that we will use very often and therefore worth bookmarking:

<a href="https://kdusling.github.io/teaching/Applied-Fluids/SteelPipeTable.html?sch=40&mat=comSteel">Schedule 40 Steel Pipe Data Table</a>

<a href="https://kdusling.github.io/teaching/Applied-Fluids/SteelPipeTable.html?sch=80&mat=comSteel">Schedule 80 Steel Pipe Data Table</a>

Here are some additional references in case you come across other types of commercially available pipes:

<a href=" https://www.engineeringtoolbox.com/pvc-cpvc-pipes-dimensions-d_795.html">PVC and CPVC Pipes Schedule 40 & 80</a>

<a href="http://www.gizmology.net/pipe.htm">Copper, Wrought iron, Cast iron</a>
