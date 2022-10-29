from ast import Num


x = [ [5,2,3], [10,8,9] ] 
students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 20} ]

# #1) Change the value 10 in x to 15. Once you're done, x should now be [ [5,2,3], [15,8,9] ].

def functionOne(num):
    x[1][0] = num
    return x[1][0]

functionOne(15)
        

# #2) Change the last_name of the first student from 'Jordan' to 'Bryant'

def functionTwo(var):
    x = var
    students[0]["last_name"] = x
    return x

functionTwo("Bryant")


# #3) In the sports_directory, change 'Messi' to 'Andres'

def thirdFunction(var):
    x = var
    sports_directory['soccer'][0] = x
    return x

thirdFunction("Andres")


#4) Change the value 20 in z to 30

def fourthFunction(num):
    x = num
    z[0]['y'] = x
    return x

fourthFunction(30)

# ------------------------------------------------------------

# Create a function iterateDictionary(some_list) that, given a list of dictionaries, the function loops through each dictionary in the list and prints each key and the associated value. For example, given the following list:

students = [
         {'first_name':  'Michael', 'last_name' : 'Jordan'}, #index 0
         {'first_name' : 'John', 'last_name' : 'Rosales'}, #index 1
         {'first_name' : 'Mark', 'last_name' : 'Guillen'}, #index 2
         {'first_name' : 'KB', 'last_name' : 'Tonel'} #index 3
    ]
def iterateDictionary(var):
    for i in var:
        for j in i:
                print(j + " - " + i[j])
    
iterateDictionary(students)

# should output: (it's okay if each key-value pair ends up on 2 separate lines;
# bonus to get them to appear exactly as below!)
# first_name - Michael, last_name - Jordan
# first_name - John, last_name - Rosales
# first_name - Mark, last_name - Guillen
# first_name - KB, last_name - Tonel

# -------------------------------------------------------------

# Create a function iterateDictionary2(key_name, some_list) that, given a list of dictionaries and a key name, the function prints the value stored in that key for each dictionary. For example, iterateDictionary2('first_name', students) should output:

def iterateDictionary2(key_name, some_list):
    for i in some_list:
        for j in i.keys():
            if j == key_name:
                print(i[j])

iterateDictionary2('first_name',students)
iterateDictionary2('last_name',students)

# --------------------------------------------------------------

# Create a function printInfo(some_dict) that given a dictionary whose values are all lists, prints the name of each key along with the size of its list, and then prints the associated values within each key's list. For example:

dojo = {
   'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
   'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}

def printInfo(dict):
    for key, val in dict.items():
        print('            ')
        print(f'{len(val)} {key.upper()}')
        for i in range(0,len(val)):
            print(val[i])
printInfo(dojo)

# output:
# 7 LOCATIONS
# San Jose
# Seattle
# Dallas
# Chicago
# Tulsa
# DC
# Burbank
    
# 8 INSTRUCTORS
# Michael
# Amy
# Eduardo
# Josh
# Graham
# Patrick
# Minh
# Devon
