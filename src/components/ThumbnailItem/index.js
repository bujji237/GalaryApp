import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, changeImageId, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbnailDetails

  const activeThumbnailClassName = isActive ? 'active-thumbnail' : ''

  const onClickedThumbnail = () => {
    changeImageId(id)
  }

  return (
    <li className="thumbnail-element">
      <button type="button" onClick={onClickedThumbnail} className="button-el">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbnail ${activeThumbnailClassName}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
