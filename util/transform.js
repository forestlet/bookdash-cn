// transform JSON to MD

const fs = require("fs");

// read file
let raw = fs.readFileSync("../doc/booklist.json");
let booklist_json = JSON.parse(raw);
let booklist_map = new Map(Object.entries(booklist_json));
let book_keys = booklist_map.keys();
let book_names = [...book_keys];

// write to file
let content = "# book list\n\n| 状态 Status | 绘本英文名 English Name  | 绘本中文名 Chinese Name | 译者 Translator | 日期 Date |\n\
| ----------- | ------------------------ | ----------------------- | --------------- | --------- |\n";
fs.writeFileSync('../doc/booklist.md', content)

for (let index = 0; index < booklist_map.size; index++) {
    let this_book = booklist_map.get(book_names[index])
    content = `|✅|${book_names[index]}|${this_book["book_cn"]}|${this_book["translator"]}|${this_book["date"]}|\n`

    fs.appendFileSync('../doc/booklist.md', content, err => {
        if (err) {
            console.error(err)
            return
        }
    })
}
