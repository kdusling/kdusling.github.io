
pandoc -s -H header.text --toc -A footer.text -c style.css units.text --mathjax -o units.html
pandoc -s -H header.text --toc -A footer.text -c style.css FrictionLosses.text --mathjax -o FrictionLosses.html
pandoc -s -H header.text --toc -A footer.text -c style.css buoyancy.text --mathjax -o buoyancy.html
