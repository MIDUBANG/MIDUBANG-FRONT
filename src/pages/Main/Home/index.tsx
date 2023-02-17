import { initContents } from "@store/resultSlice";
import { initExtraInfo } from "@store/extraInfoSlice";
import { useAppDispatch } from "@store/store";

const Home = () => {
  const dispatch = useAppDispatch();
  dispatch(initContents());
  dispatch(initExtraInfo());

  return <div>sdf</div>;
};

export default Home;
