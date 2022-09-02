import React from 'react'

function randint(min,max){
    let x = (max-min)+1
    return min+Math.floor(Math.random()*x)
}

export default function Banner(){
    const r = randint(4,7)

    let banner = ''
    let url = ''

    switch(r){
        
        case 4:
            banner = './banners/Promotion_List_1_.jpg'
            url = 'https://www.phoenixnext.com/guild/phoenix-next-online-book-expo-2022'
            break
        case 5:
            banner = './banners/Promotion_List_Bookmark_1_1_.jpg'
            url = 'https://www.phoenixnext.com/guild/phoenix-next-online-book-expo-2022'
            break
        case 6:
            banner = './banners/Promotion_List_Clear_Card_Collection_Book_1_1_.jpg'
            url = 'https://www.phoenixnext.com/guild/phoenix-next-online-book-expo-2022'
            break
        case 7:
            banner = './banners/Promotion_List_Mer_Table_Mat_1_1_.jpg'
            url = 'https://www.phoenixnext.com/guild/phoenix-next-online-book-expo-2022'
            break
        default: break
    }

    const bannerClick = () =>{
        window.open(url)

    }

    return(
        <div style={{margin:'20px',textAlign:'center'}}>
            <img src={banner} onClick={bannerClick} style={{cursor:'pointer'}} alt='banner'></img>
        </div>
    )
}