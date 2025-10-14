import axios from 'axios'
import React from 'react'
import { faker } from '@faker-js/faker';

// controlled component
// export default function ProductForm() {
//  let [title, setTitle] = React.useState('');
//  let [price, setPrice] = React.useState(0);

//   return (
//     <div>
//         <form>
//             Title <input type='text' name='title' onChange={evt => setTitle(evt.target.value)}/> <br /><br />
//             Price <input type='text' name='price' onChange={evt => setPrice(evt.target.value)}/> <br /><br />

//             <button type='submit'>Submit</button>
//         </form>
//     </div>
//   )
// }

// Uncontrolled component

export default function ProductForm() {
 let titleRef = React.useRef();
 let priceRef = React.useRef();

 function handleSubmit() {
    let product = {
        title: titleRef.current.value,
        price: priceRef.current.value,
        image: faker.image.url(),
        description: faker.commerce.productDescription(),
        category: 'electronics'
    }

   axios.post('http://localhost:1234/products', product).then(res => {
    console.log(res.data);
   });
 }

  return (
    <div>
        <form>
            Title <input type='text' name='title' ref={titleRef}/> <br /><br />
            Price <input type='text' name='price' ref={priceRef}/> <br /><br />

            <button type='button' onClick={handleSubmit}>Submit</button>
        </form>
    </div>
  )
}
