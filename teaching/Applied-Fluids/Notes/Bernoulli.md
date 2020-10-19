---
layout: course
title: The Bernoulli equation
---

# The Bernoulli equation
{:.no_toc}

* A markdown unordered list for the toc
{:toc}

Imagine an element of fluid, as shown below, moving in a pipe with average velocity $v$.  The fluid element has pressure $p$, and is located at a distance $z$ above some reference elevation.

<div class="photo" style="width: 500px;  text-align:center">
<img src="img\bernoulli1.svg">
</div>

We will consider three forms of energy possessed by the fluid element:

1. kinetic energy

    The kinetic energy of the fluid element is the same as that as a projectile in physics 101, $KE= \sfrac{1}{2} m v^2$. Replacing the mass of the fluid element with its weight, $m=w/g$, where $g$ is the acceleration due to gravity the kinetic energy of the fluid element becomes $\sfrac{1}{2} w v^2/g$.

2. potential energy

    Again, as in physics 101, the potential energy of the fluid element is $mgz=wz$, where $z$ is the vertical distance from some reference elevation.

3.  pressure energy

    Pressure energy is the energy stored by the fluid due to a force per unit area (a pressure) applied to it. Imagine a balloon at rest filled with air.  It's kinetic is zero.  Now you untie the balloon and as the air escapes the balloon flies away.  The kinetic energy of the balloon came from the pressure energy previously stored within it.  The pressure energy is expressed as $wp/\gamma$.

In summary, the total energy of this fluid element is:

$$
E=\underbrace{\frac{wp}{\gamma}}_\textrm{pressure energy}+\underbrace{wz}_\textrm{potential energy}+\underbrace{\frac{w v^2}{2g}}_\textrm{kinetic energy}
$$

Now imagine this fluid element moving through the system shown below.  The fluid element starts at point 1 with velocity $v_1$, a pressure $p_1$, and an elevation $z_1$.  It flows through the system to point 2 where it has a velocity $v_2$, a pressure $p_2$, and an elevation $z_2$.


<div class="photo" style="width: 500px;  text-align:center">
<img src="img\bernoulli2.svg">
</div>

At point 1 the total energy of fluid element is

$$
E_1=\frac{wp_1}{\gamma}+w z_1 + \frac{w v_1^2}{2g}
$$

and at point 2 the total energy in fluid element is

$$
E_2=\frac{wp_2}{\gamma}+w z_2 + \frac{w v_2^2}{2g}
$$

The conservation of energy requires that $E_1=E_2$.  Equating the above two expressions for $E_1$ and $E_2$ we arrive at

$$
\frac{wp_1}{\gamma}+w z_1 + \frac{w v_1^2}{2g}=\frac{wp_2}{\gamma}+w z_2 + \frac{w v_2^2}{2g}
$$

Finally, divide through by the common factor of $w$ and we have

<div class="callout">
**Bernoulli's equation:**

$$
\frac{p_1}{\gamma}+z_1+\frac{v_1^2}{2g}=\frac{p_2}{\gamma}+z_2+\frac{v_2^2}{2g}
$$

Each term in the above equation has units of length.  Please check that this is indeed the case.  This might seem strange since Bernoulli's equation is a statement regarding conservation of energy.  What happened is that energy turned into length when we divided through by the weight, $w$, of the fluid element.  We can therefore interpret each term as an "energy put unit weight of fluid" with units of $\frac{\N\cdot \m}{N}$ (SI) or $\frac{$\lb \cdot \ft}{\lb}$. 

</div>

The assumptions include

+ The flow is steady
+ The fluid is incompressible
+ No losses due to friction
+ No heat addition or removal
+ No pumps or motors that add or remove energy from the system  

the potential energy, kinetic energy and pressure energy.
