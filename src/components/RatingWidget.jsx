import Icon from './Icon'

const googleRatingUrl =
  'https://www.google.co.in/search?sca_esv=53c5f5d984ac257c&sxsrf=APpeQnuCW2ndUt9he6A9mc8JX-1wD0_SVg%3A1782227957145&kgmid=%2Fg%2F11z1wbtxx7&q=Concepts%20%26%20Crafts%20Academy&shem=epsd1%2Cltac&shndl=30&source=sh%2Fx%2Floc%2Fact%2Fm4%2F3'

const RatingWidget = () => {
  return (
    <a
      className="rating-widget"
      href={googleRatingUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Rate Concepts & Crafts Academy on Google"
    >
      <span className="rating-widget-icon">
        <Icon name="star" size={20} />
      </span>
      <span>
        <strong>Rate Us</strong>
        <small>Google Review</small>
      </span>
    </a>
  )
}

export default RatingWidget
