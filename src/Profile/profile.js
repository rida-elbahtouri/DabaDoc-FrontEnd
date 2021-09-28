import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getUserData,
  getFavoriteQuestions,
  removeFromFav,
} from "../functions/Api";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [favorites, setFavorites] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    getUserData(token)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    getFavoriteQuestions(token)
      .then((res) => {
        setFavorites(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderUser = () => {
    if (user) {
      return <h2 className="text-center">{user.email}</h2>;
    }
  };
  const removIt = (id) => {
    const token = localStorage.getItem("token");
    removeFromFav(token, id)
      .then(() => {
        const newFavoritesList = favorites.filter(
          (favorite) => favorite.id !== id
        );
        setFavorites(null);
        setFavorites(newFavoritesList);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const renderFav = () => {
    if (favorites) {
      const res = favorites.map((fav) => {
        return (
          <div
            key={fav.id}
            className="d-flex justify-content-between border p-2 rounded mb-2"
          >
            <div>
              <Link
                className="text-dark text-capitalize"
                to={`/question/${fav.id}/answers`}
              >
                {fav.title}
              </Link>
            </div>
            <Button
              onClick={() => {
                removIt(fav.id);
              }}
              type="button"
              variant="danger"
            >
              Delete
            </Button>
          </div>
        );
      });
      return res;
    }
  };
  return (
    <div>
      {renderUser()}
      {renderFav()}
    </div>
  );
};

export default Profile;
