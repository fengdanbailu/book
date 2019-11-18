const getMapping=function (A){
	var array=getArea(A,[1,1]);
	var mapping={0:0}
	for(var i=0;i<array.length;i++){
		mapping[array[i]]=i+1;
	}
	return mapping;
}
const setMapping=function(A){
	var B=JSON.parse(JSON.stringify(A));
	var mapping=getMapping(A);
	for(var i=0;i<A.length;i++){
		for(var j=0;j<A[0].length;j++){
			B[i][j]=mapping[A[i][j]];
		}
	}
	return B;
}

const exchangeCol=function(A,col1,col2){
	var B=JSON.parse(JSON.stringify(A));
	for(var i=0;i<A.length;i++){
		B[col1][i]=A[col2][i];
		B[col2][i]=A[col1][i];
	}
	return B;
}
const exchangeRow=function(A,row1,row2){
	var B=JSON.parse(JSON.stringify(A));
	for(var i=0;i<A.length;i++){
		B[i][row1]=A[i][row2];
		B[i][row2]=A[i][row1];
	}
	return B;
}
const exchangeColGroup=function(A,col1,col2){
	var B=JSON.parse(JSON.stringify(A));
	B=exchangeCol(B,col1*3,col2*3);
	B=exchangeCol(B,col1*3+1,col2*3+1);
	B=exchangeCol(B,col1*3+2,col2*3+2);
	return B;
}
const exchangeRowGroup=function(A,row1,row2){
	var B=JSON.parse(JSON.stringify(A));
	B=exchangeRow(B,row1*3,row2*3);
	B=exchangeRow(B,row1*3+1,row2*3+1);
	B=exchangeRow(B,row1*3+2,row2*3+2);
	return B;
}

const getCol=function(A,col){
	var array=[];
	for(var i=0;i<A.length;i++){
		array.push(A[col][i]);
	}
	return array;
}
const getRow=function(A,row){
	var array=[];
	for(var i=0;i<A.length;i++){
		array.push(A[i][row]);
	}
	return array;
}
const getArea=function(A,point){
	var array=[];
	for(var i=point[0]*3;i<point[0]*3+3;i++){
		for(var j=point[1]*3;j<point[1]*3+3;j++){
			array.push(A[i][j]);
		}
	}
	return array;
}

const inArray=function(item,array){
		for(var i=0;i<array.length;i++){
			if(array[i]==item){
				return i;
			}
		}
		return -1;
}
const getSubMatrix=function(A,col,row){
	var B=[];
	for(var i=0;i<A.length;i++){
		if(inArray(i,col)!=-1){
			var t=[];
			for(var j=0;j<A[i].length;j++){
				if(inArray(j,row)!=-1){
					t.push(A[i][j]);
				}
			}
			B.push(t);
		}
	}
	return B;
}

const getMaxValue=function(A){
	var max=A[0][0];
	var pos=[0,0];
	for(var i=0;i<A.length;i++){
		for(var j=0;j<A[i].length;j++){
			if(A[i][j]>max){
				max=A[i][j];
				pos=[i,j];
			}
		}
	}
	return {
		val:max,
		pos:pos
	}
}
const getMinValue=function(A){
	var min=A[0][0];
	var pos=[0,0];
	for(var i=0;i<A.length;i++){
		for(var j=0;j<A[i].length;j++){
			if(A[i][j]<min){
				min=A[i][j];
				pos=[i,j];
			}
		}
	}
	return {
		val:min,
		pos:pos
	}
}
const findValue=function(A,value){
	var array=[];
	for(var i=0;i<A.length;i++){
		for(var j=0;j<A[i].length;j++){
			if(A[i][j]==value){
				array.push([i,j]);
			}
		}
	}
	return array;
}

const getSubMatrixMinPos=function(A,col,row){
	var subMatrix=getSubMatrix(A,col,row);
	var minValue=getMinValue(subMatrix);
	minValue.pos=[col[minValue.pos[0]],row[minValue.pos[1]]];
	return minValue;
}
const transpose=function(A){
	var B=JSON.parse(JSON.stringify(A));
	for(var i=0;i<A.length;i++){
		for(var j=0;j<A[i].length;j++){
			B[i][j]=A[j][i];
		}
	}
	return B;
}
const subOrder123=function(A){
	var B=JSON.parse(JSON.stringify(A));
	var min123=getSubMatrixMinPos(B,[0,1,2],[0,1,2]);
	if(min123.pos[0]!=0){
		B=exchangeCol(B,0,min123.pos[0])
	}
	if(min123.pos[1]!=0){
		B=exchangeRow(B,0,min123.pos[1])
	}
	var min23=getSubMatrixMinPos(B,[1,2],[1,2]); 
	if(min23.pos[0]!=1){
		B=exchangeCol(B,1,min23.pos[0])
	}
	if(min23.pos[1]!=1){
		B=exchangeRow(B,1,min23.pos[1])
	}	
	return B;
}
const subOrder789=function(A){
	var B=JSON.parse(JSON.stringify(A));
	var min789=getSubMatrixMinPos(B,[6,7,8],[6,7,8]);
	if(min789.pos[0]!=6){
		B=exchangeCol(B,6,min789.pos[0])
	}
	if(min789.pos[1]!=6){
		B=exchangeRow(B,6,min789.pos[1])
	}
	
	var min89=getSubMatrixMinPos(B,[7,8],[7,8]); 
	if(min89.pos[0]!=7){
		B=exchangeCol(B,7,min89.pos[0])
	}
	if(min89.pos[1]!=7){
		B=exchangeRow(B,7,min89.pos[1])
	}
	return B;
}
const compareMatrix=function(A,B){
	var result=0;
	var fa=[A[0][0],A[1][1],A[2][2],A[0][1],A[1][0],A[0][2],A[2][0],A[1][2],A[2][1]];
	var fb=[A[0][0],B[1][1],B[2][2],B[0][1],B[1][0],B[0][2],B[2][0],B[1][2],B[2][1]];
	for(var i=0;i<fa.length;i++){
		if(fa[i]!=fb[i]){
			result=fa[i]>fb[i]?1:-1;
			break;
		}
	}
	if(result==0){
		console.error("It is equal");
	}
	return result;
}
const format=function(A){
	var B=setMapping(A);
	var B=subOrder123(B);
	var B1=subOrder123(exchangeColGroup(B,0,2));
	var B2=subOrder123(exchangeRowGroup(B,0,2));
	var B3=subOrder123(exchangeRowGroup(B1,0,2));
	if(compareMatrix(B,B1)>0){B=B1;}
	if(compareMatrix(B,B2)>0){B=B2;}
	if(compareMatrix(B,B3)>0){B=B3;}
	B=subOrder789(B);
	return B;
}

const is1To9=function(array){
	var arr=array.sort();
	for(var i=0;i<arr.length;i++){
		if(i+1!=array[i]){
			return false;
		}
	}
	return true;
}
const isShudu=function(A){
	for(var i=0;i<A.length;i++){
		if(!is1To9(getCol(A,i))){
			return false;
		}
		if(!is1To9(getRow(A,i))){
			return false;
		}
	}
	for(var i=0;i<2;i++){
		for(var i=0;i<2;i++){
			if(!is1To9(getArea(A,[i,i]))){
				return false;
			}
		}
	}
	return true;
}

const shudu={
	format:format,
	isOK:isShudu
}
module.exports = shudu;