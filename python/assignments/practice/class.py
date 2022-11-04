# class Shoe():
#     def __init__(self, brand, type, price):
#         self.brand = brand
#         self.type = type
#         self.price = price
#         self.in_stock = True
#     def greeting(self):
#         print(f"My favorite brand is {self.brand}.")
#     def greetingTwo(self):
#         print(f"They are {self.type}.")
#     def greetingThree(self):
#         print(f"{self.brand} cost {self.price}.")
#     def get_price_by_percent(self, percent):
#         self.price = self.price * (1 - percent)

# sk8er_shoe = Shoe("Nike","Low Top","55.55")
# kasey = Shoe("Doc Martins","Boots",89.99)
# kasey.greeting()
# kasey.greetingTwo()
# kasey.greetingThree()
# kasey.get_price_by_percent(.50)
# print(kasey.price)
class Shoe:

    def __init__(self, brand, shoe_type, price):
        self.brand = brand
        self.type = shoe_type
        self.price = price
        self.in_stock = True
    
    # Takes a float/percent as an argument and reduces the
    # price of the item by that percentage.
    def on_sale_by_percent(self, percent_off):
        self.price = self.price * (1-percent_off)
    
    # Returns a total with tax added to the price.
    def total_with_tax(self, tax_rate):
        tax = self.price * tax_rate
        total = self.price + tax
        return total
    
    # Reduces the price by a fixed dollar amount.
    def cut_price_by(self, amount):
    	if amount < self.price:
            self.price -= amount
        else:
    	    print("Price deduction too large.")

# Create some shoes. Call some methods on those shoes. Print your shoe's attributes..
# my_shoe = Shoe("Converse", "Low-tops", 36.00)
# print(my_shoe.total_with_tax(0.05))
# my_shoe.cut_price_by(10)
# print(my_shoe.price)

jesseShoe = Shoe("Nike","Basketball", 69.99)
jesseShoe.total_with_tax(0.1)
jesseShoe.cut_price_by(20)
print(jesseShoe.price)