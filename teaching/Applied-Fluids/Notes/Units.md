---
layout: course
title: Dimensions & Units
---

$$
\newcommand{\lb}{\mathrm{lb}}
\newcommand{\lbm}{\mathrm{lbm}}
\newcommand{\lbf}{\mathrm{lbf}}
\newcommand{\N}{\mathrm{N}}
\newcommand{\slug}{\mathrm{slugs}}
\newcommand{\Pa}{\mathrm{Pa}}
\newcommand{\mph}{\mathrm{mph}}
\renewcommand{\psi}{\mathrm{psi}}
\newcommand{\C}{^\circ\mathrm{C}}
\newcommand{\F}{^\circ\mathrm{F}}
\newcommand{\R}{~\mathrm{R}}
\newcommand{\K}{~\mathrm{K}}
$$

# Dimensions & Units
{:.no_toc}

* A markdown unordered list for the toc
{:toc}

As you will soon discover a fluency with unit conversions is absolutely essential. A careful watch over units can prevent errors from occurring and in some instances a problem can be solved by dimensional analysis alone.

Though used interchangeably there is a subtle distinction between the meaning of the words unit and dimension. A *dimension* is a measure of some physical quantity without assigning it a numerical value. A choice of *units* is a way to assign a numeric value to a given dimension. For example, length is a dimension and it can be expressed in units of meters, feet, inches, fathoms (1 fathom = 6 ft), etc.

There are seven primary (or base) dimensions: mass, length, time, temperature, electric current, amount of light, and amount of matter.  In fluid mechanics we will make use of the first four: mass, length, time, and temperature.

From these base dimensions other derived quantities can be defined. A simple example of a derived quantity is that of area. Area has
dimensions of length squared and the units can be anything from $\cm^2$, m$^2$, ft$^2$, acres ($1~\textrm{acre}=43,560~\ft^2$), barns ($1~\textrm{barn} = 10^{-28}~\m^2$), etc. Examples of other derived quantities that you are already familiar with include volume, velocity, acceleration, and force.

