// 顺序栈的基本操作

Status InitStack(SqStack *S)
{
    (*S).base = (SElemType *)malloc(STACK_INIT_SIZE*sizeof(SElemType));
    if(!(*S).base)
        exit(OVERFLOW);
    (*S).top = (*S).base;
    (*S).stacksize = STACK_INIT_SIZE;
}

Status DestroyStack(SqStack *S)
{
    free((*S).base);
    (*S).base = NULL;
    (*S).top = NULL;
    (*S).stacksize = 0;
    return 0;
}

Status Push(SqStack *S,SElemType e)
{   
    if((*S).top - (*S).base >= (*S).stacksize){
        (*S).base = (SElemType *)realloc((*S).base,((*S).stacksize + STACKINCREMENT)*sizeof(SElemType));
        if(!(*S).base)
            exit(OVERFLOW);
        (*S).top = (*S).base + (*S).stacksize;
        (*S).stacksize += STACKINCREMENT;
    }
    *((*S).top++)=e;
    return OK;
}

Status StackTraverse(SqStack S)
{
    while(S.top>S.base)
        printf("%d\n",*S.base++);
    return OK;
}