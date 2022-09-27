import './Categorylist.css';
import Categoryitems from './Categoryitems.js';
import fruits from '../../images/fruits.png';
import snacks from '../../images/snacks.jpg';
import vegetables from '../../images/vegetables.png';
import spices from "../../images/spices.jpg"

function Categorylist() {
    const categorylist =[
        {
            id:1,
            name: "Fruits",
            link:"fruits",
            image: fruits
          },
          {
            id:2,
            name: "Vegetables",
            link:"vegetables",
            image: vegetables
          },
            {
                id:3,
                name: "Snacks",
                link:"snacks",
                image: snacks
              },
              {
                id:4,
                name:"Spices",
                link:"spices",
                image:spices
              }
     
    ];
    return(
      <div className='category'>
      <div className='ccontainer'>
      <h2>Shop by Category</h2>
  <div className='categoryWrapper'>
    
                        {
                                    categorylist.map((items)=>{
                            return <Categoryitems key={items.id} image={items.image} name={items.name} link={items.link}></Categoryitems>
                        })
                        }
                    
                    </div>
        </div>
        </div>)
};
export default Categorylist;