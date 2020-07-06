import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Modal from '../Modal'
import history from '../../history'
import {fetchStream, deleteSream} from '../../actions'

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id)
  }
  
  renderActions() {
    return (
      <React.Fragment>
        <button 
          className="button ui negative" 
          onClick={() => this.props.deleteSream(this.props.match.params.id)}
        >
          Delete
        </button>
        <Link className="button ui" to="/">Cancel</Link>
      </React.Fragment>
    )  
  }

  renderContent() {
    if (!this.props.stream) {
      return 'Are you sure you want to delete this stream?'
    }

    return `Are you sure you want to delete the stream with the title: ${this.props.stream.title}?`
  }

  render() {
    return (
      <Modal 
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] } // get a stream from redux store where the key matches
} 

export default connect(mapStateToProps, {fetchStream, deleteSream})(StreamDelete)
