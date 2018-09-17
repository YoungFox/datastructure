// 二叉树的顺序存储表示
#define MAX_TREE_SIZE 100
typedef TElemType SqBiTree[MAX_TREE_SIZE];

typedef struct{
    int level,order;//结点的层，本层序号
}position;