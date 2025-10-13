import numpy as np
import matplotlib as mpl
import matplotlib.pyplot as plt
import matplotlib.animation as animation
import time


from matplotlib.patches import Rectangle, Circle, Polygon



fig, ax = plt.subplots()
ax.set_aspect('equal', adjustable='box')
ax.tick_params(axis='x', which='both', bottom=False, top=False, labelbottom=False)

wedge_front = -2
ax.set_xlim(-20, 20)
ax.set_ylim(wedge_front, 10)
ballrad = 0.6

ang = 30*(np.pi / 180)
wedge_width=10
#wedge_front_height=4
def wedgeslope(x):
    return x*np.tan(ang)
wedge_vertices = [(0,wedge_front), (wedge_width,wedge_front), (wedge_width,wedgeslope(wedge_width)), (0,0)]
ax.add_patch(Polygon(wedge_vertices, closed=True, facecolor='white',edgecolor='black'))
wedge = ax.add_patch(Polygon(wedge_vertices, closed=True, facecolor='lightblue'))

boxsize=2
#draw box at bottom of wedge
box_vertices = [(0,0), (boxsize*np.cos(ang),boxsize*np.sin(ang)),  (boxsize*(np.cos(ang)-np.sin(ang)),boxsize*(np.sin(ang)+np.cos(ang))),(-boxsize*np.sin(ang),boxsize*np.cos(ang))]
#move box to top of wedge
box_vertices = box_vertices+np.array([(wedge_width/np.cos(ang)-boxsize)*np.cos(ang), (wedge_width/np.cos(ang)-boxsize)*np.sin(ang)])

ax.add_patch(Polygon(box_vertices, closed=True, facecolor='white',edgecolor='black'))
box = ax.add_patch(Polygon(box_vertices, closed=True, facecolor='red'))


axtext = fig.add_axes([0.4,0.9,0.2,0.05])
axtext.axis("off")
time = axtext.text(0.5,0.5, "t=0.0", ha="center", va="top")

WA=30
WB=12
g=32.2
aa = WB*np.cos(ang)/(2.0*WA + WB*np.sin(ang))*g
aba = aa*np.cos(ang) + g*np.sin(ang)
print("a_A=",aa)
print("a_B/A=",aba)
print()

def update(t):

    
    time.set_text("t="+ str(round(t,1)))
    xwedge = 0.5*aa*t**2
    hbox = -0.5*aba*t**2
    
    if(box_vertices[0][0]+hbox*np.cos(ang) > 0 ):
        box.set_xy((box_vertices+np.array([hbox*np.cos(ang), hbox*np.sin(ang)]+np.array([xwedge, 0]))))
        wedge.set_xy((wedge_vertices+np.array([xwedge, 0])))

    
    return time, wedge, box,



ani = animation.FuncAnimation(fig, func=update, blit=True, interval=1000./30., frames=np.linspace(0,2,2*30,endpoint=True))
#update(0)
Writer = animation.writers['ffmpeg']
writer = Writer(fps=30, metadata=dict(artist='Kevin Dusling'), bitrate=1800)
ani.save('SP12_5.mp4', writer=writer)


plt.show()



