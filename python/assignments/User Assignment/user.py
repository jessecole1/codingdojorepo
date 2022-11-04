class User:
    def __init__(self,first_name,last_name,email,age,points,member):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.age = age
        self.gold_card_points = points
        self.is_rewards_member = member

    def display_info(self):
        print(self.first_name)
        print(self.last_name)
        print(self.email)
        print(self.age)
        return self

    def enroll(self):
        if self.is_rewards_member == False:
            self.is_rewards_member = True
        else:
            print("User already a member")
        return self

    def spend_points(self, amount):
        if amount > self.gold_card_points:
            self.gold_card_points = self.gold_card_points
        else:
            self.gold_card_points -= amount
        return self


Jesse = User("Jesse","Cole","cole@email.com",28,100,True)
Kasey = User("Kasey","Sanders","Sanders@email.com",28,100,False)
Lori = User("Lori","Cole","Lori@email.com",65,100,True)
Jesse.spend_points(50).display_info()
Kasey.spend_points(100).display_info().enroll()