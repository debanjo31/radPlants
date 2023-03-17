import { atom } from "recoil";

export const catalogueAtom = atom({
  key: "catalogue",
  default: [
     {
      "id": "1",
      "type": "indoor plant",
      "price": "5500",
      "img": "https://images.unsplash.com/photo-1585664428450-1665a336eb19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      "imgsub": [
        "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1582131503261-fca1d1c0589f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
      ]
    },
     {
      "id": "2",
      "type": "indoor plant",
      "price": "4300",
      "img": "https://images.unsplash.com/photo-1560949560-d0b16d17c14b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw0NDM3MTY4N3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
      "imgsub": [
        "https://images.unsplash.com/photo-1507988914355-bf49fdbc7368?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTZ8NDQzNzE2ODd8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1585664428450-1665a336eb19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NDJ8NDQzNzE2ODd8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
      ]
    },
     {
      "id": "3",
      "type": "indoor plant",
      "price": "6500",
      "img": "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTF8dkszUE50dUhWUFV8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      "imgsub": [
        "https://images.unsplash.com/photo-1564060958001-a665e6fb6d3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OXxEbm9ScV9QUm5FOHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1544474921-9df05bc76d66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTd8RG5vUnFfUFJuRTh8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
      ]
    },
     {
      "id": "4",
      "type": "outdoor plant",
      "price": "2200",
      "img": "https://images.unsplash.com/photo-1525249181835-95a4c9168268?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "imgsub": [
        "https://images.unsplash.com/photo-1525244268144-d541a722874f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        "https://images.unsplash.com/photo-1526411061437-7a7d51ec44c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      ]
    },
     {
      "id": "5",
      "type": "outdoor plant",
      "price": "5500",
      "img": "https://images.unsplash.com/photo-1618742700663-5b91a8bd87fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=657&q=80",
      "imgsub": [
        "https://images.unsplash.com/photo-1493746126254-453eaf78279e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1619450445054-7641522112f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      ]
    },
     {
      "id": "6",
      "type": "outdoor plant",
      "price": "8500",
      "img": "https://media.istockphoto.com/id/1356744697/photo/daffodil-flowers-on-a-flower-bed-in-early-spring.jpg?s=170667a&w=0&k=20&c=saGZMjHKsPjmnAIeuEnk_KnGRgRA1eGtxUIkZEHQU1g=",
      "imgsub": [
        "https://images.unsplash.com/photo-1617624863198-0e4323b6e968?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1593003520833-5c874a3cef28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=407&q=80"
      ]
    },
     {
      "id": "7",
      "type": "jungle plant",
      "price": "7000",
      "img": "https://c1.wallpaperflare.com/preview/279/505/309/plant-glass-indoor-plant-botanical.jpg",
      "imgsub": [
        "https://c4.wallpaperflare.com/wallpaper/294/852/1006/nature-closeup-plants-leaves-wallpaper-thumb.jpg",
        "https://c4.wallpaperflare.com/wallpaper/342/272/855/nature-green-leaves-plants-wallpaper-thumb.jpg"
      ]
    },
     {
      "id": "8",
      "type": "jungle plant",
      "price": "3500",
      "img": "https://c4.wallpaperflare.com/wallpaper/657/347/670/jungle-forest-moss-green-trees-hd-fern-plant-wallpaper-thumb.jpg",
      "imgsub": [
        "https://c4.wallpaperflare.com/wallpaper/552/201/233/nature-landscape-trees-wood-wallpaper-thumb.jpg",
        "https://c4.wallpaperflare.com/wallpaper/966/605/87/plants-grass-trees-moss-wallpaper-thumb.jpg"
      ]
    },
     {
      "id": "9",
      "type": "indoor plant",
      "price": "9999",
      "img": "https://media.istockphoto.com/id/1313112579/photo/stylish-composition-of-home-garden-interior-filled-a-lot-of-beautiful-plants-cacti-succulents.jpg?s=612x612&w=0&k=20&c=unRRfuX__0HfPcn_nrZ8h2-E3i9P8g_wVtRlHLj9eJ4=",
      "imgsub": [
        "https://media.istockphoto.com/id/1363361223/photo/flower-pot-for-wallpaper.jpg?s=612x612&w=0&k=20&c=lwxhduihLkr0-q4WTQJ6cQaL5DXvrQlolbITffsif0A=",
        "https://media.istockphoto.com/id/1341224252/photo/young-dieffenbachia-and-ficus-plant-transplanting-a-new-flowerpot-caring-for-potted-indoor.jpg?s=612x612&w=0&k=20&c=tXEYLh5GPdECho9mvAJ5ZkfiXzj5_CvkJiOOVuQdQfk="
      ]
    }
  ]
});