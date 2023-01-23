public class BankTest {
    public static void main(String[] args) {
        BankAccount account1 = new BankAccount(1000, 5000);
        System.out.println(account1.getCheckingAmount());
        System.out.println(BankAccount.accountNum());
        account1.depositChecking(700);
        account1.withdrawChecking(1600);
        System.out.println(account1.getCheckingAmount());
        System.out.println(account1.getAccountTotalCash());

        BankAccount account2 = new BankAccount(100000, 500000);
        System.out.println("Account2 Total Cash: " + account2.getAccountTotalCash());
        System.out.println(BankAccount.totalCash);
        System.out.println(BankAccount.accountNum());
        System.out.println("Account1 Total Cash: " + account1.getAccountTotalCash());

        BankAccount account3 = new BankAccount(4444, 4444);
        double theCash = BankAccount.totalCashAmount();
        System.out.println(theCash);
        System.out.println("Bank Accounts Total Cash: " + BankAccount.totalCashAmount());

    }
}