::pdflatex unit1.tex
::"C:\Program Files\gs\gs9.23\bin\gswin64c.exe" -sDEVICE=png16m -r1200 -dDownScaleFactor=4  -o png/unit1-%%03d.png  unit1.pdf

pdflatex unit2.tex
"C:\Program Files\gs\gs9.23\bin\gswin64c.exe" -sDEVICE=png16m -r1200 -dDownScaleFactor=4  -o png/unit2-%%03d.png  unit2.pdf
