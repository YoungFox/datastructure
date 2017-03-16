// 顺序栈的基本操作

Status InitStack(SqStack *S)
{
    (*S).base = (SElemType *)malloc(STACK_INIT_SIZE*sizeof(SElemType));
    if(!(*S).base)
        exit(OVERFLOW);
    (*S).top = (*S).base;
    (*S).stacksize = STACK_INIT_SIZE;
}

Status clearStack(SqStack *S){
    (*S).top = (*S).base;
    return OK;
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

Status Pop(SqStack *S,SElemType *e)
{
    if((*S).top == (*S).base){
        return ERROR;
    }
    *e = *--(*S).top;
    return OK;
}

Status getPop(SqStack *S,SElemType *e)
{
    if((*S).top != (*S).base){
        *e = *--(*S).top;
    }else{
        return ERROR;
    }
}

int stackLength(SqStack S){
    printf("栈底：%d\n",S.base);
    printf("栈顶：%d\n",S.top);
    return S.top - S.base;
}

Status StackTraverse(SqStack S)
{
    while(S.top>S.base)
        printf("%d\n",*S.base++);
    return OK;
}

Status StackEmpty(SqStack S)
{
    if(S.top == S.base){
        return TRUE;
    }else{
        return FALSE;
    }
}