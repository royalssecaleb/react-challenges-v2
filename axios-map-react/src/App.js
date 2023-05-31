import axios from 'axios';
import {useState, useEffect} from 'react';
const base_url = 'https://www.boredapi.com/api/activity';

function App() {
  return (
    <GeneralList />
  );  
}

const GeneralList = () => {
  const [dataList , setDataList] = useState([]);
  const [disabledButton, setDiabledButton] = useState(false);
  const generateActivity  = () => {
    setDiabledButton(true);
    const getActivity = async() => {
      const active_list =await axios.get(base_url);
      setDataList([...dataList, active_list.data]);
      setDiabledButton(false);
    }
    getActivity();
  }

  return(
    <div style={{display: 'flex' , justifyContent : 'space-between' , flexDirection : 'column'}}>
      <button onClick={generateActivity} disabled = {disabledButton} style={{width : '50%', margin : 
    'auto', marginTop: '20px', padding:'10px'}}>Generate Activity</button>

    {
      dataList.map((data) => {
        return <ExtendEnabledActivity item={data} />
      })
    }
    </div>
  )
}

const ExtendEnabledActivity = ({item}) => {
  const [toggleButton, setToggleButton] = useState(false);
  return (
      <ul>
        <li><h3>{item.activity}</h3></li>
        <button onClick={()=>{setToggleButton(!toggleButton)}}>{toggleButton ? 'Collapse' : 'Expand'}</button>
        {
          toggleButton && (
            <div>
              <li>{item.key}</li>
              <li>{item.link}</li>
              <li>{item.participants}</li>
              <li>{item.price}</li>
              <li>{item.social}</li>
            </div>
        )}
      </ul>
  )
}

export default App;
