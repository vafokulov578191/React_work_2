import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Unicef from './Components/Unicef/Unicef';
import Topcount from './Countainer/Count_top/Topcount';
import Maincount from './Countainer/Count_Main/Maincount';
import Bottomcount from './Countainer/Count_Bottom/Bottom_count';

let arr = [
  {
    id: 1,
    name: 'iPhone 13 Pro',
    description: 'Oh. So. Pro.',
    Image: 'https://www.apple.com/v/home/aq/images/promos/iphone-13-pro/promo_iphone13pro_avail__beadms4ldidu_large.jpg',
    Color: 'true'
  },
  {
    id: 2,
    name: 'MacBook Pro 13',
    description: 'Superchange by M2',
    Image: 'https://www.apple.com/v/home/aq/images/promos/macbook-pro-13/promo_mbp13__buwssod6c8vm_large.jpg',
    Color: 'false'
  },
  {
    id: 3,
    name: 'Watch',
    description: 'SERIES 7',
    Image: 'https://www.apple.com/v/home/aq/images/promos/watch-series-7/promo_watch_lte__djeaso7ukrsm_large.jpg',
    Color: 'true'
  },
  {
    id: 4,
    name: 'iPad air',
    description: 'Light. Bright. Full of might.',
    Image: 'https://www.apple.com/v/home/aq/images/promos/ipad-air/promo_ipadair_avail__ferd4bfpcdm6_large.jpg',
    Color: 'false'
  },
  {
    id: 5,
    name: 'iPhone 13 Pro',
    description: 'Oh. So. Pro.',
    Image: 'https://www.apple.com/v/home/aq/images/promos/apple-card/tile__cauwwcyyn9hy_large.jpg',
    Color: 'true'
  },
  {
    id: 6,
    name: 'iPhone 13 Pro',
    description: 'Oh. So. Pro.',
    Image: 'https://www.apple.com/v/home/aq/images/promos/airpods-spatial/promo_airpods_spatial__cak1sq3kb1w2_large.jpg'
  }
]

function App() {
  return (
    <div className="Countainer">
        <div className="countainer_top">
          <Header/>
          <Unicef/>
        </div>
        <div className="countainer_Main">
          <Topcount/>
          <Maincount/>
          <Bottomcount/>
        </div>
        <div className="item">
          {
            arr.map((item, index) => <Main key={index} item={item} />)
          }
        </div>
        <div className="Slide">
          <img src="https://is1-ssl.mzstatic.com/image/thumb/5utJlDYhZ6kWxCJU9RZj7g/1679x945sr.webp" alt="" />
        </div>
    </div>
  );
}

export default App;
