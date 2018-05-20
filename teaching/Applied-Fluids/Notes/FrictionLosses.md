---
layout: course
title: Energy loss due to friction
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
\newcommand{\slug}{\mathrm{slug}}
\newcommand{\Pa}{\mathrm{Pa}}
\newcommand{\mph}{\mathrm{mph}}
\renewcommand{\psi}{\mathrm{psi}}
\newcommand{\C}{^\circ\mathrm{C}}
\newcommand{\F}{^\circ\mathrm{F}}
$$

# Energy loss due to friction
{:.no_toc}

* A markdown unordered list for the toc
{:toc}

# Energy loss in pipes due to friction

As a fluid flows through a pipe energy will be dissipated due to friction. As we will see the amount of energy lost will depend on the type of fluid, the fluid's velocity and the condition (*i.e.* material, roughness) of the pipe.

Losses due to friction will cause the pressure to decrease along the length of the pipe, therefore increasing the amount of power that a pump must deliver to the fluid.  These losses can become significant in systems where long stretches of piping are employed (for example, in heat exchangers, oil pipelines, fire protection systems, etc.).

The general energy equation was written as
$$
\frac{p_1}{\gamma}+z_1+\frac{v_1^2}{2g}+h_A-h_R-h_L=\frac{p_2}{\gamma}+z_2+\frac{v_2^2}{2g}
$$
where the term $h_L$ was the energy loss.  One component of the energy loss is due to friction.  For flow in pipes and tubes the energy loss is determined from Darcy's equation

$$
h_L=f\times \frac{L}{D}\times \frac{v^2}{2g}
$$

In the above expression $L$ is the length of pipe, $D$ its diameter, and $v$ the average velocity of flow.  The dimensionless quantity $f$ is called the friction factor.  The method of obtaining $f$ will depend on whether the flow is laminar or turbulent.

We all have an intuitive notion of what we mean by laminar or turbulent flow.  Laminar flow has the appearance of smooth and steady stream while turbulent flow appears chaotic and irregular and may contain eddies and swirls of fluid.
But how can we quantitatively predict how the flow will behave, in particular if the flow is occurring in an opaque pipe where observations of the flow cannot be made.

