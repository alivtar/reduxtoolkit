import { useSelector } from "react-redux";

function Contact() {
  const username = useSelector((state: any) => state.usersData.user.username);

  return <div>This is the Contact page {username}</div>;
}

export default Contact;
