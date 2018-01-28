


pandoc -s -H header.text --toc -A footer.text -c style.css units.text --mathjax -o units.html
pandoc -s -H header.text -A footer.text -c style.css MinorLosses.text --mathjax -o MinorLosses.html
pandoc -s -H header.text -A footer.text -c style.css buoyancy.text --mathjax -o buoyancy.html
