import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import PunkList from './components/PunkList'
import {useState, useEffect} from 'react'
import axios from 'axios'
function App() {
  const [punkListData,setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0)
  useEffect(()=>{
    const getMyNFTs = async () => {
      const thirdWebData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0xDDDdd62304ac8EBdf3E0f32b4D3E829895C558C7&order_direction=asc'
      )
      setPunkListData(thirdWebData.data.assets)
    }
    return getMyNFTs()
  }, [])
  return (
    <div className='app'>
      <Header />
      {punkListData.length > 0 && (
        <>
        <Main punkListData={punkListData} selectedPunk={selectedPunk}/>
        <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk}/>
      </>
      )}
    </div>
  )
}

export default App;
