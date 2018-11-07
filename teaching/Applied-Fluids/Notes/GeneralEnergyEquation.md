---
layout: course
title: General Energy Equation
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
$$

# General Energy Equation
{:.no_toc}

* A markdown unordered list for the toc
{:toc}

# General Energy Equation

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



<a title="By Jahobr [CC0], from Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Gear_pump_animation.gif"><img width="512" alt="Gear pump animation" src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Gear_pump_animation.gif"></a>




We use *Darcy's equation*
 to calculate the loss due to friction in pipes,


$$

h_L=f\times \frac{L}{D}\times \frac{v^2}{2g}
\,.
$$


In the above expression $L$ is the length of pipe, $D$ its diameter, and $v$ the average velocity of flow.  The dimensionless quantity $f$ is called the *friction factor*.  The method of obtaining $f$ will depend on whether the flow is laminar or turbulent.
  We all have an intuitive notion of what we mean by laminar and turbulent flow.  Laminar flow has the appearance of a smooth and steady stream while turbulent flow appears chaotic and irregular and may contain eddies and swirls of fluid.
  But how can we predict the flow's behavior, in particular if the flow is occurring in an opaque pipe where observations can't be made.


<div class="photo" style="width: 400px;">
  <img src="img/FL_rapids.jpg">
  <!-- https://pixabay.com/en/rapids-water-turbulence-flowing-355737/ -->
  <p>
  Laminar and turbulent water flow.
  </p>
</div>


In a <a href="http://rstl.royalsocietypublishing.org/content/174/935">1883 paper</a> Osborne Reynolds showed that a single dimensionless number, now called the *Reynolds number* ($\Re$), determines whether the flow is laminar or turbulent.  The Reynolds number for round pipes is

$$

\Re=\frac{v D\rho}{\eta}=\frac{vD}{\nu}

$$
