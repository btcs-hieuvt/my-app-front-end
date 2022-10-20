import { useParams } from 'react-router-dom'

function SearchPage() {
  const { slug } = useParams()
  return <div>SearchPage result for "{slug}"</div>
}

export default SearchPage