After a [failed effort](https://www.vox.com/2014/5/29/5758542/time-for-the-US-to-use-the-metric-system) to move the United States over to the metric system we are unfortunately burdened with the use of two disparate system of units. If you live/work in the United States you absolutely must know both.

## The International System of Units (SI)

We first introduce the International System of Units (SI) which is closely related (often used synonymously) with the metric system. [Table 1](#tabSI) shows an abbreviated list of units in the SI system. NIST [hosts a great website](https://physics.nist.gov/cuu/Units/index.html) on SI units.


<table class="table table-striped">
<caption>
Table 1: The international system of units (SI). Force is a derived unit and can be expressed in terms of SI base units as $\mathrm{N}=\mathrm{kg}\cdot\mathrm{m/s}^2$. <a name="tabSI"></a>
</caption>
  <thead>
    <tr><th>Quantity</th><th>Name</th><th>Symbol</th></tr>
  </thead>
  <tbody>
    <tr><td>length</td><td>meter</td><td>m</td></tr>
    <tr><td>time</td><td>second</td><td>s</td></tr>
    <tr><td>mass</td><td>kilogram</td><td>kg</td></tr>
    <tr><td>temperature</td><td>Kelvin</td><td>K</td></tr>
    <tr><td>force</td><td>Newton</td><td>N</td></tr>
  </tbody>

</table>

Because the actual size of physical quantities can vary depending on the
problem at hand prefixes can be added to the basic quantities above when
working in the SI system.  [Table 2](#SIprefix) shows some commonly used
prefixes.

<table class="table table-striped">
<caption>
  Table 2: Common SI unit prefixes <a name="SIprefix"></a>
</caption>
<thead>
<tr><th>Prefix </th><th>   SI symbol </th><th>  Factor  </th></tr>
</thead>
<tbody>
  <tr><td>mega   </td><td>   M      </td><td class="text-left">  $10^6\phantom{^{-}}=1\,000\,000$ </td></tr>
  <tr><td>kilo   </td><td>   k      </td><td class="text-left">  $10^3\phantom{^{-}}=1\,000$ </td></tr>
  <tr><td>centi  </td><td>   c      </td><td class="text-left">  $10^{-2}=0.01$ </td></tr>
  <tr><td>milli  </td><td>   m      </td><td class="text-left">  $10^{-3}=0.001$ </td></tr>
  <tr><td>micro  </td><td> $\mu$  </td><td class="text-left">  $10^{-6}=0.000\,001$ </td></tr>
</tbody>

</table>

## The U.S. Customary System (USCS)

The second set of units we will use is the U.S. customary system (USCS
or USC) which is closely related (many times used synonymously) with the
English or Imperial system. [Table 3](#tabUS) shows an abbreviated list
of units in the U.S. customary system.

<table class="table table-striped">
<caption>
Table 3: The U.S. customary system of units. Mass is a derived unit
and can be expressed in terms of USC base units as $\slug=\lb\cdot
s^2/\ft$.  <a name="tabUS"></a>
</caption>
<thead>
<tr><th>  Quantity     </th><th>  Name      </th><th>    Symbol  </th></tr>
</thead>
<tbody>
<tr><td>  length       </td><td> foot       </td><td>  ft  </td></tr>
<tr><td>  time         </td><td> second     </td><td>  s   </td></tr>
<tr><td>  force        </td><td> pound      </td><td>  lb  </td></tr>
<tr><td>  temperature  </td><td> Fahrenheit </td><td>  $^\circ$F  </td></tr>
<tr><td>  mass         </td><td> slug       </td><td>  lb$\cdot$s$^2$/ft  </td></tr>
</tbody>
</table>


Sometimes you will hear the term *SAE* used in regard to tools, bolts
and fasteners. This refers to sizes measured in inches as specified by
the Society of Automotive Engineers which used USC one time ago. The
society itself now uses metric (though the term *SAE* when used in the
context of sizes still indicates USC).

## Unit conversions and consistency

It will frequently be necessary to convert between different derived units within the same system (*e.g.* between km and m).  Other times you may need to convert between the SI and US system of units (*e.g.* between feet and meters). The general approach to unit conversion is to multiply a given quantity by a *conversion factor* such that the original units cancel out, and the desired units remain.  For example, here are a few conversion factors for the dimension of length

$$
\frac{3.281~\ft}{\m}\qquad \frac{12~\inch}{\ft} \qquad \frac{1000~\m}{\km} \qquad \frac{5280~\ft}{\mi}
$$

Note that the reciprocal of any of these fractions is also a conversion factor.  Here are a few example problems showing this approach to unit conversion and consistency.

<div class="example">
Convert a distance of 3 miles into feet and kilometers using the conversion
factors listed above.

<hr>

We start by converting 3 miles into feet.

$$
3 \cancel{\mi} \times\left(\frac{5280~\ft}{\cancel{\mi}}\right)=15\,840~\ft
$$

Now in order to convert from miles to km using only the conversion factors listed above we will first have to convert from miles to feet and then from feet to meters and finally from meters to km.  This is done in one step as follows.

$$
3 \cancel{\mi} \times\left(\frac{5280~\cancel{\ft}}{\cancel{\mi}}\right)\times \left(\frac{\cancel{\m}}{3.281~\cancel{\ft}}\right)
\times \left(\frac{\km}{1000~\cancel{\m}}\right)=4.83~\km
$$

If we had used a more [comprehensive table of conversion factors](../ConversionFactors.html) we could have instead converted between miles and km directly.

$$
3 \cancel{\mi} \times \left(\frac{1.609~\km}{\cancel{\mi}}\right)=4.83~\km
$$

</div>

The above approach works because any conversion factor evaluates to unity; the numerator and denominator of the conversion factor are physically equivalent and therefore cancel.  Multiplying any quantity by a conversion factor therefore does not change the true physical value of the quantity even though it does change its units.

It is imperative that results be dimensionally consistent when performing calculations.  We do this by canceling units when solving for quantities.  If the resulting units turn out to not make sense (*e.g.* the question was asking for a time and the units somehow ended up resulting in an area) a mistake was made.  So keeping track of units is a good way to check your work.  Here are some more examples.

<div class="example">
A car is travelling at 80 kilometers per hour (km/h).  How many minutes would it take to travel 16 km?
<hr>
To find the solution we use the expression $x=vt$, where $x$ is the distance,
$v$ the velocity and $t$ the time.  Solving for time we have

$$
t=\frac{x}{v}
$$

Next we substitute in the known values of $x$ and $v$

$$
t=\frac{16~\km}{80~\km/\hr}=\dfrac{16~\km}{\dfrac{80~\km}{1~\cancel{\hr}}}\times\frac{1~\hr}{1~\cancel{\hr}}=\frac{16~\cancel{\km}\cdot\hr}{80~\cancel{\km}}=0.2~\hr\\
$$

We can leave the answer in hours but it is more natural to express it in minutes.

$$
t=0.2~\cancel{\hr}\times \frac{60~\min}{1~\cancel{\hr}}=12~\min
$$

The final answer is the car takes 12 minutes to travel 16 km at 80 km/h.
</div>

Here is another example that uses the US customary system of units.

<div class="example">
A car travelling at 60 mph has a kinetic energy of 240,000 ft-lbs.
Compute the car's mass.

<hr>

First we need to convert mph into the base units of ft/s.

$$
60~\mph=60\frac{\cancel{\textrm{mile}}}{\cancel{\hr}}\times
\frac{1~\cancel{\hr}}{3600~\s}\times\frac{5280~\ft}{1~\cancel{\textrm{mile}}}=88~\ft/\s
$$

The kinetic energy of the car is
$$
\textrm{KE}=\frac{1}{2}mv^2\,.
$$

We can rearrange this expression to solve for the mass

$$
m=\frac{2\textrm{KE}}{v^2}=\frac{2\times 240,000~\ft\cdot\lb}{\left(88~\ft/\s\right)^2}=62~\cancel{\ft}\cdot\lb\frac{\s^2}{\ft^{\cancel{2}}}=62~\lb\cdot\s^2/\ft
$$

From [table 2](#tabUS) we see that lb$\cdot$s$^2$/ft is a slug and therefore our final result for the mass is $ m=62~\slug$.  In case you are curious this happens to weigh about 2000 pounds.
</div>

## Weight vs. Mass

You've heard this before but students still get this confused; The weight and mass of an object are two fundamentally different concepts.  The mass of an object quantifies the amount of substance. It is unchanging; 15 kg of steel (15 kg happens to be about 1 slug) is 15 kg of steel whether it is on the earth's surface, on the moon or floating around in interstellar space.

The weight of an object is the force produced by a mass when acted upon by gravity.

$$ \begin{align}
\textrm{weight}&=\textrm{mass}\times\textrm{acceleration due to
gravity}\\ w&=mg
\end{align} $$

Unless specified otherwise the acceleration due to gravity at earth's surface is $g=9.81~\m/\s^2$ when using SI units and $g=32.2~\ft/\s^2$ in USCS.

<div class="example">
A steel ball of mass 30 kg is suspended from a wire. What is the tension in the wire?

<hr>

The tension in the wire will be the weight of the steel ball. Using $w=mg$ we have

$$
w=30~\kg \times 9.81~\frac{\m}{\s^2}=294~\frac{\kg\cdot\m}{\s^2}=294~\N
$$

</div>

### Pound-Mass vs. Pound-Force

To add to this nightmare of two systems an additional confusion arises as some use a different unit for mass called pound-mass (lbm) instead of the unit of slugs. While the name of this unit has the word \`pound\' in it, lbm is *not* a unit of force but a unit of mass. It is related to the base unit of slug through $32.2~\lbm=1~\slug $.  So if you are given an object\'s mass (not weight) in units of lbm you will first need to convert it to slugs before using it in equations. The weight of an object (which is a force) is sometimes then designated as pounds-force (lbf). Unlike lbm which is a unit of mass the lbf is, as expected, a unit of force.

<div class="example">
A steel ball of mass 100 lbm is suspended from a wire. What is the tension in the wire if this setup is located at the surface of the earth? How about at the surface of the Moon where $g=5.4$ ft/s$^2$?

<hr>

First we convert from lbm to slugs.

$$
100~\lbm=100~\cancel{\lbm}\times\frac{1~\slug}{32.2~\cancel{\lbm}}=3.11~\slug
$$

Now that we have the mass in terms of the base units of slugs we
use $w=mg$,

$$
w=3.11~\slug \times 32.2~\frac{\ft}{\s^2}=100~\frac{\slug\cdot\ft}{\s^2}=100~\lbf
$$

The above example should motivate why the unit of pound-mass was
introduced; A mass of 1 lbm on the earth\'s surface has a weight of 1
lbf. On the moon the tension in the wire would be

$$
w=3.11~\slug \times 5.4~\frac{\ft}{\s^2}=16.8~\frac{\slug\cdot\ft}{\s^2}=16.8~\lbf\nonumber
$$

So the relation that a mass of 1 lbm has a weight of 1 lbf is only
true when $g$ is taken at its standard value.
</div>

## Temperature

The most commonly used temperature scale in the world is $\C$ (degrees Celsius).  At sea level on Earth water freezes at $0\C$ and boils at $100\C$.  In the United States $\F$ (degrees Fahrenheit) is used.  At sea level on Earth water freezes at $32\F$ and boils at $212\F$.

Given a temperature in Fahrenheit $T(\F)$, the temperature in Celsius $T(\C)$ is

$$
T(\C)=\frac{5}{9}\left[T(\F)-32\right]
$$

Given a temperature in Celsius $T(\C)$, the temperature in Fahrenheit $T(\F)$ is

$$
T(\F)=\frac{9}{5} T(\C)+32
$$

### Absolute temperature

The reference point in the Celsius and Fahrenheit temperature scales depends on the properties of a particular fluid, in this case water.  It is desirable to have a temperature scale that is independent of any substance.  An *absolute temperature* or *thermodynamic temperature scale* has a zero point corresponding to the state of zero thermal energy, so called *absolute zero*.

In the SI unit system, the standard unit of absolute temperature is kelvin ($\K$). The spacing between points on the kelvin scale is the same as the Celsius scale (*i.e.* a change in temperature of $1\C$ is the same as a change in temperature of $1~\K$).  As the freezing point of water is measured to be $273.15~$K we can convert from a temperature in Celsius to a temperature $T(\K)$ in kelvin by

$$
T(\K)=T(\C) + 273.15
$$

Another absolute temperature scale, the Rankine scale ($\R$), has spacing between degrees that is the same as the Fahrenheit scale.  Absolute zero, corresponding to $0~\R$, is at $-459.67\F$.  A measurement in Fahrenheit can be converted to a temperature in Rankine, $T(\R)$ by

$$
T(\R)=T(\F) + 459.67
$$

<table class="table table-striped">
<caption>
Table 4: A comparison among temperature scales.  $^\dagger$Melting and boiling points are at standard pressure.
</caption>
<thead>
<tr><th> &nbsp; </th><th> Celsius ($\C$)    </th><th>  Fahrenheit ($\F$)  </th><th>  Kelvin ($\K$)   </th><th> Rankine ($\R$)</th></tr>
</thead>
<tbody>
<tr><td>Absolute zero                          </td><td> -273.15    </td><td>  -459.67    </td><td>      0    </td><td>     0   </td></tr>
<tr><td>Ice melts$^\dagger$                    </td><td>       0    </td><td>      32     </td><td>   273.15  </td><td>  491.67 </td></tr>
<tr><td>Average surface temperature on Earth   </td><td>      15    </td><td>      59     </td><td>      288  </td><td>     519 </td></tr>
<tr><td>Average body temperature               </td><td>      37    </td><td>      98     </td><td>      310  </td><td>     558 </td></tr>
<tr><td>Water boils$^\dagger$                  </td><td>     100    </td><td>     212     </td><td>      373  </td><td>     671 </td></tr>
</tbody>
</table>

Note that both Celsius and Fahrenheit are always reported in degrees.  Kelvin, being an absolute temperature scale, never has a degree symbol.  For consistency I therefore avoid including a degree symbol with the absolute temperature scale of Rankine.  However, you will more often than not see Rankine reported in degrees.

So why degrees?  A degree represents a change in temperature with respect to some scale.  If you double the temperature in an absolute scale you double the thermal energy ($e.g.$ a gas at 800 K has twice the thermal energy as a gas at $400 \K$.)  This is not true in the Celsius and Fahrenheit scales (*e.g.* a gas at $500 \C$ does *not* have twice the thermal energy as the same gas at $250 \C$.)

<div class="example">
From your own experience you are probably most comfortable when the surrounding air has a temperature between $68\F$ and $77\F$.   We will look at this temperature range in the various temperature scales above.

<hr>

The temperature range is reported in degree Fahrenheit which is a US system of units.  If we wanted to stay within the US system but instead use an absolute temperature scale we would convert this to Rankine using the formula, $T(\R)=T(\F) + 460$.

The temperature range of $68\F$ and $77\F$ corresponds to
$528\R$ to $537\R$.  Note therefore that in this example the temperature difference of $9\F$ corresponds to a difference of $9\R$.

If we needed to use SI units we could convert from $\F$ to $\C$ using the formula, $T(\C)=\frac{5}{9}\left[T(\F)-32\right]$.  

The lower temperature of $68\F$ is;

$$
T_1=\frac{5}{9}\left[68-32\right]=\frac{5}{9}36=20\C
$$

The higher temperature of $77\F$ is;

$$
 T_2=\frac{5}{9}\left[77-32\right]=\frac{5}{9}45=25\C
$$

The temperature range of $68\F$ to $77\F$ corresponds to
$20\C$ to $25\C$. In this case the temperature difference of $9\F$ corresponds to a change in temperature of $5\C$.

If we need to convert to the absolute temperature scale in the SI system we use the formula $T(\K)=T(\C) + 273$.

The temperature range of $20\C$ to $25\C$ corresponds to the range $293\K$ to $298\K$. Notice that a temperature difference of $5\C$ is the same as a change in temperature of $5\K$.

</div>

The above exercise demonstrates that a *change* in temperature of $1\K$ is the same as a *change* in temperature of $1\C$, or *change* of $1.8\F$ or *change* of $1.8\R$.  Note the repeated emphasis on the change or difference in temperature.  This works about because when taking the difference between two temperatures the zero point cancels out.




## References
[The NIST reference on Constants, Units and, Uncertainty](https://physics.nist.gov/cuu/Units/index.html)

[Systems of Units and Conversion Factors (pdf)](http://www.cengage.com/resource_uploads/downloads/1111136025_277026.pdf)
