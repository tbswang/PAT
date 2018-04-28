#include <stdio.h>
int main(){
    // printf("hello world!");
    int count = 0;
    int n = 0;
    scanf("%d", &n);
    while (n != 1){
    	count++;
        if (n % 2 == 0)
            n = n / 2;
        else
            n = (3*n+1)/2;
    }
    printf("%d",count);
    return 0;
}
