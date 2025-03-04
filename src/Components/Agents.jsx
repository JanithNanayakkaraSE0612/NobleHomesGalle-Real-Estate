import kanchana from '../assests/agent/kanchana.jpg';
import gallage from '../assests/agent/gallage.jpg';
import tilak from "../assests/agent/tilak.jpg";

const Agents = () => {
  const clients = [
    {
      id: 1,
      img: gallage,
      title: "Mr. Thilak Gallage",
      description: "Sales Manager",
    },
    {
      id: 2,
      img: kanchana,
      title: "Mr. Kanchana Lakmal",
      description: "Marketing Coordinator",
    },
    {
      id: 3,
      img: tilak,
      title: "Mr. Tilak Gawarammana",
      description: "Territory Manager (Kandy)",
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen p-10 bg-gray-50">
      <div className="max-w-screen-md w-full space-y-10">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-poppins text-center uppercase">
          Meet our agents
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clients.map((client) => (
            <div
              key={client.id}
              className="bg-white text-center pb-5 shadow-lg rounded-lg"
            >
              <img
                src={client.img}
                alt={client.title}
                className="w-full h-64 object-cover object-[50%_35%] mb-4 rounded-t-md"
              />
              <h2 className="text-2xl font-semibold mb-2 px-8 font-playfair">
                {client.title}
              </h2>
              <p className="text-sm text-gray-600 px-4 mb-4 font-playfair">
                {client.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Agents;
