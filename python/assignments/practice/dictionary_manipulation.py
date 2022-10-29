person = {"first": "Ada", "last": "Lovelace", "age": 42, "is_organ_donor": True}
# Adds a new key value pair for email to person
person["email"] = "alovelace@codingdojo.com"
        
# Changes person's "last" value to "Bobada"
person["last"] = "Bobada"
print(person)

if "email" not in person:
    person["email"] = "wrongemail@aol.com"
else:
    print("Would you like to replace your email?")


countries_so_far = {"Mexico": 1, "Morocco": 1}
new_visits = ["Albania", "Mexico", "Togo", "Morocco"]
    
# To add Albania to the list
countries_so_far["Albania"] = 1
# To add 1 to the Mexico tally
countries_so_far["Mexico"] += 1 # Changes Mexico tally to 2!
# your code here to finish updating your travel log!
countries_so_far["Togo"] = 1