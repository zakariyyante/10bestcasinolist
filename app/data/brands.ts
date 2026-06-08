export interface Brand {
  id: string;
  name: string;
  logo: string;
  rating: number;
  bonus: string;
  url: string;
  isMobile: boolean;
  votes: number;
}

export const brands: Brand[] = [
  // {
  //   id: "spinboss",
  //   name: "SpinBoss",
  //   logo: "/brands/spinboss.webp",
  //   rating: 9.2,
  //   bonus: "400% UP TO £12,750 + 400 FS",
  //   url: "https://spbs.lynmonkel.com/?mid=355610_2121758&subid=SpinBoss-SL2UK1&clickid=",
  //   isMobile: true,
  //   votes: 1340,
  // },
  {
    id: "spinpolo",
    name: "SpinPolo",
    logo: "/brands/spinpolo.webp",
    rating: 9.0,
    bonus: "400% UP TO £12,750 + 400 FS",
    url: "https://direct.reradirectbox.com/click?pid=75&offer_id=857&l=1778754174&sub2=SpinPolo-SL2UK1&sub1=",
    isMobile: true,
    votes: 1105,
  },
  
  {
    id: "bananzia",
    name: "Bananzia",
    logo: "/brands/bananzia.svg",
    rating: 9.2,
    bonus: "Casino Welcome Bonus 300% up to £200 + 50 FS!",
    url: "https://go.drctvoodoo.com/click?pid=6&offer_id=12&sub2=Bananzia-SL2UK1&sub1=",
    isMobile: true,
    votes: 1340,
  },
  
  {
    id: "daytonaspin",
    name: "DaytonaSpin",
    logo: "/brands/daytonaspin.svg",
    rating: 9.2,
    bonus: "255% Up To 4500 £ + 255 FS",
    url: "https://bestcpa.online/click?o=380&a=75&aff_click_id=SL2UK1",
    isMobile: true,
    votes: 1340,
  },
  // {
  //   id: "bananzia",
  //   name: "Bananzia",
  //   logo: "/brands/bananzia.svg",
  //   rating: 9.2,
  //   bonus: "Casino Welcome Bonus 300% up to £200 + 50 FS!",
  //   url: "https://go.drctvoodoo.com/click?pid=6&offer_id=12&sub2=Bananzia-SL2UK1&sub1=",
  //   isMobile: true,
  //   votes: 1340,
  // },
  
  

  
  
  // {
  //   id: "vegashero",
  //   name: "VegasHero",
  //   logo: "/brands/VegasHero.png",
  //   rating: 9.5,
  //   bonus: "125% UP TO £1,250 + 250 FS",
  //   url: "https://vgr.lynmonkel.com/?mid=314792_2079715&subid=VegasHero-SL2UK1&clickid=",
  //   isMobile: true,
  //   votes: 1842,
  // },
  

  {
    id: "grosvenor-casinos",
    name: "Grosvenor",
    logo: "/brands/grosvenor.png",
    rating: 10.0,
    bonus: "Play with £40 when you deposit £20",
    url: "https://www.grosvenorcasinos.com/?SUB_ID=NR_79673fd31e5e41a9b31d6c394ea4d&var1=KAR92895826&AFF_ID=10008008011&pid=2340004&utm_source=10008008011&utm_medium=affiliate&utm_channel=affiliate&clickid=",
    isMobile: false,
    votes: 4089,
  }
];
