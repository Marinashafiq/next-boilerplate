import Navbar from "../navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
};

export default MainLayout;
