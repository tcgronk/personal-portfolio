import React,{Component} from 'react';
import { Route, Link } from 'react-router-dom';
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import Home from '../Home/Home'
import Code from '../Code/Code'
import Lead from '../Lead/Lead'
import './App.css';
import Articles from '../Lead/Articles'



export default class App extends Component{
  constructor(props){
    super(props)
    this.state={
    
    }
  }
  


  renderNavRoutes(){
    
    return(
      <span>
      <Route exact path='/' component={Nav} />
      <Route path='/home' component={Nav}/>
      <Route path= "/tech" component={Nav} />
      <Route path= "/leadership" component={Nav} />
      <Route path= "/code" component={Nav} />
      </span>
    )
  }
  renderMainPage(){
    console.log(this.state.lead)
    return(
      <span>
      {['/', '/home'].map(path => (
                    <Route
                        exact
                        path={path}
                        component={()=><Home/>}
                    />
      ))}
      
      <Route path= "/leadership" component={()=><Lead />} />
      <Route path= "/code" component={()=><Code/>} />

      {['/leadership/:article'].map(path =>(
        <Route  
        exact
        key={path}
        path={path} component={Articles}/>
        ))}
      </span>
    )
  }


  render(){
  
  return (
   
    <div className="App" >
      <header className="App-header">
      <nav>{this.renderNavRoutes()}</nav>
      <Link className='nav' className='routerLink' to='/' ><h1>Tess Gronski</h1></Link>
      </header>
      <div className='body'>
      <main>{this.renderMainPage()}</main>     
      </div>
      <Footer />
    </div>
   
  );
  }
  
}




