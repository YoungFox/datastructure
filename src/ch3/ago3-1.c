#include"../c1.h"
typedef int SElemType;

#include"c3-1.h"
#include"bo3-1.c"

void main(){
    SqStack s;
    InitStack(&s);
    int a,b,c;
    SElemType e;
    scanf("%d",&a);
    // a = 17;
    while(a){
        Push(&s,a%8);
        a = a/8;
    }
    // printf("%d",s.stacksize);
    // printf("%d",a);
    // StackTraverse(s);
    while(!StackEmpty(&s))){
        Pop(&s,&e);
        printf("%d",e);
    }
    // scanf("%d",&a);
}