type HomeProps = {
  name: string;
  onClick: () => void;
};

const Home = ({ name, onClick }: HomeProps) => {
  return <div onClick={onClick}>{name}</div>;
};

Home.defaultProps = {
  name: "!",
};

export default Home;
