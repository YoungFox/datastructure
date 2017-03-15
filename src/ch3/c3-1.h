// stack
#define STACK_INIT_SIZE 10 //initial size
#define STACKINCREMENT 2

typedef struct SqStack
{
    SElemType *base;
    SElemType *top;
    int stacksize;
}SqStack;