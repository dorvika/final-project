const menuList = [
  {
    id: 1,
    menuChapter: "Shop",
    panelId: 1,
    menuItems: [
      { key: 1, title: "Catalog", link: "/catalog?perPage=9&startPage=1" },
      { key: 2, title: "Payment & Delivery", link: "/payment" },
      { key: 3, title: "Returns", link: "/returns" },
      { key: 4, title: "Privacy Policy", link: "/privacypolicy" },
      { key: 5, title: "Terms of Service", link: "/termsofservice" },
    ],
  },
  {
    id: 2,
    menuChapter: "About",
    panelId: 2,
    menuItems: [
      { key: 1, title: "About us", link: "/aboutus" },
      { key: 2, title: "Reviews", link: "/reviews" },
      { key: 3, title: "Blog", link: "/blog" },
    ],
  },
];
export default menuList;
