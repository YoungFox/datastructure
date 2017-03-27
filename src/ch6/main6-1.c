// 二叉树

#define CHAR 0
#include"../c1.h"

#if CHAR
    typedef char TElemType;
    TElemType nil = ' ';
#else
    typedef char TElemType;
    TElemType nil = 0;
#endif
#include"c6-1.h"
#include"bo6-1.c"

Status visit(TElemType e){
    printf("%d",e);
    return OK;
}

void main(){

}
// printf("%d",nil);