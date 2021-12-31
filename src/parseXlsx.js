// 关键是弄清楚 xlsx 和 jsonObj 的对应关系
// 1. jsonObj 是数组，item 是 Object
// 2. obj 格式：第一行为 key，其他行的字段为 IDBCursorWithValue
// 3. 一行数据对应一个 obj
// 4. 数组的总数：xlsx 行数 - 1；因为第一行是作为 key
// 找个简单的 xlsx 文件，打印看一下结果就知道对应关系了

const path = require("path");
const xlsx = require("xlsx");

const filePath = path.join(path.resolve(__dirname), "../files", "test.xlsx");
const workbook = xlsx.readFile(filePath);
const sheetNames = workbook.SheetNames; // [Sheet1, Sheet2, ....]

// 读取
// Get the data of "Sheet1"
// result: [{k-v}, {k-v}...]
const result = xlsx.utils.sheet_to_json(workbook.Sheets[sheetNames[0]]);
console.log("result length: ", result.length);
console.log(JSON.stringify(result, null, 2));

// 写入：todo