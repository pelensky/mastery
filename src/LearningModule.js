import React from 'react';
import DetailsModal from './DetailsModal';
import GitHubColors from 'github-colors';

class LearningModule extends React.Component {

  constructor(props) {
    super(props)
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.state = {detailsOpen: false }

  }

  openModal(e) {
    e.preventDefault()
    this.setState({detailsOpen: true})
  }

  closeModal(e) {
    e.preventDefault()
    this.setState({detailsOpen: false})
  }

  render() {

    let style = {
      boxShadow: `inset 0 0 0px 4px ${GitHubColors.get(this.props.module.language).color}`
    }

    let detailsModal = ""
    if( this.state.detailsOpen ) {
      detailsModal = <DetailsModal module={this.props.module} onClose={this.closeModal}></DetailsModal>
    }

    return (
      <div className="card" style={style}>
        <header className="card-header">
          <p className="card-header-title is-centered">{this.props.module.title}</p>
        </header>
        <div className="card-content">
          <div className="content">
            {this.props.module.subtitle}
          </div>
        </div>
        <footer className="card-footer">
          <a onClick={this.openModal} href="#" className="button card-footer-item">Open</a>
        </footer>
        {detailsModal}
      </div>
    );
  }
}

export default LearningModule;
