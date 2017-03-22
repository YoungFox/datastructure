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

Status GetHead(SqQueue Q,QElemType *e){
    if(Q.front == Q.rear){
        return ERROR;
    }
    *e = *(Q.base + Q.front);
}

Status EnQueue(SqQueue *Q,QElemType e){
    // 插入新元素到队尾
    if((*Q).rear>=MAXQSIZE){
        (*Q).base = (QElemType *)realloc((*Q).base,((*Q).rear+1)*sizeof(QElemType))
        if(!(*Q).base){
            return ERROR;
        }
    }
    *((*Q).base + (*Q).rear) = e;
    (*Q).rear++;
    return OK;
}

Status DeQueue(SqQueue *Q,QElemType *e){
    if((*Q).front == (*Q).rear){
        return ERROR;
    }
    *e = (*Q).base[(*Q).front];
    (*Q).front = (*Q).front+1;
    return OK;
}

Status QueueTraverse(SqQueue Q,void(*vi){QElemType}){
    int i;
    i = Q.front;
    while(i!=Q.rear){
        vi(*(Q.base+i));
        i++;
    };
    printf("\n");
    return OK;
}