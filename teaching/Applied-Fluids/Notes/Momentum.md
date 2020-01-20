---
layout: course
title: Momentum and forces in fluid flow
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

# Momentum and forces in fluid flow
{:.no_toc}

* A markdown unordered list for the toc
{:toc}

## Forces due to fluids in motion

It is often necessary to compute the force that a moving fluid imparts on the solid body.  For example, a power washer produces a high velocity jet of fluid which results in a large force on the object it hits.  Air flowing over the wing of an airplane produces a lift force and drag force.  As water flows through an elbow in a fire sprinkler system there is a resulting force on that elbow which must be accounted for.  All of these forces are a consequence of the change of momentum of the fluid.

Newton's second law states that rate of change of momentum of a body is directly proportional to the force applied.  For steady flows this results to the following force equations:

$$
F_x= \rho Q \Delta v_x \nonumber\\
F_y= \rho Q \Delta v_y \nonumber\\
F_z= \rho Q \Delta v_z
$$

In the above expression $F_x$ is the net force *acting on the fluid* in the x-direction.  This needs to be stressed:  $F_x$ is the sum of all forces (in the x-direction) acting on the fluid.  These forces may include reaction forces exerted from solid surfaces and the fluid pressure.  It is *not* the force which the fluid imparts on an object.  The following exercise will drive this point home.

The remaining quantities in the above force equation is the density, $\rho$ the volume flow rate $Q$, both of which we are familiar with.  The term, $\Delta v_x$, represents the change in the fluid velocity in the x-direction.  It is the fluid's final velocity in the x-direction minus the fluids initial velocity in the x-direction.


<div class="example">

A hose sprays a jet of water directly at a wall at a rate of 2 liters per second.  If the velocity of the stream is 8 m/s how much force is exerted on the wall by the water?

<hr>

In this problem I will assume that the water does not reflect from the wall but simply comes to rest.  The problem is therefore one-dimensional and the force required to bring the stream of fluid to rest is:

$$
F_x= \rho Q \Delta v_x
$$

$$
\Delta v_x = v_{fx}-v_{ix}=0-8~\m/s = -8~\m/s.
$$

$$
F_x= \rho Q \Delta v_x = \left(1000 kg/m^3\right) \left( 2 L/s\right)\left(0-8m/s)
$$
</div>
