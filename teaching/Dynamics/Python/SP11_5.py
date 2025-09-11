import numpy as np
import matplotlib as mpl
import matplotlib.pyplot as plt
import matplotlib.animation as animation
import time


from matplotlib.patches import Rectangle, Circle



t = np.linspace(0, 5, 1000, endpoint=True)

def yball(t):
    return 12 + 18*t - 0.5*9.81*t*t
def yelev(t):
    return 5 + 2*t

fig, ax = plt.subplots()
ax.set_aspect('equal', adjustable='box')
ax.tick_params(axis='x', which='both', bottom=False, top=False, labelbottom=False)

ax.set_xlim(-5, 5)
ax.set_ylim(0, 35)
ballrad = 0.6
ball = ax.add_patch(Circle((0,yball(0)+ballrad),radius=ballrad))

elevwidth = 5
elevheight=0.5
elev = ax.add_patch(Rectangle((0-elevwidth/2, yelev(0)-elevheight), elevwidth, elevheight, color='purple', alpha=0.7))

axtext = fig.add_axes([0.4,0.9,0.2,0.05])
axtext.axis("off")
time = axtext.text(0.5,0.5, "t=0.0", ha="center", va="top")


def update(t):

    
    time.set_text("t="+ str(round(t,1)))
    elev.set_xy(((0-elevwidth/2, yelev(t)-elevheight)))
    
    if (yball(t) < yelev(t)):
        ball.set_center((0, yelev(t)+ballrad))
    else:
        ball.set_center((0, yball(t)+ballrad))

    
    return time, ball, elev,



ani = animation.FuncAnimation(fig, func=update, blit=True, interval=1000./30., frames=np.linspace(0,t[-1],4*30,endpoint=True))
#update(0)
Writer = animation.writers['ffmpeg']
writer = Writer(fps=30, metadata=dict(artist='Kevin Dusling'), bitrate=1800)
ani.save('SP11_5.mp4', writer=writer)


plt.show()



