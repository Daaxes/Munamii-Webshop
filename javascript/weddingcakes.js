const weddingCakes = [
    {
      Id: "Cake1",
      name: "8-tier Flower cake",
      file: "./img/cakes/8-tierFlowerCake.jpg",
      price: 342,
      description: "Description",
      generateHtml: function() {
          return "<div class = 'productClass' Id = '" + this.Id + "' onclick='ShowTheProduct()'><img src='" + this.file + "' title = '" + this.name + "'><p>" + this.name + "</p><p>" + this.price + "&euro;</p></div>";
    }}
    //,
    // {
    //   Id: "Cake2",
    //   name: "Gabriela cake",
    //   file: "./img/cakes/Gabriela.jpg",
    //   price: 290,
    //   description: "Description",
    //   generateHtml: function() {
    //       return "<div class = 'productClass' Id = '" + this.Id + "' onclick='ShowTheProduct()'><img src='" + this.file + "' title = '" + this.name + "'><p>" + this.name + "</p><p>" + this.price + "&euro;</p></div>";
    // }},  
    // {
    //   Id: "Cake3",
    //   name: "Green leafs cake",
    //   file: "./img/cakes/Green leafs.jpg",
    //   price: 320,
    //   description: "Description",
    //   generateHtml: function() {
    //       return "<div class = 'productClass' Id = '" + this.Id + "' onclick='ShowTheProduct()'><img src='" + this.file + "' title = '" + this.name + "'><p>" + this.name + "</p><p>" + this.price + "&euro;</p></div>";
    // }},  
    // {
    //   Id: "Cake4",
    //   name: "Belen cake",
    //   file: "./img/cakes/Belen.jpg",
    //   price: 420,
    //   description: "Description",
    //   generateHtml: function() {
    //       return "<div class = 'productClass' Id = '" + this.Id + "' onclick='ShowTheProduct()'><img src='" + this.file + "' title = '" + this.name + "'><p>" + this.name + "</p><p>" + this.price + "&euro;</p></div>";
    // }},  
  //   {
  //     Id: "Cake5",
  //     name: "Mr and Mrs cake",
  //     file: "./img/cakes/Mr and Mrs.jpg",
  //     price: 320,
  //     description: "Description",
  //     generateHtml: function() {
  //         return "<div class = 'productClass' Id = '" + this.Id + "' onclick='ShowTheProduct()'><img src='" + this.file + "' title = '" + this.name + "'><p>" + this.name + "</p><p>" + this.price + "&euro;</p></div>";
  //   }},
  //   {
  //     Id: "Cake6",
  //     name: "The Cat cake",
  //     file: "./img/cakes/The cat.jpg",
  //     price: 420,
  //     description: "Description",
  //     generateHtml: function() {
  //         return "<div class = 'productClass' Id = '" + this.Id + "' onclick='ShowTheProduct()'><img src='" + this.file + "' title = '" + this.name + "'><p>" + this.name + "</p><p>" + this.price + "&euro;</p></div>";
  //   }},
  //   {
  //     Id: "Cake7",
  //     name: "Tier rose cake",
  //     file: "./img/cakes/Tier rose.jpg",
  //     price: 642,
  //     description: "Description",
  //     generateHtml: function() {
  //         return "<div class = 'productClass' Id = '" + this.Id + "' onclick='ShowTheProduct()'><img src='" + this.file + "' title = '" + this.name + "'><p>" + this.name + "</p><p>" + this.price + "&euro;</p></div>";
  //   }},
  //   {
  //     Id: "Cake8",
  //     name: "White roses cake",
  //     file: "./img/cakes/White roses.jpg",
  //     price: 420,
  //     description: "Description",
  //     generateHtml: function() {
  //         return "<div class = 'productClass' Id = '" + this.Id + "' onclick='ShowTheProduct()'><img src='" + this.file + "' title = '" + this.name + "'><p>" + this.name + "</p><p>" + this.price + "&euro;</p></div>";
  //   }},
  //   {
  //   Id: "Cake9",
  //   name: "Tropical cake",
  //   file: "./img/cakes/Tropical.jpg",
  //   price: 640,
  //   description: "Description",
  //   generateHtml: function() {  
  //       return "<div class = 'productClass' Id = '" + this.Id + "' onclick='ShowTheProduct()'><img src='" + this.file + "' title = '" + this.name + "'><p>" + this.name + "</p><p>" + this.price + "&euro;</p></div>";
  // }}
];
  