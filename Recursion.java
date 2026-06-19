/*What is Recursion?
Recursion is a technique where a method calls itself to solve a smaller version of the same problem.
A recursive solution has:
Base Case → Stops recursion.
Recursive Case → Calls itself with a smaller input.
Suppose:
Current Value = ₹10,000
Growth Rate = 10% per year
Forecast Period = 5 years
Formula:
FutureValue=CurrentValue×(1+GrowthRate)
Using recursion:
FV(n)=FV(n−1)×(1+GrowthRate)
Base Case:
FV(0)=CurrentValue*/

class FinancialForecast {
    public static double futureValue(double currentValue,double growthRate,int years) {
        if(years == 0) {
            return currentValue;
        }
        return futureValue(currentValue,growthRate,years - 1)* (1 + growthRate);
    }
    public static void main(String[] args) {
        double currentValue = 10000;
        double growthRate = 0.10;
        int years = 5;
        double result = futureValue(currentValue,growthRate,years);
        System.out.printf(
            "Predicted Future Value: %.2f",
            result);
    }
}

/*Output:
Predicted Future Value: 16105.10
Time Complexity Analysis
For n years: T(n)=T(n-1)+O(1) 
Therefore: Time Complexity = O(n)
and space complexity = O(n) due to recursive call stack.
Optimization: Iterative approach can be used to reduce space complexity to O(1) and avoid excessive function call overhead*/