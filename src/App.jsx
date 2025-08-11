import "./App.css";
import ProfileCard from "./components/ProfileCard";

function App() {
  const ringFellowship = [
    {
      id: 1,
      name: "Gendalf",
      title: "Guardian of the Third Age",
      imageUrl: "/images/gandalf.jpeg",
    },
    {
      id: 2,
      name: "Aragorn",
      title:
        "King Elessar Telcontar of Gondor and Arnor, the High King of the Reunited Kingdom, the Heir of Isildur, the Chieftain of the Dúnedain, and Lord of the Dúnedain",
      imageUrl: "/images/aragorn.jpeg",
    },
    {
      id: 3,
      name: "Legolas",
      title: "Prince of Mirkwood",
      imageUrl: "/images/legolas.jpeg",
    },
    {
      id: 4,
      name: "Gimli",
      title: "Lord of the Glittering Caves and Elf-friend",
      imageUrl: "/images/ghimli.jpeg",
    },
    {
      id: 5,
    },
  ];

  return (
    <div className="container">
      {ringFellowship.map((member) => (
        <ProfileCard
          key={member.id}
          name={member.name}
          title={member.title}
          imageUrl={member.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
