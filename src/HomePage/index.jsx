import Logo from "../Logo"
// import Section from "../section/section";
import Footer from "../footer";
import  Form from "../form";
import "../HomePage/home.css"
import { useState } from "react";


const Home = () => {
    const [newCategories, setNewCategories] = useState([]);
    const handleDelete = function(id){
        setNewCategories((newCategories) => newCategories.filter((category) => category.id !== id))
    }
    function toggle(id){
        setNewCategories((newCategories) => newCategories.map((category) => category.id === id ? {...category, packed : !category.packed} : category ))
    }
   
    return <div className="content">
        <Logo/>
        <Form newCategories={newCategories} setNewCategories={setNewCategories}/>
        <Section newCategories = {newCategories} handleDelete={handleDelete} toggle= {toggle} setNewCategories= {setNewCategories}/>
        <Footer newCategories = {newCategories}/>
    </div>
}

export default Home;


// import { useState } from "react";
// const Categories = [
//     {
//         id : 1,
//         item : "passport",
//         quantity: 12,
//         packed : true,
//     },
//     {
//         id : 2,
//         item : "wallet",
//         quantity: 3,
//         packed: false,
//     },
// ]

export const Section = function ({newCategories, handleDelete, toggle, setNewCategories}){
    const [sort, setSort] = useState("input");
    let sortedItems;
    if(sort === "input") sortedItems = newCategories;
    if(sort === "desc") sortedItems = newCategories.slice().sort((a,b) => a.desc?.localCompare(b.desc));
    if(sort === "packed") sortedItems = newCategories.slice().sort((a,b) => Number(a.packed) - Number(b.packed))

        const deleteAll = () => {
            const confirmDel = window.confirm("Once deleted, can't be undone")
            if(confirmDel)
            setNewCategories([]);

        }
    return <div>
        <ul>
      {
        sortedItems?.map((category) => 
        <ListItem key={category.id} category = {category} handleDelete= {handleDelete} toggle={toggle}/> 
        
        )
      }

    </ul>
    <div className="sort">
        <select name="" id="" value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="input">Sort by Input</option>
            <option value="desc">Sort by Description</option>
            <option value="packed"  >Sort by Packed</option>
        </select>
        <div>
            <button onClick={deleteAll}>Clear All</button>
        </div>
    </div>
    </div>

}

const ListItem = function ({category, handleDelete, toggle}){
    return <li>
        <input type="checkbox" value={category.packed} onChange={() => toggle(category.id)}/>
        <span className={category.packed ? "packed" : {}}>
            {category.quantity}
            {category.item}
        </span>
        <button onClick={() => handleDelete(category.id)}>❌</button>
    </li>
};