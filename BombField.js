const p1Name = '😁';
const p2Name = '😎';
const p3Name = '😴';
const p4Name = '😳';

function getHeading() {
  return '┏━━━━┳━━━━┳━━━━┳━━━━┳━━━━┳━━━━┳━━━━┳━━━━┳━━━━┳━━━━┓';
}

function getFooting() {
  return '┗━━━━┻━━━━┻━━━━┻━━━━┻━━━━┻━━━━┻━━━━┻━━━━┻━━━━┻━━━━┛';
}

function getRowFooting() {
  return '┣━━━━╋━━━━╋━━━━╋━━━━╋━━━━╋━━━━╋━━━━╋━━━━╋━━━━╋━━━━┫';
}

function getCharsInRow(p1Pos, p2Pos, p3Pos, p4Pos, boxNumber, bombBoxNumber) {
  if (boxNumber === bombBoxNumber) {
    return ' ' + '💥' + ' ┃' ;
  }

  if (p1Pos === boxNumber) {
    return ' ' + p1Name + ' ┃' ;
  }

  if (p2Pos === boxNumber) {
    return ' ' + p2Name + ' ┃' ;
  }

  if (p3Pos === boxNumber) {
    return ' ' + p3Name + ' ┃' ;
  }

  if (p4Pos === boxNumber) {
    return ' ' + p4Name + ' ┃' ;
  }

  return ' ⬜ ┃';
}


function createRow(p1Pos, p2Pos, p3Pos, p4Pos, rowStartNumber, bombBoxNumber) {
  let rowString = '';

  for (let boxNumber = rowStartNumber; boxNumber > rowStartNumber - 10; boxNumber--) {
    rowString += getCharsInRow(p1Pos, p2Pos, p3Pos, p4Pos, boxNumber, bombBoxNumber);
  }

  return '┃' + rowString;
}

function createGrids(p1Pos, p2Pos, p3Pos, p4Pos, bombBox) {
  let grid = getHeading() + '\n';

  for (let noOfRows = 10; noOfRows > 0; noOfRows--) {
    grid += createRow(p1Pos, p2Pos, p3Pos, p4Pos, noOfRows * 10, bombBox) + '\n';

    if (noOfRows !== 1) {
      grid += getRowFooting() + '\n';
    }
  }

  return grid + getFooting();
}

function updatePlayersPosition (p1Pos, p2Pos, ) {
  return createGrids(12, 32, 54, 76, 12);
}

console.log(12, 32, 54, 76);
