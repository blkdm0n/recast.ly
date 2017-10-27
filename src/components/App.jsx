class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: props.videos[0],
      isInList: props.videos
    };
    this.handleClick = this.handleClick.bind(this);
  }
   
  handleClick(id) {
    console.log('clicked title');
    this.setState({
      isPlaying: this.props.videos[id]
    });
  }

  handleSearch(data) {
    this.setState({
      isPlaying: this.data[0], 
      isInList: this.data,
    });
  }
  render() { 
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search handleSearch={this.handleSearch}/></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.isPlaying}/></div>
          </div>
          <div className="col-md-5">
            <div><VideoList videos={this.state.isInList} handleClick={this.handleClick}/></div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
