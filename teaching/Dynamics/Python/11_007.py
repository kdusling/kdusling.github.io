import numpy as np
import matplotlib as mpl
import matplotlib.pyplot as plt
import matplotlib.animation as animation
import time


from svgpath2mpl import parse_path
from svgpathtools import svg2paths




car = parse_path("""M105.2,57h-3.9l-3.2-6.3C96,46.7,91.5,44,86.5,44H59.6c-3.3,0-6.5,1.2-8.9,3.3l-11.2,9.8l-12.1,2.2c-5.2,0.9-9,5.5-9,10.8   v3.1c0,2.1,1.7,3.8,3.8,3.8h8.6c0.9,4,4.5,6.9,8.7,6.9c4.2,0,7.8-2.9,8.7-6.9h35.2c0.9,4,4.5,6.9,8.7,6.9c4.2,0,7.8-2.9,8.7-6.9   h7.6c0.6,0,1-0.4,1-1V61.4C109.5,59,107.6,57,105.2,57z M39.6,82c-3.5,0-6.5-2.6-6.9-6.1c0-0.3-0.1-0.6-0.1-0.9   c0-3.8,3.1-6.9,6.9-6.9c3.8,0,6.9,3.1,6.9,6.9c0,0.3,0,0.6-0.1,0.9C46,79.4,43,82,39.6,82z M92.2,82c-3.5,0-6.4-2.6-6.9-6.1   c0-0.3-0.1-0.6-0.1-0.9c0-3.8,3.1-6.9,6.9-6.9c3.1,0,5.7,2.1,6.6,4.9c0.2,0.7,0.3,1.3,0.3,2.1c0,0.3,0,0.6-0.1,0.9   C98.6,79.4,95.6,82,92.2,82z M107.5,75h-6.4c0-4.9-4-8.9-8.9-8.9c-4.9,0-8.9,4-8.9,8.9H48.5c0-4.9-4-8.9-8.9-8.9   c-4.9,0-8.9,4-8.9,8.9h-8.3c-1,0-1.8-0.8-1.8-1.8v-3.1c0-4.3,3.1-8.1,7.4-8.8L40.2,59c0.1,0,0.2-0.1,0.3-0.1l0,0L80.9,59   c0,0,0,0,0,0c3.2,0,6.4-0.8,9.2-2.2l5-2.5l-0.9-1.8l-5,2.5c-2.6,1.3-5.4,2-8.3,2l-6.4,0v-6h-2v6L42.8,57l9.3-8.2   c2-1.8,4.8-2.8,7.6-2.8h26.8c4.2,0,8.1,2.2,9.8,5.6l3.5,6.9c0.2,0.3,0.5,0.5,0.9,0.5h4.5c1.3,0,2.3,1,2.3,2.3V75z""")



car.vertices -= car.vertices.mean(axis=0)
car = car.transformed(mpl.transforms.Affine2D().rotate_deg(180))


a=0.5
b=-3 
c=3
d=2
t = np.linspace(0, 6, 1000, endpoint=True)

def pos(t):
    return a*t**3 + b*t**2 + c*t + d
def vel(t):
    return 3*a*t**2 + 2*b*t + c
def acc(t):
    return 6*a*t + 2*b



# We'll use two separate gridspecs to have different margins, hspace, etc
gs_top = plt.GridSpec(4, 1, top=0.95,bottom=0.5, left=0.2)
gs_base = plt.GridSpec(4, 1, hspace=0, top=0.9, left=0.2)
fig = plt.figure()

# Top (unshared) axes
topax = fig.add_subplot(gs_top[0,:])
topax.set_xlim(-5, 20)
topax.set_ylim(-5, 5)
topax.get_yaxis().set_ticks([])
topax.set_xlabel('Position') 
topax.axhline(y=-1, color='black', linewidth=1)
toppoint, = topax.plot(pos(t[0]),0.0, marker=car, markersize=20)

# The four shared axes
ax = fig.add_subplot(gs_base[1,:]) # Need to create the first one to share...
other_axes = [fig.add_subplot(gs_base[i,:], sharex=ax) for i in range(2, 4)]
bottom_axes = [ax] + other_axes

# Hide shared x-tick labels
for ax in bottom_axes[:-1]:
    plt.setp(ax.get_xticklabels(), visible=False)

# Plot variable amounts of data to demonstrate shared axes
#for ax in bottom_axes:

bottom_axes[0].plot(t,pos(t),color='blue')
bottom_axes[0].axhline(y=0, color='black', linewidth=1)
bottom_axes[0].margins(0.05)
bottom_axes[0].set_ylabel('Position  ',rotation='horizontal', ha='right')

pospoint, = bottom_axes[0].plot(t[0],pos(t[0]), marker="o",color='blue')
posline = bottom_axes[0].axvline(x=t[0], color='black', linestyle='dashed')

bottom_axes[1].plot(t,vel(t), color='green')
bottom_axes[1].axhline(y=0, color='black', linewidth=1)
bottom_axes[1].margins(0.05)
bottom_axes[1].set_ylabel('Velocity  ',rotation='horizontal', ha='right') 
velpoint, = bottom_axes[1].plot(t[0],vel(t[0]), marker="o",color='green')
velline = bottom_axes[1].axvline(x=t[0], color='black', linestyle='dashed')

bottom_axes[2].plot(t,acc(t), color='red')
bottom_axes[2].axhline(y=0, color='black',linewidth=1)
bottom_axes[2].margins(0.05)
bottom_axes[2].set_xlabel('time')
bottom_axes[2].set_ylabel('Acceleration  ',rotation='horizontal', ha='right') 
accpoint, = bottom_axes[2].plot(t[0],acc(t[0]), marker="o",color='red')
accline = bottom_axes[2].axvline(x=t[0], color='black', linestyle='dashed')



def update(myt):
    
    if myt < t[0]:
        myt = t[0];
        
    if myt > t[-1]:
        myt = t[-1]
        
    toppoint.set_data([pos(myt)],[0.0])
    
    pospoint.set_data([myt],[pos(myt)]) 
    
    
    velpoint.set_data([myt],[vel(myt)])
    accpoint.set_data([myt],[acc(myt)])
    
    posline.set_xdata([myt,myt])
    velline.set_xdata([myt,myt])
    accline.set_xdata([myt,myt])
    
    return toppoint, pospoint, velpoint,accpoint, posline, velline,accline


ani = animation.FuncAnimation(fig, func=update, blit=True, interval=1000./30., frames=np.linspace(0,t[-1],300,endpoint=True))
Writer = animation.writers['ffmpeg']
writer = Writer(fps=30, metadata=dict(artist='Kevin Dusling'), bitrate=1800)

# 6. Save the animation
ani.save('11_007.mp4', writer=writer)


plt.show()




