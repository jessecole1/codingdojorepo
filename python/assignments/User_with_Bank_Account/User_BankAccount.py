class User:
    def __init__(self,name,email):
        self.name = name
        self.email = email
        self.accounts = {'checking' : BankAccount(interestRate = 0.02, balance = 0),'savings' : BankAccount(interestRate = 0.02, balance = 0)}

    def make_deposit(self,amount,accountName):
        self.accounts[accountName].deposit(amount)
        return self

    def make_withdraw(self,amount,accountName):
        self.accounts[accountName].withdraw(amount)
        return self

    def display_user_balance(self,accountName):
        self.accounts[accountName].display_account_info()
        return self

    def transfer(self,accountName,accountName2,amount):
        self.accounts[accountName].withdraw(amount)
        self.accounts[accountName2].deposit(amount)

class BankAccount:
    balance = 0
    accounts = []
    def __init__(self,interestRate, balance = 0):
        self.balance = balance
        self.interestRate = interestRate
        BankAccount.accounts.append(self)
    
    def deposit(self,amount):
        self.balance += amount
        return self

    def withdraw(self,amount):
        if self.balance - amount >= 0:
            self.balance -= amount
        else:
            print("Insufficient Funds: Charging a $5 fee")
            self.balance -= amount + 5
        return self

    def display_account_info(self):
        print(self.balance)
        return self

    def yield_interest(self):
        self.balance = (self.balance * self.interestRate) + self.balance
        return self

    @classmethod
    def bankInfo(cls):
        for account in cls.accounts:
            account.display_account_info()



# inky = User("inky-dinky","inkalodeon@aol.com")
kasey = User("Kasey","kasey@email.com")
jesse = User("Jesse","jesse@email.com")

# jesse.makeSavings("savings")
# kasey.makeSavings("savings")
# kasey.make_deposit(500)
# jesse.display_user_balance('checking')
# kasey.make_deposit(500)
# jesse.make_deposit(1500,'checking')
# jesse.display_user_balance('checking')
# kasey.make_deposit(1000,'savings')
# kasey.display_user_balance('savings')
jesse.make_deposit(500,'checking')
jesse.transfer('checking','savings',200)
jesse.display_user_balance('checking').display_user_balance('savings')