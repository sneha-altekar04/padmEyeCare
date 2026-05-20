import { useParams } from "react-router-dom";

const TreatmentDetail = () => {
  const { id } = useParams();

  return (
    <div className="pt-24 p-6">
      <h1 className="text-3xl font-bold">Treatment {id}</h1>
      <p>Full details about treatment...</p>
    </div>
  );
};

export default TreatmentDetail;