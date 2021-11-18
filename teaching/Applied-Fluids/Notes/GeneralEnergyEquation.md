---
layout: course
title: General Energy Equation
---


# General Energy Equation
{:.no_toc}

* A markdown unordered list for the toc
{:toc}

We will now expand the applicability of Bernoulli's equation to account for energy additions, removals and losses from pumps, motors and friction respectively.  We will continue to work in terms of *head* or the energy per unit weight of the fluid in the system.  

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
Q=10~\cancel{\text{gpm}}\left(1~\frac{\ft^3/\s}{449~\cancel{\text{gpm}}}\right)=0.0223~\ft^3/\s\,.
$$

Putting this together we find that the power delivered to the fluid is

$$
P_A=h_A \gamma Q = \left(400~\ft\right) \left(56.2~\lb/\ft^3\right) \left(0.0223 ~\ft^3/\s\right)=501~\lbftovs
$$

and converting back to hp:
$$
P_A=501~\cancel{\lbftovs} \times\left(\frac{1~\text{hp}}{550~\cancel{\lbftovs}}\right)=0.91~\hp
$$

The mechanical efficiency of the pump is

$$
e_M=\frac{P_A}{P_I}=\frac{0.91~\hp}{1.2~\hp}=0.76=76\%
$$

</div>



## Power requirements and efficiency of motors

The power removed from the fluid by a motor is

$$
P_R=h_R \gamma Q
$$

The mechanical efficiency $e_M$ for a motor is

$$
e_M=\frac{P_O}{P_R}
$$

where $P_O$ is the power output of the motor.
