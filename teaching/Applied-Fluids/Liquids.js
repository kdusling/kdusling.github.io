
var liquids=[
{id:"Acetone", display:"Acetone",           T:25, sg:0.785, vis:0.316, st:23.1,  src:1, K:0.0125, vp:30.8},
{id:"ethylAL", display:"Alcohol, ethyl",    T:25, sg:0.785, vis:1.095, st:0,     src:1, K:0,    vp:7.87},
{id:"methylAL", display:"Alcohol, methyl",  T:25, sg:0.787, vis:0.560, st:0,     src:1, K:0,    vp:16.9},
{id:"propylAL", display:"Alcohol, propyl",  T:25, sg:0.800, vis:1.92,  st:0,     src:1, K:0,    vp:0},
{id:"Benzene", display:"Benzene",           T:25, sg:0.874, vis:0.601, st:28.18, src:1, K:0.0095, vp:12.7},
{id:"EthGly", display:"Ethylene glycol",    T:25, sg:1.097, vis:16.2,  st:48.2,  src:1, K:0,    vp:0},
{id:"Glycerine", display:"Glycerine",       T:25, sg:1.259, vis:950,   st:63.0,  src:1, K:0.0025, vp:0},
{id:"Hexane", display:"Hexane",             T:25, sg:0.655, vis:0.297, st:18.0,  src:1, K:0.016, vp:20.2},
{id:"Kerosene", display:"Kerosene",         T:25, sg:0.821, vis:1.64,  st:0,     src:1, K:0,  vp:0},
{id:"Linseed", display:"Linseed Oil",       T:25, sg:0.927, vis:33.1,  st:0,     src:1, K:0,  vp:0},
{id:"Mercury", display:"Mercury",           T:25, sg:13.6,  vis:1.53,  st:484,   src:1, K:0.0004, vp:0.00023},
{id:"Octane", display:"Octane",             T:25, sg:0.699, vis:0.51,  st:21.1,  src:1, K:0.012,    vp:1.86},
{id:"Propane", display:"Propane",           T:25, sg:0.494, vis:0.11,  st:6.6,   src:1, K:0,    vp:0},
{id:"SeaWater", display:"Sea Water",        T:25, sg:1.023, vis:0.959, st:0,     src:2, K:0,    vp:0},
{id:"Turpentine", display:"Turpentine",     T:25, sg:0.867, vis:1.375, st:0,     src:1, K:0,    vp:0},
{id:"Water", display:"Water",               T:25, sg:0.997, vis:0.890, st:71.97, src:1, K:0.0046, vp:3.17},
];

// 1. CRC handbook of tables for applied engineering science (2nd ed), 1973
// CRC Handbook of Chemistry and Physics, 87th ed, 2006
// 2. Sharqawy, M. H., Lienhard, J. H., & Zubair, S. M. (2010). Thermophysical properties of seawater: a review of existing correlations and data. Desalination and Water Treatment, 16(1-3), 354–380. doi:10.5004/dwt.2010.1079
   // calculated with http://pipeng.com/index.php/ts/itdiixhome/
// viscosity above is the dynamic viscosity in 10^{-3} Pa s.
