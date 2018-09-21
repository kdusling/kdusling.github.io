REM pdflatex unit1.tex
REM "C:\Program Files\gs\gs9.23\bin\gswin64c.exe" -sDEVICE=png16m -r1200 -dDownScaleFactor=4  -o png/unit1-%%03d.png  unit1.pdf

REM pdflatex unit2.tex
REM "C:\Program Files\gs\gs9.23\bin\gswin64c.exe" -sDEVICE=png16m -r1200 -dDownScaleFactor=4  -o png/unit2-%%03d.png  unit2.pdf

 pdflatex unit3.tex
"C:\Program Files\gs\gs9.23\bin\gswin64c.exe" -sDEVICE=png16m -r1200 -dDownScaleFactor=4  -o png/unit3-%%03d.png  unit3.pdf
