from tkinter import *

root = Tk()
root.state("zoomed")

def red():
    root.config(background='red')
def blue():
    root.config(background="blue")

b1=Button(root,text="Blue",command=blue).pack()
b2=Button(root,text="red",command=red).pack()
root.mainloop()
