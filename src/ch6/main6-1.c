// 二叉树

#define CHAR 0
#include"../c1.h"

#if CHAR
    typedef char TElemType;
    TElemType Nil = ' ';
#else
    typedef int TElemType;
    TElemType Nil = 0;
#endif
#include"c6-1.h"
#include"bo6-1.c"

Status visit(TElemType e){
    printf("%d",e);
    return OK;
}
void main(){
    Status i;
    int j;
    position p;
    TElemType e;
    SqBiTree T,s;
    InitBiTree(T);
    CreateBiTree(T);
    printf("the deepth is:%d\n",BitTreeDepth(T));

    Root(T,&e);

    printf("root is:%d\n",e);

    printf("input position to get value(level,order)\n");
    scanf("%d%d",&p.level,&p.order);

    printf("value is %d\n",Value(T,p));

    printf("input position and value to change old value\n");    

    scanf("%d%d%d",&p.level,&p.order,&e);

    // printf("input value is %c\n", ee);
    Assign(T,p,e);

    printf("the value is %d after changed\n",Value(T,p));
    
    printf("node%d 's parent is%d",e,Parent(T,e));

    printf("leftchild is %d,rightchild is %d\n",LeftChild(T,e),RightChild(T,e));

    printf("left sibling is %d,right sibling is %d\n",LeftSibling(T,e),RightSibling(T,e));

    printf("visit in order");
    LevelOrderTraverse(T,visit);

    int d;
    scanf("%d",d);
}
// printf("%d",nil);