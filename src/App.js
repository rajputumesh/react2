import React , { Component } from 'react';
import SearchBox from './components/SearchBox';
import Gallery from './components/Gallery';
import { robots } from './components/robots';
import './css/App.css';
import 'tachyons';
class App extends Component{

    constructor()
    {
      super();
      this.state = {
        'robots':robots,
        'searchFeild':''
      }
    }
    
    searchchange = (event) =>{
      this.setState({'searchFeild':event.target.value});
      console.log(event.target.value);
    }
    
    render() {

      const filterrobots = this.state.robots.filter(robots => {
        return robots.name.toLocaleLowerCase().includes(this.state.searchFeild.toLocaleLowerCase());
      })

      const gallery = filterrobots.map((users, i) =>{
          return <Gallery key={i} robot={filterrobots[i]}/>
      });

      return (
        <div className="section">
          <h1 className="tc ma0 pa3">This Is My React App 5</h1>
          <div className="pa5">
            <SearchBox searchItem={this.searchchange}/>
            <div className='flex flex-wrap'>
              {gallery}
            </div>
          </div>
        </div>
      );
    }
}

export default App;
