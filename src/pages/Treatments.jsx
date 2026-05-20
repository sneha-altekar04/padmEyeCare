import { Link } from "react-router-dom";

const Treatments = () => {
  const data = [
    { id:1, name:"Cataract Surgery", img:"/cataract.jpg" },
    { id:2, name:"Retina Care", img:"/retina.jpg" }
  ];

  return (
    <div className="pt-24 p-6 grid grid-cols-3 gap-6">
      {data.map(item => (
        <Link to={`/treatment/${item.id}`} key={item.id}>
          <div className="shadow rounded-xl overflow-hidden">
            <img src={item.img}/>
            <p className="p-4">{item.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Treatments;