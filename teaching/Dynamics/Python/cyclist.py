import numpy as np
import matplotlib as mpl
import matplotlib.pyplot as plt
import matplotlib.animation as animation
import time


from svgpath2mpl import parse_path
from svgpathtools import svg2paths


bike = parse_path("""M703.24736 459.85792c-14.16192 0-27.65824 2.7392-40.15104 7.52128l-50.40128-99.67104h39.35232v-20.48h-72.64768l20.7104 40.96H422.7072l-10.3424-20.48h34.88256v-20.48H379.0848l23.02976 45.60896c-0.11776 0.16896-0.2816 0.31232-0.37888 0.49152l-43.4176 75.58144a112.03584 112.03584 0 0 0-44.19072-9.05216c-62.11072 0-112.64 50.52928-112.64 112.65024 0 62.11072 50.52928 112.64 112.64 112.64 58.6496 0 106.9312-45.0816 112.11776-102.4h83.82976a10.24 10.24 0 0 0 8.8576-5.09952l94.56128-162.97472 31.232 61.76256c-32.38912 19.79904-54.1184 55.40352-54.1184 96.07168 0 62.12096 50.52928 112.65024 112.64 112.65024s112.64-50.52928 112.64-112.65024-50.5344-112.65024-112.64-112.65024z m-290.12992-45.23008l74.55232 147.64032H426.24512c-3.15904-34.87232-22.24128-65.18272-49.92-83.59424l36.79232-64.04608z m-7.43424 147.64032H328.2944l37.8112-65.81248c21.57056 14.80192 36.54144 38.52288 39.5776 65.81248z m-91.55584 102.4c-50.82112 0-92.16-41.33888-92.16-92.16s41.33888-92.17024 92.16-92.17024c11.97056 0 23.36768 2.36032 33.8688 6.528l-46.26944 80.54272a10.24 10.24 0 0 0 8.87808 15.33952h95.0784c-5.12 46.01344-44.20608 81.92-91.55584 81.92z m193.48992-108.32896L433.04448 408.66816h160.26112L507.61728 556.3392z m195.63008 108.3392c-50.82112 0-92.16-41.34912-92.16-92.17024 0-32.6912 17.16224-61.39392 42.90048-77.76256l43.36128 85.76 18.2784-9.2416-43.22816-85.504a91.47904 91.47904 0 0 1 30.848-5.43232c50.82112 0 92.16 41.35424 92.16 92.17024s-41.344 92.18048-92.16 92.18048z""")



bike.vertices -= bike.vertices.mean(axis=0)
bike = bike.transformed(mpl.transforms.Affine2D().rotate_deg(180))
bike = bike.transformed(mpl.transforms.Affine2D().scale(-1,1))


t = np.linspace(0, 10, 1000, endpoint=True)

def posA(t):
    return 6.*t + 1.5*t**2
def posB(t):
    return 96 + 10*t - 0.5*t**2

def posA(t):
    return 6.*t + 1.5*t**2
def velA(t):
    return 6. + 3.0*t
def accA(t):
    return 3. + 0*t
    
def posB(t):
    return 96 + 10.*t - 0.5*t**2
def velB(t):
    return 10. - t
def accB(t):
    return -1 + 0*t


inifig, iniax = plt.subplots()
iniax.set_xlim(-20, 120)
iniax.set_ylim(-10, 30)
iniax.get_yaxis().set_ticks([])
iniax.set_xlabel('Position') 
iniax.axhline(y=0, color='black', linewidth=1)
iniax.plot(posA(t[0]),4, marker=bike, markersize=40, color='blue')
iniax.plot(posB(t[0]),4, marker=bike, markersize=40, color='red')
iniax.annotate("", xytext=(-5, 12), xy=(10, 12), arrowprops=dict(arrowstyle="->",color='blue') )
iniax.annotate("", xytext=(91, 12), xy=(106, 12), arrowprops=dict(arrowstyle="->",color='red') )
iniax.text(0, 13, '$V_A=21.6~$kph', ha='center', va='bottom', fontsize=10, color='blue')
iniax.text(96, 13, '$V_B=36.0~$kph', ha='center', va='bottom', fontsize=10, color='red')

