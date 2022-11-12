import random

class Pet:
    def __init__(self,name,type,tricks):
        self.name = name
        self.type = type
        self.tricks = tricks
        self.health = 100
        self.energy = 100

        # # self.name = pets['name']
        # # self.type = pets['type']
        # # self.tricks = pets['tricks']
        # self.health = pets['health']
        # self.energy = pets['energy']

        # for key,val in pets.items():
        #     print(f"{key}: {val}")
        # print('-  -  -  -  -  -  -  -')

    def sleep(self):
        print("( ≚ᄌ≚)ƶƵ")
        self.energy += 25
        return self

    def eat(self):
        self.health += 10
        self.energy += 5
        return self

    def play(self):
        self.health += 5
        return self

    def noise(self):
        print("Meow!")

    def doTrick(self):
        e = random.randint(0, len(self.tricks)-1)
        print(self.tricks[e])
        # return self




# pets = [
#     {
#         'name':'Kingston',
#         'type':'cat',
#         'tricks':'run',
#         'health':60,
#         'energy':100
#     },
#     {
#         'name':'Monster',
#         'type':'dog',
#         'tricks':'swim',
#         'health':'100',
#         'energy':'90'
#     }
# ]

kingston = Pet('Kingston','cat',['run','absolute madlad','jump','fetch'])
# kingston.doTrick()
# kingston.doTrick()
# kingston.doTrick()
# kingston.doTrick()
# kingston.doTrick()