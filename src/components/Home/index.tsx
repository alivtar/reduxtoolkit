import { useSelector } from "react-redux";

function Home() {
  const username = useSelector((state: any) => state.usersData.user.username);

  return <div>This is the Home page {username}</div>;
}

export default Home;
