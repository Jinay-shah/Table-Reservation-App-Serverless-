import { Routes, Route } from "react-router-dom";
import SignInWithEmailForm from "./views/Authentication/adminSignin";
import TopMenuItems from "./views/Reports/TopMenuItems";
import TopCustomers from "./views/Reports/TopCustomers";
import Reviews from "./views/Reports/Reviews";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<SignInWithEmailForm />} />
      <Route path="/top-items" element={<TopMenuItems />} />
      <Route path="/top-customers" element={<TopCustomers />} />
       <Route path="/reviews" element={<Reviews />} />
    </Routes>
  );
};

export default Router;
