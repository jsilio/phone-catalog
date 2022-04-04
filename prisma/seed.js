const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const allPhones = [
    {
      name: "iPhone 13",
      manufacturer: "Apple",
      color: "Midnight",
      price: 819,
      imageUrl: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13.jpg",
      screen: "6.1 inch XDR OLED",
      processor: "A15 Bionic",
      ram: 128,
      camera: "12 MP",
      battery: "3240 mAh",
    },
    {
      name: "iPhone 13 Pro",
      manufacturer: "Apple",
      color: "black",
      price: 909,
      imageUrl:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-black-select-2020?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1601684204000",
      screen: "4,7 inch IPS",
      processor: "A10 Fusion",
      ram: 64,
    },
    {
      name: "iPhone 11",
      manufacturer: "Apple",
      color: "white",
      price: 689,
      imageUrl:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone11-white-select-2019_GEO_EMEA?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1567021770073",
      screen: "4,7 inch IPS",
      processor: "A13 Bionic",
      ram: 64,
    },
    {
      name: "iPhone SE",
      manufacturer: "Apple",
      color: "red",
      price: 489,
      imageUrl:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-se-red-select-2020_GEO_EMEA?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1586574260374",
      screen: "4,7 inch IPS",
      processor: "A13 Bionic",
      ram: 64,
    },
    {
      name: "iPhone XR",
      manufacturer: "Apple",
      color: "white",
      price: 589,
      imageUrl:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-xr-white-select-201809?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1551226036668",
      screen: "4,7 inch IPS",
      processor: "A13 Bionic",
      ram: 64,
    },

    {
      name: "Galaxy Z Fold",
      manufacturer: "Samsung",
      color: "black",
      price: 2009,
      imageUrl:
        "https://images.samsung.com/is/image/samsung/es-galaxy-z-fold2-f916-black-sm-f916bzkaphe-frontmysticblack-thumb-295388089?$PF_PRD_PNG$",
      screen: "4,7 inch IPS",
      processor: "A14 Bionic",
      ram: 128,
    },
    {
      name: "Galaxy Z Flip",
      manufacturer: "Samsung",
      color: "rose gold",
      price: 1550,
      imageUrl:
        "https://images.samsung.com/is/image/samsung/es-galaxy-z-flip-5g-f707-sm-f707bznaphe-frontmysticbronze-thumb-278302892?$PF_PRD_PNG$",
      screen: "4,7 inch IPS",
      processor: "A14 Bionic",
      ram: 128,
    },
    {
      name: "Galaxy S20",
      manufacturer: "Samsung",
      color: "black",
      price: 729,
      imageUrl:
        "https://images.samsung.com/is/image/samsung/es-galaxy-s20-fe-g780-sm-g780fzbheub-frontcloudnavy-thumb-310836010?$PF_PRD_PNG$",
      screen: "4,7 inch IPS",
      processor: "A14 Bionic",
      ram: 128,
    },
    {
      name: "Galaxy Note20",
      manufacturer: "Samsung",
      color: "green",
      price: 959,
      imageUrl:
        "https://images.samsung.com/is/image/samsung/es-galaxy-note20-n980-sm-n980fzggeub-frontmysticgreen-thumb-282458549?$PF_PRD_PNG$",
      screen: "4,7 inch IPS",
      processor: "A14 Bionic",
      ram: 128,
    },
    {
      name: "Galaxy Note0",
      manufacturer: "Samsung",
      color: "blue",
      price: 325,
      imageUrl:
        "https://images.samsung.com/is/image/samsung/es-galaxy-note9-n960-sm-n960fzbhphe-frontblue-thumb-111944862?$PF_PRD_PNG$",
      screen: "4,7 inch IPS",
      processor: "A14 Bionic",
      ram: 128,
    },
    {
      name: "Galaxy A31",
      manufacturer: "Samsung",
      color: "black",
      price: 299,
      imageUrl:
        "https://images.samsung.com/is/image/samsung/es-galaxy-a31-sm-a315gzkueub-front-thumb-274630449?$PF_PRD_PNG$",
      screen: "4,7 inch IPS",
      processor: "A14 Bionic",
      ram: 64,
    },

    {
      name: "HUAWEI P40 Pro",
      manufacturer: "Huawei",
      color: "silver frost",
      price: 899,
      imageUrl:
        "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/list-image/phones/p40-pro/p40-pro-silver.png",
      screen: "4,7 inch IPS",
      processor: "A14 Bionic",
      ram: 128,
    },
    {
      name: "HUAWEI P30",
      manufacturer: "Huawei",
      color: "black",
      price: 599,
      imageUrl:
        "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/list-image/phones/p30-pro/P30Pro_black.png",
      screen: "4,7 inch IPS",
      processor: "A14 Bionic",
      ram: 128,
    },
    {
      name: "HUAWEI Y6p",
      manufacturer: "Huawei",
      color: "purple",
      price: 129,
      imageUrl:
        "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/y6p/y6s-listimage-purple.png",
      screen: "4,7 inch IPS",
      processor: "A14 Bionic",
      ram: 128,
    },
    {
      name: "HUAWEI P Smart S",
      manufacturer: "Huawei",
      color: "black",
      price: 229,
      imageUrl:
        "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/p-smart-s/midnight-black.png",
      screen: "4,7 inch IPS",
      processor: "A14 Bionic",
      ram: 128,
    },
    {
      name: "HUAWEI Y5p",
      manufacturer: "Huawei",
      color: "black",
      price: 89,
      imageUrl:
        "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/y5p/black.png",
      screen: "4,7 inch IPS",
      processor: "A14 Bionic",
      ram: 128,
    },
    {
      name: "OnePlus 8 Pro",
      manufacturer: "Oneplus",
      color: "black",
      price: 909,
      imageUrl:
        "https://image01.oneplus.net/ebp/202003/30/1-m00-12-6c-rb8bwl6bkxqanwlpaahnodotaxo639_840_840.png",
      screen: "4,7 inch IPS",
      processor: "A14 Bionic",
      ram: 8,
    },
    {
      name: "OnePlus 7T",
      manufacturer: "Oneplus",
      color: "black",
      price: 539,
      imageUrl:
        "https://image01.oneplus.net/ebp/202003/04/1-m00-11-92-rb8bwl5favyag4u_aaivyrse7g8326_840_840.png",
      screen: "4,7 inch IPS",
      processor: "A14 Bionic",
      ram: 8,
    },
  ];

  for (let phone of allPhones) {
    await prisma.phone.create({
      data: phone,
    });
  }

  //   console.log(phone);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
