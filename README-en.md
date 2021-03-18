# 🤲 bookdash-cn

> [README-cn](README.md) & [online page](#_)

## Project Description

1. This project aims to translate [English picture book in bookdash](https://bookdash.org/books/?languages=en) to Chinese and follow [CC4.0](https://creativecommons.org/licenses/by/4.0/) protocol.

2. Project structure

   ```txt
   📂 asset             # picture book file
      📂 amazing-daisy  # a story
      📂 ...
      📄 book.json
   📂 img
   📂 web               # web page
   📝 README            # description in Chinese
   📝 README-en         # description in English
   ```

## Translation specifications

1. Translation process

   ```txt
   Insert pictures to PPT -> Translate to Chinese -> Review -> Export PDF -> Publish
   ```

2. Document specification

   - PPT each page should be sized to picture book image size

     PPT custom slide size

      <img src="img/PPT-resize.png" alt="PPT Custom Slide Size" style="zoom: 25%;" />

     View picture book image size (inches = pixels/resolution ratio)

     For example, if the resolution ratio is 72 dpi and the image size is 1134 × 567, then set PPT page size to 15.74 in × 7.875 in

      <img src="img/picture-size.png" alt="book-size" style="zoom: 33%;" />

   - The font is set to "Source Han Sans Medium"

   - Line spacing is 1.5, font size 24

3. Submission Information

   - The submission file format is as follows.

     ```txt
     📂 xxx
         📂 img         # No text image
         📄 xxx_en.pdf  # English picture book PDF file
         📄 xxx_cn.pdf  # Chinese picture book PDF file
         📃 xxx_cn.pptx # Chinese picture book PPT file
         📄 xxx_cover   # Picture book cover
     ```

   - Also add information about the picture book to the `book.json` file.

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

## Implementation

1. [bootstrap](https://getbootstrap.com/)

2. todos

   - [x] 💾 Download
   - [x] 🤲 read online
   - [ ] 📖 Turn the page
   - [ ] 🔍 Search

## List of picture books

| Status | English Name             | Chinese Name   | Translator | Date      |
| ------ | ------------------------ | -------------- | ---------- | --------- |
| ✅     | a-beautiful-day          | 美好的一天     | forestlet  | 2021.3.13 |
| ✅     | a-dancers-tale           | 一位舞者的故事 | forestlet  | 2021.3.13 |
| ✅     | a-day-out                | 一日游         | forestlet  | 2021.3.14 |
| ✅     | a-fish-and-a-gift        | 鱼和礼物       | forestlet  | 2021.3.14 |
| ✅     | a-house-for-mouse        | 小老鼠的家     | forestlet  | 2021.3.14 |
| ✅     | amazing-daisy            | 了不起的黛西   | forestlet  | 2021.3.9  |
| ✅     | and-also                 | 还有           | forestlet  | 2021.3.14 |
| ✅     | ann-nem-oh-nee           | 小海葵大冒险   | forestlet  | 2021.3.15 |
| ✅     | a-tiny-seed              | 小小的种子     | forestlet  | 2021.3.15 |
| ⬜     | auntie-bois-gift         |                |            |           |
| ⬜     | a-very-busy-day          |                |            |           |
| ⬜     | baby-babble              |                |            |           |
| ⬜     | babys-first-family-photo |                |            |           |
| ⬜     | bathtub-safari           |                |            |           |

## About

1. If you have any comments or good suggestions, contact me at <hyf2021@outlook.com>

2. ☕ If you find this project helpful, you can buy me a coffee 🤗👇 Thanks!

   <img src="img/donate.jpg" alt="donate" style="zoom: 25%;" />
