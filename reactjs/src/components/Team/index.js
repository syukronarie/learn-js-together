import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CONST from "../../utils/constant";
import NotFound from "../NotFound";

const getUserById = (id) => {
  if (!id) return null;

  return CONST.teams.find((val) => val.id === Number(id));
};

function Team() {
  let params = useParams();
  const [dataDetail, setDataDetail] = useState({});
  const { teamId } = params;

  useEffect(() => {
    let data;
    if (teamId) {
      data = getUserById(teamId);
      setDataDetail(data);
    }
  }, [teamId]);

  return (
    <>
      <h1>Team</h1>
      {!!dataDetail ? (
        <div className="teams">
          <h3>
            Full Name: {dataDetail.first_name} {dataDetail.last_name}
          </h3>
          <p>Gender: {dataDetail.gender} </p>
          <p>Email: {dataDetail.email} </p>
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
}

export default Team;
