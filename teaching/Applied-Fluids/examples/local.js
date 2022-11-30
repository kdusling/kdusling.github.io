MathJax.Hub.Config({
   TeX: {
       extensions: ["autoload-all.js"],
       Macros: {
           s: '{\\mathrm{s}}',
           min: '{\\mathrm{min}}',
           hr: '{\\mathrm{hr}}',
           kg: '{\\mathrm{kg}}',
           slug: '{\\mathrm{slugs}}',
           N: '{\\mathrm{N}}',
           kN: '{\\mathrm{kN}}',
           inch: '{\\mathrm{in}}',
           ft: '{\\mathrm{ft}}',
           m: '{\\mathrm{m}}',
           mm: '{\\mathrm{mm}}',
           km: '{\\mathrm{km}}',
           mi: '{\\mathrm{mi}}',
           mph: '{\\mathrm{mph}}',
           cm: '{\\mathrm{cm}}',
           lb: '{\\mathrm{lb}}',
           lbm: '{\\mathrm{lbm}}',
           lbf: '{\\mathrm{lbf}}',
           Pa: '{\\mathrm{Pa}}',
           kPa: '{\\mathrm{kPa}}',
           MPa: '{\\mathrm{MPa}}',
           psi: '{\\mathrm{psi}}',
           C: '{^\\circ\\mathrm{C}}',
           F: '{^\\circ\\mathrm{F}}',
           R: '{\\mathrm{R}}',
           K: '{\\mathrm{K}}',
           gal: '{\\mathrm{gal}}',
           L: '{\\mathrm{L}}',
           cfm: '{\\mathrm{cfm}}',
           fps: '{\\mathrm{fps}}',
           fpm: '{\\mathrm{fpm}}',
           gpm: '{\\mathrm{gpm}}',
           sg: '{\\mathrm{sg}}',
           Re: '{\\mathrm{Re}}',
           WP: '{\\mathrm{WP}}',
           inWC: '{\\mathrm{inH}_2\\mathrm{O}}',
           hp: '{\\mathrm{hp}}',
           lbftovs: '{\\mathrm{lb}\\cdot\\mathrm{ft}/\\mathrm{s}}',
         },
     },
   tex2jax: {
       inlineMath: [['$','$']],
       displayMath: [['\\[','\\]']],
       processEscapes: true,
    },
    "SVG":{
        font:font,
        linebreaks: { automatic: true }
    },
    "HTML-CSS": {
        webFont: font,
        imageFont: font,
        preferredFont: font,
        availableFonts: [],
        scale: 100,
        mtextFontInherit: true,
        linebreaks: { automatic: true }
    },
    "fast-preview": {
        Chunks: {EqnChunk: 10000, EqnChunkFactor: 1, EqnChunkDelay: 0},
        color: "inherit!important",
        updateTime: 30, updateDelay: 6,
        messageStyle: "none",
        disabled: true
      }
  });

MathJax.Ajax.loadComplete("https://kdusling.github.io/teaching/Applied-Fluids/examples/local.js");
