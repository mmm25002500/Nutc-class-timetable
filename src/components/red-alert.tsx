import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

interface Props {
  text?: string;
}

const RedAlert = (props: Props) => {
  return (
    <div className="text-center p-4 mb-4 text-xl text-red-800 rounded-lg bg-red-100 dark:bg-gray-900 dark:text-red-400" role="alert">
      <FontAwesomeIcon icon={['fas', 'triangle-exclamation']} className="pr-2"/>
      { props.text }
    </div>
  )
}

export default RedAlert;
