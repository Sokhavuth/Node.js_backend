//public/scripts/paginate.js

let page = 0

function paginate(route){
    $('.pagination img').attr('src', '/images/loading.gif')
    page += 1
    
    $.post(`${route}/paginate/`,{page:page},function(data, status){
        appendItem(data.books,route,data)
    })
}

function appendItem(books, route,data){
    let html = ''
    
    if(books){
        for(let book of books){
            html += `<a href="/book/${book.id}">`
            html += `<img src="${book.bookCover}" />`
            html+= `</a>`
        }
    }
    $('.Books .wrapper').append(html)

    $('.pagination img').attr('src', '/images/load-more.png')
}