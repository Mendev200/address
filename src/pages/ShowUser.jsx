import 'bootstrap/dist/css/bootstrap.min.css';
import UserProfileCard from "../components/UserProfileCard";

function ShowUser() {

  return (
    <div className="container-fluid mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <UserProfileCard />
        </div>
      </div>
    </div>
  );
}

export default ShowUser;
