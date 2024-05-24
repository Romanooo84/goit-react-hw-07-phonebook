
import { getItems, getFilter} from "../redux/selectror";
import { useSelector } from "react-redux";

export const UsersList=({onClick})=>{

    let items = useSelector(getItems);
    const filtedItems = useSelector(getFilter);
    if (filtedItems !== '') {
        const filteredData = items.items.filter(item =>
            item.name.toLowerCase().includes(filtedItems.toLowerCase())
        );
        console.log(filteredData);
        items = filteredData;
    } else {
        items = items.items;
    }
   try {
        localStorage.setItem('localContacts', JSON.stringify(items));
      } catch (error) {
        console.error('Błąd podczas zapisywania danych do local storage:', error);
      }

    let Contacts = items.map((item) => (
        <div id={item.id} key={item.id}>
            <p>Name: {item.name}</p>
            <p>Number: {item.number}</p>
            <button onClick={onClick} >Delete</button>
        </div>))

return (
    <div>{Contacts}</div>
)
}
