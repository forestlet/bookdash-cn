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
$("#viewer").on('show.bs.modal', (event) => {
    let button = event.relatedTarget
    let file = button.getAttribute('data-bs-file')
    let obj = "<object type='application/pdf' data='" + file + "' id='review' style='width: 100%; height: 100%;'></object>";
    $(".modal-body").append(obj)
})
$("#viewer").on('hide.bs.modal', () => {
    $(".modal-body").empty()
})

// change page-item style
function stylePage(current_page, page_len) {
    $("li.page-item").attr("class", "page-item")
    // page active & disable
    if (current_page == 1) { $("li.page-item").eq(0).attr("class", "page-item disabled") }
    if (current_page == page_len) { $("li.page-item").eq(page_len + 1).attr("class", "page-item disabled") }
    $("li.page-item").eq(current_page).attr("class", "page-item active")
}

// update carousels
function showCarousels(book_info, book_num) {
    // console.log("showCarousels");

    let book_keys = book_info.keys();
    let book_names = [...book_keys];

    random_nums = randomNums(3, -1, book_num - 1)
    for (let j = 0; j < 3; j++) {
        num = random_nums[j]
        let this_book = book_info.get(book_names[num])
        this_carousel = $("div.carousel-item").eq(j)
        this_carousel.find("img").attr("src", "../asset/" + this_book.cover)
        this_carousel.find("img").attr("alt", this_book.book_cn)
        this_carousel.find("h1").text(this_book.book_cn)
        this_carousel.find("p").eq(0).text(this_book.contents)
        this_carousel.find("button").attr("data-bs-toggle", "modal")
        this_carousel.find("button").attr("data-bs-target", "#viewer")
        this_carousel.find("button").attr("data-bs-file", "../asset/" + this_book.file)
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
        this_card.find("p.card-text").text(this_book.contents)
        this_card.find("button").eq(0).attr("data-bs-toggle", "modal")
        this_card.find("button").eq(0).attr("data-bs-target", "#viewer")
        this_card.find("button").eq(0).attr("data-bs-file", "../asset/" + this_book.file)
        this_card.find("small.text-muted").text(this_book.date)
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