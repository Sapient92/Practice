const spreadSheetContainer = document.getElementById("spreadsheet-container");
const exportBtn = document.querySelector("#export-btn");
const ROWS = 10;
const COLS = 10;
const spreadsheet = [];
// 첫 번째 로우에 숫자들을 알파벳으로 바꿔주기
const alphabets = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// 문자열 데이터를 객체 데이터로 만들어주기
class Cell {
  constructor(
    isHeader,
    disabled,
    data,
    row,
    column,
    rowName,
    columnName,
    active = false
  ) {
    this.isHeader = isHeader;
    this.disabled = disabled;
    this.data = data;
    this.row = row;
    this.rowName = rowName;
    this.column = column;
    this.columnName = columnName;
    this.active = active;
  }
}
// 스프레드시트 배열에 기본 데이터 요소 넣기
function initSpreadSheet() {
  for (let i = 0; i < ROWS; i++) {
    let spreadsheetRow = [];
    for (let j = 0; j < COLS; j++) {
      let cellData = "";
      // Header 생성
      let isHeader = false;
      // disabled 생성
      let disabled = false;
      // 첫 번째 컬럼에 숫자 넣기
      if (j === 0) {
        cellData = i;
        isHeader = true;
        disabled = true;
      }
      // 첫 번째 로우에 숫자 넣기
      if (i === 0) {
        cellData = alphabets[j - 1];
        isHeader = true;
        disabled = true;
      }

      // 첫 번째 로우의 첫번째 컬럼은
      // cellData가 undefined이면
      if (!cellData) {
        cellData = "";
      }

      const rowName = i;
      const columnName = alphabets[j - 1];

      const cell = new Cell(
        isHeader,
        disabled,
        cellData,
        i,
        j,
        rowName,
        columnName,
        false
      );
      spreadsheetRow.push(cell);
    }
    spreadsheet.push(spreadsheetRow);
  }
  // cell 렌더링 하기
  drawSheet();
  console.log("spreadsheet", spreadsheet);
}
initSpreadSheet();

// Cell 생성하기
function createCellEl(cell) {
  // input 태그로 하나의 셀 만들기
  const cellEl = document.createElement("input");
  cellEl.className = "cell";
  cellEl.id = "cell_" + cell.row + cell.column;
  cellEl.value = cell.data;
  cellEl.disabled = cell.disabled;

  if (cell.isHeader) {
    cellEl.classList.add("header");
  }
  // 이걸 왜 여기다 써야 하는지를 잘 모르겠음
  cellEl.onclick = () => handleCellClick(cell);
  cellEl.onchange = (e) => handleOnChange(e.target.value, cell);
  return cellEl;
}

function handleCellClick(cell) {
  clearHeaderActiveStates();
  const columnHeader = spreadsheet[0][cell.column];
  const rowHeader = spreadsheet[cell.row][0];
  const columnHeaderEl = getElFromRowCol(columnHeader.row, columnHeader.column);
  const rowHeaderEl = getElFromRowCol(rowHeader.row, rowHeader.column);
  columnHeaderEl.classList.add("active");
  rowHeaderEl.classList.add("active");
  document.querySelector('#cell-status').innerHTML = cell.columnName + "" + cell.rowName
}

function getElFromRowCol(row, col) {
  return document.querySelector("#cell_" + row + col);
}

function clearHeaderActiveStates() {
  const headers = document.querySelectorAll(".header");

  headers.forEach((header) => {
    header.classList.remove("active");
  });
}

// cell 렌더링 하기
function drawSheet() {
  for (let i = 0; i < spreadsheet.length; i++) {
    const rowContainerEl = document.createElement("div");
    rowContainerEl.className = "cell-row";
    for (let j = 0; j < spreadsheet[i].length; j++) {
      //각각의 셀 객체를 spreadSheetContainer의 자식 요소로 넣는다.
      const cell = spreadsheet[i][j];
      rowContainerEl.append(createCellEl(cell));
    }
    spreadSheetContainer.append(rowContainerEl);
  }
}

function handleOnChange(data, cell) {
  cell.data = data;
}

exportBtn.onclick = function (e) {
  let csv = "";
  for (let i = 0; i < spreadsheet.length; i++) {
    // 여기서 i === 0 일때는 왜 아래를 실행하지 않고 넘어가야 하지??
    if(i === 0 ) continue;
    csv += spreadsheet[i].filter((item) => !item.isHeader).map((item) => item.data).join(",") + "\r\n"
  }

  const csvObj = new Blob([csv]);
  const csvUrl = URL.createObjectURL(csvObj);
  const a = document.createElement('a');
  a.href = csvUrl
  a.download = "Spreadsheet File Name.csv"
  a.click()
  
};
