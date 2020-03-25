---
layout: course
title: Drag and Lift
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
\newcommand{\mm}{\mathrm{mm}}
\newcommand{\km}{\mathrm{km}}
\newcommand{\mi}{\mathrm{mi}}
\newcommand{\cm}{\mathrm{cm}}
\newcommand{\lb}{\mathrm{lb}}
\newcommand{\lbm}{\mathrm{lbm}}
\newcommand{\lbf}{\mathrm{lbf}}
\newcommand{\N}{\mathrm{N}}
\newcommand{\slug}{\mathrm{slug}}
\newcommand{\Pa}{\mathrm{Pa}}
\newcommand{\kPa}{\mathrm{kPa}}
\newcommand{\mph}{\mathrm{mph}}
\renewcommand{\psi}{\mathrm{psi}}
\newcommand{\C}{^\circ\mathrm{C}}
\newcommand{\F}{^\circ\mathrm{F}}
\newcommand{\Re}{\mathrm{Re}}
\newcommand{\WP}{\mathrm{WP}}
\newcommand{\L}{\mathrm{L}}
\newcommand{\gpm}{\mathrm{gpm}}
\newcommand{\cfm}{\mathrm{cfm}}
\newcommand{\fpm}{\mathrm{fpm}}
\newcommand{\inwg}{\mathrm{inH}_2\mathrm{O}}
$$

# Drag and Lift
{:.no_toc}

* A markdown unordered list for the toc
{:toc}

An object moving through a fluid will experience a force on it.  The force that acts opposite to the direction of motion we refer to as drag.  The force that acts perpendicular to the direction of motion we refer to as lift.

# Drag Force

The drag force on an object is

$$
F_D=C_D \left(\frac{\rho}{v^2}{2}\right) A
$$

In the above expression, $C_D$ is a dimensionless number known as the drag coefficient.  $rho$ is the density of the fluid.  $v$ is the velocity of the stream of fluid relative to the body. The stream could be moving with velocity $v$ while the body is at rest, of the fluid could be at rest and with the body moving with velocity $v$.
$A$ is a <em >characteristic area</a> of the body and will be defined carefully for each object in the subsequent sections.  It is usually taken as the largest cross-sectional area of the body, also known as the projected area.

The drag coefficient, $C_D$, depends on the shape and orientation of the body.  It also depends on the Reynolds number and the roughness of the object's surface.  It can also be influenced by other bodies in the vicinity of the object in question.

## Spheres

<div class="photo" style="width: 600px;">
  <a href="img/DragSphere.png"><img src="img/DragSphere.png" alt="Drag coefficient of a smooth sphere as a function of Reynolds number."></a>
  <p>
  Drag coefficient of a smooth sphere as a function of Reynolds number.
  Open triangles are data from <a href="https://doi.org/10.1017/S002211206500143X">Maxworthy, 1965</a>.
  Open squares are data from <a href="https://doi.org/10.2514/3.6164">Roos and Willmarth, 1971</a>.  
  The remaining data points are from earlier experiments,
  <a href="https://doi.org/10.1007/978-3-662-52919-5">Schlichting, 1979</a>
  </p>
</div>

## Cylinders

<div class="photo" style="width: 600px;">
  <a href="img/DragCylinder.png"><img src="img/DragCylinder.png" alt="Drag coefficient of a long smooth circular cylinder as a function of Reynolds number."></a>
  <p>
  Drag coefficient of a long smooth circular cylinder as a function of Reynolds number.  The circles with plus, ⊕,  are data from <a href="https://doi.org/10.1017/S002211206500109X">Jayaweera and Mason</a>.  The open circles are data from <a href="https://doi.org/10.1017/S0022112059000829">Tritton, 1959</a>.    The remaining data is from <a href="https://ntrs.nasa.gov/search.jsp?R=19930080855">Wieselsberger, 1922</a> and has legend entries corresponding to the various cylinder diameters employed in that work.
  </p>
</div>

