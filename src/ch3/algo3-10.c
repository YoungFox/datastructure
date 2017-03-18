// hanoi
#include"stdio.h"

int c =0;
void move(int n,char f,char t){
    printf("第%d步，%d号块从%c移动到%c\n",++c,n,f,t);
};
void hanoi(int n,char x,char y,char z){
    if(n==1){
        move(n,x,z);
    }else{
        hanoi(n-1,x,z,y);
        move(n,x,z);
        hanoi(n-1,y,x,z);
    }
}

void main(){

    char x='x',y='y',z='z';
    int n = 3;
    hanoi(n,x,y,z);

}