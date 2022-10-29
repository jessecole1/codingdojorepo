num1 = 42 #variable declaration, number, integer
num2 = 2.3 #variable declaration, number, float
boolean = True #variable declaration, boolean
string = 'Hello World' #variable declaration, string
pizza_toppings = ['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives'] #variable declaration, composite, list, initialize
person = {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False} #variable declaration, composite, dictionary, initialize
fruit = ('blueberry', 'strawberry', 'banana') #variable declaration, composite, list, initialize
print(type(fruit)) #type check
print(pizza_toppings[1]) #datatype, composite, list, access value
pizza_toppings.append('Mushrooms') #datatype, composite, list, add value
print(person['name']) #datatype, composite, dictionary, access value
person['name'] = 'George' #datatype, composite, dictionary, change value
person['eye_color'] = 'blue' #datatype, composite, dictionary, change value
print(fruit[2]) #datatype, composite, list, access value

if num1 > 45: #conditional, if
    print("It's greater")
else: #conditional, else
    print("It's lower")

if len(string) < 5: #conditional, if
    print("It's a short word!")
elif len(string) > 15: #conditional, else if
    print("It's a long word!")
else: #conditional, else
    print("Just right!")

for x in range(5): #for loop, start
    print(x) #for loop, end
for x in range(2,5): #for loop, start
    print(x) #for loop, end
for x in range(2,10,3): #for loop, start
    print(x) #for loop, end
x = 0 #variable declaration, number, integer
while(x < 5): #white loop, start
    print(x) #log statement
    x += 1 #variable declaration

pizza_toppings.pop() #composite, list, remove value
pizza_toppings.pop(1) #composite, list, remove value

print(person) #log statement 
person.pop('eye_color') #composite, dictionary, remove value
print(person) #log statement

for topping in pizza_toppings: #for loop, start
    if topping == 'Pepperoni': #conditional, if statement, start, increment
        continue #for loop, continue
    print('After 1st if statement') 
    if topping == 'Olives': #conditional, if statement, start, increment
        break #for loop, break

def print_hello_ten_times(): #function
    for num in range(10): #for loop, argument
        print('Hello') #log statement

print_hello_ten_times() #return

def print_hello_x_times(x): #function, parameter
    for num in range(x): #for loop, parameter
        print('Hello') #log statement

print_hello_x_times(4) #return, parameter

def print_hello_x_or_ten_times(x = 10): #function, argument
    for num in range(x): #for loop, parameter
        print('Hello') #log statement

print_hello_x_or_ten_times() #return
print_hello_x_or_ten_times(4) #return, parameter


"""
Bonus section
"""

# print(num3)
# num3 = 72
# fruit[0] = 'cranberry'
# print(person['favorite_team'])
# print(pizza_toppings[7])
#   print(boolean)
# fruit.append('raspberry')
# fruit.pop(1)