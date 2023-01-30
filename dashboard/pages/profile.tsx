import Link from "next/link";
import { useEffect } from "react";

import Layout from "../components/Layout";
import { getUserProfile } from "../redux/slices/user";
import { RootState, useDispatch, useSelector } from "../redux/store";

const Profile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  const { user } = useSelector((state: RootState) => state.user);
  return (
    <Layout title="User Profile">
      <h1>User Profile</h1>
      {JSON.stringify(user)}
      <p>
        <Link href="/">Go Dashboard</Link>
      </p>
    </Layout>
  );
};

export default Profile;
