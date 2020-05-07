import React from 'react'
import { connect } from 'react-redux'
import loadData from './../ConnectAPI'
//import axios from 'axios'
class Main extends React.Component {
     constructor(props) {
          super(props)
          this.state = {
               items:[],
               visible: 9,
               error:false
          }
          this.loadMore = this.loadMore.bind(this)
     }

     componentDidMount() {
          loadData(this.state.visible).then((res) => {
                    this.props.run(res.data)
                    this.setState({items:this.props.data})
          })
     }

     loadMore(){
          this.setState((prev)=>{
               return {visible: prev.visible + 9}
          })
     }



     render() {
          var items = this.state.items.slice(0,this.state.visible).map((val,ind)=>{
               return <div className="col-lg-4 col-md-6" key={ind}>
               <div className="card h-100">
                    <div className="single-post post-style-1">
                         <div className="blog-image"><img src="images/marion-michele-330691.jpg" alt="Blog Image" /></div>
                         <a className="avatar" href="123"><img src="images/icons8-team-355979.jpg" alt="Profile Image" /></a>
                         <div className="blog-info">
                              <h4 className="title"><a href="123"><b>{val.title}</b></a></h4>
                              <ul className="post-footer">
                                   <li><a href="123"><i className="ion-heart" />57</a></li>
                                   <li><a href="123"><i className="ion-chatbubble" />6</a></li>
                                   <li><a href="123"><i className="ion-eye" />138</a></li>
                              </ul>
                         </div>
                    </div>
               </div>
          </div>
        
          })
          return (
               <section className="blog-area section">
                    <div className="container">
                         <div className="row">
                              {items}
                         </div>
                         {this.state.visible < this.props.data.length && <a className="load-more-btn" href="123" onClick={this.loadMore}><b>LOAD MORE</b></a>}
                    </div>
               </section>
          )
     }
}

const mapStateToProps = (state) => {
     return {
          data: state.dataAPI
     }
}

const mapDispatchToProps = (dispatch) => {
     return {
          run: (data) => dispatch({
               type: "GET-DATA",
               payload: data
          })
     }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);