import plotly.express as px
import pandas as pd

# 1. Prepare data (must have a time/frame column)
df = px.data.gapminder()

# 2. Create animation
fig = px.scatter(df, x="gdpPercap", y="lifeExp", animation_frame="year", 
                 animation_group="country", size="pop", color="continent", 
                 hover_name="country", log_x=True, size_max=55, 
                 range_x=[100,100000], range_y=[25,90])

# 3. Save as interactive HTML
fig.write_html("movie_with_slider.html")