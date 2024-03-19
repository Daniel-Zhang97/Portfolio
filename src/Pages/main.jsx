import Hero from '../components/Hero'
import './Main.css'

const Main = ({ loading }) => {
  return (
    <div id="main_page">
      <Hero loading={loading} />
    </div>
  )
}
export default Main
