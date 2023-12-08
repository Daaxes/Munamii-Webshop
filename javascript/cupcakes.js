const cupCakes = [
    {
      Id: "CupCake1",
      name: "Choklate cupcake",
      file: "./img/cupcakes/Choklate.jpg",
      price: 10,
      description: "Description",
      generateHtml: function() {
          return "<div class = 'productClass' Id = '" + this.Id + "' onclick='ShowTheProduct()'><img src='" + this.file + "' title = '" + this.name + "'><p>" + this.name + "</p><p>" + this.price + "&euro;</p></div>";
      }},
      {
      Id: "CupCake2",
      name: "Cobnut cupcake",
      file: "./img/cupcakes/Cobnut.jpg",
      price: 10,
      description: "Description",
      generateHtml: function() {
          return "<div class = 'productClass' Id = '" + this.Id + "' onclick='ShowTheProduct()'><img src='" + this.file + "' title = '" + this.name + "'><p>" + this.name + "</p><p>" + this.price + "&euro;</p></div>";
    }},
    {
      Id: "CupCake3",
      name: "Pink delight",
      file: "./img/cupcakes/Pink delight.jpg",
      price: 11,
      description: "Description",
      generateHtml: function() {
          return "<div class = 'productClass' Id = '" + this.Id + "' onclick='ShowTheProduct()'><img src='" + this.file + "' title = '" + this.name + "'><p>" + this.name + "</p><p>" + this.price + "&euro;</p></div>";
    }},  
    {
      Id: "CupCake4",
      name: "Red top cupcake",
      file: "./img/cupcakes/Red top.jpg",
      price: 10,
      description: "Description",
      generateHtml: function() {
          return "<div class = 'productClass' Id = '" + this.Id + "' onclick='ShowTheProduct()'><img src='" + this.file + "' title = '" + this.name + "'><p>" + this.name + "</p><p>" + this.price + "&euro;</p></div>";
    }},  
    {
      Id: "CupCake5",
      name: "Turkoise flower",
      file: "./img/cupcakes/Turkoise flower.jpg",
      price: 10,
      description: "Description",
      generateHtml: function() {
          return "<div class = 'productClass' Id = '" + this.Id + "' onclick='ShowTheProduct()'><img src='" + this.file + "' title = '" + this.name + "'><p>" + this.name + "</p><p>" + this.price + "&euro;</p></div>";
    }},  
    {
      Id: "CupCake6",
      name: "Turkoise dream",
      file: "./img/cupcakes/Turkoise dream.jpg",
      price: 11,
      description: "Description",
      generateHtml: function() {
          return "<div class = 'productClass' Id = '" + this.Id + "' onclick='ShowTheProduct()'><img src='" + this.file + "' title = '" + this.name + "'><p>" + this.name + "</p><p>" + this.price + "&euro;</p></div>";
    }},
    {
      Id: "CupCake7",
      name: "Cherry cupcake",
      file: "./img/cupcakes/Cherry.png",
      price: 10,
      description: "Description",
      generateHtml: function() {
          return "<div class = 'productClass' Id = '" + this.Id + "' onclick='ShowTheProduct()'><img src='" + this.file + "' title = '" + this.name + "'><p>" + this.name + "</p><p>" + this.price + "&euro;</p></div>";
    }},
    {
    Id: "CupCake8",
    name: "Sugarcake",
    file: "./img/cupcakes/Sugarcake.png",
    price: 9,
    description: "Description",
    generateHtml: function() {  
        return "<div class = 'productClass' Id = '" + this.Id + "' onclick='ShowTheProduct()'><img src='" + this.file + "' title = '" + this.name + "'><p>" + this.name + "</p><p>" + this.price + "&euro;</p></div>";
  }}];
 