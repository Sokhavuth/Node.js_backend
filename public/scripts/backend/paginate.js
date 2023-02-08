//public/scripts/backend/paginate.js

let page = 0

function paginate(route){
    $('.paginate img').attr('src', '/images/loading.gif')
    page += 1
    
    $.post(`${route}/paginate`,{page:page},function(data, status){
        appendItem(data.items,route,data)
    })
}

function appendItem(items, route,data){
    let html = ''
    
    if(items){
        for(let item of items){
            html += `<li>`
                html += `<div class='thumb'>`
                    html += `<a href="/${data.type}/${item.id}"><img src="${item.thumb}"/></a>`
                    if((item.videos)&&(item.videos !== '[]')&&(item.videos !== '')){
                        html += `<img class="play-icon" src="/images/play.png"/>`
                    }
                html += `</div>`
                html += `<div class="title">`
                    html += `<a href="/${data.type}/${item.id}">${item.title}</a>`
                    html += `<div>${new Date(item.date).toLocaleDateString('it-IT')}</div>`
                html += `</div>`
                html += `<div class="edit">`
                    html += `<a href="${route}/edit/${item.id}"><img src="/images/edit.png"/></a>`
                    html += `<a href="${route}/delete/${item.id}"><img src="/images/delete.png"/></a>`
                html += `</div>` 
            html += `</li>`
        }
    }
    $('.list').append(html)

    if(route === '/admin/user'){
        $('.Listing .list li').css({'grid-template-columns':'13% auto 25%'})
        $('.Listing .list li .thumb').css({'padding-top':'100%'})
        $('.Listing .list li .thumb img').css({'border-radius':'50%'})
    }

    $('.paginate img').attr('src', '/images/load-more.png')
}