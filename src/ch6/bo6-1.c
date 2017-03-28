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

    int l;
    char s[MAX_TREE_SIZE];
    printf("input node value,space presents empty node<=%d",MAX_TREE_SIZE);
    gets(s);
  
    l=strlen(s);
    for(;i<l;i++){
        T[i] = s[i];
        if(i!=0&&T[(i+1)/2-1] == Nil&&T[i]!=Nil){
            printf("not root node and have no parents node%c\n",T[i]);
            exit(ERROR);
        }
    }
    for(;i<MAX_TREE_SIZE;i++){
        T[i] = Nil;
    }
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