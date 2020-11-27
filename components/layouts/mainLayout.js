import Navbar from "../navbar";

const MainLayout = ({ children }) => (
  <>
    <Navbar />
    <div>{children}</div>
  </>
);

export default MainLayout;
