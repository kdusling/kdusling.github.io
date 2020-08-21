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
P_A=h_A \gamma Q
$$

The mechanical efficiency $e_M$ for a pump is

$$
e_M=\frac{P_A}{P_I}
$$

where $P_I$ is the input power to (*.i.e.* power consumed by) the pump.

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
