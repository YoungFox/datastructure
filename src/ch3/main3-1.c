#include"../c1.h"
typedef int SElemType;
#include"c3-1.h"
#include"bo3-1.c"

void main(){
    int j;
    SqStack s;
    SElemType e;
    InitStack(&s);
    printf("栈是否为空：%d(1:是 0：否)\n",StackEmpty(s));
    for(j=0;j<12;j++){
        Push(&s,j);
    };
    StackTraverse(s);
    printf("分割线--------------------------------\n");
    Pop(&s,&e);
    printf("size是：%d\n",s.stacksize);
    printf("%d\n",e);
    getPop(&s,&e);
    printf("getPop是：%d\n",e);
    // Pop(&s,&e);
    // printf("%d\n",s.stacksize);
    // printf("%d\n",e);
    printf("长度是：%d\n",stackLength(s));
    
    printf("栈是否为空：%d(1:是 0：否)\n",StackEmpty(s));
    clearStack(&s);

    printf("清空栈之后栈是否为空：%d(1:是 0：否)\n",StackEmpty(s));

    DestroyStack(&s);
    printf("销毁栈之后栈之后:s.top=%u,s.base=%u,s.stacksize=%d",s.top,s.base,s.stacksize);
}
