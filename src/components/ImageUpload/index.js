const React = require('react')
class ImageUpload extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      file: null
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.props.setImage(
      URL.createObjectURL(event.target.files[0])
    )
  }
  render() {
    return (
      <div>
        <input type="file" onChange={this.handleChange} />
      </div>
    );
  }
}

export default ImageUpload