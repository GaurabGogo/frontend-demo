import { ClipLoader } from "react-spinners";

const LoadingSpinner = ({ loading }) => {
  return (
    <ClipLoader
      color="#36d7b7"
      size={50}
      loading={loading}
      className="loading-spinner"
    />
  );
};

export default LoadingSpinner;
