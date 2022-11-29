import products from '../product-data.json'

export default function filterList(array1, filterMechanism) {

    if(filterMechanism == null) return products;

    else {
          return products.filter(p => {
          const sizeL = p.size.split(" ");
          if(array1.length > 0) {
                if(sizeL.some(r => array1.indexOf(r) >= 0)) {
                    return p;
            }
          }
          else {
              return products;
          }
      })  
    }
}

