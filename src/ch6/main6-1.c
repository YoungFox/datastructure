// 二叉树

#define CHAR 1
#include"../c1.h"

#if CHAR
    typedef char TElemType;
    TElemType Nil = ' ';
#else
    typedef char TElemType;
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

    printf("root is:%c",e);

    int d;
    scanf("%d",d);
}
// printf("%d",nil);