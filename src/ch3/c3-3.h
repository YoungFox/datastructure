// 队列的顺序存储结构
#define MAXQSIZE 5

typedef struct
{
    QElemType *base;
    int front;
    int rear;
}SqQueue;
