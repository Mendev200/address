import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Delete from "./Delete";
import { getUserProfile } from "../components/api/getUserProfile";

const UserProfileCard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getUserProfile();
        setUserData(userData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {userData && userData.map((user) => (
        <div className="card mt-5 card-pb-dix" key={user.id}>
          <div className="card-body d-flex justify-content-between">
            <div className="d-flex align-items-start">
              <img
                src={process.env.PUBLIC_URL + '/images/icon.png'}
                alt="icon"
                className="p-2 bg-warning rounded"
                style={{ width: '48px' }}
              />
              <div className="d-flex flex-column ms-3">
                <h1 className="fs-5 fw-bold text-center">{user.email}</h1>
                <p>{user.password}</p>
              </div>
            </div>
            <div className="d-flex flex-column mt-3">
              <Link
                to={`/update-user/${user.id}`}
                className="btn btn-primary mb-2"
                type="button"
              >
                Update
              </Link>
              <Delete userId={user.id} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserProfileCard;
