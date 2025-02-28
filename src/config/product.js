

const PRODUCTS = [
    {
        product_image: " https://down-ws-vn.img.susercontent.com/vn-11134207-7ra0g-m6mre9r9xqxt29.webp",
        product_link: " https://s.shopee.vn/3VVlyg5rKa",
        product_title: "Khô bò que chuẩn vị Đặc sản Tây Nguyên thơm ngon nhâm nhi đãi khách sang trọng từ BA THỨC FOOD "
    },
    {
        product_image: "https://down-ws-vn.img.susercontent.com/vn-11134207-7ras8-m0ykp71l223x40.webp",
        product_link: "https://s.shopee.vn/VsAPBPT9P",
        product_title: "Sashimi Ăn Cùng Bà Tuyết gói 25gr đồ ăn vặt tuổi thơ"
    },
    {
        product_image: "https://down-ws-vn.img.susercontent.com/vn-11134207-7r98o-lmbf6eioux27ca.webp",
        product_link: "https://s.shopee.vn/6pmDwqIlAh",
        product_title: "Combo 3 gói 600g cơm cháy (400g chà bông + 200g mắm hành) + kèm 1 chai sốt gỏi thái - bếp chè thái "
    },
    {
        product_image: "https://down-ws-vn.img.susercontent.com/vn-11134207-7ras8-m3h90txkkce4c7.webp",
        product_link: "https://s.shopee.vn/9pPpWNFOII ",
        product_title: "Combo NHẤT THỐNG : 30 GÓI NEM NƯỚNG PHÊN BÀ.TUYẾT +10 gói Snack SaShimi+BimBim Mái Tôn+5 sữa chua"
    },
    {
        product_image: "https://down-ws-vn.img.susercontent.com/sg-11134201-23020-32xkaecl0enveb.webp",
        product_link: "https://s.shopee.vn/8pXIKYRf6j",
        product_title: "Tóp mỡ da giòn mắm tỏi hương vị độc quyền chuẩn nhà làm Paco Food hủ lớn 500g đồ ăn vặt snacks"
    },
    {
        product_image: "https://down-ws-vn.img.susercontent.com/vn-11134207-7ra0g-m6rniezmoe9k94.webp",
        product_link: "https://s.shopee.vn/8UuRw0EOIs",
        product_title: "[Tặng 2 chịu]Combo CHIẾN BINH TẬN THẾ gồm:6 Nem Nướng+6 Sashimi+6 Bò Kobe +6 snack bìa cát tông +6 cột điện+3 gân rồng "
    },
    {
        product_image: " https://down-ws-vn.img.susercontent.com/vn-11134207-7ras8-m1ps1b3ja3pv68.webp",
        product_link: " https://s.shopee.vn/9AA8jFWlCF",
        product_title: " Cơm cháy 5 vị nhà Paco Food Gói Hút Chân Không 100g mắm hành/rong biển/siêu chà bông/khô bò cay/chà bông gà"
    },
    {
        product_image: "https://down-ws-vn.img.susercontent.com/d753ccc1b20003f1e0136ecd8e42c652.webp",
        product_link: " https://s.shopee.vn/20gyC6BBLz",
        product_title: "Cơm Cháy Mắm Hành [1 Gói 3 miếng] "
    },
    {
        product_image: "https://down-ws-vn.img.susercontent.com/vn-11134207-7ras8-m51s6i9ik4vs76.webp",
        product_link: "https://s.shopee.vn/6pmDx0EJ9P",
        product_title: "1kg cơm cháy mắm hành bể, miếng to giòn rụm"
    },
    {
        product_image: " https://down-ws-vn.img.susercontent.com/vn-11134207-7qukw-lg4vl3dupt2i0a.webp",
        product_link: " https://s.shopee.vn/60D6xULL3R",
        product_title: " Nui Chiên Giòn Cay Vị Bơ Tỏi Yotafood Đồ ăn vặt tuổi thơ"
    }
    ,
    {
        product_image: "https://down-ws-vn.img.susercontent.com/vn-11134207-7r98o-lzzq5x0ko1fx18.webp",
        product_link: "https://s.shopee.vn/60D6xYBGcb",
        product_title: "500gr | Cơm cháy Siêu ĐẠI chà bông giòn rụm - túi 500g | Đồ ăn vặt "
    },
    {
        product_image: "https://down-zl-vn.img.susercontent.com/vn-11134207-7r98o-lyx0k1x9e8ul31.webp",
        product_link: "https://s.shopee.vn/5AdzwUZUU1",
        product_title: "1 gói Chân Gà Không Xương -ĂN CÙNG BÀ TUYẾT"
    },

    {
        product_image: "https://down-zl-vn.img.susercontent.com/vn-11134207-7r98o-lvga90rsywlp00.webp",
        product_link: "https://s.shopee.vn/2LJoZMUiLg ",
        product_title: "Snack bim bim bánh tăm que cọng Thái Lan "
    },

    {
        product_image: "https://down-zl-vn.img.susercontent.com/vn-11134207-7r98o-lyvvvvieqo4hcf.webp ",
        product_link: "https://s.shopee.vn/BFJzPtkmn ",
        product_title: "Snack mèo yêu cá, đồ ăn vặt Hằng Đại (gói 26g) "
    },

    {
        product_image: "https://down-zl-vn.img.susercontent.com/vn-11134207-7ras8-m5tpn2l65hsna7.webp",
        product_link: "https://s.shopee.vn/705e7zpg6C ",
        product_title: "[ Tặng quà 1 Hũ bất kì] COMBO 3 HŨ TĂM CAY BÀ TUYẾT  "
    },
    {
        product_image: " https://down-zl-vn.img.susercontent.com/d753ccc1b20003f1e0136ecd8e42c652.webp",
        product_link: " https://s.shopee.vn/2qG5AMrBo2",
        product_title: "Cơm Cháy Mắm Hành [1 Gói 3 miếng] "
    },

    {
        product_image: " https://down-zl-vn.img.susercontent.com/vn-11134207-7r98o-lyumx9ae5lcd02.webp",
        product_link: "https://s.shopee.vn/2fwey4vosi ",
        product_title: "Snack hương bò thơm cay, sườn bò miếng Thiên Long (gói 30g) "
    },

    {
        product_image: "https://down-zl-vn.img.susercontent.com/sg-11134201-22100-93hc11xi03iv10.webp ",
        product_link: "https://s.shopee.vn/4q19Y5IJEK ",
        product_title: "[Sẵn hàng] Tăm que cay tẩm vị ăn liền snack bim bim nhiều loại Hằng Đại/Thế Giai Việt Nam 20g-30g "
    },

    {
        product_image: "https://down-zl-vn.img.susercontent.com/vn-11134207-7qukw-li5k8whrfniq2b.webp",
        product_link: "https://s.shopee.vn/6KpxKrgiZN ",
        product_title: " Cơm cháy chà bông đáy nồi bếp chè thái"
    },
    {
        product_image: " https://down-zl-vn.img.susercontent.com/vn-11134207-7r98o-lwsi8qdajc2jbe.webp",
        product_link: "https://s.shopee.vn/gBaaTWcEu ",
        product_title: "COMBO 1KG XOÀI SẤY MẸ RÔ "
    },
    {
        product_image: "https://down-zl-vn.img.susercontent.com/vn-11134207-7ras8-m4kejfqoub1s8c.webp",
        product_link: "https://s.shopee.vn/5faGXnx5ec",
        product_title: "Khoai lang sấy mật ong nội địa Trung gói 250g Kaliyou thơm ngon giòn"
    },
    {
        product_image: "https://down-zl-vn.img.susercontent.com/vn-11134207-7ras8-m4ogjb78s7fk66.webp ",
        product_link: "https://s.shopee.vn/2qG5AcxvRE",
        product_title: "Combo VÔ ĐỐI gồm : 2 hũ snack tăm cay + 3 nem nướng +3 sashimi +3 cột điện + 3 bìa cát tông + 1 gân rồng"
    },
    {
        product_image: "https://down-zl-vn.img.susercontent.com/vn-11134207-7r98o-lkujwhdbc7y3e0.webp ",
        product_link: "https://s.shopee.vn/vtnSLRl1",
        product_title: " https://s.shopee.vn/1LRHNtc9eJ"
    },
    {
        product_image: "https://down-zl-vn.img.susercontent.com/vn-11134207-7ras8-m5tepvdilbh3a7.webp",
        product_link: "https://s.shopee.vn/7zyBKC2ctd",
        product_title: "Kẹo Táo Đỏ Kẹp Sữa Lạc Đà Và Nhân Hạt Điều Dễ Ăn Thơm Ngon Hàng Loại 1, Siêu Ngon"
    },
    {
        product_image: "https://down-zl-vn.img.susercontent.com/vn-11134207-7r98o-lobkpkusou0ne2.webp",
        product_link: "https://s.shopee.vn/qV0n2yIs6",
        product_title: "500G Đùi Gà Rong Biển, Quẩy Đùi Gà Rong Biển, Bánh Quẩy Đùi Gà Thơm Ngon"
    },
    {
        product_image: "https://down-ws-vn.img.susercontent.com/sg-11134201-7rdw7-m05twgi8d9ru50.webp",
        product_link: "https://s.shopee.vn/8AHbY7sbsP",
        product_title: "500G Bánh Tai Heo Mắm Ớt Nhí Vị Mắm Hành, Bánh Tai Heo Truyền Thống, Tiệm ăn vặt Thuỳ Bùi"
    },
    {
        product_image: "https://down-ws-vn.img.susercontent.com/vn-11134207-7r98o-lyyjrs3io97le0.webp",
        product_link: "https://s.shopee.vn/8fDs91duYl",
        product_title: "COMBO CẦU VỒNG CAO THƯỢNG : Kho Bò + Khô Heo "
    },
    {
        product_image: "https://down-ws-vn.img.susercontent.com/vn-11134207-7ras8-m1dp32ncp2zc06.webp",
        product_link: "https://s.shopee.vn/gBacID5pV",
        product_title: "Khô Bò Que Hồng Ngự VIETTINMART 250G"
    }
    ,
    {
        product_image: "https://down-ws-vn.img.susercontent.com/cb9803acf424816c9e54e624ee6e2559.webp",
        product_link: "https://s.shopee.vn/3LCLnAhPoS",
        product_title: "Yaourt (sữa chua bịch) Mộc Mạc Garden"
    }
    ,
    {
        product_image: "https://down-ws-vn.img.susercontent.com/vn-11134207-7ras8-m4ejmcb7k4v418.webp",
        product_link: "https://s.shopee.vn/2B0OP0qjGo",
        product_title: "Sữa chua hy lạp greek yogurt Farmers Union nguyên chất, không đường"
    }
]

export { PRODUCTS }