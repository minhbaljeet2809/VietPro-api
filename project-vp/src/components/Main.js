import React from 'react'
import { connect } from 'react-redux'
import loadData from './../ConnectAPI'
import { NavLink } from 'react-router-dom'

class Main extends React.Component {
     constructor(props) {
          super(props)
          this.state = {
               itemsAPI: [],
               visible: 9,
               loadingState: false,
               like: [],
               sttlike: [],
               arrview:[]
          }
     }

     componentDidMount() {

          loadData().then((res) => {
               this.props.run(res.data)
               this.setState({
                    like: this.props.like,
                    sttlike: this.props.arrsttlike,
                    arrview: this.props.arrview
               })
               //console.log(this.props.like);
               //this.props.like = arrLike
          })

     }

     componentDidUpdate() {
          this.displayItems()
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
          var x = items.map((val, ind) => {
               return <div className="col-lg-4 col-md-6" key={ind} >
                    <div className="card h-100">
                         <div className="single-post post-style-1">
                              <div className="blog-image"><img src="/images/marion-michele-330691.jpg" alt="Blog Image" /></div>
                              <a className="avatar" href="123"><img src="/images/icons8-team-355979.jpg" alt="Profile Image" /></a>
                              <div className="blog-info">
                                   <h4 className="title" onClick={(e)=>this.increaseView(e,ind)}><NavLink to="/detail"><b>{val}</b></NavLink></h4>
                                   <ul className="post-footer">
                                        <li>{(this.state.sttlike[ind] === false) ? <a href="123" onClick={(e) => this.increaseLike(e, ind)} ><i className="ion-heart" />{this.state.like[ind]}</a> :
                                             <a href="123" onClick={(e) => this.reduceLike(e, ind)} ><i className="ion-heart" />{this.state.like[ind]}</a>}</li>
                                        <li><a href="123"><i className="ion-chatbubble" />6</a></li>
                                        <li><i className="ion-eye" />{this.state.arrview[ind]}</li>
                                   </ul>
                              </div>
                         </div>
                    </div>
               </div>
          })
          return x
     }



     displayItems = () => {

          var dataTitle = this.mapData()
          var items = []
          for (var i = 0; i < this.state.visible; i++) {
               items.push(dataTitle[i])
          }
          return items
     }


     increaseView = (e, x)=>{
          e.preventDefault()
          this.state.arrview[x] = this.state.arrview[x] + 1
          this.setState({arrview: this.state.arrview})
     }

     increaseLike = (e, x) => {
          e.preventDefault()
          if (this.state.sttlike[x] === false) {
               this.state.like[x] = this.state.like[x] + 1
               this.state.sttlike[x] = true
               this.setState({ like: this.state.like })
               this.setState({ sttlike: this.state.sttlike })
               //alert(this.state.like[x])
          }
     }

     reduceLike = (e, x) => {
          e.preventDefault()
          if (this.state.sttlike[x] === true) {
               this.state.like[x] = this.state.like[x] - 1
               this.state.sttlike[x] = false
               this.setState({ like: this.state.like })
               this.setState({ sttlike: this.state.sttlike })
               //alert(this.state.like[x])
          }
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
               }, 0)

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
          like: state.like,
          arrsttlike: state.sttlike,
          arrview: state.arrview
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