// Hello World Program

#include<stdio.h>

void main(){
	// int a,b;
	// int * pointer1,* pointer2;
	// a=100;b=10;
	// pointer1 = &a;
	// pointer2 = &b;
	// int *pointer3 = &b;
	// int *pointer4;
	// pointer4 = &b;
	// printf("%d,%d\n",a,b);
	// printf("%d,%d,%d,%d\n",pointer1,pointer2,pointer3,pointer4);


	int x = 100;
    char str[20] = "c.biancheng.net";
    printf("%#X, %#X\n", &x, str);

	int a = 15, b = 99, c = 222;
    int *p = &a;  //定义指针变量
    *p = b;  //通过指针变量修改内存上的数据
    c = *p;  //通过指针变量获取内存上的数据
    printf("%d, %d, %d, %d,%d\n", a, b, c, *p, p);

	printf("%d,%s",NULL,NULL);
}