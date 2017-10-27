class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: props.videos ? props.videos[0] : null,
      isInList: props.videos
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  
  handleClick(props) {
    this.setState({
      isPlaying: props.video
    });
  }

  handleSearch(data) {
    this.setState({
      isPlaying: data.items[0], 
      isInList: data.items
    });
  }
  componentDidMount() { searchYouTube('', this.handleSearch); }

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
