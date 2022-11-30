MathJax.Hub.Config({
  TeX: {
    Macros: {
      RR: "{\\bf R}",
      bold: ["{\\bf #1}",1]
    }
  }
});

MathJax.Ajax.loadComplete("http://myserver.com/MathJax/config/local/local.js");
