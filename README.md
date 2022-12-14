# Development

### Link to Deployed Website
https://koolkoala1900.github.io/dev/

### Goal and Value of the Application
The goal of the application is to be able to sort, filter, and add/remove clothing items and accessories to my cart.
I created two filters: for the size of the item and whether or not the item is an accessory or clothing item.
You are also able to sort by price high to low or low to high.

### Usability Principles Considered
I wanted to make the app as intuitive as possible, so I created neat components for each of the items and its features like size, price, name, quantity, etc.
Additionally, I wanted to be able to filter by many requirements at once and also to be able to remove the filter with ease, so I used a click and unclick method for that.
I added a delete item button in the shopping cart to make it easier for users to remove items instead of going to the item itself.
I used easy and bright pictures, clean fonts, big font size, and an overall intuitive interface for the best usability of the user.

### Organization of Components
I have many components: Box, Filtering, ItemCart, ProdMap, ShoppingCart, SizingList, and Sorting.


Box: This contains the reference to the styling in app.css and is responsible for the data in the json file to show up. I used material UI Card for this.


Filtering: This is responsible for the correct filtering taking place.


Sorting: This is responsible for discerning which items should be displayed according to which sort is being applied


ItemCart: This is responsible for getting the data displayed of items that have been added to cart, as well as the remove item from cart button. I used MaterialUI Card for this.


ProdMap: This is responsible for the mapping of the items to add to the shopping cart


ShoppingCart: This is responsible for the styling and displaying of the shopping cart and grand total


SizingList: This is responsible for creating and keeping track of a sizes array and mapping that we use for the filtering.

Images: I used images I found at this url: https://www.freepik.com/free-vector/set-isolated-clothes_5936219.htm#from_view=detail_alsolike


### How Data is Passed Down Through Components
First of all, all data is created in product-data.json and passed through props.
Then, this data is used to create and fill the Box and Sorting files with the data of these products.
Then, the data from Box is used to map the shopping list items in ProdMap.
This (ProdMap) is then used in Filtering to be able to sort by the price.
ShoppingCart takes the information from ItemCart to be able to know what data it is going to be storing.

### How the User Triggers State Changes
These different components and data all interact in App.js
When a person clicks on one of the filters, the users' trigger state changes, and so the computer has to remember what they have filtered and whether or not it needs to remember (store) that information. 
Additionally, when a user adds an item to cart (or removes), the trigger state changes again, as the total price of the cart is constantly being updated.
The same goes for the sorting by price.
Additionally, when a user sorts by price and filters one after another, the trigger state changes yet again.

