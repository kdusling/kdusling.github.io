
var gases=[

{id:"Air", display:"Air",             T:25, sg:1.000, vis:0.018, Cp:1005,   R:268.8,  k:1.40},

{id:"CO2", display:"Carbon dioxide",  T:25, sg:1.52,  vis:0.014, Cp:876,    R:189,    k:1.30},
{id:"CH4", display:"Methane",         T:25, sg:0.554, vis:0.011, Cp:2260,   R:518,    k:1.31},
{id:"He", display:"Helium",           T:25, sg:0.138, vis:0.02,  Cp:5188,   R:2077,   k:1.66},
{id:"H2", display:"Hydrogen",         T:25, sg:0.070, vis:0.009, Cp:14310,  R:4126,   k:1.405},
{id:"N2", display:"Nitrogen",         T:25, sg:0.967, vis:0.018, Cp:1040,   R:297,    k:1.40},
{id:"O2", display:"Oxygen",           T:25, sg:1.105, vis:0.015, Cp:879,    R:260,    k:1.40},
];


// sg take wrt density of air being 1/(0.842) kg/m3
// 1. CRC handbook of tables for applied engineering science (2nd ed), 1973
// viscosity above is the dynamic viscosity in 10^{-3} Pa s or in cP
// Cp in units of J/(kg K)
// R is in unites of J/(kg C)