![Laminar and turbulent water flow over the hull of a submarine. By US Navy [Public domain], via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File%3ALos_Angeles_attack_sub_2.jpg)](https://upload.wikimedia.org/wikipedia/commons/8/8d/Los_Angeles_attack_sub_2.jpg){width=350px}

In an 1883 paper Osborne Reynolds showed that a single dimensionless number, now called the Reynolds number ($N_R$), determines whether the flow is laminar or turbulent.  The Reynold's number for round pipes is
$$
N_R=\frac{v D\rho}{\eta}=\frac{vD}{\nu}
$$

The quantities entering into the definition of the Reynold's number are summarized in the table below.


<table class="table table-striped">
<caption>
Quantities that enter into the determination of the Reynold's number for round pipes
</caption>
<thead>
<tr><th> Quantity </th><th> Symbol    </th><th>  SI units  </th><th>  US units</th></tr>
</thead>
<tbody>
<tr><td>Velocity            </td><td> $v$    </td><td> m/s           </td><td>  ft/s             </td></tr>
<tr><td>Diameter            </td><td> $D$    </td><td> $D$           </td><td>  ft               </td></tr>
<tr><td>Density             </td><td> $\rho$ </td><td> kg/m$^3$      </td><td>  slugs/ft$^3$     </td></tr>
<tr><td>Dynamic Viscosity   </td><td> $\eta$ </td><td> kg/m$\cdot$s  </td><td>  slugs/ft$\cdot$s </td></tr>
<tr><td>Kinematic Viscosity </td><td> $\nu$  </td><td> m$^2$/s       </td><td>  ft$^2$/s         </td></tr>
</tbody>
</table>

For practical purposes, if $N_R < 2000$ the flow is laminar and for $N_R>4000$ the flow is turbulent.  The range of Reynold's numbers between 2000 and 4000 is known as the *critical region* and the behavior of the flow is difficult if not impossible to predict.  The design of most systems will avoid flows in this regime.

::: {.example}
Glycerin at $25\C$ is pumped through a DN 125 schedule 80 steel pipe at an average velocity of $v=5~\m/\s$.  Is the flow laminar or turbulent?

------------------------------------------------------------------

To determine the nature of the flow we compute the Reynold's number.
$$
N_R=\frac{v D\rho}{\eta}
$$

From <a href="https://kdusling.github.io/teaching/Applied-Fluids/PropertiesOfCommonLiquids.html">this table</a> we find that for glycerin at $25\C$:
$$
\rho=1263~\kg/\m^3\,,\quad
\eta=9.50\times 10^{-1}~\Pa\cdot\s
$$
From <a href="https://kdusling.github.io/teaching/Applied-Fluids/SteelPipeTable.html?sch=80&mat=comSteel">this table</a> we find that for DN 125 schedule 80 pipe $D=122.3~\mm$.  We now have everything we need to find the Reynold's number
$$
N_R=\frac{v D\rho}{\eta}=\frac{\left(5~\m/\s\right)\left(0.1223~\m\right)\left(1263~\kg/\m^3\right)}{9.50\times 10^{-1}~\Pa\cdot\s}=813
$$

Notice that all the units cancel in the above expression resulting in a dimensionless Reynold's number.  Since $N_R=813$ is less than $2000$ the flow is laminar.
:::

## Friction losses in laminar flows

For laminar flows the friction factor can be derived but that goes beyond the scope of these notes.  For laminar flows, $N_R < 2000$, the friction factor is
$$
f=\frac{64}{N_R}
$$

As a side note, if we substitute the above friction factor into Darcy's equation (+@eq:Darcy) and replace the Reynold's number with the form given in +@eq:Reynolds we obtain what is known as the Hagen-Poiseuille equation
$$
h_L=\frac{32\eta L v}{\gamma D^2}
$$
This equation for $h_L$ is valid only for laminar flows.  Reminder, the Darcy Equation (+@eq:Darcy) for $h_L$ is valid for *both* laminar and turbulent flows as long as the appropriate friction factor is used.

In practice I never use the Hagen-Poiseuille equation.  Instead I use Darcy's equation along with $f=64/N_R$ for laminar flows.

::: {.example}
Glycerin at $25\C$ is pumped through $100~\m$ of DN 125 schedule 80 steel pipe at an average velocity of $v=5~\m/\s$.  Determine the energy loss.

------------------------------------------------------------------

From the previous example we found $N_R=813$ and therefore expect the flow to be laminar.  The energy loss is determined from Darcy's equation
$$
h_L=f\times \frac{L}{D}\times \frac{v^2}{2g}
$$
Since the flow is laminar we take
$$
f=\frac{64}{N_R}=\frac{64}{813}=0.0787
$$
and therefore have
$$
h_L=0.0787\times \frac{100~\m}{0.1223~\m}\times \frac{\left(5~\m/\s\right)^2}{2(9.81~\m/s^2)}=82~\m
$$
Remember that the quantity $h_L$ is the energy loss per unit weight.  We can write it as $h_L=82~\N\cdot \m/\N=82~{\rm J}/\N$.  This means that for every newtwon of glycerin that flows through the 100 meters of pipe 82 joules of energy will be dissipated.

:::

## Friction losses in turbulent flows


# Hydraulic Diameter

# Minor Losses

Energy losses through valves, bends, expansions, contractions, gauges,
flow meters, etc, are generally referred to as *minor losses*. Note that
the cumulative effect of a number of *minor losses* can be substantial.

Energy losses are proportional to the velocity head near the component
of interest. The energy loss through a component can be expressed as
$$ h_L=K\left(\frac{v^2}{2g}\right) $$ where $h_L$ is the
minor loss, $K$ is the resistance coefficient and $v$ is the average
velocity in the pipe in the vicinity of the component. The velocity that
is used in the above expression will depend on the specific problem.

## Sudden Enlargement

As fluid flows through an enlargement the decrease in velocity (think
continuity eqn) is accompanied by an increase in pressure (think
Bernoulli\'s eqn). If the enlargement is sharp or sudden regions of
turbulence develop in the corners of the larger pipe. The regions of
turbulence result in the dissipation of kinetic energy into internal
energy. The energy loss (expressed as a loss of head) is written as $$
h_L=K\left(\frac{v_1^2}{2g}\right) $$ where $v_1$ is the
velocity in the *smaller* section of pipe.

![Cartoon of flow through an abrupt enlargement.](img\expansion.png)

Under some [simplifying assumptions the resistive coefficient can be derived](http://www.nptel.ac.in/courses/112104118/lecture-14/14-6_losses_sudden_enlarg.htm):

$$ K\approx \left[1-\frac{A_1}{A_2}\right]^2 $$ The above
expression works fairly well for moderate velocities and is a reasonable
starting point for estimating losses due to a sudden expansion. If the
sudden transition between pipe sizes can be made more gradual the energy
loss can be reduced. A *diffuser* converts kinetic energy to pressure
energy by a gradual enlargement in pipe size.

### Exit Loss

When a fluid flows from a pipe into a large tank or reservoir all of the
kinetic energy is dissipated (the kinetic energy in the static tank is
zero). This can be treated as a limiting case of sudden expansion by
taking $A_1\to 0$ in our expression for the resistive coefficient.
This results in $K\to 1$ and a head loss of $$
h_L=1.0\left(\frac{v_1^2}{2g}\right) $$

![*Exit loss* results from a fluid flowing into a static
reservoir.](img\exitloss.png)

Sudden Contraction
------------------

A sudden contraction in a pipe results in a drop in pressure due to the
sudden increase in velocity and the loss of energy due to turbulence.
The energy loss (expressed as a loss of head) is written as $$
h_L=K\left(\frac{v_2^2}{2g}\right) $$ where $v_2$ is the
velocity in the *smaller* section of pipe downstream of the contraction.

The mechanism of energy loss in a contraction is much more complex than
that of an expansion. The cartoon below shows the path of the flow
stream. Regions of turbulence develop both before the contraction and
after the contraction. The region where the cross-section is minimum is
known as the *vena contracta*.

A number of empirical equations for the resistance coefficient for
sudden contraction can be found in the literature. One of the [simplest
I found](http://amzn.to/2hla1qx) is a good starting point for rough
estimates of losses in sudden contractions. $$ K\approx
0.5\left[1-\frac{A_2}{A_1}\right] $$ In practice however more
accurate resistive coefficients should be taken from other resources
such as [CRANE Technical Paper 410](http://amzn.to/2zzrC8C).

![Cartoon of flow through a sudden contraction.](img\contraction.png)

### Entrance Loss

The losses that occur when a fluid flows from a larger reservoir or tank
into a pipe are called *entrance losses*. For a square-edged inlet as
shown in the cartoon below the resistive coefficient is
$K\approx0.5$. This is the limiting case of $A_1\to \infty$ in
the equation for $K$ above. Chamfered and rounded inlets have smaller
resistance coefficients. For a chamfered inlet $K\approx 0.25$ and
for a well-rounded inlet $K\approx 0.04$.

![*Entrance loss* results from a fluid flowing from a large tank or
reservoir into a pipe.](img\entranceloss.png)

Valves and Fittings
-------------------

The same formula is applied for losses though a valve or fitting $$
h_L=K\left(\frac{v^2}{2g}\right) $$ where $v$ is the velocity
at the valve. The resistance coefficient is typically expressed as $$
K=\left(L_e/D\right)f_T $$ where the factor
$\left(L_e/D\right)$ is called the equivalent length ratio and is
usually considered to be a constant for a given type of valve or
fitting. Values for $\left(L_e/D\right)$ for some common types of
valves and fittings is given in the [table below](#LeOverD). The term
$f_T$ is the friction factor in the pipe to which the valve is
connected taken in the zone of complete turbulence. The tables for
[Schedule 40](../SteelPipeTable.html?sch=40&mat=comSteel) and [Schedule
80](../SteelPipeTable.html?sch=40&mat=comSteel) list the values of
$f_T$ for commercial steel pipes.

  Fitting Type                         Equivalent Length, $L_e/D$
  ------------------------------------ -------------------------------
  Gate valve (fully open)              8
  Globe valve (fully open)             340
  Angle valve (fully open)             150
  Butterfly valve (fully open):
       50 mm (2\") - 200 mm (8\")      45
       250 mm (10\") - 350 mm (14\")   35
       400 mm (16\")- 600 mm (24\")    25
  90° standard elbow                   30
  45° standard elbow                   16
  Close pattern return bend            50

The value of $L_e$ is called the equivalent length of pipe; it is the
length of straight pipe that would produce the same loss as the valve.
For example a 2\" fully open globe valve $(L_e/D=340)$ has $L_e
\approx 57~\ft$. This value of $L_e$ can than be added to the
actual length of pipe to determine the total losses. While convenient,
this procedure is only accurate when the actual pipe flows are in the
zone of complete turbulence.

<img style="float: left;" src="img/wafer-type-centerline-butterfly-valve.jpg">
<img style="float: left;" src="img/knife-gate-valve.jpg">
<img style="" src="img/din-globe-valve.jpg">

*Left: Wafer type centerline butterfly valve. Middle: Knife gate
valve.  Right: A DIN globe valve. Images from [Metals Valve](http://www.metalsvalve.com).*
