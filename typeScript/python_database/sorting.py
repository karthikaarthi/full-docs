'''
def selection(l):	
    for i in range(len(l)):
        for j in range(i+1,len(l)):
            if(l[i] > l[j]):
                l[i],l[j] = l[j],l[i]

l=[5,1,4,2,3]
print(l)
selection(l)
print(l)
'''

def insertion(l):
    for i in range(1,len(l)):
        temp = l[i]
        print("temp : ",temp)
        j = i-1
        while(j >= 0 and temp < l[j]):
            l[j+1] = l[j]
            j=j-1
        l[j+1] = temp
    print("final temop :",temp)
l=[5,1,4,2,3]
print(l)
insertion(l)
print(l)



