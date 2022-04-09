// get random numbers
function randomNums(n, min, max) {
    var arr = [];
    for (i = 0; i < n; i++) {
        var ran = Math.ceil(Math.random() * (max - min) + min);
        while (isExist(arr, ran)) {
            ran = Math.ceil(Math.random() * (max - min) + min);
        }
        arr[i] = ran;
    }
    return arr;
}

function isExist(arr, ran) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == ran) {
            return true;
        }
    }
    return false;
}

// change object data, so can read online
// 绘本对应的全局变量
var picture_book_page
$("#viewer").on('show.bs.modal', (event) => {
    let button = event.relatedTarget
    let file = button.getAttribute('data-bs-file')
    let obj = "<object type='application/pdf' data='" + file + "' id='review' style='width: 100%; height: 100%;'></object>";
    $(".modal-body").append(obj)

    let page = window.location.href.match(/page=(\d+)/)[1]
    picture_book_page = button.getAttribute('page')
    let picture_book_name = button.getAttribute('id')
    $("#title").text(picture_book_name)
    history.pushState("", "", `index.html?page=${page}&name=${picture_book_name}`);
})
$("#viewer").on('hide.bs.modal', () => {
    let page = window.location.href.match(/page=(\d+)/)[1]
    history.pushState("", "", `index.html?page=${page}`);
    $(".modal-body").empty()
})

// search
$("#searchBtn").click(() => {
    search()
})

$("#searchInput").bind('keypress', function (event) {
    if (event.keyCode == "13") {
        $("#searchBtn").click();
    }
});

function search() {
    if ($("#searchInput").val() == "") return
    let keyword = $("#searchInput").val()
    window.open(window.location.href.replace(/\/[(index)|(page)].+/, `/page/search.html?search=${keyword}`))
}

// pages
function setPagination(current_page, page_len) {
    let page_first = '<li class="page-item" title="首页"><a class="page-link" aria-label="首页"><i class="bi bi-chevron-double-left"></i></a></li>'
    $("ul.pagination").append(page_first)
    let page_prev = '<li class="page-item" title="上一页"><a class="page-link" aria-label="上一页"><i class="bi bi-chevron-left"></i></a></li>'
    $("ul.pagination").append(page_prev)

    // 只显示相邻 5 页
    let pages = []
    if (page_len >= 5) {
        if (current_page - 2 < 1) {
            let offset = 1 - (current_page - 2)
            pages = [current_page - 2 + offset, current_page - 1 + offset, parseInt(current_page) + offset, parseInt(current_page) + 1 + offset, parseInt(current_page) + 2 + offset]
        }
        else if (parseInt(current_page) + 2 > page_len) {
            let offset = parseInt(current_page) + 2 - page_len
            pages = [current_page - 2 - offset, current_page - 1 - offset, parseInt(current_page) - offset, parseInt(current_page) + 1 - offset, parseInt(current_page) + 2 - offset]
        }
        else {
            pages = [current_page - 2, current_page - 1, current_page, parseInt(current_page) + 1, parseInt(current_page) + 2]
        }
    }
    else {
        let i = 1
        while (i <= page_len) {
            pages.push(i++)
        }
    }
    pages.forEach((page) => {
        let page_item = `<li class='page-item' title="第${page}页"><a class='page-link'>${page}</a></li>`
        $("ul.pagination").append(page_item)
    })

    let page_next = '<li class="page-item" title="下一页"><a class="page-link" aria-label="下一页"><i class="bi bi-chevron-right"></i></a></li>'
    $("ul.pagination").append(page_next)
    let page_last = '<li class="page-item" title="末页"><a class="page-link" aria-label="末页"><i class="bi bi-chevron-double-right"></i></a></li>'
    $("ul.pagination").append(page_last)

    $('li.page-item').on("click", (event) => {
        let page_click_innerHTML = event.currentTarget.innerHTML
        if (page_click_innerHTML.match(/\d/)) {
            window.location = window.location.origin + window.location.pathname + "?page=" + page_click_innerHTML.match(/\d/)
        }
        else if (page_click_innerHTML.includes("末页") && current_page != page_len) {
            window.location = window.location.origin + window.location.pathname + "?page=" + page_len
        }
        else if (page_click_innerHTML.includes("首页") && current_page != 1) {
            window.location = window.location.origin + window.location.pathname + "?page=1"
        }
        else if (page_click_innerHTML.includes("上一页") && current_page > 1) {
            window.location = window.location.origin + window.location.pathname + "?page=" + parseInt(parseInt(current_page) - 1)
        }
        else if (page_click_innerHTML.includes("下一页") && current_page < page_len) {
            console.log(current_page + 1);
            window.location = window.location.origin + window.location.pathname + "?page=" + parseInt(parseInt(current_page) + 1)
        }
        else {
            return
        }
    })
}

