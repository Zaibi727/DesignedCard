import React, { Component } from 'react';
import './cardDesign.css';

class Design extends Component {
   
   
     

    render() { 
        return ( 
            <div className="wrapper">
              <div className="Design">
                 <img className="ant-img" src={this.props.imageUrl} />
                 <div>
                 <i class="fa fa-user fa-3x"></i>
                 </div>

                 <section className="below-img">
                 <div className="title">
                  <h1>{this.props.title}</h1>
                  <p>{this.props.subtitle}</p>
               </div>
               <div className="fig-data">
                      <div>
                          <h2 className="primary"> {this.props.followers} </h2>
                          <p className="caption">Followers</p>
                      </div>
                      <div>
                          <h2 className="primary"> {this.props.followings} </h2>
                          <p  className="caption">Following</p>
                      </div>
               </div>
               <button className="fol-btn" onClick={this.props.onIncrement}>
                   Follow
               </button>
               <p className="btm-p">
                   Morgan has collected ants since<br></br>
                   they were six years old and now has
                   many dozen ants but none in their
                   pants.
               </p>
                 </section>

               
            </div>
            </div>
            
         );
    }
}
 
export default Design;