iniax.annotate("", xytext=(0, -5), xy=(96, -5), arrowprops=dict(arrowstyle="<->",color='black') )
iniax.text(48, -6, '$96~$m', ha='center', va='top', fontsize=10, color='black')
iniax.set_aspect(1) 
plt.axis('off')
plt.savefig("cyclists.png")
plt.show()


# We'll use two separate gridspecs to have different margins, hspace, etc
gs_top = plt.GridSpec(4, 1, top=0.95,bottom=0.5, left=0.2)
gs_base = plt.GridSpec(4, 1, hspace=0, top=0.9, left=0.2)
fig = plt.figure()

# Top (unshared) axes
topax = fig.add_subplot(gs_top[0,:])
topax.set_xlim(-5, 200)
topax.set_ylim(-5, 5)
topax.get_yaxis().set_ticks([])
topax.set_xlabel('Position') 
topax.axhline(y=-1, color='black', linewidth=1)
toppointA, = topax.plot(posA(t[0]),0.0, marker=bike, markersize=20)
toppointB, = topax.plot(posB(t[0]),0.0, marker=bike, markersize=20)

# The four shared axes
ax = fig.add_subplot(gs_base[1,:]) # Need to create the first one to share...
other_axes = [fig.add_subplot(gs_base[i,:], sharex=ax) for i in range(2, 4)]
bottom_axes = [ax] + other_axes

# Hide shared x-tick labels
for ax in bottom_axes[:-1]:
    plt.setp(ax.get_xticklabels(), visible=False)

# Plot variable amounts of data to demonstrate shared axes
#for ax in bottom_axes:

bottom_axes[0].plot(t,posA(t),color='blue')
bottom_axes[0].axhline(y=0, color='black', linewidth=1)
bottom_axes[0].margins(0.05)
bottom_axes[0].set_ylabel('Position  ',rotation='horizontal', ha='right')

pospoint, = bottom_axes[0].plot(t[0],posA(t[0]), marker="o",color='blue')
posline = bottom_axes[0].axvline(x=t[0], color='black', linestyle='dashed')

bottom_axes[1].plot(t,velA(t), color='green')
bottom_axes[1].axhline(y=0, color='black', linewidth=1)
bottom_axes[1].margins(0.05)
bottom_axes[1].set_ylabel('Velocity  ',rotation='horizontal', ha='right') 
velpoint, = bottom_axes[1].plot(t[0],velA(t[0]), marker="o",color='green')
velline = bottom_axes[1].axvline(x=t[0], color='black', linestyle='dashed')

bottom_axes[2].plot(t,accA(t), color='red')
bottom_axes[2].axhline(y=0, color='black',linewidth=1)
bottom_axes[2].margins(0.05)
bottom_axes[2].set_xlabel('time')
bottom_axes[2].set_ylabel('Acceleration  ',rotation='horizontal', ha='right') 
accpoint, = bottom_axes[2].plot(t[0],accA(t[0]), marker="o",color='red')
accline = bottom_axes[2].axvline(x=t[0], color='black', linestyle='dashed')



def update(myt):
    
    if myt < t[0]:
        myt = t[0];
        
    if myt > t[-1]:
        myt = t[-1]
        
    toppointA.set_data([posA(myt)],[0.0])
    toppointB.set_data([posB(myt)],[0.0])
    
    pospoint.set_data([myt],[posA(myt)]) 
    
    
    velpoint.set_data([myt],[velA(myt)])
    accpoint.set_data([myt],[accA(myt)])
    
    posline.set_xdata([myt,myt])
    velline.set_xdata([myt,myt])
    accline.set_xdata([myt,myt])
    
    return toppointA, toppointB, pospoint, velpoint,accpoint, posline, velline,accline


ani = animation.FuncAnimation(fig, func=update, blit=True, interval=1000./30., frames=np.linspace(0,t[-1],4*30,endpoint=True))
Writer = animation.writers['ffmpeg']
writer = Writer(fps=30, metadata=dict(artist='Kevin Dusling'), bitrate=1800)

# 6. Save the animation
ani.save('11_007.mp4', writer=writer)


plt.show()




