import ChangeLog from "../assets/changelog.json";

const Footer = () => {
  return (
    <div>
      <br />
      <hr />
      <p className="text-black dark:text-white text-center font-bold pt-1 pb-1">
        &copy; TershiXia 2023
        <br />
        {ChangeLog[0].version} - Updated on { ChangeLog[0].date }
      </p>
    </div>
  )
}

export default Footer;
