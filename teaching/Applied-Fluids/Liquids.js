
var liquids=[
{id:"Acetone", display:"Acetone",        sg:0.787, vis:0.316, st:23.1,  K:0.92, vp:30},
{id:"Benzene", display:"Benzene",        sg:0.876, vis:0.601, st:28.2,  K:1.05, vp:14},
{id:"EthGly", display:"Ethylene glycol", sg:1.100, vis:16.2,   st:0,  K:0, vp:0},
{id:"Glycerine", display:"Glycerine",    sg:1.263, vis:950,   st:63.0,  K:4.35, vp:0},
{id:"Hexane", display:"Hexane",          sg:0.657, vis:0.297, st:18.0,  K:0.60, vp:17.6},
{id:"Kerosene", display:"Kerosene",      sg:0.823, vis:1.64,  st:0,     K:1.3,  vp:0.7},
{id:"Mercury", display:"Mercury",        sg:13.54, vis:1.53,  st:485,   K:28.5, vp:0.00023},
{id:"Octane", display:"Octane",          sg:0.701, vis:0.51,  st:21.14, K:0,    vp:1.9},
{id:"Propane", display:"Propane",        sg:0.495, vis:0.11,  st:6.6,   K:0,    vp:0},
{id:"SeaWater", display:"Sea Water",     sg:1.030, vis:1.030, st:0,     K:2.34, vp:2.4},
{id:"Turpentine", display:"Turpentine",  sg:0.870, vis:1.375, st:0,     K:0,    vp:0},
{id:"Water", display:"Water",            sg:0.997, vis:0.891, st:71.97, K:2.15, vp:2.4},
];

// viscosity above is the dynamic viscosity in 10^{-3} Pa s.
// Bulk modulus in GPa from: https://www.engineeringtoolbox.com/bulk-modulus-elasticity-d_585.html
// Vapor pressure in kPa from: https://www.engineeringtoolbox.com/vapor-pressure-d_312.html
