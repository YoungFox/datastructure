#include"../c1.h"
typedef int SElemType;
#include"c3-1.h"
#include"bo3-1.c"

void main(){
    int j;
    SqStack s;
    InitStack(&s);
    for(j=0;j<12;j++){
        Push(&s,j);
    }
    printf("%d\n",s.stacksize);
    StackTraverse(s);
}
