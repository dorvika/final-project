const AboutUs = () => {
  return <div className="container-about" style={{
    fontFamily: "Abel, sans-serif",
    color: "#373F41",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginRight: "5%",
    marginLeft: "5%",
    marginBottom: "20px"
  }}>

    <div className="title-about" style={{
      fontSize: "40px",
      fontWeight: "600",
    }}>
      About Us
    </div>

    <div style={{
      fontSize: "20px",

    }}>
    Welcome to Postil
    <br/>Postil delivers a great Scandinavian offer for everyone within sleeping and living. We are a global retail chain of stores and web shops, and part of the family-owned Lars Larsen Group.
    <br/>Our founder, Lars Larsen, opened his first Postil store in Aarhus, Denmark, in 1979. Today, Postil has more than 3,000 stores in 48 countries around the world. 27 countries are operated directly by Postil, while the remaining 21 countries are part of Postil Franchise.
    <br/>With thousands of stores across the world, there is often a Postil nearby. This makes it quick to explore our assortment, and easy to bring products home. Online, we have room for even more products, and it is crucial for us to make it easy for customers to combine our great store service with our wide online assortment to give the best possible shopping experience.

  </div>
    </div>;
};

export default AboutUs;
