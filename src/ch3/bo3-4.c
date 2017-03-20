// 顺序队列的基本操作

Status InitQueue(SqQueue *Q){
    // 构造一个空队列
    (*Q).base = (QElemType *)malloc(MAXQSIZE*sizeof(QElemType));
    if(!(*Q).base){
        exit(OVERFLOW);
    }
    (*Q).front = (*Q).rear = 0;
    return OK;
}

Status DestroyQueue(SqQueue *Q){
    // 销毁队列Q
    if((*Q).base)
        free((*Q).base);
    (*Q).base = NULL;
    (*Q).front=(*Q).rear=0;
    return OK;
}

Status ClearQueue(SqQueue *Q){
    (*Q).front = (*Q).rear = 0;
    return OK;
}

Status QueueEmpty(SqQueue *Q){
    if((*Q).front == (*Q).rear){
        return TRUE
    }else{
        return FALSE;
    }
}

int QueueLength(SqQueue *Q){
    return ((*Q).rear = (*Q).front);
}