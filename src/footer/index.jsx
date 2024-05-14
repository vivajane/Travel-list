import "../HomePage/home.css"
const Footer = function({newCategories}){
    if(!newCategories.length) return (
        <p>Category is empty, you can start adding</p>

    )
   
    const numItem = newCategories.length;
    const packedItem = newCategories?.filter((category) => category.packed).length;
    const percentageItem = Math.round((packedItem/numItem)*100)
    // console.log(numItem)
    return <div className="footer">
        <p>{percentageItem === 100 ? "you have packed everything" : `You have ${numItem} item on your list and you have already packed ${packedItem} (${percentageItem})`}</p>
       
    </div>
}

export default Footer;