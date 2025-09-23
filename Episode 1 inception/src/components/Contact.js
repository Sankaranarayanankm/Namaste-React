import useOnlineStatus from "../utls/useOnlineStatus";

const Contact = () => {
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>Your are offline!!.. Please check your connection</h1>;
  }
  return (
    <div>
      <h1>Contact Us Page</h1>
    </div>
  );
};

export default Contact;