// change page-item style
function highLightPagination(current_page, page_len) {
    $("li.page-item").attr("class", "page-item")
    // page active & disable
    if (current_page == 1) {
        $(`[title="上一页"]`).attr("class", "page-item disabled")
        $(`[title="首页"]`).attr("class", "page-item disabled")
    }
    if (current_page == page_len) {
        $(`[title="下一页"]`).attr("class", "page-item disabled")
        $(`[title="末页"]`).attr("class", "page-item disabled")
    }
    $(`[title="第${current_page}页"]`).attr("class", "page-item active")
}

// update carousels
function showCarousels(book_info, book_num) {
    // console.log("showCarousels");

    let book_keys = book_info.keys();
    let book_names = [...book_keys];

    random_nums = randomNums(5, -1, book_num - 1)
    for (let j = 0; j < 5; j++) {
        num = random_nums[j]
        let this_book = book_info.get(book_names[num])
        this_carousel = $("div.carousel-item").eq(j)
        this_carousel.find("img").attr("src", "../asset/" + this_book.cover)
        this_carousel.find("img").attr("alt", this_book.book_cn)
        this_carousel.find("h1").text(this_book.book_cn)
        this_book.tags.forEach(tag => {
            let tag_element = `<span class="badge bg-light text-dark">${tag}</span>`
            this_carousel.find(".tags").append(tag_element)
        })
        this_carousel.find("p").eq(0).text(this_book.contents)
        this_carousel.find("button").eq(0).attr({
            "id": book_names[num],
            "page": Math.ceil(num / 12),
            "data-bs-toggle": "modal",
            "data-bs-target": "#viewer",
            "data-bs-file": "../asset/" + this_book.file
        })
        this_carousel.find("small").text(`翻译日期：${this_book.date}`)
        this_carousel.find(".en-url").eq(0).attr("href", this_book.src)
        this_carousel.find("a").eq(0).attr("href", "../asset/" + this_book.file)
        this_carousel.find("a").eq(0).attr("download", "../asset/" + this_book.file)
    }
}

// update cards
function showCards(book_info, book_num) {

    const paramsStr = window.location.search
    const params = new URLSearchParams(paramsStr)
    let current_page = params.get('page')

    // clean up
    for (let j = 0; j < 12; j++) {
        this_card = $("div.card").eq(j)
        this_card.find("img").attr("src", "")
        $("div.card").eq(j).show()
    }

    let book_keys = book_info.keys();
    let book_names = [...book_keys];

    for (let i = (current_page - 1) * 12, j = 0; i < Math.min(book_num, current_page * 12); i++, j++) {
        let this_book = book_info.get(book_names[i])
        this_card = $("div.card").eq(j)
        // console.log(this_card);
        this_card.find("img").attr("src", "../asset/" + this_book.cover)
        this_card.find("img").attr("alt", this_book.book_cn)
        this_card.find("h3").text(this_book.book_cn)
        this_book.tags.forEach(tag => {
            let tag_element = `<span class="badge bg-light text-dark">${tag}</span>`
            this_card.find(".tags").append(tag_element)
        })
        this_card.find("p.card-text").text(this_book.contents)
        this_card.find("button").eq(0).attr({
            "id": book_names[i],
            "page": current_page,
            "data-bs-toggle": "modal",
            "data-bs-target": "#viewer",
            "data-bs-file": "../asset/" + this_book.file
        })
        this_card.find("small").text(`翻译日期：${this_book.date}`)
        this_card.find(".en-url").eq(0).attr("href", this_book.src)
        this_card.find("button").eq(1).find("a").attr("href", "../asset/" + this_book.file)
        this_card.find("button").eq(1).find("a").attr("download", "../asset/" + this_book.file)
    }

    // remaining cards
    for (let k = 0; k < 12; k++) {
        if ($("div.card").find("img").eq(k).attr("src") == "") {
            $("div.card").eq(k).hide()
        }
    }
}

// back to top
function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function showPage(book_info) {
    let book_num = book_info.size
    $("#total").html(`已翻译 ${book_num} 本绘本 🎉 <br/> 如果你喜欢的话，请到 <a href="https://github.com/forestlet/bookdash-cn" class="alert-link">forestlet/bookdash-cn</a> ⭐ 吧~`)
    let page_len = Math.ceil(book_num / 12)

    const paramsStr = window.location.search
    const params = new URLSearchParams(paramsStr)
    let current_page = params.get('page')
    if (current_page == null) {
        window.location = window.location.origin + window.location.pathname + "?page=1"
    }
    setPagination(current_page, page_len)
    // 页码样式
    highLightPagination(current_page, page_len)
    // carousels
    showCarousels(book_info, book_num)
    // cards
    showCards(book_info, book_num)

    // 如果有打开绘本
    let picture_book = params.get('name')
    if (picture_book != null) {
        $(`#${picture_book}`).click()
        console.log($(`#${picture_book}`));
    }
}

// share 分享按钮
$("#share").click(() => {
    let page = picture_book_page
    let name = $("#title").text()
    $("#copy_url").text(`${window.location.origin}${window.location.pathname}?page=${page}&name=${name}`)
    let url = document.getElementById("copy_url")
    url.select()
    document.execCommand("Copy")
    $('.toast').toast('show')
})