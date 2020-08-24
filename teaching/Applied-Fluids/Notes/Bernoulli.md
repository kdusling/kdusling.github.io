---
layout: course
title: The Bernoulli equation
---

# The Bernoulli equation
{:.no_toc}

* A markdown unordered list for the toc
{:toc}

Imagine an element of fluid, as shown below, moving in a pipe with a velocity $v$.  The fluid element has a pressure $p$, and is located at a distance $z$ above some reference elevation.

<div class="photo" style="width: 500px;  text-align:center">
<img src="img\bernoulli1.svg">
</div>

We will consider three forms of energy possessed by the fluid element:

1. kinetic energy

  The kinetic energy of the fluid element is the same as that as a projectile from physics 101. If the fluid element has a mass $m=w/g$ where $w$ is the weight of the fluid element its kinetic energy is $\frac{1}{2}w v^2/g$

2. potential energy

  Again, just as in physics 101, the potential energy of the fluid element is $wz$

3.  pressure energy

  Pressure energy is the energy stored by the fluid due to a force per unit area (a pressure) applied to it. Imagine a balloon at rest filled with air.  It's potential energy is negligible.  Now you untie the balloon and as the air escapes the balloon flies away.  The pressure energy stored in the balloon was converted to kinetic energy.  The pressure energy is $wp/\gamma$.

The total energy in the fluid element is then:

$$
E=\underbrace{\frac{wp}{\gamma}}_\textrm{pressure energy}+\underbrace{wz}_\textrm{potential energy}+\underbrace{\frac{w v^2}{2g}}_\textrm{kinetic energy}
$$


Now imagine this fluid element moving through a system.  As it travels from point 1 to 2 the total energy of the fluid element must remain unchanged. However, one

<div class="photo" style="width: 800px;  text-align:center">
<img src="img\bernoulli2.svg">
</div>

$$
E_1=\frac{wp_1}{\gamma}+w z_1 + w \frac{v_1^2}{2g}
$$


<div class="callout">
$$
\frac{p_1}{\gamma}+z_1+\frac{v_1^2}{2g}=\frac{p_2}{\gamma}+z_2+\frac{v_2^2}{2g}
$$
</div>

The assumptions include

+ The flow is steady
+ The fluid is incompressible
+ No losses due to friction
+ No heat addition or removal
+ No pumps or motors that add or remove energy from the system  

the potential energy, kinetic energy and pressure energy.
