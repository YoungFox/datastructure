Status InitQueue(SqQueue *Q){
    (*Q).base = (QElemType *)malloc(MAXQSIZE*sizeof(QElemType));
    if(!(*Q).base){
        exit(OVERFLOW);
    }
    (*Q).front=(*Q).rear = 0;
    return OK;
}

Status DestroyQueue(SqQueue *Q){
    if((*Q).base){
        free((*Q).base);
    }
    (*Q).base = NULL;
    (*Q).front = (*Q).rear = 0;
    return OK;
}

Status ClearQueue(SqQueue *Q){
    (*Q).front = (*Q).rear = 0;
    return OK;
}

Status QueueEmpty(SqQueue Q){
    if(Q.front == Q.rear){
        return TRUE;
    }else{
        return FALSE;
    }
}

int QueueLength(SqQueue Q){
    return (Q.rear-Q.front+MAXQSIZE)%MAXQSIZE;
}

Status GetHead(SqQueue Q,QElemType *e){ 
    if(Q.front == Q.rear){
        return ERROR;
    }
    *e=*(Q.base+Q.front);
    return OK;
}
Status EnQueue(SqQueue *Q,QElemType e){
    if(((*Q).rear+1)%MAXQSIZE == (*Q).front){
        return ERROR; //队列满
    }
    (*Q).base[(*Q).rear] = e;
    (*Q).rear = ((*Q).rear + 1)%MAXQSIZE;
    return OK;
}

Status DeQueue(SqQueue *Q,QElemType *e){
    if((*Q).rear == (*Q).front){
        return ERROR; 
    }
    *e = (*Q).base[(*Q).front];
    (*Q).front = ((*Q).front+1)%MAXQSIZE;
    return OK;
}

Status QueueTraverse(SqQueue Q,void(*vi)(QElemType)){
    int i;
    i=Q.front;
    while(i!=Q.rear){
        vi(*(Q.base+i));
        i=(i+1)%MAXQSIZE;
    }
    printf("\n");
    return OK;
}