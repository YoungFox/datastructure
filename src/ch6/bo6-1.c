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

Status BitTreeEmpty(SqBiTree T){
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
    if(BitTreeEmpty(T)){
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