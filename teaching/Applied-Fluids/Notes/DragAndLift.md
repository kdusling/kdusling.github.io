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

# Spheres

<div class="photo" style="width: 600px;">
  <a href="img/DragSphere.png"><img src="img/DragSphere.png" alt="Drag coefficient of a smooth sphere as a function of Reynolds number."></a>
  <p>
  Drag coefficient of a smooth sphere as a function of Reynolds number.
  Open triangles are data from <a href="https://doi.org/10.1017/S002211206500143X">Maxworthy, 1965</a>.
  Open squares are data from <a href="https://doi.org/10.2514/3.6164">Roos and Willmarth, 1971</a>.  
  The remaining data points are from earlier experiments,
  "https://doi.org/10.1007/978-3-662-52919-5">Schlichting, 1979</a>
  </p>
</div>


<div class="photo" style="width: 600px;">
  <a href="mg/DragCylinder.png"><img src="img/DragCylinder.png" alt="Drag coefficient of a long smooth circular cylinder as a function of Reynolds number."></a>
  <p>
  Drag coefficient of a long smooth circular cylinder as a function of Reynolds number.  The circles with plus, ⊕,  are data from <a href="https://doi.org/10.1017/S002211206500109X">Jayaweera and Mason</a>.  The open circles are data from <a href="https://doi.org/10.1017/S0022112059000829">Tritton, 1959</a>.    The remaining data is from <a ref="https://ntrs.nasa.gov/search.jsp?R=19930080855">Wieselsberger, 1922</a> and has legend entries corresponding to the various cylinder diameters employed in that work.
  </p>
</div>

# Friction losses in straight runs

<div class="example">
Air flows at 6000 cfm through 80 ft of circular duct having a diameter of 28 inches.  Compute the flow velocity of the air in the duct and the losses due to friction.  Take the roughness of the duct to be that of medium smooth galvanized steel, $\epsilon=0.0036~\inch$.

<hr>

The air velocity is found from the continuity equation:

$$
v=\frac{Q}{A}=144 \frac{6000}{\pi/4(28)^2}=~1400 \fpm
$$

The Reynolds number of the flow is
$$
\Re=8.6 v D=8.6(1400)(28)=337,000
$$
and therefore turbulent.  The relative roughness is
$$
\epsilon/D=0.0036/28=0.00013
$$
and the friction factor $f=0.01545$ is obtained from <a href="https://kdusling.github.io/teaching/Applied-Fluids/FrictionFactor.html">our online calculator</a>.

The pressure drop is then:

$$
\Delta p_f=12 f \frac{L}{D}p_v=12(0.01545)\frac{80}{28}\left(\frac{1400}{4005}\right)=0.064~\inwg
$$

Alternatively we can use the ASHRAE friction chart.

<div class="photo" style="width: 100%;">
  <a href="img/DuctFrictionExample.png" target="blank"><img src="img/DuctFrictionExample.png" alt="ASHRAE friction example"></a>

  <p>
  For a volume flow rate of $Q=6000~\cfm$ and duct diameter $D=28~\inch$ we find the air velcoity is $v=1400~\fpm$ and the pressure drop per 100 feet of duct is $0.08~\inwg$.
  </p>
</div>


  This allows us to find the friction in 100 feet of duct.  In our case we have 80 feet of duct.  The pressure drop is therefore

$$
\Delta p_f=0.08\frac{\inwg}{100~\ft}\times 80~\ft=0.064~\inwg
$$

</div>


For ducts of non-circular cross section we define the equivalent diameter as

$$
d_e=1.55\frac{ \mathrm{A}^{0.625} }{ \mathrm{WP}^{0.25} }
$$

where A is the area of the duct and WP is the wetted perimeter.  Ducts that have the same $d_e$ have the same friction loss.  The table <a href="../DuctEquivDiameter.html">Equivalent diameter of rectangular and flat oval ducts</a> computes the equivalent diameter of rectangular ducts and flat oval ducts using the formula given above.

<div class="example">
Find a rectangular duct and a flat oval duct that would have approximately the same friction as a circular duct of diameter 28 inches.

<hr>

From the <a href="../DuctEquivDiameter.html">table of equivalent diameters of rectangular and flat oval ducts</a> we find that a $22\times 30~\inch$ rectangular duct has an equivalent diameter of 28.1 inches, close enough to our circular duct of diameter 28 inches.  

From the same set of tables we see that a flat oval duct with a major axis of 30 inches and a minor axis 24 inches has an equivalent diameter of 27.5 inches,  close to our circular duct of diameter 28 inches.  A duct having  a minor axis of 26 inches would also be an acceptable choice as this has an equivalent diameter of 28.4 inches.


</div>
