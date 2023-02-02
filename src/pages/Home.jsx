import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <div className="container mx-auto pt-8 pl-5 pr-5 text-black dark:text-white transition-colors duration-100">
      <div class="text-center p-4 mb-4 text-xl text-red-800 rounded-lg bg-red-100 dark:bg-gray-900 dark:text-red-400" role="alert">
        <FontAwesomeIcon icon="fa-solid fa-triangle-exclamation" className="pr-2"/>
        還沒做好拉w，預計要三月。
      </div>
      <p className="text-3xl text-center">夏特稀好帥，女孩好愛</p>
    </div>
  )
}

export default Home;
