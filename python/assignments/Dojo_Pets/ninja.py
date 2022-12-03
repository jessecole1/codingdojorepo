from thepets import Pet
import random
class Ninja:
    def __init__(self,first,last,treats,food,pet):
        self.first_name = first
        self.last_name = last
        self.treats = treats
        self.pet_food = food
        self.myPet = pet

    def walk(self):
        print(f"You walked {self.myPet.name}. His health increased by 5.")
        self.myPet.play()
        return self
    def feed(self):
        print(f"Feeding {self.myPet.name} {self.pet_food} increased his energy by 5 and health by 10.")
        self.myPet.eat()
        return self

    def bathe(self):
        self.myPet.noise()
        return self

    def giveTreat(self):
        e = random.randint(0, len(self.treats)-1)
        print(f'Feeding {self.myPet.name} {self.treats[e]}')
        return self 


kingston = Pet('Kingston','cat',['run','absolute madlad','jump','fetch'])
# kingston.doTrick()
# kingston.doTrick()
# kingston.doTrick()
# kingston.doTrick()
# kingston.doTrick()
# first,last,treats,food,pet
jesse = Ninja('jesse','cole',['temptations','tuna','chicken'],'cat food',kingston)
jesse.giveTreat()
jesse.bathe()
jesse.feed()


# class Pet:
#     def __init__(self,name,type,tricks,health,energy):
#         self.name = name
#         self.type = type
#         self.tricks = tricks
#         self.health = health
#         self.energy = energy

#         # self.name = pets['name']
#         # self.type = pets['type']
#         # self.tricks = pets['tricks']
#         # self.health = pets['health']
#         # self.energy = pets['energy']

#     def sleep(self):
#         print("( ≚ᄌ≚)ƶƵ")
#         self.energy += 25
#         return self

#     def eat(self):
#         self.health += 10
#         self.energy += 5
#         return self

#     def play(self):
#         self.health += 5
#         return self

#     def noise(self):
#         print("Meow!")



# jesse = Ninja("Jesse","Cole","temptations","kibble","kingston")
# jesse.walk()
# jesse.feed()
# jesse.bathe()

# monster = Pet('monster','dog',['fetch','hide'])


# pets = [
#     {
#         'name':'Kingston',
#         'type':'cat',
#         'tricks':'run',
#         'health':60,
#         'energy':100
#     }
# ]