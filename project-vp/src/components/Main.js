import React from 'react'
import { connect } from 'react-redux'
import loadData from './../ConnectAPI'


class Main extends React.Component {
     constructor(props) {
          super(props)
          this.state = {
               itemsAPI: [],
               visible: 9,
               loadingState: false,
               like: [],
               sttlike: false
          }
     }

     componentDidMount() {

          loadData().then((res) => {
               this.props.run(res.data)
          })
          console.log(this.props.like);

     }

     onClickLoadMore = (e) => {
          e.preventDefault()
          this.loadMore()

     }
     mapData = () => {
          var items = this.props.data.map((val, ind) => {
               if (val.title.length > 0) {
                    return val.title
               }
          })
          return items
     }

     mapId = () => {
          var items = this.props.data.map((val, ind) => {

               return val.id

          })
          return items
     }


     displayItems = () => {


          var dataTitle = this.mapData()
          var dataId = this.mapId()
          console.log(dataId);

          var items = []
          var j = 0
          for (var i = 0; i < this.state.visible; i++) {
               items.push(<div className="col-lg-4 col-md-6" key={i} >
                    <div className="card h-100">
                         <div className="single-post post-style-1">
                              <div className="blog-image"><img src="/images/marion-michele-330691.jpg" alt="Blog Image" /></div>
                              <a className="avatar" href="123"><img src="/images/icons8-team-355979.jpg" alt="Profile Image" /></a>
                              <div className="blog-info">
                                   <h4 className="title"><a href="123"><b>{dataTitle[i]}</b></a></h4>
                                   <ul className="post-footer">
                                        <li><a href="123" onClick={(e) => this.increaseLike(e)} id={"#" + dataId[i]}>{this.props.like}</a></li>
                                        <li><a href="123"><i className="ion-chatbubble" />6</a></li>
                                        <li><a href="123"><i className="ion-eye" />138</a></li>
                                   </ul>
                              </div>
                         </div>
                    </div>
               </div>)

          }
          return items
     }

     increaseLike = (e, x) => {
          e.preventDefault()
          this.props.increase()
         

     }
     loadMore = () => {
          var x
          if (this.props.data.length - this.state.visible >= 9) {
               x = 9
          } else {
               x = (this.props.data.length - this.state.visible)
          }
          if (this.state.loadingState) {
               return;
          } else {
               this.setState({ loadingState: true });
               setTimeout(() => {
                    this.setState({ visible: this.state.visible + x, loadingState: false })
               }, 1000)

          }
     }

     render() {
          return (
               <section className="blog-area section">
                    <div className="container">
                         <div className="row">
                              {this.displayItems()}
                         </div>
                         {(this.state.visible < this.props.data.length) ? <a className="load-more-btn" href="123" onClick={(e) => this.onClickLoadMore(e)}><b>LOAD MORE</b></a> : false}
                    </div>
               </section>
          )
     }
}

const mapStateToProps = (state) => {
     return {
          data: state.dataAPI,
          like: state.like
     }
}

const mapDispatchToProps = (dispatch) => {
     return {
          run: (data) => dispatch({
               type: "GET-DATA",
               payload: data
          }),
          increase: () => dispatch({
               type: "INCREASE-LIKE"

          })
     }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);