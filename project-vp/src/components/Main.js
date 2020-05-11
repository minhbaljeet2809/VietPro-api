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
               sttlike: []
          }
     }

     componentDidMount() {

          loadData().then((res) => {
               this.props.run(res.data)
               var arrLike = []
               var arrsttlike = []
               for (var i = 0; i < this.props.data.length; i++) {
                    arrLike[i] = 10
                    arrsttlike[i] = false
               }
               this.setState({ like: arrLike, sttlike: arrsttlike })
          })

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
                                   <h4 className="title"><a href="123"><b>{val}</b></a></h4>
                                   <ul className="post-footer">
                                        <li>{(this.state.sttlike[ind] === false) ? <a href="123" onClick={(e) => this.increaseLike(e, ind)} ><i className="far fa-heart" />{this.state.like[ind]}</a>:
                                             <a href="123" onClick={(e) => this.reduceLike(e, ind)} ><i className="fas fa-heart" />{this.state.like[ind]}</a>}</li>
                                        <li><a href="123"><i className="ion-chatbubble" />6</a></li>
                                        <li><a href="123"><i className="ion-eye" />138</a></li>
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

     increaseLike = (e, x) => {
          e.preventDefault()
          if (this.state.sttlike[x] === false) {
               this.state.like[x] = this.state.like[x] + 1
               this.state.sttlike[x] = true
               this.setState({ like: this.state.like })
               this.setState({ sttlike: this.state.sttlike })
               // alert(this.state.like[x])
          }
     }

     reduceLike = (e, x) => {
          e.preventDefault()
          if (this.state.sttlike[x] === true) {
               this.state.like[x] = this.state.like[x] - 1
               this.state.sttlike[x] = false
               this.setState({ like: this.state.like })
               this.setState({ sttlike: this.state.sttlike })
               // alert(this.state.like[x])
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