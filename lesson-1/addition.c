#include <stdio.h>

int main(void)
{
    int a, b, sum;

    printf("/nEnter two numbers: ");
    // enter 2 numbers with space between
    scanf("%d %d", &a, &b);

    sum = a + b;
    float divide = (float) a / (float) b;

    printf("sum : %f", divide);

}
