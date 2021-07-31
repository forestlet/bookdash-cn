# 🏠 绘本小屋

> [README-en](README-en.md) & [在线地址](https://forestlet.github.io/bookdash-cn)

## 项目说明

1. 本项目旨在翻译 [bookdash 中英文绘本](https://bookdash.org/books/?languages=en) 至中文，且遵循 [CC4.0](https://creativecommons.org/licenses/by/4.0/) 协议

2. 项目结构

   ```txt
   📂 asset                # 所有绘本文件夹
      📂 amazing-daisy     # 绘本《amazing-daisy》
      📂 ...
   📂 doc
      📄 booklist.json     # 绘本列表 JSON 格式
      📄 booklist.md       # 绘本列表 markdown 格式
      📄 模板.pptx         # PPT 模板
   📂 util                 # 工具文件夹
   📂 web                  # 网页
   📝 README               # 说明（本文档）
   📝 README-en            # 英文说明
   ```

3. 已翻译绘本列表 👉 [booklist](doc/booklist.md)

4. 如果您有什么意见和建议，可以[提交新的 Issue](https://github.com/forestlet/bookdash-cn/issues/new)

5. ☕ 如果您觉得这个项目不错的话，就 star ⭐ 一下好吧~

## 翻译流程与规范

1. 插入图片至 PPT

   - 直接拷贝 [模板.pptx](doc/模板.pptx) 至待翻译绘本文件夹，并插入图像
   - 默认字体为“思源雅黑 Medium”
   - 默认行间距为 1.5
   - 默认字号为 24

2. 对照英文绘本翻译、审核并导出 PDF

3. 将相关绘本文件夹移动至 `asset` 文件夹

   相关绘本文件夹格式如下：

   ```txt
   📂 xxx            # 绘本名称
      📂 img         # 无文字图片
      📄 xxx_en.pdf  # 英文绘本 PDF 文件
      📄 xxx_cn.pdf  # 翻译后绘本导出的 PDF 文件
      📃 xxx_cn.pptx # 翻译后绘本 PPT 文件
      🖼️ xxx_cover   # 绘本封面
   ```

4. 添加绘本信息至 [booklist.json](doc/booklist.json)

   | 信息       | 含义                  |
   | ---------- | --------------------- |
   | book_cn    | 绘本对应中文名        |
   | contents   | 绘本内容              |
   | cover      | 绘本封面相对路径      |
   | file       | 绘本 PDF 文件相对路径 |
   | translator | 译者署名              |
   | date       | 绘本翻译完成日期      |
   | tags       | 绘本标签              |
   | src        | 绘本英文原链接        |

   如：

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

5. 添加绘本信息至 [booklist.md](doc/booklist.md)

   可直接在 `util` 路径运行命令 `node transform.js` 直接生成

6. 绘本会自动发布到网页，翻译成功 🚀

## 实现技术说明

1. [bootstrap](https://getbootstrap.com/)

2. [jQuery](https://jquery.com/)

3. todos

   - [x] 💾 下载
   - [x] 🤲 在线阅读
   - [x] 📖 页码
   - [ ] 🔍 搜索
   - [x] 🚀 在线页面
