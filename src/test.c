#include <stdio.h>
#include <stdlib.h>

int main(void) {
    int m = 2;
    int n = 3;

    // printf("輸入二維陣列維度(m*n)：");
    // scanf("%d*%d", &m, &n);

    int *ptr = malloc(m * n * sizeof(int));

    for(int i = 0; i < m; i++) {
        for(int j = 0; j < n; j++) {
            *(ptr + n*i + j) = i + j;
        }
    }

    for(int i = 0; i < m; i++) {
        for(int j = 0; j < n; j++) {
            printf("%d\t", *(ptr+n*i+j));
        }
        putchar('\n');
    }

    free(ptr);

    return 0;
}