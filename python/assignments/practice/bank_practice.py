class User:
    def __init__(self,name,email):
        self.name = name
        self.email = email
        self.accounts = {'checking': BankAccount(balance=0,interestRate=0.02), 'savings': BankAccount(balance=0,interestRate=0.04)}

    def display_user_info(self):
        print(self.name)
        print(self.email)
        print(f"Checking: {self.accounts['checking'].balance}")
        print(f"Savings: {self.accounts['savings'].balance}")
        return self

    def display_account(self,accountName):
        self.accounts[accountName].display_balance()
        return self

    def make_deposit(self,account,amount):
        self.accounts[account].deposit(amount)
        return self

    def make_withdrawl(self,account,amount):
        self.accounts[account].withdraw(amount)
        return self

class BankAccount:
    def __init__(self,balance = 0,interestRate = 0.02):
        self.balance = balance
        self.interestRate = interestRate

    def display_balance(self):
        print(self.balance)
        return self

    def deposit(self,amount):
        self.balance += amount
        return self

    def withdraw(self,amount):
        self.balance -= amount
        return self


jesse = User("jesse","email@email.com")
jesse.make_deposit('checking',500)
jesse.make_deposit('savings',1000).make_withdrawl('savings',100)
jesse.display_user_info()
jesse.display_account('checking').display_account('savings')