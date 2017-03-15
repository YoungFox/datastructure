// Hello World Program

#include<stdio.h>

void main(){
	int a,b;
	int * pointer1,* pointer2;
	a=100;b=10;
	pointer1 = &a;
	pointer2 = &b;
	printf("%d,%d\n",a,b);
	printf("%d,%d\n",pointer1,pointer2);
}