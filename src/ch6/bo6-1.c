// 二叉树的基本操作

Status InitBiTree(SqBiTree T){
   int i;
   for(i=0;i<MAX_TREE_SIZE;i++){
       T[i] = Nil;
       return OK;
   } 
}

void DestroyBiTree(){

}

#define ClearBiTree InitBiTree;//顺序存储结构中，二者完全一样

Status BiTreeEmpty(SqBiTree T){
    if(T[0] == Nil){
        return TRUE;
    }else{
        return FALSE;
    }
}

Status CreateBiTree(SqBiTree T){
    int i = 0;
    printf("input the value,0 is empty node,999 is end:\n");
    while(1){
        scanf("%d",&T[i]);
        if(T[i] == 999){
            break;
        }

        if(i!=0&&T[(i+1)/2-1]==Nil&&T[i]!=Nil){
            printf("exist a no-root node whitch has no parents");
        }
        i++;
    }

    while(i<MAX_TREE_SIZE){
        T[i] = Nil;
        i++;
    }

    return OK;
}

int BitTreeDepth(SqBiTree T){
    int i,j=-1;
    for(i=MAX_TREE_SIZE-1;i>=0;i--){
        if(T[i]!=Nil){
            break;
        }
    }
    i++;

    do
        j++;
    while(i>=pow(2,j));
    return j;
}

Status Root(SqBiTree T,TElemType *e){
    if(BiTreeEmpty(T)){
        return ERROR;
    }else{
        *e=T[0];
        return OK;
    }
}

TElemType Value(SqBiTree T,position e){ 
    return T[(int)pow(2,e.level-1)+e.order - 2];
}

Status Assign(SqBiTree T,position e,TElemType value){
    int i=(int)pow(2,e.level-1)+e.order - 2;
    if(value!=Nil&&T[(i+1)/2-1] == Nil){
        return ERROR;
    }else if(value==Nil&&(T[i*2+1]!=Nil||T[i*2+2]!=Nil)){
        return ERROR;
    }

    T[i] = value;
    return OK;
}

TElemType Parent(SqBiTree T,TElemType e){
    int i;
    if(T[0] == Nil){
        return Nil;
    }

    for(i=1;i<=MAX_TREE_SIZE-1;i++){
        if(T[i] == e){
            return T[(i+1)/2-1];
        }
    }
    return Nil;
}

TElemType LeftChild(SqBiTree T,TElemType e){
    int i;
    if(T[0] == Nil){
        return Nil;
    }
    for(i=0;i<MAX_TREE_SIZE;i++){
        if(T[i] == e){
            return T[(i*2)+1];
        }
    }
    return Nil;
}

TElemType RightChild(SqBiTree T,TElemType e){
    int i;
    if(T[0] == Nil){
        return Nil;
    }
    for(i=0;i<MAX_TREE_SIZE;i++){
        if(T[i] == e){
            return T[(i*2)+2];
        }
    }
    return Nil;
}

TElemType LeftSibling(SqBiTree T,TElemType e){
    int i;
    if(T[0] == Nil){
        return Nil;
    }

    for(i=1;i<MAX_TREE_SIZE-1;i++){
        if(T[i] == e&&i%2==0){
            return T[i-1];
        }
    }
    return Nil;
}


TElemType RightSibling(SqBiTree T,TElemType e){
    int i;
    if(T[0] == Nil){
        return Nil;
    }

    for(i=1;i<MAX_TREE_SIZE-1;i++){
        if(T[i] == e&&i%2){
            return T[i+1];
        }
    }
    return Nil;
}

// void Move(){

// }

void LevelOrderTraverse(SqBiTree T,Status(*Visit)(TElemType)){
    int i=MAX_TREE_SIZE-1,j;
    while(T[i] == Nil){
        i--;
    }
    for(j=0;j<=i;j++){
        if(T[j]!=Nil){
            Visit(T[j]);
        }
    }

    printf("\n");
}

Status(*VisitFunc)(TElemType);//函数变量

void InTraverse(SqBiTree T,int e){
    if(T[2*e+1]!=Nil){
       InTraverse(T,2*e+1); 
    }
    VisitFunc(e);
    if(T[2*e+2]!=Nil){
        InTraverse(T,2*e+2);
    }
}

Status InOrderTraverse(SqBiTree T,Status(*Visit)(TElemType)){
    VisitFunc = Visit;

    if(!BiTreeEmpty(T)){
        InTraverse(T,0);
    }
    printf("\n");
}

void PostTraverse(SqBiTree T,int e){
    if(T[2*e+1]!=Nil){
        PostTraverse(T,2*e+1);
    }
    if(T[2*e+2]!=Nil){
        PostTraverse(T,2*e+2);
    }
    VisitFunc(T[e]);
}

Status PostOrderTraverse(SqBiTree T,Status(*Visit)(TElemType)){
    // 后序遍历
    VisitFunc = Visit;
    if(!BiTreeEmpty(T)){
        PostTraverse(T,0);
    }
    printf("\n");
    return OK;
}

void PreTraverse(SqBiTree T,int e){
    VisitFunc(T[e]);
    if(T[2*e+1]!=Nil){
        PreTraverse(T,2*e+1);
    }
    if(T[2*e+2]!=Nil){
        PreTraverse(T,2*e+2);
    }
}

Status PreOrderTraverse(SqBiTree T,Status(*Visit)(TElemType)){
    VisitFunc=Visit;
    if(!BiTreeEmpty(T)){
        PreTraverse(T,0);
    }
    printf("\n");
    return OK;
}