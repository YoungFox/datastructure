#include"../c1.h"
typedef int QElemType;
#include"c3-3.h"
#include"bo3-4.c"

void visit(QElemType i){
    printf("%d",i);
}

void main(){
    Status j;
    int i,n;
    QElemType d;
    SqQueue Q;
    InitQueue(&Q);
    printf("初始化队列后，队列是否为空？%u（1:是 0:否）\n",QueueEmpty(&Q));
    n = 4;
    for(i=0;i<n;i++){
        EnQueue(&Q,i+1);
    }
    printf("队列的长度为：%d\n",QueueLength(&Q));
    printf("现在队列中的元素为：");
    QueueTraverse(Q,visit);
    DeQueue(&Q,&d);
    printf("删除的队头元素为：%d\n",d);
    printf("队列中的元素为:");
    QueueTraverse(Q,visit);
    j=GetHead(Q,&d);
    if(j){
        printf("队头元素为：%d\n",d);
    }else{
        printf("无队头元素（空队列）\n");
    }
    DestroyQueue(&Q);
    
}