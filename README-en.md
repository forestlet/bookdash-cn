# π  bookdash-cn

> [README-cn](README.md) & [online page](https://forestlet.github.io/bookdash-cn)

## Description

1. This project aims to translate [English picture book in bookdash](https://bookdash.org/books/?languages=en) to Chinese and follow [CC4.0](https://creativecommons.org/licenses/by/4.0/) protocol.

2. Project structure

   ```txt
   π asset             # picture book directory
      π amazing-daisy  # one picture book
      π ...
   π doc
      π booklist.json  # picture book info in JSON
      π booklist.md    # picture book info in markdown
      π ζ¨‘ζΏ.pptx       # PPT template
   π util              # tool directory
   π img
   π web               # web page
   π README            # description in Chinese
   π README-en         # description in English (this file)
   ```

3. translated picture books list π [booklist](doc/booklist.md)

4. If you have any comments or suggestions, please [submit new issue](https://github.com/forestlet/bookdash-cn/issues/new)

5. β If you think this project is good, just β­star this repository~

## Translation specifications

Translation process

1. Insert pictures to PPT

   - Copy [ζ¨‘ζΏ.pptx](doc/ζ¨‘ζΏ.pptx) directly to the folder of the picture book to be translated, and insert the images
   - The font is set to "Source Han Sans Medium"
   - Line spacing is 1.5
   - Font size is 24

2. Translate to Chinese, review and export PDF.

3. Move the picture book directory to the `asset` folder

   The submission directory format is as follows:

   ```txt
   π xxx            # Picture book's name
      π img         # No text image
      π xxx_en.pdf  # English picture book's PDF file
      π xxx_cn.pdf  # Chinese picture book's PDF file
      π xxx_cn.pptx # Chinese picture book's PPT file
      πΌοΈ xxx_cover   # Picture book's cover
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
      "book_cn": "δΊδΈθ΅·ηι»θ₯Ώ",
      "contents": "ε°ιΈ‘ι»θ₯Ώδ½ε¨δΈδΈͺε°εεΊιοΌε₯ΉεΈζθͺε·±θ½ι£γεΆδ»ιΈ‘ι½ε²η¬ε₯Ήζ―ε€©ηι£θ‘η»δΉ γδ½ζδΈε€©οΌζδΊΊηδΊζεηδΊβ¦β¦",
      "cover": "amazing-daizy/amazing-daizy_cover.jpg",
      "file": "amazing-daisy_cn.pdf",
      "translator": "forestlet",
      "date": "2021.3.9",
      "tags": [
          "ε°ιΈ‘",
          "ε¨η©",
          "ι£",
          "ε±εΏ",
          "ζ³θ±‘"
      ],
      "src": "https://bookdash.org/books/amazing-daisy-by-nozizwe-herero-siya-masuku-and-leona-ingram/"
   }
   ```

5. Add picture book info to [booklist.md](doc/booklist.md)

   Just `cd` 'util' path and use `node transform.js` to generate automatically

6. New added picture book will be automatically posted to the web page π

## Tech to Implement

1. [bootstrap](https://getbootstrap.com/)

2. [jQuery](https://jquery.com/)

3. todos

   - [x] πΎ Download
   - [x] π€² Read online
   - [x] π Pagination
   - [ ] π Search
   - [x] π Github Pages
