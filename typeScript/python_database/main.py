from tkinter import *
from sqlite3 import *
from tkinter.simpledialog import *
from tkinter.messagebox import *

con = connect("users.db")
cursor = con.cursor()
cursor.execute("create table if not exists user (id integer primary key, name text,email text,password text)")


root = Tk()
root.state("zoomed")
font1 = ("Times",20,'bold')
font2 = ("Times",15,'bold')
l1 = Label(root,text="Name     :",font = font1).place(x=150,y=200)
l2 = Label(root,text="Id       :",font = font1).place(x=150,y=300)
l3 = Label(root,text="Email    :",font = font1).place(x=150,y=400)
l4 = Label(root,text="Password :",font = font1).place(x=150,y=500)


e1=Entry(root,font=font2)
e1.place(x=300,y=210)
e2=Entry(root,font=font2)
e2.place(x=300,y=310)
e3=Entry(root,font=font2)
e3.place(x=300,y=410)
e4=Entry(root,font=font2)
e4.place(x=300,y=510)

def save():
    name = e1.get()
    id = e2.get()
    email = e3.get()
    password = e4.get()
    data = (id,name,email,password)
    cursor.execute("insert into user values(?,?,?,?)",data)
    con.commit()
    e1.delete(0,END)
    e2.delete(0,END)
    e3.delete(0,END)
    e4.delete(0,END)

def update_user():
    name = e1.get()
    id = e2.get()
    email = e3.get()
    password = e4.get()
    data = (name,email,password,id)
    cursor.execute("update user set name = ?,email =?,password = ? where id = ?",data)
    con.commit()
    e1.delete(0,END)
    e2.delete(0,END)
    e3.delete(0,END)
    e4.delete(0,END)
    b1.config(command=save)
    


def update():
    id = askinteger("message","Enter update id:")
    cursor.execute("select * from user where id = ?",(id,))
    data = cursor.fetchone()
    e1.delete(0,END)
    e2.delete(0,END)
    e3.delete(0,END)
    e4.delete(0,END)
    e1.insert(END,data[1])
    e2.insert(END,data[0])
    e3.insert(END,data[2])
    e4.insert(END,data[3])
    b1.config(command=update_user)
    

def show():
    cursor.execute("select * from user")
    data = cursor.fetchall()
    for i in data:
        print(i)
def delete():
    id = askinteger("vanakkam","Enter delete id :")
    confirmation  = askokcancel("welcome","want to permanently delete the record")
    if(confirmation):
        cursor.execute("delete from user where id =?",(id,))
    else:
        showwarning("hi","delete failed......")

b1=Button(root,text="Save",command=save)
b1.place(x=600,y=210)
b2=Button(root,text="Update",command=update)
b2.place(x=600,y=310)
b3=Button(root,text="delete",command=delete)
b3.place(x=600,y=410)
b4=Button(root,text="show",command=show)
b4.place(x=600,y=510)


root.mainloop()
