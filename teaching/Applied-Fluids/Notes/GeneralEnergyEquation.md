---
layout: course
title: General Energy Equation
---


# General Energy Equation
{:.no_toc}

* A markdown unordered list for the toc
{:toc}

# The General Energy Equation

The general energy equation is an extension of Bernoulli's equation to account for energy additions, removals and losses from pumps, motors and friction respectively.  We will continue to work in terms of *head* or the energy per unit weight of the fluid in the system.  

The general energy equation is

$$
\frac{p_1}{\gamma}+z_1+\frac{v_1^2}{2g}+h_A-h_R-h_L=\frac{p_2}{\gamma}+z_2+\frac{v_2^2}{2g} \qquad\qquad ({\rm Flow}: 1 \rightarrow 2)
\,,
$$

where

$$
\begin{align*}
h_A&= \text{energy added to the fluid by a pump} \\
h_R&= \text{energy removed from the fluid by a motor} \\
h_L&= \text{energy lost in the system due to friction}
\end{align*}
$$

We will not consider the effects of heat transferred into or out of the fluid in this course.  The energy lost as the fluid travels through straight sections of pipe or through values and fittings is proportional to the velocity head in the vicinity of the loss

$$
h_L=K\left(\frac{v^2}{2g}\right)
$$

The next chapter will discuss methods for determining $K$.  In most circumstances the value of $K$ will be found from experimental data.


<div class="example">

A 2-in schedule 40 steel pipe contains a gate valve as shown in the figure below. As 75 gpm of hexane flows from left to right a pressure drop of 0.03 psi is recorded.  Calculate the energy loss in the valve.  Then calculate the resistance coefficient $K$ of the gate valve if the energy loss is expressed as $K\left(v^2/2g\right)$.

<img src="img/minorloss.svg" alt="Minor Loss from gate valve">

<hr>

We start with the general energy equation and remove those terms listed below that don't contribute in this example.  

<table class="table">
<tr><td>$z_1=z_2$</td><td>The pipe is horizonal.</td></tr>
<tr><td>$v_1^2/2g=v_2^2/2g$</td><td>Continuity equation sets $v_1=v_2$</td></tr>
<tr><td>$h_A=0$</td><td>No pumps in system.</td></tr>
<tr><td>$h_R=0$</td><td>No motors in system.</td></tr>
</table>

In this example the general energy equation simplifies to

$$
\frac{p_1}{\gamma}-h_L=\frac{p_2}{\gamma}\,,
$$

and we can rearrange this to solve for $h_L$:

$$
h_L=\frac{p_1-p_2}{\gamma}
$$

The pressure drop is
$$
p_1-p_2=0.03~\mathrm{psi} = 4.32~\lb/\ft^2
$$

The specific weight of hexane is taken from <a href="https://kdusling.github.io/teaching/Applied-Fluids/PropertiesOfCommonLiquids.html">here</a>.

$$
\gamma=41~\lb/\ft^3
$$

$$
h_L=\frac{p_1-p_2}{\gamma}=\frac{4.32~\lb}{\ft^2}\times\frac{\ft^3}{41~\lb}=0.105~\ft
$$

We can find the resistance coefficient, $K$, from the expression

$$
h_L=K\left(\frac{v^2}{2g}\right)\longrightarrow K=\frac{h_L}{v^2/2g}
$$

First we compute the velocity head:

$$
Q=75~\gpm\times\left(\frac{1~\ft^3/s}{449~\gpm}\right)=0.167~\ft^3/s\nonumber\\
v=\frac{Q}{A}=\frac{0.167~\ft^3/s}{0.02330~\ft^2}=7.17~\ft/s \nonumber\\
\frac{v^2}{2g}=0.8~\ft
$$

$$
K=\frac{h_L}{v^2/2g} =\frac{0.105~\ft}{0.8~\ft}=0.13
$$

</div>

## Power requirements and efficiency of pumps

The power transferred to the fluid by a pump is

$$
P_A=h_A W\,,
$$

where $W$ is the weight flow rate (having units of $\N/\s$ or $\lb/\s$).  Since $W=\gamma Q$ we can also express this as

$$
P_A=h_A \gamma Q\,.
$$

Not all of the input power to the pump is delivered to the fluid.
The mechanical efficiency $e_M$ of a pump is defined as

$$
e_M=\frac{\text{Power delivered to fluid}}{\text{Power input to pump}}=\frac{P_A}{P_I}
$$

The mechanical efficiency will always be less than 1.0.


<div class="example">

A manufacturer of a gear pump reports that 1.2 hp is required to pump 10 gpm of oil (sg=0.90) at a total head of 400 ft.  What is the efficiency (in percent) of this pump under these operating conditions?

<hr>

In this example the power input to the pump is 1.2 hp.  We first convert this into $\lbftovs$.

$$
P_I=1.2 ~\cancel{\text{hp}} \times\left(\frac{550~\lbftovs}{1~\cancel{\text{hp}}}\right)=660~\lbftovs
$$

The power delivered to the fluid will be calculated from $P_A=h_A \gamma Q$ where $h_A$ is the total head on the pump,

$$
\gamma = 0.9\times 62.4~\lb/\ft^3=56.2~\lb/\ft^3\,,
$$

and

$$
Q=10~\cancel{\text{gpm}}\left(\frac{1~\ft^3/\s}{449~\cancel{\text{gpm}}}\right)=0.0223~\ft^3/\s\,.
$$

Putting this together we find that the power delivered to the fluid is

$$
P_A=h_A \gamma Q = \left(400~\ft\right) \left(56.2~\lb/\ft^3\right) \left(0.0223 ~\ft^3/\s\right)=501~\lbftovs
$$

and converting back to horsepower:

$$
P_A=501~\cancel{\lbftovs} \times\left(\frac{1~\text{hp}}{550~\cancel{\lbftovs}}\right)=0.91~\hp
$$

The mechanical efficiency of the pump is

$$
e_M=\frac{P_A}{P_I}=\frac{0.91~\hp}{1.2~\hp}=0.76=76\%
$$

</div>



## Power requirements and efficiency of motors

The energy delivered by a fluid to a motor or turbine is denoted in the general energy equation by $h_R$.  The power delivered to the motor from the fluid ($i.e.$ the power removed from the fluid) is

$$
P_R=h_R W = h_R \gamma Q
$$

Not all of the energy delivered to the motor is ultimately converted to useful power output.  The mechanical efficiency $e_M$ of a motor is defined as

$$
e_M=\frac{\text{Power output from motor}}{\text{Power delivered to motor}}=\frac{P_O}{P_R}
$$

<div class="example">

A hydroelectric power plant receives water at a rate of $50~\m^3/\s$ from an elevation of $75~\m$. The power is generated by a turbine-generator having an efficiency of 85%.  Neglecting frictional losses in the piping what is the power output of this power plant?

<hr>

The power delivered to the motor is

$$
P_R= h_R \gamma Q = \left(75~\m\right)\left(9.81~\kN/\m^3\right)\left(50~\m^3/\s\right)=37,300~\mathrm{kW}=37~\mathrm{MW}
$$

Not all of the power delivered to the motor by the fluid is converted into useful output power.  In this case the power output of the turbine-generator is

$$
P_O=e_M P_R = \left(0.85\right)\left(37~\mathrm{MW}\right)=32~\mathrm{MW}
$$

</div>
