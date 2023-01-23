import java.util.ArrayList;

public class BankAccount {
    private double checkingAccount = 0;
    private double savingsAccount = 0;
    public static int numOfAccounts = 0;
    public static double totalCash = 0;

    // ===== Constructor Method ===== //
    public BankAccount(double checkingAccountParam, double savingsAccountParam) {
        checkingAccount = checkingAccountParam;
        savingsAccount = savingsAccountParam;
        numOfAccounts++;
    }
    // ===== Static Methods ===== //
    public static int accountNum() {
        return numOfAccounts;
    }

    public static double totalCashAmount() {
        return BankAccount.totalCash;
    }

    // ===== Getters and Setters ===== //
    public double getCheckingAmount() {
        return checkingAccount;
    }


    public double getSavingsAmount() {
        return savingsAccount;
    }

    public void depositChecking(double checkingDeposit) {
        BankAccount.totalCash += checkingDeposit;
        this.checkingAccount += checkingDeposit;
    }

    public void depositSavings(double savingsDeposit) {
        BankAccount.totalCash += savingsDeposit;
        this.savingsAccount += savingsDeposit;
    }

    public void withdrawChecking(double checkingWithdraw) {
        if (checkingWithdraw > this.checkingAccount) {
            System.out.println("Insufficient funds");
        }
        else {
            this.checkingAccount -= checkingWithdraw;
            BankAccount.totalCash -= checkingWithdraw;
        }
    }

    public void withdrawSavings(double savingsWithdraw) {
        if (savingsWithdraw > this.savingsAccount) {
            System.out.println("Insufficient funds");
        }
        else {
            this.savingsAccount -= savingsWithdraw;
            BankAccount.totalCash -= savingsWithdraw;
        }
    }

    public double getAccountTotalCash() {
        double sum = checkingAccount + savingsAccount;
        return sum;
    }

    // public double getUsersTotalCash() {
    //     ArrayList<Object> users = new ArrayList();
    //     for (int user : BankAccount) {
    //         return 0.0;
    //     }
    // }
    

}