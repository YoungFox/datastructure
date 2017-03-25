// 循环队列
#include"../c1.h"
typedef int QElemType;
#include"c3-3.h"
#include"bo3-3.c"

void visit(QElemType i){
    printf("%d",i);
}

int main(){
    Status j;
    int i = 0;
    int l;
    QElemType d;
    SqQueue Q;
    InitQueue(&Q);
    printf("初始化队列之后，队列是否为空？%u(1:空 0：否)\n",QueueEmpty(Q));

    for(;i<MAXQSIZE;i++){
        EnQueue(&Q,i+3);
    }
    printf("队列长度为：%d\n",QueueLength(Q));
    for(l=1;l<MAXQSIZE;l++){
        DeQueue(&Q,&d);
        printf("删除的队头元素是%d\n",d);
        EnQueue(&Q,l+4);
    }

    printf("现在队列中的元素为：\n");
    QueueTraverse(Q,visit);


    j=GetHead(Q,&d);
    if(j){
        printf("现在队头元素为%d\n",d);
    }
    ClearQueue(&Q);
    printf("清空队列后，队列是否为空？%u(1:空 0：否)\n",QueueEmpty(Q));
    return 0;
}