import { RestrauntCard } from "./RestrauntCard";

const Body = () => {
    return (<>
    <div className="search-container">
 <input type="text" className="search-input" placeholder="search" value=""/>
 <button className="search-button">Search</button>
    </div>


      <div className="restaurant-list">
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
      </div>
      </>
    );
  };

  export default Body;