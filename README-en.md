# 🏠 bookdash-cn

> [README-cn](README.md) & [online page](https://forestlet.github.io/bookdash-cn)

## Description

1. This project aims to translate [English picture book in bookdash](https://bookdash.org/books/?languages=en) to Chinese and follow [CC4.0](https://creativecommons.org/licenses/by/4.0/) protocol.

2. Project structure

   ```txt
   📂 asset             # picture book directory
      📂 amazing-daisy  # one picture book
      📂 ...
   📂 doc
      📄 booklist.json  # picture book info in JSON
      📄 booklist.md    # picture book info in markdown
      📄 模板.pptx       # PPT template
   📂 util              # tool directory
   📂 web               # web page
   📝 README            # description in Chinese
   📝 README-en         # description in English (this file)
   ```

3. translated picture books list 👉 [booklist](doc/booklist.md)

4. If you have any comments or suggestions, please [submit new issue](https://github.com/forestlet/bookdash-cn/issues/new)

5. ☕ If you think this project is good, just ⭐star this repository~

## Translation specifications

1. Insert pictures to PPT

   - Copy [模板.pptx](doc/模板.pptx) directly to the folder of the picture book to be translated, and insert the images
   - The font is set to "Source Han Sans Medium"
   - Line spacing is 1.5
   - Font size is 24

2. Translate to Chinese, review and export PDF.

3. Move the picture book directory to the `asset` folder

   The submission directory format is as follows:

   ```txt
   📂 xxx            # Picture book's name
      📂 img         # No text image
      📄 xxx_en.pdf  # English picture book's PDF file
      📄 xxx_cn.pdf  # Chinese picture book's PDF file
      📃 xxx_cn.pptx # Chinese picture book's PPT file
      🖼️ xxx_cover   # Picture book's cover
   ```

4. Add picture book info to [booklist.json](doc/booklist.json)

   | Information | Meaning                                                  |
   | ----------- | -------------------------------------------------------- |
   | book_cn     | the Chinese name of the picture book                     |
   | contents    | contents of the picture book                             |
   | cover       | relative path to the cover of the picture book           |
   | file        | relative path to the PDF file of the picture book        |
   | translator  | translator's name                                        |
   | date        | date of completion of translation                        |
   | tags        | picture book tags                                        |
   | src         | link to the original English version of the picture book |

   For example

   ```json
   "amazing-daizy": {
      "book_cn": "了不起的黛西",
      "contents": "小鸡黛西住在一个小农场里，她希望自己能飞。其他鸡都嘲笑她每天的飞行练习。但有一天，惊人的事情发生了……",
      "cover": "amazing-daizy/amazing-daizy_cover.jpg",
      "file": "amazing-daisy_cn.pdf",
      "translator": "forestlet",
      "date": "2021.3.9",
      "tags": [
          "小鸡",
          "动物",
          "飞",
          "励志",
          "想象"
      ],
      "src": "https://bookdash.org/books/amazing-daisy-by-nozizwe-herero-siya-masuku-and-leona-ingram/"
   }
   ```

5. Add picture book info to [booklist.md](doc/booklist.md)

   Just `cd` 'util' path and use `node transform.js` to generate automatically

6. New added picture book will be automatically posted to the web page 🚀

## Tech to Implement

1. [bootstrap](https://getbootstrap.com/)

2. [jQuery](https://jquery.com/)

3. todos

   - [x] 💾 Download
   - [x] 🤲 Read online
   - [x] 📖 Pagination
   - [x] 🔍 Search
   - [x] 🚀 Github Pages
   - [x] 🤗 Share
