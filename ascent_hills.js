// MIT License
// Copyright (c) 2021 Luis Méndez


function manhattan(current, goal){
	distance = 0
	for (let index = 1; index < 9; index++) {
		currentIndex = getPos(current.indexOf(index));
		goalIndex = getPos(goal.indexOf(index));
		distance += Math.abs(currentIndex[0] - goalIndex[0]) + Math.abs(currentIndex[1] - goalIndex[1])
		console.log(index,currentIndex, goalIndex, distance)
		
	}
	return distance
}

function getPos(index){
	return [ Math.floor(index / 3) , index - Math.floor(index / 3)*3];
}

function listSuccessors(start,goal) {
	let index = start[0].indexOf(0);
	let arrSuccessors = [];
	// [start[0], start[1], start[2],start[3],start[4], start[5], start[6], start[7], start[8]],
	switch (index) {
		case 0:
			arrSuccessors = [
				[[start[0][1], start[0][0], start[0][2],start[0][3],start[0][4], start[0][5], start[0][6], start[0][7], start[0][8]]],
				[start[0][3], start[0][1], start[0][2],start[0][0],start[0][4], start[0][5], start[0][6], start[0][7], start[0][8]],
			];
			break;
		case 1:
			arrSuccessors = [
				[start[0][1], start[0][0], start[0][2],start[0][3],start[0][4], start[0][5], start[0][6], start[0][7], start[0][8]],
				[start[0][0], start[0][2], start[0][1],start[0][3],start[0][4], start[0][5], start[0][6], start[0][7], start[0][8]],
				[start[0][0], start[0][4], start[0][2],start[0][3],start[0][1], start[0][5], start[0][6], start[0][7], start[0][8]],
			];
			break;
		case 2:
			arrSuccessors = [
				[start[0][0], start[0][2], start[0][1],start[0][3],start[0][4], start[0][5], start[0][6], start[0][7], start[0][8]],
				[start[0][0], start[0][1], start[0][5],start[0][3],start[0][4], start[0][2], start[0][6], start[0][7], start[0][8]],
			];
			break;
		case 3:
			arrSuccessors = [
				[start[0][3], start[0][1], start[0][2],start[0][0],start[0][4], start[0][5], start[0][6], start[0][7], start[0][8]],
				[start[0][0], start[0][1], start[0][2],start[0][4],start[0][3], start[0][5], start[0][6], start[0][7], start[0][8]],
				[start[0][0], start[0][1], start[0][2],start[0][6],start[0][4], start[0][5], start[0][3], start[0][7], start[0][8]],
			];
			break;
		case 4:
			arrSuccessors = [
				[start[0][0], start[0][4], start[0][2],start[0][3],start[0][1], start[0][5], start[0][6], start[0][7], start[0][8]],
				[start[0][0], start[0][1], start[0][2],start[0][4],start[0][3], start[0][5], start[0][6], start[0][7], start[0][8]],
				[start[0][0], start[0][1], start[0][2],start[0][3],start[0][5], start[0][4], start[0][6], start[0][7], start[0][8]],
				[start[0][0], start[0][1], start[0][2],start[0][3],start[0][7], start[0][5], start[0][6], start[0][4], start[0][8]],
			];
			break;
		case 5:
			arrSuccessors = [
				[start[0][0], start[0][1], start[0][5],start[0][3],start[0][4], start[0][2], start[0][6], start[0][7], start[0][8]],
				[start[0][0], start[0][1], start[0][2],start[0][3],start[0][5], start[0][4], start[0][6], start[0][7], start[0][8]],
				[start[0][0], start[0][1], start[0][2],start[0][3],start[0][4], start[0][8], start[0][6], start[0][7], start[0][5]],
			];
			break;
		case 6:
			arrSuccessors = [
				[start[0][0], start[0][1], start[0][2],start[0][6],start[0][4], start[0][5], start[0][3], start[0][7], start[0][8]],
				[start[0][0], start[0][1], start[0][2],start[0][3],start[0][4], start[0][5], start[0][7], start[0][6], start[0][8]],
			];
			break;
		case 7:
			arrSuccessors = [
				[start[0][0], start[0][1], start[0][2],start[0][3],start[0][7], start[0][5], start[0][6], start[0][4], start[0][8]],
				[start[0][0], start[0][1], start[0][2],start[0][3],start[0][4], start[0][5], start[0][7], start[0][6], start[0][8]],
				[start[0][0], start[0][1], start[0][2],start[0][3],start[0][4], start[0][5], start[0][6], start[0][8], start[0][7]],
			];
			break;
		case 8:
			arrSuccessors = [
				[start[0][0], start[0][1], start[0][2],start[0][3],start[0][4], start[0][8], start[0][6], start[0][7], start[0][5]],
				[start[0][0], start[0][1], start[0][2],start[0][3],start[0][4], start[0][5], start[0][6], start[0][8], start[0][7]],
			];
			break;
		default:
			arrSuccessors = [];
			break;
	}
	let arrRet = [];
	for (const iterator of arrSuccessors) {
		arrRet.push([iterator, manhattan(iterator,goal),inc()])
	}
	return arrRet;
}

function hillsuccessors(n, e){
	let bfsuccessors = listSuccessors(n,e);
	bfsuccessors.sort((a,b) => a[1] - b[1])
	// return [bfsuccessors[0]];
	return bfsuccessors
}


function ascenthill(start, end){
	let endStr = JSON.stringify(end)
	var cont = 0
	var dot = '{'
	var list = [[start,manhattan(start, end),inc()]];
	dot+=list[0][2]+' [label="'+toString(list[0][0])+'"];'
	while (list.length > 0){		
		var current = list.shift();
		if (JSON.stringify(current[0])  == endStr ){			
			dot += '}'
			return dot
		}		
		let temp = hillsuccessors(current, end);
		temp.forEach(val => dot+=val[2]+' [label="'+toString(val[0])+'"];'+current[2]+'--'+val[2]+' [label="'+val[1]+'"] ;')

		list = list.concat(temp);
		list = list.sort( function(a,b) { return a[1] - b[1] });
		cont++
		if (cont > 100) {
			alert("The search is looped!")
			dot += '}'
			return dot
		}
	}
	dot += '}'
	return dot
}

function toString(arr) {
	let str = "";
	for (let index = 0; index < 9; index++) {
		if(index % 3 == 0) str += "\n|";
		const element = arr[index];
		str += " " + element + " |"
		
	}
	return str;
}

var id = 1
function inc() {
	return id++
}

function puzzle(type=1) {
	let start = [1,2,3,4,5,6,0,7,8]
	let end = [1,2,3,4,5,6,7,8,0]
	return ascenthill(start, end)
}