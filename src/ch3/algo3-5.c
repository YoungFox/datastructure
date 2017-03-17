
typedef struct /*坐标位置类型*/
{
    int x; //行坐标，即平时的y轴，注意区别
    int y;
}PosType;

#define MAXLENGTH 25
typedef int MazeType[MAXLENGTH][MAXLENGTH]; 

MazeType m; //迷宫数组
int curstep = 1;

typedef struct
{
    int ord; //通道快在路径上的序号
    PosType seat; //坐标
    int di; //下一块的方向（0-3表示东-北）
}SElemType;

#include"../c1.h"
#include"c3-1.h"
#include"bo3-1.c"

void Print(int x,int y){
    // 输出迷宫
   int i,j;
   for(i=0;i<x;i++){
    for(j=0;j<y;j++){
        printf("%3d",m[i][j]);
    }
    printf("\n");
   } 
}

Status Pass(PosType b){
    if(m[b.x][b.y]==1){
        return OK;
    }else{
       return ERROR; 
    }
}

void FootPrint(PosType a){
    m[a.x][a.y] = curstep;
}

PosType NextPos(PosType c,int di){
    PosType direc[4] = {{0,1},{1,0},{0,-1},{-1,0}};
    c.x += direc[di].x;
    c.y += direc[di].y;
    return c;
}
void MarkPoint(PosType b){
    m[b.x][b.y] = -1;
}

// 核心算法
Status MazePath(PosType start,PosType end){
    SqStack S;
    PosType curpos;
    SElemType e;
    InitStack(&S);
    curpos = start;
    do{
        if(Pass(curpos)){
            FootPrint(curpos);
            e.ord = curstep;
            e.seat.x = curpos.x;
            e.seat.y = curpos.y;
            e.di=0;
            Push(&S,e);
            curstep++;
            if(curpos.x==end.x&&curpos.y==end.y){
                return TRUE;
            }
            curpos = NextPos(curpos,e.di);
        }else{
            if(!StackEmpty(S)){
                Pop(&S,&e);
                curstep--;
            }
            while(e.di == 3&&!StackEmpty(S)){
                MarkPoint(e.seat);
                Pop(&S,&e);
                curstep--;
            }

            if(e.di < 3){
                e.di++;
                Push(&S,e);
                curstep++;
                curpos = NextPos(e.seat,e.di);
            }
        }
    }while(!StackEmpty(S));
    return FALSE;
}

void main(){
    PosType begin,end;
    int i,j,x,y,x1,y1;
    printf("请输入迷宫的行数，列数（包括外墙）：");
    // scanf("%d,%d",&x,&y);
    x = 25;y=25;

    // 将上下墙定义为0，即不能通过
    for(i=0;i<x;i++){
        m[0][i] = 0;
        m[x-1][i] = 0;
    }
    // 将左右墙定为0
    for(j=0;j<y;j++){
        m[j][0] = 0;
        m[j][y-1] = 0;
    }

    for(i=1;i<x-1;i++){
        for(j=1;j<y-1;j++){
            m[i][j] = 1;
        }
    }

    printf("请输入迷宫内墙单元数：");
    // scanf("%d",&j);
    j = 8;

    for(i=1;i<=j;i++){
        // scanf("%d",&x1,&y1);
        int a[8][2] = {{1,1},{2,2},{3,3},{4,4},{5,5},{6,6},{7,7},{8,8}};
        // m[x1][y1] = 0;
        m[a[i-1][0]][a[i-1][1]] = 0;
    }

    printf("迷宫结构如下：\n");
    Print(x,y);

    printf("请输入起点的行数，列数：\n");
    // scanf("%d,%d",&begin.x,&begin.y);
    begin.x = 1;
    begin.y = 1;

    printf("请输入终点的行数，列数：");
    // scanf("%d,%d",&end.x,&end.y);

    end.x =23;
    end.y =23;

    if(MazePath(begin,end)){
        printf("此迷宫从入口到出口的路径如下\n");
        Print(x,y);
    }else{
        printf("迷宫走不出去");
    }
}