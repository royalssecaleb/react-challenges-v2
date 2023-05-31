import axios from "axios";
import { useEffect, useState } from "react";
 
const base_url = 'https://www.boredapi.com/api/activity';

function App() {
  return <GenerateList />;
}

const GenerateList = () => {
  //YOUR CODE HERE
  const [dataList, setDataList] = useState([]);
  const [disabledButton , setDisabledButton]= useState(false); 

  const generateActivity = () =>{
    setDisabledButton(true);
    const getActivity = async() => {
      const active_list = await axios.get(base_url);
      console.log(active_list.data);
      setDataList([...dataList, active_list.data]);
      setDisabledButton(false);
    }
    getActivity();
  }

  return (
    <div 
    style={{
      display : 'flex',
      flexDirection : 'column',
      justifyContent : 'space-between'
    }}
    >
      <button
        onClick={generateActivity}
        style={{  
          marginTop : '20px',
          padding : '10px',
          width : '50%',
          margin : 'auto'
        }}
        disabled = {disabledButton}
      >Generate Activity</button>

      <ul>
        {dataList.map((data) => {
          return <ExpandableListItem item = {data} />
        })}
      </ul>
    </div>
  )
};

const ExpandableListItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <ul>
      <li style={{display : 'flex'}}>
        <p>{item.activity}</p>
        <button onClick={()=>{setExpanded(!expanded)}}>{expanded ? 'Collapse' : 'Expand'}</button>
      </li>
      {expanded &&( 
        <div>
          <li>{`Key : ${item.key}`}</li>
          <li>{`Link :  ${item.link || null}`}</li>
          <li>{item.participants}</li>
          <li>{item.price}</li>
          <li>{item.social}</li>
        </div>
      )
      }
    </ul>
  )
};


export default App;