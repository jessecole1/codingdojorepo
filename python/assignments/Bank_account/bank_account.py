class BankAccount:
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



# user1Account = BankAccount(0.01)
# user2Account = BankAccount(0.08)
# user3Account = BankAccount(0.15)

# user1Account.deposit(500).deposit(1500).deposit(700).withdraw(200).yield_interest().display_account_info()
# user2Account.deposit(10000).deposit(12000).withdraw(5000).withdraw(4000).withdraw(1000).withdraw(1000).yield_interest().display_account_info()
# user3Account.deposit(100000).yield_interest().display_account_info()

# BankAccount.bankInfo()

kasey = BankAccount(0.02)
kasey.deposit(500).deposit(1000).withdraw(200).yield_interest()
print(kasey.balance)