const offers = {
  apple: {
    price: "$10",
    by: "Mateusz",
    priceBracket: "($1/1apple)",
    secondaryPrice: "15,44",
    imgSrc: 'images/apple.jpg',
    url: '/apple.html',
  },
  banana: {
    price: '$15'
  }
}
let items = Object.keys(offers);
items.map(item => {
  console.log(offers[item].price)
})