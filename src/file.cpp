#include <iostream>
using namespace std;
class Stack
{
private:
    int arr[100];
    int top;
    int max = arr[0];
    int maxindex;

public:
    Stack()
    {
        top = -1;
    }
    void push(int value)
    {
        arr[++top] = value;
    }
    void pop()
    {
        arr[--top];
    }
    int findandremovelargest()
    {
        max = arr[0];
        for (int i = 0; i <= top; i++)
        {
            if (arr[i] > max)
            {
                max = arr[i];
                maxindex = i;
            }
        }
        for (int i = maxindex; i <= top; i++)
        {
            arr[i] = arr[i + 1];
        }
        top--;
        display();
        return max;
    }
    void display()
    {
        cout << "Stack is: ";
        for (int i = 0; i <= top; i++)
        {
            cout << arr[i] << " ";
        }
        cout << endl;
    }
};
int main()
{
    Stack stc;
    int n, value;
    cout << "Enter a number of elements :" << endl;
    cin >> n;
    cout << "Enter elements for the stack :" << endl;
    for (int i = 0; i < n; i++)
    {
        cin >> value;
        stc.push(value);
    }
    cout << "original stack :" << endl;
    stc.display();
    int largestelement = stc.findandremovelargest();
    cout << " largest and removed element is :" << largestelement << endl;
    return 0;
}