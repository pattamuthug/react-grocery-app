import './Categorylist.css';
import Categoryitems from './Categoryitems.js';
import fruits from '../../images/fruits.png';
import snacks from '../../images/snacks.jpg';
import vegetables from '../../images/vegetables.png';

function Categorylist() {
    const categorylist =[
        {
            id:1,
            name: "Fruits",
            image: fruits
          },
          {
            id:2,
            name: "Vegetables",
            image: vegetables
          },
            {
                id:3,
                name: "Snacks",
                image: snacks
              }
     
    ];
    return(
      <div className='category'>
      <div className='ccontainer'>
      <h2>Shop by Category</h2>
  <div className='categoryWrapper'>
    
                        {
                                    categorylist.map((items)=>{
                            return <Categoryitems key={items.id} image={items.image} name={items.name}></Categoryitems>
                        })
                        }
                    
                    </div>
        </div>
        </div>)
};
export default Categorylist;